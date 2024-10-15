import "./Leaderboard.css";
import Navigation from "../../components/Navigation/Navigation";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

export default function LeaderboardPage() {
  return (
    <>
      <div className="main main__backgroundImage">
        <div className="main--effect">
          <Navigation />
          <div className="header">
            <div className="header__container header__container--marginMediumTop">
              <h1 className="header__text">Leaderboard</h1>
            </div>
            <div className="subheader__container">
              <h2 className="subheader__text">Top users escaped the matrix</h2>
            </div>
          </div>
          <div className="leaderboard__container leaderboard__container--marginTop">
            <Leaderboard difficulty={"easy"} />
            <Leaderboard difficulty={"medium"} />
            <Leaderboard difficulty={"hard"} />
          </div>
        </div>
      </div>
    </>
  );
}
