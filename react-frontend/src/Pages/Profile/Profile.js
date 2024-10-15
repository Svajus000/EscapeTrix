import "./Profile.css";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import HistoryElements from "../../components/History/historyElement";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: { Authorization: token },
        });
        const data = await response.json();
        const dataList = data.message;
        setUsername(dataList[0].username);
        setEmail(dataList[0].email);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="main main__backgroundImage">
        <div className="main--effect">
          <Navigation />
          <div className="profile">
            <div className="profile__section">
              <div className="grid">
                <div className="grid__item--1">
                  <div className="subheader__text subheader__text--title">
                    <h2>Profile</h2>
                  </div>
                </div>
                <div className="grid__item--3">
                  <div className="profile__image"></div>
                </div>
                <div className="grid__item--2">
                  <hr className="grid__line" />
                </div>
              </div>
              <div className="profile__container ">
                <h2 className="profile__header">Username:</h2>
                <h2 className="profile__username">{username}</h2>
              </div>
              <div className="profile__container profile__container--marginTop">
                <h2 className="profile__header">Email:</h2>
                <h2 className="profile__email">{email}</h2>
              </div>
              <hr className="profile__line" />
              <div className="subheader__text subheader__text--title">
                <h2>History</h2>
              </div>
              <div className="history__item">
                <div className="profile__flexContainer">
                  <h2 className="subheader__text subheader__text--smaller">
                    Number
                  </h2>
                </div>
                <div className="profile__flexContainer">
                  <h2 className="subheader__text subheader__text--smaller">
                    Gameplay Mode
                  </h2>
                </div>
                <div className="profile__flexContainer">
                  <h2 className="subheader__text subheader__text--smaller">
                    Time
                  </h2>
                </div>
              </div>
              <hr className="profile__line profile__line--marginTop" />

              <HistoryElements />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
