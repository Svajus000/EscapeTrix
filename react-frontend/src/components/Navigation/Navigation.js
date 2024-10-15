import NavItem from "./components/Navitem";
import NavLogo from "./components/Navlogo";
import IsAuthenticated from "./Authenticate";

export default function Navigation() {
  return (
    <>
      <div className="nav">
        <NavLogo />
        <NavItem text={"How to play"} link={"/howtoplay"} />
        <NavItem text={"Leaderboard"} link={"/leaderboard"} />
        <IsAuthenticated />
      </div>
    </>
  );
}
