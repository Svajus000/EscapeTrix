import "./SignIn.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import SignInForm from "../../components/AuthenticationForms/SignInForm";

export default function SignIn() {
  return (
    <>
      <div className="main main__backgroundImage">
        <div className="main--effect">
          <Navigation />
          <div className="main__section">
            <div className="container">
              <div className="header__container">
                <h2 className="header--medium">Sign In</h2>
              </div>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
