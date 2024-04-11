/*Clothing item cards, which are filtered based on the current weather. 
Wrap the ItemCard component into the unordered list and use the filter() and map() methods.*/
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <>
      <li className="itemCard__card">
        <div className="itemCard__title">{item.name}</div>
        <img src={item.link} alt={item.name} className="itemCard__card-image" />
      </li>
    </>
  );
}

export default ItemCard;
