import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer id="footer" className={s.footer}>
      <div className={s.left_footer}>
        <h3 className={s.contact}>Contact</h3>
        <p className={s.phone}>+49 999 999 99 99</p>
        <div>
          <div className={s.soc}>
            <Link to="https://www.instagram.com/" target="_blank">
              <SlSocialInstagram className={s.instagram} />
            </Link>

            <p className={s.soc_text}>instagram</p>
          </div>
          <div className={s.soc}>
            <Link to="https://www.whatsapp.com/" target="_blank">
              <SiWhatsapp className={s.whatsapp} />
            </Link>
            <p className={s.soc_text}>WhatsApp</p>
          </div>
        </div>
      </div>
      <div className={s.right_footer}>
        <h1>Address</h1>
        <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        <p>Working Hours:</p>
        <p>24 hours a day</p>
      </div>
    </footer>
  );
}
