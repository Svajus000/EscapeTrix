import "./SignUp.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import SignUpForm from "../../components/AuthenticationForms/SignUpForm";

export default function SignUp() {
  return (
    <>
      <div className="main main__backgroundImage">
        <div className="main--effect">
          <Navigation />
          <div className="main__section">
            <div className="container">
              <div className="header__container">
                <h2 className="header--medium">Sign Up</h2>
              </div>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
