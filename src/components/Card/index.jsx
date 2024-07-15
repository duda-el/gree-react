import React from 'react';
import './Card.css'; // Adjust path as per your file structure
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  if (!product) {
    return null; // Optionally handle case where product data is undefined
  }

  return (
    <div className="card">
      <div className="img_wrapper">
        <img src={product.src} alt={product.product_name} />
      </div>
      <div className="content">
        <p className="price">{product.price}</p>
        <p className="product_name">{product.product_name}</p>
        {/* <p className="stat1">სიმძლავრე: <span style={{ fontWeight: '600' }}>{product.power}</span></p>
        <p className="stat2">გაგრილების დიაპაზონი: <span style={{ fontWeight: '600' }}>{product.cooling_range}</span></p> */}
      </div>
      <Link to={`/product/${product.id}`}>
        <button className="add_to_cart">სრულად ნახვა</button>
      </Link>
    </div>
  );
}

export default Card;
