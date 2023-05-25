import React from "react";

function Card(card) {

  function handleCardClick() {
    card.onCardClick(card);
  }

  return (
    <article className="element">
      <button
        className="element__delate"
        type="button"
        aria-label="Удалить."
      ></button>
      <img 
      className="element__image"
      src={card.link}
      alt={card.name}
      onClick={handleCardClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__icon-zone">
          <button
            className="element__icon"
            type="button"
            aria-label="Нравится."
          ></button>
          <p className="element__total-icon">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
