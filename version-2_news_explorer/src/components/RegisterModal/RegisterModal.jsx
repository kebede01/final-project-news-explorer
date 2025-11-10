import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({ onClose, isOpen, title, onLoginClick, onRegister }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
    })
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  // const handleNameRegister = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleEmailRegister = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordRegister = (e) => {
  //   setPassword(e.target.value);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // I added data. and onChange={handleChange} after trying to update
    onRegister(data)
      .then(() => {
        // setUsername("");
        // setEmail("");
        // setPassword("");
        setData("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      buttonText={"or Log in"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email-1" className="modal__label">
        Email
        <input
          className="modal__input "
          type="email"
          name="email"
          id="email-1"
          value={data.email}
          // onChange={handleEmailRegister}
           onChange={handleChange}
          placeholder="Email"
          required
          autoComplete="email"
        />
      </label>
      <label htmlFor="password-1" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password-1"
          value={data.password}
          minLength={6}
          // onChange={handlePasswordRegister}
          onChange={handleChange}
          placeholder="Password"
          required
          autoComplete="new-password"
        />
      </label>
      <label htmlFor="username-1" className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          id="username-1"
          value={data.username}
          // onChange={handleNameRegister}
          onChange={handleChange}
          placeholder="Username"
          minLength={2}
          maxLength={20}
          required
          autoComplete="username"
        />
      </label>
      <button type="submit" className="register-modal__register-button">
        Sign up
      </button>
      <button
        type="button"
        className="register-modal__start-button"
        onClick={onLoginClick}
      >
        {" "}
        or Log in
      </button>
    </ModalWithForm>
  );
}
export default RegisterModal;
