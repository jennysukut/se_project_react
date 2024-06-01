import "./Profile.css";
import { useEffect } from "react";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";

function Profile({
  handleCardClick,
  handleAddClick,
  clothingItems,
  setActiveModal,
  handleCardLike,
}) {
  return (
    <div className="profile">
      <SideBar setActiveModal={setActiveModal} />
      <ClothesSection
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleCardLike={handleCardLike}
      />
    </div>
  );
}

export default Profile;
