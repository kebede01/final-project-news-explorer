import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function RegisterModal({ onClose, isOpen, title, onLoginClick, onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  // NEW: local state for global error
  const [formError, setFormError] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
     setIsSubmitting(true);

    onRegister(values)
      .then(() => {
        resetForm({}, {}, true);
        setFormError(""); // clear error on success
        onClose();
      })
      .catch((err) => {
        console.log(err);
        setFormError("Registration failed. Please try again."); // show error
      })
      .finally(() => setIsSubmitting(false));

  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      buttonText={"or Log in"}
      onSubmit={handleSubmit}
    >
      {/* Global error message */}
      {formError && <div className="modal__error">{formError}</div>}

      <label htmlFor="email-1" className="modal__label">
        Email
        <input
          className="modal__input "
          type="email"
          name="email"
          id="email-1"
          value={values.email || ""}
          onChange={handleChange}
          placeholder="Email"
          required
          autoComplete="email"
        />
        <span className="error" aria-live="polite">
          {errors.email}
        </span>
      </label>
      <label htmlFor="password-1" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password-1"
          value={values.password || ""}
          minLength={6}
          onChange={handleChange}
          placeholder="Password"
          required
          autoComplete="new-password"
        />
        <span className="error" aria-live="polite">
          {errors.password}
        </span>
      </label>
      <label htmlFor="username-1" className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          id="username-1"
          value={values.username || ""}
          onChange={handleChange}
          placeholder="Username"
          minLength={2}
          maxLength={20}
          required
          autoComplete="username"
        />
        <span className="error" aria-live="polite">
          {errors.username}
        </span>
      </label>
      <button
        type="submit"
        className="register-modal__register-button"
        disabled={!isValid}
      >
       
         {isSubmitting ? "Registering..." : "Sign up"}

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
