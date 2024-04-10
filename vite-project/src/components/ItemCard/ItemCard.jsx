/*Clothing item cards, which are filtered based on the current weather. 
Wrap the ItemCard component into the unordered list and use the filter() and map() methods.*/
import "./ItemCard.css";
import tShirt from "../../images/TShirt.svg";

function ItemCard() {
  return (
    <div className="itemCard">
      <p className="itemCard__text">Today is 75° F / You may want to wear:</p>
      <ul className="itemCard__list">
        <li className="itemCard__card">
          <div className="itemCard__title">TShirt</div>
          <img src={tShirt} alt="" className="itemCard__card-image" />
        </li>
        <li className="itemCard__card">
          <div className="itemCard__title">Shorts</div>
          <img src={tShirt} alt="" className="itemCard__card-image" />
        </li>
        <li className="itemCard__card">
          <div className="itemCard__title">Cap</div>
          <img src={tShirt} alt="" className="itemCard__card-image" />
        </li>
        <li className="itemCard__card">
          <div className="itemCard__title">Sneakers</div>
          <img src={tShirt} alt="" className="itemCard__card-image" />
        </li>
      </ul>
    </div>
  );
}

export default ItemCard;
