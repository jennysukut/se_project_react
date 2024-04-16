import "./Profile.css";
import { useEffect } from "react";
import ClothesSection from "./ClothesSection/ClothesSection";
import Sidebar from "./Sidebar/Sidebar";

function Profile({ handleCardClick, handleAddClick, clothingItems }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
