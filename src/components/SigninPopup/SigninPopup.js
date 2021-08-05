import React, { useState } from "react";

import "./SigninPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SigninPopup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <PopupWithForm
      popupName={"signin"}
      title={"Sign in"}
      buttonText={"Sign in"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      alternativeLink={"Sign up"}>
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
      </div>
    </PopupWithForm>
  );
}

export default SigninPopup;
