import React from "react";
import css from "../index.css";

function PopupWithForm({ title, name, textButton, children, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть."
          onClick={onClose}
        ></button>
        <div className="form">
          <h2 className="form__heading">{title}</h2>
          <form className="fields" name={name} noValidate>
          {children}
            <button
              className="submit"
              type="submit"
              aria-label="Сохранить изменения."
            >
              {textButton || "Сохранить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
