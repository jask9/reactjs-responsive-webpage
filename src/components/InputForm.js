import React, { useState, useRef } from "react";
import classes from "./InputForm.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

function InputForm(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    city: true,
    mobile: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const mobileInputRef = useRef();
  const cityInputRef = useRef();

  function confirmHandler(event) {
    event.preventDefault();

    // we use useRef coz we want the value of inputs on form submission and not on every keystroke
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    // VALIDATING VALUES
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredMobileIsValid = isSixChars(enteredMobile);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      city: enteredCityIsValid,
      mobile: enteredMobile,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredCityIsValid &&
      enteredMobileIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      city: enteredCity,
      mobile: enteredMobile,
    });
  }

  return (
    <div>
      <h2>I'm Interested In This Programme</h2>
      <p className="red">Scholarship Deadline: May 26, 2023</p>

      <div>
        <form className={classes.form} onSubmit={confirmHandler}>
          <div
            className={`${classes.control} ${
              formInputsValidity.name ? "" : classes.invalid
            }`}
          >
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" ref={nameInputRef} />
            {!formInputsValidity.name && (
              <p className="red">Please enter a valid name!</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              formInputsValidity.email ? "" : classes.invalid
            }`}
          >
            <label htmlFor="email">Email</label>
            <input id="email" type="text" ref={emailInputRef} />
            {!formInputsValidity.email && (
              <p className="red">Please enter a valid email!</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              formInputsValidity.mobile ? "" : classes.invalid
            }`}
          >
            <label htmlFor="mobile">Mobile</label>
            <input id="mobile" type="text" ref={mobileInputRef} />
            {!formInputsValidity.mobile && (
              <p className="red">
                Please enter a valid mobile! (10 digits long)
              </p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              formInputsValidity.city ? "" : classes.invalid
            }`}
          >
            <label htmlFor="city">City</label>
            <input id="city" type="text" ref={cityInputRef} />
            {!formInputsValidity.city && (
              <p className="red">Please enter a valid city!</p>
            )}
          </div>
          <button className={`${"btn btn-primary"} ${classes.submitBtn}`}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
