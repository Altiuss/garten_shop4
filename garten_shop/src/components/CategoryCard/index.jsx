import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className={s.catalog_card}>
      <Link to={`/categories/${id}`}>
        <img
          className={s.image}
          src={`https://gartenback.onrender.com/${image}`}
          alt={title}
        />
      </Link>

      <h3>{title}</h3>
    </div>
  );
}
