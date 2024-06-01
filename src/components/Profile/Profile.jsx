import "./Profile.css";
import { useEffect } from "react";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";

function Profile({
  handleCardClick,
  handleAddClick,
  clothingItems,
  setActiveModal,
}) {
  return (
    <div className="profile">
      <SideBar setActiveModal={setActiveModal} />
      <ClothesSection
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
