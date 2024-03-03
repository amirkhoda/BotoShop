import React from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./Products.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
function Products() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default Products;
