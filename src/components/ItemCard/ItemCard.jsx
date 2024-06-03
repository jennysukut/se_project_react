import "./ItemCard.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/AppContext";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const { isLoggedIn } = useContext(AppContext);
  const { currentUser } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const likes = item.likes;
  const isLiked = likes.find(function (likes) {
    return likes == currentUser._id;
  });

  const handleLikeClick = () => {
    handleCardLike(item._id, isLiked);
  };

  return (
    <li className="itemCard__card">
      <div className="itemCard__title-and-like-button">
        <div className="itemCard__title">{item.name}</div>
        {isLoggedIn ? (
          <button
            onClick={handleLikeClick}
            className={`itemCard__like-button ${
              isLiked ? "itemCard__like-button-liked" : ""
            }`}
          ></button>
        ) : (
          ""
        )}
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="itemCard__card-image"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
