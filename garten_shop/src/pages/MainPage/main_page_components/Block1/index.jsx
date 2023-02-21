import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function Block1() {
  return (
    <section className={s.section_one}>
      <div className={s.section_one_container}>
        <div className={s.section_left}>
          <h1 className={s.h1}>Sale </h1>
          <h2 className={s.h2}>New season</h2>
          <div className={s.button_cont}>
            <Link to="sale">
              <button>Sale</button>
            </Link>
            <button>Learn more</button>
          </div>
        </div>
        <div className={s.section_right}></div>
      </div>
    </section>
  );
}
