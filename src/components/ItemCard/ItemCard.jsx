import "./ItemCard.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/AppContext";

function ItemCard({ item, onCardClick, handleCardLike }) {
  //const [isLiked, setIsLiked] = useState(false);
  const { isLoggedIn } = useContext(AppContext);
  const { currentUser } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  // console.log(item.likes);
  // console.log(currentUser._id);

  // const isLiked = item.likes.length > 0;
  const likes = item.likes;
  const isLiked = likes.find(function (likes) {
    return likes == currentUser._id;
  });

  //you need to check if the current user has liked the card, not if anyone has liked the card;
  //I'll leave that up to you to implement. Hint: You can use the Array class's .find method

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
