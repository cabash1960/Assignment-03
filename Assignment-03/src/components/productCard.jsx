import React from "react";
import "../index.css";
function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="img-info">
        <div className={product.id === 1 ? "cat-img best" : "cat-img"}>
          <img src={product.img} alt={product.title} />
        </div>

        <p className="img-cat">{product.category}</p>
        <p className="img-head">{product.title}</p>
        <p className="price">
          <span className="dollar">$</span>
          {product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
