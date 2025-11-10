import "./ModalWithForm.css";

const ModalWithForm = ({ children, onClose, isOpen, title, onSubmit }) => {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
