import axios from "axios";
import Score from "./Score";
import { useEffect, useState } from "react";

export default function Scores({ difficulty }) {
  const [scoresList, setScoresList] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        let response = await axios.get("http://localhost:5000/scores");
        console.log(response);
        let results = response.data.message;
        results[difficulty].sort((a, b) => {
          return a.time.localeCompare(b.time);
        });
        const scoresElementList = results[difficulty].map((user, index) => {
          if (index < 4) {
            return (
              <div className="scoresList">
                <Score
                  position={`${index + 1}.`}
                  username={user.username}
                  time={user.time.slice(0, 5)}
                />
              </div>
            );
          } else {
            return <></>;
          }
        });
        console.log(scoresElementList);
        setScoresList(scoresElementList);
      } catch (error) {
        console.log(error.message);
      }
    };
    getScores();
  }, [difficulty]);
  return <>{scoresList}</>;
}
