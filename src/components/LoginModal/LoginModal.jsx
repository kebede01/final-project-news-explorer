import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useState } from "react";
// import { useEffect, useContext } from "react";
// import { useForm } from "../../Hooks/useForm";
// import { currentUserContext } from "../../contexts/currentUserContext";

function LoginModal({
  onClose,
  isOpen,
  title,
  // onLoginClick,
  onRegisterClick,
  onLogIn,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn(email, password);
    onClose();
    setEmail("");
    setPassword("");
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      onSubmit={handleSubmit}
      buttonText={"or Log in"}
    >
      <label htmlFor="email-2" className="modal__label">
        Email
        <input
          className="modal__input "
          type="email"
          name="email"
          id="email-2"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="password-2" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password-2"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
          required
        />
      </label>

      <button type="submit" className="register-modal__signin-button">
        Sign in
      </button>
      <button
        type="button"
        className="register-modal__signup-button"
        onClick={onRegisterClick}
      >
        {" "}
        or Sign up
      </button>
    </ModalWithForm>
  );
}
export default LoginModal;
