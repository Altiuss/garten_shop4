import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTelephoneNumber } from "../../../../store/reducers/phone";
import s from "./index.module.css";
import gnom from "./media/gnom.png";

export default function Block3() {
  const dispatch = useDispatch();
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [error, setError] = useState("");
  const phone = useSelector((state) => state.telephoneNumber);

  const validateTelephoneNumber = (telephoneNumber) => {
    const telephoneNumberRegex = /^\+49\d{10}$/ ;
    return telephoneNumberRegex.test(telephoneNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateTelephoneNumber(telephoneNumber)) {
      setError("Please enter a valid telephone number: +49xxxxxxxxxx");
      return;
    }
    dispatch(addTelephoneNumber(telephoneNumber));
    setTelephoneNumber("");
    setError("");
  };
  const handleFocus = () => {
    setTelephoneNumber("");
    setError("");
  };
  console.log(phone);

  return (
    <section id="coupon" className={s.section}>
      <div className={s.container}>
        <div className={s.left}>
          <img src={gnom} alt="" />
        </div>
        <div className={s.right}>
          <h1>5% off </h1>
          <h2>on the first order</h2>
          <form>
            {error && <div className={s.error}>{error}</div>}
            <input
              type="nummber"
              placeholder="+49"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              onFocus={handleFocus}
            />
            <button onClick={handleSubmit}>Get a discount</button>
          </form>
        </div>
      </div>
    </section>
  );
}
