import "./Profile.css";
import { useEffect } from "react";
import ClothesSection from "./ClothesSection/ClothesSection";
import Sidebar from "./Sidebar/Sidebar";

function Profile({ handleCardClick, handleAddClick }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default Profile;
