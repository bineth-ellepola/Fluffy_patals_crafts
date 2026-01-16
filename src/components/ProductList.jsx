import React from "react";
import "../style/ProductList.css";
import p1 from "../assets/images/p9.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p7.jpg";

const products = [
  { id: 1, name: "Pink Flower", price: "Rs.200", img: p1 },
  { id: 2, name: "Purple Flower", price: "Rs.150", img: p2 },
  { id: 3, name: "Yellow Flower", price: "Rs.100", img: p3 },
  { id: 4, name: "Mixed Bouquet", price: "Rs.300", img: p4 },
  { id: 5, name: "Red Rose", price: "Rs.250", img: p1 },
  { id: 6, name: "White Lily", price: "Rs.180", img: p2 },
  { id: 7, name: "Sunflower", price: "Rs.220", img: p3 },
  { id: 8, name: "Orchid", price: "Rs.350", img: p4 },
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
