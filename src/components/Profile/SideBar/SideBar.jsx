import "./SideBar.css";
import avatar from "../../../images/Avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/AppContext";

function SideBar() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar__user-container">
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
  );
}

export default SideBar;
