import "./SideBar.css";
import avatar from "../../../images/Avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/AppContext";

function SideBar({ setActiveModal }) {
  const { currentUser } = useContext(CurrentUserContext);

  const handleChangeProfileClick = () => {
    setActiveModal("change-profile");
  };

  return (
    <div className="sidebar__user-container">
      <div className="sidebar__user-information">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar-default">
            {currentUser.name.slice(0, 1)}
          </div>
        )}
        <p className="sidebar__user-name">{currentUser.name}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          onClick={handleChangeProfileClick}
          className="sidebar__button sidebar__change-data-button"
        >
          Change profile data
        </button>
        <button className="sidebar__button sidebar__log-out-button">
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
