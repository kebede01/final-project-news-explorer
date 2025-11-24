import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useState } from "react";

function LoginModal({ onClose, isOpen, title, onRegisterClick, onLogIn }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await onLogIn(data);
    onClose();
    setData({ email: "", password: "" });
  } catch (err) {
    console.error("Login error:", err);
  }
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
          id="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          required
          autoComplete="username"
        />
      </label>
      <label htmlFor="password-2" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          minLength={6}
          required
          autoComplete="current-password"
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
