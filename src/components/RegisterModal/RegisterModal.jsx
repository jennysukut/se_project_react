import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ activeModal, closeActiveModal, handleAddUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrl = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    const user = { email, password, name, avatarUrl };
    handleAddUser({ user });
    //close the modal
    //sign the user in
  };

  const handleOrLogin = () => {
    console.log("handling or login button");
  };

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
            type="text"
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
        <label htmlFor="name" className="modal__input-title">
          Name
          <input
            type="text"
            className="modal__input"
            placeholder="Name"
            id="name"
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
            value={avatarUrl}
            onChange={handleAvatarUrl}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;