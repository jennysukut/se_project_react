import "./EditProfileModal.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/AppContext";

function EditProfileModal({
  activeModal,
  closeActiveModal,
  handleProfileChange,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, avatar } = currentUser;

  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleAvatar = (e) => {
    setNewAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { newName, newAvatar };
    handleProfileChange(newData);
  };

  useEffect(() => {
    setNewName(name);
    setNewAvatar(avatar);
  }, [activeModal]);

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={activeModal === "change-profile"}
      buttonText="Next"
      title="Change profile data"
      onSubmit={handleSubmit}
      logIn={true}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="email" className="modal__input-title">
          Name
          <input
            type="text"
            className="modal__input"
            // placeholder={name}
            id="name"
            value={newName}
            onChange={handleName}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label htmlFor="password" className="modal__input-title">
          Avatar
          <input
            type="text"
            className="modal__input"
            // placeholder={avatar}
            id="avatar"
            value={newAvatar}
            onChange={handleAvatar}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default EditProfileModal;
