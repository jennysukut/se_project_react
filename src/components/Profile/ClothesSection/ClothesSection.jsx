import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/AppContext";

function ClothesSection({
  handleCardClick,
  handleAddClick,
  clothingItems,
  handleCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothesSection">
      <div className="clothesSection__title-and-button">
        <p className="clothesSection__title">Your items</p>
        <button
          type="button"
          className="clothesSection__add-new-button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothesSection__list">
        {clothingItems.map((item) => {
          if (item.owner === currentUser._id) {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                handleCardLike={handleCardLike}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
