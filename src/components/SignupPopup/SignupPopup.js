import React, { useState } from "react";

import "./SignupPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignupPopup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  /* below states are only to test CSS for now */
  const [inputsAreValid, setInputsAreValid] = React.useState(true);
  const [errorEmail, setErrorEmail] = React.useState(true);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorUsername, setErrorUsername] = React.useState(false);
  const [errorEmailNotAvailable, setEmailNotAvailable] = React.useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <PopupWithForm
      popupName={"signup"}
      title={"Sign up"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      alternativeLink={"Sign in"}>
      <div className='form__inputs-zone'>
        <div className='form__input-zone'>
          <label className='form__label' for='profileEmail'>
            Email
          </label>
          <input
            id='profileEmail'
            className='form__input'
            name='emailInput'
            placeholder='Enter email'
            type='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errorEmail ? (
            <span id='profileEmail-error' className='popup__input-error'>
              Invalid email adress
            </span>
          ) : null}
        </div>
        <div className='form__input-zone'>
          <label className='form__label' for='profilePassword'>
            Password
          </label>
          <input
            id='profilePassword'
            className='form__input'
            name='passwordInput'
            placeholder='Enter password'
            type='text'
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={2}
            maxLength={40}
          />
          {errorPassword ? (
            <span id='profilePassword-error' className='popup__input-error'>
              Invalid Password
            </span>
          ) : null}
        </div>
        <div className='form__input-zone'>
          <label className='form__label' for='username'>
            Username
          </label>
          <input
            id='username'
            className='form__input'
            name='usernameInput'
            placeholder='Enter your username'
            type='text'
            value={username}
            onChange={handleUsernameChange}
            required
            minLength={2}
            maxLength={40}
          />
          {errorUsername ? (
            <span id='userName-error' className='popup__input-error'>
              Invalid Username
            </span>
          ) : null}
        </div>
        {errorEmailNotAvailable ? (
          <span id='emailnotavailable-error' className='popup__email-error'>
            This email is not available
          </span>
        ) : null}
      </div>
      <button
        type='submit'
        className={`popup__button ${
          !inputsAreValid && "popup__button_deactivated"
        }`}
        aria-label='submit button'>
        Sign up
      </button>
      <div className='popup__alternative-link-zone'>
        <p className='popup__alternative-text'>or</p>
        <button
          type='button'
          className='popup__alternative-link'
          onClick={props.signinClick}>
          Sign in
        </button>
      </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
