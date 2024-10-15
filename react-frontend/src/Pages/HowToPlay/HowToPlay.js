import Navigation from "../../components/Navigation/Navigation";
import "./HowToPlay.css";

export default function HowToPlay() {
  return (
    <>
      <div className="main main__backgroundImage">
        <div className="main--effect">
          <Navigation />
          <div className="howtoplay__section">
            <div className="howtoplay__container">
              <h2 className="howtoplay__text">How to play</h2>
              <p className="howtoplay__explanation">
                There are 3 different levels easy, medium and hard. Each of them
                has a unique task theme. Your mission is to complete these tasks
                as fast as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
