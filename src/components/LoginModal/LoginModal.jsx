import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useState } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function LoginModal({ onClose, isOpen, title, onRegisterClick, onLogIn }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  // NEW: local state for global error
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // optional loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onLogIn(values);
      resetForm({ email: "", password: "" }, true);
      setFormError(""); // clear error on success
      onClose();
    } catch (err) {
      console.log(err);
      setFormError("Login failed. Please try again."); // show error
    } finally {
      setIsSubmitting(false);
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
      {formError && <div className="modal__error">{formError}</div>}
      <label htmlFor="email-2" className="modal__label">
        Email
        <input
          className="modal__input "
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          required
          autoComplete="username"
        />
        <span className="error" aria-live="polite">
          {errors.email}
        </span>
      </label>
      <label htmlFor="password-2" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          minLength={6}
          required
          autoComplete="current-password"
        />
        <span className="error" aria-live="polite">
          {errors.password}
        </span>
      </label>

      <button
        type="submit"
        className="register-modal__signin-button"
        disabled={!isValid}
      >
        {isSubmitting ? "Logging..." : "Log in"}
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
