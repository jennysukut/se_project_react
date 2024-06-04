import "./LoginModal.css";
import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  activeModal,
  closeActiveModal,
  handleLogin,
  setActiveModal,
  isLoading,
  setIsLoading,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleLogin({ email, password }, setEmail, setPassword);
  };

  const handleOrRegister = () => {
    setActiveModal("register");
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={activeModal === "log-in"}
      buttonText={isLoading ? "..." : "Next"}
      title="Log In"
      onSubmit={handleSubmit}
      logIn={true}
      altButton={true}
      altButtonText="or Register"
      handleAltButton={handleOrRegister}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="loginEmail" className="modal__input-title">
          Email*
          <input
            type="text"
            className="modal__input"
            placeholder="email"
            id="loginEmail"
            value={email}
            onChange={handleEmail}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label htmlFor="loginPassword" className="modal__input-title">
          Password*
          <input
            type="password"
            className="modal__input"
            placeholder="password"
            id="loginPassword"
            value={password}
            onChange={handlePassword}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;
