import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/AppContext";
import { useContext } from "react";

function ItemModal({
  activeModal,
  card,
  closeActiveModal,
  popupVersion,
  handleDeletePress,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "itemModal__deleteButton" : "itemModal__deleteButton_hidden"
  }`;

  const handleDeleteButton = () => {
    handleDeletePress(card._id);
  };

  /*if (popupVersion == "2") {
    return (
      <div
        className={`modal itemModal__v-2 ${
          activeModal === "preview" ? "modal_opened" : ""
        }`}
      >
        <div className="itemModal__container-v-2">
          <button
            type="button"
            className="itemModal__close-button-v-2"
            onClick={closeActiveModal}
          ></button>
          <div className="itemModal__contents-v-2">
            <div className="itemModal__image-and-title-v-2">
              <p className="itemModal__title-v-2">{card.name}</p>
              <img
                src={card.imageUrl}
                alt={card.name}
                className="itemModal__image-v-2"
              />
            </div>
            <p className="itemModal__weather-v-2">Weather: {card.weather}</p>
            <button
              type="button"
              className="itemModal__deleteButton-v-2"
              onClick={handleDeleteButton}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    );
  } else {*/
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="itemModal__container">
        <button
          type="button"
          className="itemModal__close-button"
          onClick={closeActiveModal}
        ></button>
        <img src={card.imageUrl} alt={card.name} className="itemModal__image" />
        <div className="itemModal__details">
          <button
            type="button"
            className={itemDeleteButtonClassName}
            onClick={handleDeleteButton}
          >
            Delete item
          </button>
          <p className="itemModal__title">{card.name}</p>
          <p className="itemModal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
//}

export default ItemModal;
