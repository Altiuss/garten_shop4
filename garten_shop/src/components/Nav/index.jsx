import React from "react";
import s from "./index.module.css";
import { useSelector } from "react-redux";
import logo from "./media/image 1.png";
import { Link } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  const cart = useSelector((state) => state.cart);
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <header>
      <nav className={s.nav}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="logo" />
        </Link>

        <Link to="categories" className={s.catalog}>
          <button>Catalog</button>
        </Link>

        <Link to="sale" className={s.category}>
          %Sale%
        </Link>

        <HashLink to="/#coupon" smooth={true} offset={-100} duration={1000}>
          <p className={s.cupons}>Coupon</p>
        </HashLink>

        <HashLink to="/#sale" smooth={true} offset={-100} duration={1000}>
          <p className={s.discount}>Sale</p>
        </HashLink>

        <HashLink to="/#footer" smooth={true} duration={1000}>
          <p className={s.contact}>Contact</p>
        </HashLink>

        <Link to="cart">
          <p className={s.cart}>
            {totalCount > 0 && (
              <span className={s.cart_count}>{totalCount}</span>
            )}
            <SlHandbag />
          </p>
        </Link>
      </nav>
    </header>
  );
}
