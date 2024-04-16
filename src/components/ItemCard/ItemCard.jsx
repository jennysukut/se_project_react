import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="itemCard__card">
      <div className="itemCard__title">{item.name}</div>
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
