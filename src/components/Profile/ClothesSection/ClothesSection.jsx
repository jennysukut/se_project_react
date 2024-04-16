import "./ClothesSection.css";
import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({ handleCardClick, handleAddClick }) {
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
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
