import "./ItemCard.css";
import { useState, useEffect } from "react";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleCardClick = () => {
    onCardClick(item);
  };

  if ((item.likes.length = 0)) {
    setIsLiked(false);
  }

  if (item.likes.length > 0) {
    setIsLiked(true);
  }

  const handleLikeClick = () => {
    handleCardLike(item._id, isLiked);
    //setIsLiked(true); - this only changes appearance
    //run an API call to set this.
    //We'll need to have an API check to see if the card is liked
    //in the first place - perhaps with a UseEffect?
  };

  useEffect(() => {
    //see if the item is liked with it's item._id
  }, []);

  return (
    <li className="itemCard__card">
      <div className="itemCard__title-and-like-button">
        <div className="itemCard__title">{item.name}</div>
        <button
          onClick={handleLikeClick}
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
