import "./ItemModal.css";

function ItemModal({ activeModal, card, closeActiveModal, popupVersion }) {
  /* if (popupVersion == "2") {
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
                src={card.link}
                alt={card.name}
                className="itemModal__image-v-2"
              />
            </div>
            <p className="itemModal__weather-v-2">Weather: {card.weather}</p>
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
        <img src={card.link} alt={card.name} className="itemModal__image" />
        <div className="itemModal__details">
          <p className="itemModal__title">{card.name}</p>
          <p className="itemModal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
//}

export default ItemModal;