import { Link } from "react-router-dom";

export default function NavItem({ text, link }) {
  return (
    <>
      <div className="nav__item">
        <Link to={link}>
          <h3 className="nav__itemText">{text}</h3>
        </Link>
      </div>
    </>
  );
}
