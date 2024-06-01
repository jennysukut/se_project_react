import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/AppContext";

function ClothesSection({ handleCardClick, handleAddClick, clothingItems }) {
  const { currentUser } = useContext(CurrentUserContext);

  //const isOwn = item.owner === currentUser._id;

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
          //console.log(item);
          //if (item.owner === currentUser) {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
          //}
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
