import React from "react";

import css from "../index.css";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";


function App() {
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({})

function closeAllPopups() {
  setEditProfilePopupOpen(false)
  setAddPlacePopupOpen(false)
  setEditAvatarPopupOpen(false)
  setSelectedCard({})
}

  return (
    <div className="page">
      <Header />

      <Main 
      onEditProfile={setEditProfilePopupOpen}
      onAddPlace={setAddPlacePopupOpen}
      onEditAvatar={setEditAvatarPopupOpen}
      onCardClick={setSelectedCard}
      />

      <Footer />

      Поп ап: изменить аватар
      <PopupWithForm
        name="popupAvatar"
        title="Обновить аватар"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="field"
          type="url"
          name="avatar"
          id="newAvatar"
          // value=""
          tabIndex="1"
          placeholder="Введите ссылку"
          required
        />
        <span className="newAvatar-message-error field-message-error"></span>
      </PopupWithForm>

      Поп ап: удаление карточки
      <PopupWithForm
        name="popupConfirm"
        title="Вы уверены?"
        textButton="Да"
      >
        <input
          className="field"
          type="url"
          name="avatar"
          id="newAvatar"
          // value=""
          tabIndex="1"
          placeholder="Введите ссылку"
          required
        />
        <span className="newAvatar-message-error field-message-error"></span>
      </PopupWithForm>

      //Поп ап: изменить профиль
      <PopupWithForm
        name="popupEdit"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="field"
          type="text"
          name="name"
          id="username"
          tabIndex="1"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="username-message-error field-message-error"></span>
        <input
          className="field"
          type="text"
          name="about"
          id="occupation"
          tabIndex="2"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="occupation-message-error field-message-error"></span>
      </PopupWithForm>

      //Поп ап: добавить новую карточку
      <PopupWithForm 
      name="popupAdd" 
      title="Новое место" 
      textButton="Сохранить"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      >
        <input
          className="field"
          type="text"
          name="name"
          id="newPlace"
          tabIndex="1"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="newPlace-message-error field-message-error"></span>
        <input
          className="field"
          type="url"
          name="link"
          id="link"
          tabIndex="2"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="link-message-error field-message-error"></span>
      </PopupWithForm>


      //Поп ап: открыть картинку поверх остальных карточек
      <ImagePopup 
      card={selectedCard} 
      onClose={closeAllPopups} 
      />

    </div>
  );
}

export default App;
