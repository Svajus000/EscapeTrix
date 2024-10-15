import { useNavigate } from "react-router-dom";
import NavItem from "./components/Navitem";
import SignOutButton from "./components/SignOutButton";

export default function IsAuthenticated() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  function handleSubmit() {
    localStorage.removeItem("token");
    navigate("/signin");
  }
  if (!isAuthenticated) {
    return (
      <>
        <NavItem text={"Sign In"} link={"/signin"} />
        <NavItem text={"Sign Up"} link={"/signup"} />
      </>
    );
  } else
    return (
      <>
        <NavItem text={"Profile"} link={"/profile"} />
        <SignOutButton handleSubmit={handleSubmit} />
      </>
    );
}
