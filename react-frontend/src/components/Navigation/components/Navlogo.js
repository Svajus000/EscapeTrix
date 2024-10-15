import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <>
      <div className="nav__logo">
        <Link to="/">
          <h2 className="nav__logoText">EscapeTrix</h2>
        </Link>
      </div>
    </>
  );
}
