import React, { useEffect } from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../../../components/CategoryCard";
import { load_categories } from "../../../../requests/categories_req";

export default function Block2() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, [dispatch]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.block}>
          <h1>Catalog</h1>

          <Link to="categories">
            <button>All categories </button>
          </Link>
        </div>
        <div className={s.catalog}>
          {categories.slice(0, 4).map((el) => (
            <CategoryCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
