import "./Home.css";
import Navigation from "../../components/Navigation/Navigation";
import DifficultyButton from "../../components/DifficultyButton";

function Home() {
  return (
    <>
      <div className="main main__backgroundImage">
        <div className="main--effect">
          <Navigation />
          <div className="header header--paddingTop">
            <div className="header__container  header__container--marginTop ">
              <h1 className="header__text">Escape the Matrix</h1>
            </div>
            <div className="subheader__container">
              <h2 className="subheader__text">
                Choose your level and try to beat the matrix
              </h2>
            </div>
          </div>
          <div className="buttons__container">
            <DifficultyButton difficulty={"Easy"} link={"/easy"} />
            <DifficultyButton difficulty={"Medium"} link={"/medium"} />
            <DifficultyButton difficulty={"Hard"} link={"/hard"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
