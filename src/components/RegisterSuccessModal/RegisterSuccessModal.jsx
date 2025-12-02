import "./RegisterSuccessModal.css";

function RegisterSuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_success">
        <h2 className="modal__title modal__title_type_success">
          Registration successfullly completed!
        </h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <button
          className="modal__login-button"
          type="button"
          onClick={onLoginClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegisterSuccessModal;
