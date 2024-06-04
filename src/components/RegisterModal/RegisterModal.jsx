import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  activeModal,
  closeActiveModal,
  handleAddUser,
  currentUser,
  setActiveModal,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, name, avatar };
    handleAddUser({ user });
  };

  const handleOrLogin = () => {
    setActiveModal("log-in");
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [currentUser]);

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={activeModal === "register"}
      buttonText="Next"
      title="Sign Up"
      onSubmit={handleSubmit}
      altButton={true}
      altButtonText="or Login"
      handleAltButton={handleOrLogin}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="email" className="modal__input-title">
          Email*
          <input
            type="text"
            className="modal__input"
            placeholder="Email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label htmlFor="password" className="modal__input-title">
          Password*
          <input
            type="password"
            className="modal__input"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label htmlFor="registerNname" className="modal__input-title">
          Name
          <input
            type="text"
            className="modal__input"
            placeholder="Name"
            id="registerName"
            value={name}
            onChange={handleName}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label htmlFor="avatarUrl" className="modal__input-title">
          Avatar URL
          <input
            type="url"
            className="modal__input"
            placeholder="Avatar URL"
            id="avatarUrl"
            value={avatar}
            onChange={handleAvatar}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;
