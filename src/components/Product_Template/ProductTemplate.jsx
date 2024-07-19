import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer";
import Loader from "../Loader";
import "./ProductTemplate.css";

function ProductTemplate() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch product data from JSON file
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const currentProduct = data.find(p => p.id === parseInt(id));
        if (currentProduct) {
          setProduct(currentProduct);
          setMainImage(currentProduct.src);

          // Filter similar products based on model_name
          const filteredProducts = data.filter(p => p.model_name === currentProduct.model_name && p.id !== currentProduct.id);
          setSimilarProducts(filteredProducts);
        } else {
          console.error('Product not found');
        }
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (product?.additionalImages && product.additionalImages.length > 0) {
        const currentIndex = product.additionalImages.indexOf(mainImage);
        if (event.key === 'ArrowRight') {
          const nextIndex = (currentIndex + 1) % product.additionalImages.length;
          setMainImage(product.additionalImages[nextIndex]);
        } else if (event.key === 'ArrowLeft') {
          const prevIndex = (currentIndex - 1 + product.additionalImages.length) % product.additionalImages.length;
          setMainImage(product.additionalImages[prevIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mainImage, product]);

  if (!product) {
    return <div><Loader /></div>;
  } else if (similarProducts.length === 0) {
    return <div>Loading...</div>;
  } else if (!mainImage) {
    return <div>Loading main image...</div>;
  } else {
    console.log('Product:', product);
    console.log('Similar Products:', similarProducts);
  }

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <div className="product-details">
        <div className="images-container">
          <div className="thumbnail-images">
            {product.additionalImages && product.additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional ${index + 1}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          <img
            src={mainImage}
            alt={product.product_name}
            className="main-image"
            onClick={openModal}
          />
        </div>
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
            {product.features && product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="availability">ხელმისაწვდომობა: {product.availability}</p>
          <p className="warranty">გარანტია: {product.warranty}</p>
          <p className="manufacturer">მწარმოებელი: {product.manufacturer}</p>
          {/* <div className="reviews">
            <h3>მიმოხილვები:</h3>
            {product.reviews && product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.user}</strong> (Rating: {review.rating}/5)</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div> */}
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
                <Link to={`/product/${similarProduct.id}`}>
                  <button className="view-product-button" style={{color: "#2C4F9E"}}>View Product</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={mainImage} alt={product.product_name} />
        </div>
      )}
    </>
  );
}

export default ProductTemplate;
