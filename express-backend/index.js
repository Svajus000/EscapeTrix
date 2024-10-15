const express = require("express");
const cors = require("cors");
const pgp = require("pg-promise")(/* options */);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { errors } = require("pg-promise");
const { use } = require("bcrypt/promises");
const app = express();
const PORT = 5000;
const saltRounds = 10;
const secretKey = "your_secret_key";
const pgHost = process.env.PGHOST;
const pgPassword = process.env.PGPASSWORD;
const pgPort = process.env.PGPORT;
const pgDatabase = process.env.PGDATABASE;

const db = pgp(
  `postgres://postgres:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`
);
db.one("SELECT $1 AS value", 123)
  .then((data) => {
    console.log("DATA:", data.value);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password1 = req.body.password1;
  const password2 = req.body.password2;
  const hashed_password = bcrypt.hashSync(password1, saltRounds);
  if (password1 !== password2) {
    console.log("password doesn't match");
  } else {
    db.tx("my-transaction", (t) => {
      return t
        .oneOrNone("SELECT email FROM users WHERE email = $1", email)
        .then((user) => {
          console.log(user);
          if (!user) {
            console.log("Yra");
            return t
              .one(
                "INSERT INTO account (image) VALUES($1) RETURNING accountid",
                [""]
              )
              .then((newAccount) => {
                return t
                  .none(
                    "INSERT INTO users (username, email, password, accountid) VALUES($1, $2, $3, $4)",
                    [username, email, hashed_password, newAccount.accountid]
                  )
                  .then(() => {
                    console.log("Success");
                    return;
                  })
                  .catch((error) => {
                    res.json({
                      message: 0,
                    });
                  });
              })
              .catch((error) => {
                console.log(error.message);
              });
          } else {
            res.json({ message: 1 });
          }
        })
        .catch((error) => {
          res.json({ message: error.message });
        });
    });
  }
});

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.any("SELECT * from users WHERE email = $1", [email])
    .then((data) => {
      const match = bcrypt.compareSync(
        password,
        data[0].password,
        (err, result) => console.log(res, err)
      );
      if (match) {
        console.log("Match");
        const token = jwt.sign({ username: data[0].username }, secretKey, {
          expiresIn: "1h",
        });

        res.json({ token });
      }
      if (!match) {
        return res.json({ message: 0 });
      }
      return data;
    })
    .catch((error) => {
      return res.json({ message: 1 });
    });
});

const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Forbidden: Token not found" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
  // next();
};

app.get("/protected", authenticateJWT, (req, res) => {
  res.json({
    message: `Hello, welcome to the protected route!`,
  });
});

app.get("/results", authenticateJWT, (req, res) => {
  res.json({ message: req.user.username });
});

app.post("/results", authenticateJWT, (req, res) => {
  const username = req.body[0];
  const seconds = req.body[2];
  const difficulty = req.body[1];
  res.json({ message: "Success" });
  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${displaySeconds
      .toString()
      .padStart(2, "0")}`;
  };

  db.tx("my-transaction", (t) => {
    return t
      .one("SELECT accountid FROM users where username = $1", [username])
      .then((accountid) => {
        console.log(accountid, formatTime());
        return t
          .one(
            "INSERT INTO history(gameplaymode, time) VALUES($1, $2) RETURNING historyid",
            [difficulty, formatTime()]
          )
          .then((historyid) => {
            console.log(historyid);
            return t.none(
              "INSERT INTO accounthistory (accountid, historyid) VALUES($1, $2)",
              [accountid.accountid, historyid.historyid]
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  })
    .then(() => {})
    .catch((error) => console.log(error.message));
});

app.get("/scores", (req, res) => {
  const leaderboardScores = {
    easy: [],
    medium: [],
    hard: [],
  };
  db.tx("my-transaction", (t) => {
    return t
      .manyOrNone(
        "SELECT users.username, history.gameplaymode, history.time FROM ((history " +
          "INNER JOIN accounthistory ON history.historyid = accounthistory.historyid)" +
          "INNER JOIN users ON users.accountid = accounthistory.accountid)"
      )
      .then((acc) => {
        for (let index = 0; index < acc.length; index++) {
          let score = acc[index];

          if (score["gameplaymode"] === "easy") {
            leaderboardScores["easy"].push(score);
          } else if (score["gameplaymode"] === "medium") {
            leaderboardScores["medium"].push(score);
          } else if (score["gameplaymode"] === "hard") {
            leaderboardScores["hard"].push(score);
          }
        }

        res.json({ message: leaderboardScores });
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
});

app.get("/profile", authenticateJWT, (req, res) => {
  const username = req.user.username;

  db.tx((t) => {
    return t
      .manyOrNone(
        "SELECT users.username, users.email,history.gameplaymode, history.time " +
          "FROM (history INNER JOIN accounthistory ON history.historyid = accounthistory.historyid)" +
          "INNER JOIN users ON accounthistory.accountid = users.accountid WHERE users.username = $1",
        [username]
      )
      .then((history) => {
        res.json({ message: history });
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
