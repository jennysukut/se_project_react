import "./Sidebar.css";
import avatar from "../../../images/Avatar.svg";

function Sidebar() {
  return (
    <div className="sidebar__user-container">
      <img src={avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
      <p className="sidebar__user-name">Terrence Tegegne</p>
    </div>
  );
}

export default Sidebar;
