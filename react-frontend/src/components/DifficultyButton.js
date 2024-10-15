import { Link } from "react-router-dom";

export default function DifficultyButton({ difficulty, link }) {
  return (
    <button className="button">
      <Link to={`${link}`}>
        <p>{difficulty}</p>
      </Link>
    </button>
  );
}
