import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <div>
      <img src={image} alt={title} style={{ width: "150px" }} />
      <h3>{title}</h3>
      <p>{price} $</p>
      <div>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
      </div>
    </div>
  );
}

export default Card;
