import Title from "../Title/Title";
import Scores from "./components/Scores";

export default function Leaderboard({ difficulty }) {
  let capitalizedTitle =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  return (
    <div className="leaderboard">
      <h2 className="subheader__text tit">{capitalizedTitle}</h2>
      <Title />
      <hr className="title-line" />
      <div className="leaderboard__scores leaderboard__scores--marginTop">
        <Scores difficulty={difficulty} />
      </div>
    </div>
  );
}
