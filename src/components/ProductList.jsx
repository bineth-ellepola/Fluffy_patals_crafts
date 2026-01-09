import React from "react";
import "../style/ProductList.css";

const products = [
  { id: 1, name: "Pink Flower", price: "$5", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Purple Flower", price: "$6", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Yellow Flower", price: "$4", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Mixed Bouquet", price: "$12", img: "https://via.placeholder.com/150" },
];

const ProductList = () => {
  return (
    <section className="product-list">
      <h3>Our Products</h3>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
