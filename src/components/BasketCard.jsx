import React from "react";
import { shortenText } from "../helpers/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";
function BasketCard({ data, clickHandler }) {
  const { title, image, quantity } = data;
  return (
    <div className={styles.card}>
      jnkjnkj
      <img src={image} alt={data.title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;