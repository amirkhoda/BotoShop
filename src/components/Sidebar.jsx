import React from "react";
import { FaListUl } from "react-icons/fa";
import { creatQueryObject } from "../helpers/helper";
import styles from "./Sidebar.module.css";
import categories from "../constant/list";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => creatQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <p>Categories</p>
        <FaListUl />
        <ul onClick={categoryHandler}>
          {categories.map((item) => (
            <li
              key={item.id}
              className={
                item.name.toLocaleLowerCase() === query.category
                  ? styles.selected
                  : null
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
