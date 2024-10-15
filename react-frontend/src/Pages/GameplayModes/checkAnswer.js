export default function checkAnswer({ difficulty, number, answer }) {
  if (difficulty === "easy") {
    if (answer === "cyan red white purple green" && number === "1") {
      return true;
    } else if (answer === "cube triangle circle cube cube" && number === "2") {
      return true;
    } else if (answer === "red triangle" && number === "3") {
      return true;
    } else if (answer === "3" && number === "4") {
      return true;
    }
  } else if (difficulty === "medium") {
    if (answer === "15" && number === "1") {
      return true;
    } else if (answer === "14" && number === "2") {
      return true;
    } else if (answer === "13" && number === "3") {
      return true;
    } else if (answer === "12" && number === "4") {
      return true;
    }
  } else if (difficulty === "hard") {
    if (answer === "Hello" && number === "1") {
      return true;
    } else if (answer === "Love" && number === "2") {
      return true;
    } else if (answer === "13" && number === "3") {
      return true;
    } else if (answer === "12" && number === "4") {
      return true;
    }
  }
}
