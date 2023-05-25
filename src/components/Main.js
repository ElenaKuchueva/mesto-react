import React from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getInitialUserInfo()])
      .then(([cardData, userInfoData]) => {
        setUserName(userInfoData.name);
        setUserDescription(userInfoData.about);
        setUserAvatar(userInfoData.avatar);
        setInitialCards(
          cardData.map((data) => ({
            likes: data.likes,
            name: data.name,
            link: data.link,
            cardId: data._id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="avatar-zone">
            <img src={userAvatar} className="avatar" alt="Фото профиля." />
            <button
              className="edit-avatar"
              onClick={() => {
                onEditAvatar(true);
              }}
              type="button"
              aria-label="Добавить аватар."
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__heading">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button
              className="profile__edit"
              onClick={() => {
                onEditProfile(true);
              }}
              type="button"
              aria-label="Редактировать профиль."
            ></button>
          </div>
        </div>
        <button
          className="profile__add"
          onClick={() => {
            onAddPlace(true);
          }}
          type="button"
          aria-label="Добавить фото."
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card.cardId}
            likes={card.likes}
            name={card.name}
            link={card.link}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
