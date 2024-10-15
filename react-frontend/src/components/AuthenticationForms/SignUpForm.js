import { useState } from "react";
import FormField from "./components/FormField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      const data = response.data;
      console.log(data.message);
      if (data.message === 0) {
        setErrorUsername("User with this username is already created");
        setErrorEmail("");
        throw Error;
      } else if (data.message === 1) {
        setErrorEmail("User with this email is already created");
        setErrorUsername("");
        throw Error;
      }

      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form className="signin__form" onSubmit={handleSubmit}>
        <FormField
          name={"username"}
          type={"username"}
          label={"Username:"}
          onChange={handleChange}
          value={formData.username}
          additionalClass={"user"}
        />
        <ErrorMessage message={errorUsername} />
        <FormField
          name={"email"}
          type={"email"}
          label={"Email:"}
          onChange={handleChange}
          value={formData.email}
          additionalClass={"email"}
        />
        <ErrorMessage message={errorEmail} />
        <FormField
          name={"password1"}
          type={"password"}
          label={"Password:"}
          onChange={handleChange}
          value={formData.password1}
          additionalClass={"password"}
        />
        <FormField
          name={"password2"}
          type={"password"}
          label={"Confirm password:"}
          onChange={handleChange}
          value={formData.password2}
          additionalClass={"password"}
        />

        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
