// ProductDetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from './productsData'; // Replace with your data source

const ProductDetailPage = () => {
  const { id } = useParams(); // Retrieve product id from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on id (Replace with your data fetching logic)
    const fetchedProduct = productsData.find(item => item.id === parseInt(id, 10));
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div className="product-detail">
      <h1>{product.product_name}</h1>
      <div className="image-gallery">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <p className="price">Price: {product.price}</p>
      <p className="description">{product.description}</p>
      {/* Display other fields as needed */}
    </div>
  );
};

export default ProductDetailPage;
