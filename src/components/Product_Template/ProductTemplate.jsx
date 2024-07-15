import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer";
import "./ProductTemplate.css";

function ProductTemplate() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from JSON file
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const currentProduct = data.find(p => p.id === parseInt(id));
        if (currentProduct) {
          setProduct(currentProduct);

          // Filter similar products based on model_name
          const filteredProducts = data.filter(p => p.model_name === currentProduct.model_name && p.id !== currentProduct.id);
          setSimilarProducts(filteredProducts);
        } else {
          console.error('Product not found');
        }
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="product-details">
        <img src={product.src} alt={product.product_name} />
        <div className="details-container">
          <p className="price">{product.price}</p>
          <p className="product_name">{product.product_name}</p>
          <p className="stat1">სიმძლავრე: <span style={{ fontWeight: '600' }}>{product.power}</span></p>
          <p className="stat2">გაგრილების დიაპაზონი: <span style={{ fontWeight: '600' }}>{product.cooling_range}</span></p>
          <p className="description">{product.description}</p>
          <p className="brand">ბრენდი: {product.brand}</p>
          <p className="weight">წონა: {product.weight}</p>
          <p className="dimensions">განზომილებები: {product.dimensions}</p>
          <p className="features">მახასიათებლები:</p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="availability">ხელმისაწვდომობა: {product.availability}</p>
          <p className="warranty">გარანტია: {product.warranty}</p>
          <p className="manufacturer">მწარმოებელი: {product.manufacturer}</p>
          <div className="reviews">
            <h3>მიმოხილვები:</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.user}</strong> (Rating: {review.rating}/5)</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h2>მსგავსი პროდუქტები:</h2>
          <div className="product-list">
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="similar-product">
                <img src={similarProduct.src} alt={similarProduct.product_name} />
                <p className="price">{similarProduct.price}</p>
                <p className="product_name">{similarProduct.product_name}</p>
                <p className="availability">ხელმისაწვდომობა: {similarProduct.availability}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default ProductTemplate;
