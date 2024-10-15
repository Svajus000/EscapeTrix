import videoPath from "../../../public/Video/easy.mp4";
import AnswerInput from "./AnswerInput";
import Timer from "../../Timer";
import Navigation from "../../Navigation/Navigation";
import ErrorMessage from "../../ErrorMessage";

export default function MainSection({
  difficulty,
  heading,
  isActive,
  setSeconds,
  seconds,
  end1,
  handleChange,
  handleSubmit,
  subheading,
  errorMessage,
}) {
  if (difficulty === "easy") {
    return (
      <>
        <div className={`main ${difficulty}`}>
          <div className="main--effect">
            <Navigation />
            <div className="header">
              <div className="header__container--2">
                <h2 className="header__text--2">{heading}</h2>
                <h3 className="timer">
                  <Timer
                    isActive={isActive}
                    setSeconds={setSeconds}
                    seconds={seconds}
                  />
                </h3>
              </div>
              <div className="subheader__container--2">
                <h3 className="subheader__text--2">{subheading}</h3>
              </div>
            </div>
            <div className="container-2">
              <video
                id={`${difficulty}-1`}
                className="video-container"
                controls
                muted
              >
                <source src={videoPath} type="video/mp4"></source>
              </video>
              <div className="answer">
                <AnswerInput
                  end={end1}
                  answerInputId={1}
                  answerInputLabel={"Type the order in which colors appeard."}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </div>
              <ErrorMessage message={errorMessage} />
            </div>
          </div>
        </div>
      </>
    );
  } else if (difficulty === "medium") {
    return (
      <>
        <div className={`main ${difficulty}`}>
          <div className="main--effect">
            <Navigation />
            <div className="header">
              <div className="header__container--2">
                <h2 className="header__text--2">{heading}</h2>
                <h3 className="timer">
                  <Timer
                    isActive={isActive}
                    setSeconds={setSeconds}
                    seconds={seconds}
                  />
                </h3>
              </div>
              <div className="subheader__container--2">
                <h3 className="subheader__text--2">{subheading}</h3>
              </div>
            </div>
            <div className="container-2">
              <div className="main__image"></div>
              <div className="answer">
                <AnswerInput
                  answerInputId={1}
                  end={true}
                  answerInputLabel={"How many differences there are?"}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (difficulty === "hard") {
    return (
      <>
        <div className={`main ${difficulty}`}>
          <div className="main--effect">
            <Navigation />
            <div className="header">
              <div className="header__container--2">
                <h2 className="header__text--2">{heading}</h2>
                <h3 className="timer">
                  <Timer
                    isActive={isActive}
                    setSeconds={setSeconds}
                    seconds={seconds}
                  />
                </h3>
              </div>
              <div className="subheader__container--2">
                <h3 className="subheader__text--2">{subheading}</h3>
              </div>
            </div>
            <div className="container-2">
              <div className="main__image hard__main"></div>
              <div className="answer">
                <AnswerInput
                  answerInputId={1}
                  end={true}
                  answerInputLabel={"What is the hidden word ?"}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
