import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
// import { useForm } from "../../Hooks/useForm";
// import { currentUserContext } from "../../contexts/currentUserContext";

function RegisterModal({
  onClose,
  isOpen,
  title,
  onLoginClick,
  onRegisterClick,
  onRegister,
}) {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [nameRegister, setNameRegister] = useState("");

  const handleNameRegister = (e) => {
    setNameRegister(e.target.value);
  };

  const handleEmailRegister = (e) => {
    setEmailRegister(e.target.value);
  };

  const handlePasswordRegister = (e) => {
    setPasswordRegister(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(emailRegister, passwordRegister);
    setNameRegister("");
    setEmailRegister("");
    setPasswordRegister("");
    onClose();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      buttonText={"or Log in"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          className="modal__input "
          type="email"
          name="email"
          id="email"
          value={emailRegister}
          onChange={handleEmailRegister}
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password"
          value={passwordRegister}
          onChange={handlePasswordRegister}
          placeholder="Password"
          required
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          id="username"
          value={nameRegister}
          onChange={handleNameRegister}
          placeholder="Username"
          required
        />
      </label>
      <button
        type="submit"
        className="register-modal__register-button"
      
      >
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
