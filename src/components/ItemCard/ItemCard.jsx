import "./ItemCard.css";
import { useState } from "react";

function ItemCard({ item, onCardClick }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    setIsLiked(true);
    //run an API call to set this.
    //We'll need to have an API check to see if the card is liked
    //in the first place - perhaps with a UseEffect?
  };

  return (
    <li className="itemCard__card">
      <div className="itemCard__title-and-like-button">
        <div className="itemCard__title">{item.name}</div>
        <button
          onClick={handleLike}
          className={`itemCard__like-button ${
            isLiked ? "itemCard__like-button-liked" : ""
          }`}
        ></button>
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
