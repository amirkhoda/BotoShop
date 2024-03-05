import React from "react";
import { FaListUl } from "react-icons/fa";
import { creatQueryObject } from "../helpers/helper";
import styles from "./Sidebar.module.css";
function Sidebar({ setQuery }) {
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
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
