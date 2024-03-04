import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./Products.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
function Products() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log(search);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default Products;
