import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";
import { addTelephoneNumber } from "../../store/reducers/phone";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { persistor } from "../../store";
import { emptyCart } from "../../store/reducers/cart";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [error, setError] = useState("");
  const phone = useSelector((state) => state.telephoneNumber);

  const validateTelephoneNumber = (telephoneNumber) => {
    const telephoneNumberRegex = /^\+49\d{10}$/;
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

  const total = cart
    .reduce((prev, el) => prev + el.discont_price * el.count, 0)
    .toFixed(2);

  useEffect(() => {
    persistor.persist();
  }, [cart, dispatch]);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const handleComb = (event) => {
    handleSubmit(event);
    if (!validateTelephoneNumber(telephoneNumber)) return;
    handleEmptyCart();
  };

console.log(...cart)

  return (
    <section className={s.cart_page}>
      <h1 className={s.h}>Shopping cart</h1>
      <div className={s.cart_page_title}>
        <p></p>
        <p>
          Back to the store
          <span className={s.span}>
            <Link className={s.link} to="/categories">
              &gt;
            </Link>
          </span>
        </p>
      </div>

      <div className={s.cart_section}>
        <div className={s.cart_container}>
          {cart.map((el) => (
            <CartCard key={el.id} {...el} />
          ))}
        </div>
        <div className={s.summary_container}>
          <h2>Order details</h2>
          <p className={s.total}>Total</p>
          <p className={s.sum}>
            {total}

            <span>$</span>
          </p>
          <form className={s.order_form}>
            {error && <div className={s.error}>{error}</div>}
            <input
              type="nummber"
              placeholder="+49"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              onFocus={handleFocus}
            />
            <button onClick={handleComb}>Order</button>
          </form>
        </div>
      </div>
    </section>
  );
}
