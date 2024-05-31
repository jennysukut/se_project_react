import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ activeModal, closeActiveModal, handleLogin }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login submit clicked");
    handleLogin({ email, password });
    //close the modal
  };

  const handleOrRegister = () => {
    console.log("Handling or register option button");
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={activeModal === "log-in"}
      buttonText="Next"
      title="Log In"
      onSubmit={handleSubmit}
      logIn={true}
      altButton={true}
      altButtonText="or Register"
      handleAltButton={handleOrRegister}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="email" className="modal__input-title">
          Email*
          <input
            type="text"
            className="modal__input"
            placeholder="email"
            id="email"
            //value={email}
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
            placeholder="password"
            id="password"
            //value={password}
            //onChange={handlePassword}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;
