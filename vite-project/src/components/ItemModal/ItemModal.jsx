import "./ItemModal.css";

import hatPic from "../../images/HatPic.jpg";

function ItemModal() {
  return (
    <div className="itemModal">
      <div className="itemModal__container">
        <button type="button" className="itemModal__close-button"></button>
        <img src={hatPic} alt="" className="itemModal__image" />
        <div className="itemModal__details">
          <p className="itemModal__title">Cap</p>
          <p className="itemModal__weather">Weather: hot</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
