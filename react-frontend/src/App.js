import "./App.css";
import Home from "./Pages/Home/Home";
import HowToPlay from "./Pages/HowToPlay/HowToPlay";
import LeaderboardPage from "./Pages/Leaderboard/LeaderboardPage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Pages/Private/Private";
import Easy from "./Pages/GameplayModes/Easy/Easy";
import Medium from "./Pages/GameplayModes/Medium/Medium";
import Hard from "./Pages/GameplayModes/Hard/Hard";
import Profile from "./Pages/Profile/Profile";
import "nice-forms.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/howtoplay" element={<HowToPlay />}></Route>
        <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/easy" element={<Easy />}></Route>
        <Route path="/medium" element={<Medium />}></Route>
        <Route path="/hard" element={<Hard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
