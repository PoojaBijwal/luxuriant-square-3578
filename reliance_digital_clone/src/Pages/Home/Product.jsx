import React from "react";
import styles from "./Product.module.css";

const Product = ({ items }) => {

  console.log("product page", items);
  const { id, url, price, title, save } = items;
  return (
    
    <div key={id} className={styles.product}>
      <div >
        <img  style={{height:"200px"}}src={url} alt="product image" />
        <h5 style={{ color: "blue" }}>{title}</h5>
        <p>
          <span>Deal Price : </span> ₹ {price}
        </p>
        <p>M.R.P :₹3499</p>
        <p>You save: ₹ {save}</p>
        <button style={{ backgroundColor: "pink" }}>offer Avaliable</button>
      </div>
    </div>
  );
};

export default Product;
