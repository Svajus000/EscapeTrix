import FormField from "./components/FormField";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signin",
        formData
      );
      const data = response.data;
      if (data.message === 0) {
        setErrorMessage("Invalid email or password.");
        throw Error;
      } else if (data.message === 1) {
        setErrorMessage("There is no user with this email");
        throw Error;
      }
      const token = data.token;
      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form className="signin__form" onSubmit={handleSubmit}>
        <FormField
          name={"email"}
          type={"email"}
          label={"Email:"}
          onChange={handleChange}
          value={formData.email}
          additionalClass={"email"}
        />
        <ErrorMessage message={errorMessage} />
        <FormField
          name={"password"}
          type={"password"}
          label={"Password:"}
          onChange={handleChange}
          value={formData.password}
          additionalClass={"password"}
        />
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
