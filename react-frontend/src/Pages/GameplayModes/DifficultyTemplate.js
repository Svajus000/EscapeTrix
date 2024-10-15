// import videoPath from "../../public/Video/easy.mp4";
import VideoEndTracker from "./VideoEndTracker";
// import AnswerInput from "../../components/GameSections/components/AnswerInput";
import { useState } from "react";
// import Timer from "../../components/Timer";
import axios from "axios";
// import Navigation from "../../components/Navigation/Navigation";
import formatTime from "./formatTime";
import checkAnswer from "./checkAnswer";
import MainSection from "../../components/GameSections/components/MainSection";
import EasySections from "../../components/GameSections/EasySections";
import MediumSections from "../../components/GameSections/MediumSections";
import HardSections from "../../components/GameSections/HardSections";

export default function DifficultyTemplate({
  heading,
  subheading,
  difficulty,
}) {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState([false, false, false]);
  const [seconds, setSeconds] = useState(0);
  const [userss, setUserss] = useState("Anonymyous");
  let username = "Anonymyous";
  let [end1, end2, end3, end4] = VideoEndTracker();
  const [isActive, setIsActive] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const number = e.target.name;
    if (number === "1") {
      const firstAnswer = checkAnswer({ difficulty, number, answer });
      if (firstAnswer) {
        setCorrect([firstAnswer, false, false]);
      }
    }
    if (number === "2") {
      const secondAnswer = checkAnswer({ difficulty, number, answer });
      setCorrect([true, secondAnswer, false]);
    }
    if (number === "3") {
      const thirdAnswer = checkAnswer({ difficulty, number, answer });
      setCorrect([true, true, thirdAnswer]);
    }
    if (number === "4") {
      const fourthAnswer = checkAnswer({ difficulty, number, answer });
      if (fourthAnswer) {
        showPopUp();
      }
    }
  }
  function handleChange(e) {
    setAnswer(e.target.value);
  }

  const showPopUp = async () => {
    let token = localStorage.getItem("token");
    let finish = document.getElementsByClassName("popUp");
    finish[0].classList.toggle("show");
    setIsActive(false);
    try {
      const response = await fetch("http://localhost:5000/results", {
        method: "GET",
        headers: { Authorization: token },
      });
      const data = await response.json();
      if (
        data.message !== "Invalid token" ||
        data.message !== "Forbidden: Token not found"
      ) {
        username = data.message;
        setUserss(data.message);
        const request = await axios.post(
          "http://localhost:5000/results",
          [username, difficulty, seconds],
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const removePopUp = () => {
    let finish = document.getElementsByClassName("popUp")[0];
    finish.classList.remove("show");
    window.location.href = "/";
  };
  if (difficulty === "easy") {
    return (
      <>
        <div className="popUp">
          <div className="popUp__container">
            <div className="popUp__heading">
              <h2 className="popUp__heading-text">Your Score:</h2>
              <hr className="popUp__line" />
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">Username: {userss}</h3>
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">
                Time: {formatTime({ seconds })}
              </h3>
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">
                Gamemode:{" "}
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </h3>
              <hr className="popUp__line" />
            </div>
            <button className="popUp__button" onClick={removePopUp}>
              Finish
            </button>
          </div>
        </div>
        <MainSection
          difficulty={difficulty}
          heading={heading}
          isActive={isActive}
          setSeconds={setSeconds}
          seconds={seconds}
          end1={end1}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          subheading={subheading}
        />
        <EasySections
          videoEnd={[end2, end3, end4]}
          correct1={correct}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </>
    );
  } else if (difficulty === "medium") {
    return (
      <>
        <div className="popUp">
          <div className="popUp__container">
            <div className="popUp__heading">
              <h2 className="popUp__heading-text">Your Score:</h2>
              <hr className="popUp__line" />
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">Username: {userss}</h3>
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">
                Time: {formatTime({ seconds })}
              </h3>
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">
                Gamemode:{" "}
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </h3>
              <hr className="popUp__line" />
            </div>
            <button className="popUp__button" onClick={removePopUp}>
              Finish
            </button>
          </div>
        </div>
        <MainSection
          difficulty={difficulty}
          heading={heading}
          isActive={isActive}
          setSeconds={setSeconds}
          seconds={seconds}
          end1={end1}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          subheading={subheading}
        />
        <MediumSections
          correct1={correct}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </>
    );
  } else if (difficulty === "hard") {
    return (
      <>
        <div className="popUp">
          <div className="popUp__container">
            <div className="popUp__heading">
              <h2 className="popUp__heading-text">Your Score:</h2>
              <hr className="popUp__line" />
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">Username: {userss}</h3>
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">
                Time: {formatTime({ seconds })}
              </h3>
            </div>
            <div className="popUp__subheading">
              <h3 className="popUp__subheading-text">
                Gamemode:{" "}
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </h3>
              <hr className="popUp__line" />
            </div>
            <button className="popUp__button" onClick={removePopUp}>
              Finish
            </button>
          </div>
        </div>
        <MainSection
          difficulty={difficulty}
          heading={heading}
          isActive={isActive}
          setSeconds={setSeconds}
          seconds={seconds}
          end1={end1}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          subheading={subheading}
        />
        <HardSections
          correct1={correct}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </>
    );
  } else {
    <></>;
  }
}
