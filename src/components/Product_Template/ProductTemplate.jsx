import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer";
import Loader from "../Loader";
import "./ProductTemplate.css";
import * as XLSX from "xlsx";

function ProductTemplate() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [xlsxData, setXlsxData] = useState({});
  const [activeSheet, setActiveSheet] = useState("");
  const [merges, setMerges] = useState({});

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const currentProduct = data.find((p) => p.id === parseInt(id));
        if (currentProduct) {
          setProduct(currentProduct);
          setMainImage(currentProduct.src);

          const filteredProducts = data.filter(
            (p) => p.model_name === currentProduct.model_name && p.id !== currentProduct.id
          );
          setSimilarProducts(filteredProducts);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  useEffect(() => {
    const readXlsxFile = async () => {
      if (product && product.xlsx) {
        try {
          const response = await fetch(product.xlsx);
          const arrayBuffer = await response.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, { type: "array" });
          const sheetsData = {};
          const mergesData = {};

          workbook.SheetNames.forEach((sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            sheetsData[sheetName] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            mergesData[sheetName] = sheet['!merges'] || [];
          });

          setXlsxData(sheetsData);
          setMerges(mergesData);
          setActiveSheet(workbook.SheetNames[0]);
        } catch (error) {
          console.error("Error reading the xlsx file:", error);
        }
      }
    };

    readXlsxFile();
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (product?.additionalImages && product.additionalImages.length > 0) {
        const currentIndex = product.additionalImages.indexOf(mainImage);
        if (event.key === "ArrowRight") {
          const nextIndex = (currentIndex + 1) % product.additionalImages.length;
          setMainImage(product.additionalImages[nextIndex]);
        } else if (event.key === "ArrowLeft") {
          const prevIndex = (currentIndex - 1 + product.additionalImages.length) % product.additionalImages.length;
          setMainImage(product.additionalImages[prevIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mainImage, product]);

  if (!product) {
    return <Loader />;
  }

  if (!mainImage) {
    return <div>Loading main image...</div>;
  }

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const renderSheetData = (data, merges) => {
    const mergeMap = {};

    merges.forEach((merge) => {
      const { s: start, e: end } = merge;
      for (let row = start.r; row <= end.r; row++) {
        for (let col = start.c; col <= end.c; col++) {
          if (row !== start.r || col !== start.c) {
            mergeMap[`${row}-${col}`] = { display: false };
          } else {
            mergeMap[`${row}-${col}`] = {
              display: true,
              rowspan: end.r - start.r + 1,
              colspan: end.c - start.c + 1,
            };
          }
        }
      }
    });

    return (
      <table className="excel-table">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const cellKey = `${rowIndex}-${cellIndex}`;
                if (mergeMap[cellKey] && !mergeMap[cellKey].display) {
                  return null;
                }
                const cellProps = mergeMap[cellKey] || {};
                return (
                  <td
                    key={cellIndex}
                    rowSpan={cellProps.rowspan || 1}
                    colSpan={cellProps.colspan || 1}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <Header />
      <div className="product-details">
        <div className="images-container">
          <div className="thumbnail-images">
            {product.additionalImages &&
              product.additionalImages.map((image, index) => (
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
          <p className="stat1">
            აღწერა: <span style={{ fontWeight: "600" }}>{product.power}</span>
          </p>
          {/* <p className="stat2">
            გაგრილების დიაპაზონი: <span style={{ fontWeight: "600" }}>{product.cooling_range}</span>
          </p>
          <p className="description">{product.description}</p>
          <p className="brand">ბრენდი: {product.brand}</p>
          <p className="weight">წონა: {product.weight}</p>
          <p className="dimensions">განზომილებები: {product.dimensions}</p> */}
          <p className="features">მახასიათებლები:</p>
          {/* <ul>
            {product.features &&
              product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
          </ul>
          <p className="xlsx">მახასიათებელი:</p> */}
          <p className="availability">ხელმისაწვდომობა: {product.availability}</p>
          <p className="warranty">გარანტია: {product.warranty}</p>
          <p className="manufacturer">მწარმოებელი: {product.manufacturer}</p>
        </div>
      </div>
      <div className="excel-container">
            <div className="tabs">
              {Object.keys(xlsxData).map((sheetName) => (
                <button
                  key={sheetName}
                  onClick={() => setActiveSheet(sheetName)}
                  className={activeSheet === sheetName ? "active" : ""}
                >
                  {sheetName}
                </button>
              ))}
            </div>
            <div className="sheet-content">
              {xlsxData[activeSheet] && renderSheetData(xlsxData[activeSheet], merges[activeSheet])}
            </div>
          </div>

      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h2>მსგავსი პროდუქტები:</h2>
          <div className="product-list">
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="similar-product">
                <img
                  src={similarProduct.src}
                  alt={similarProduct.product_name}
                />
                <p className="price">{similarProduct.price}</p>
                <p className="product_name">{similarProduct.product_name}</p>
                <p className="availability">ხელმისაწვდომობა: {similarProduct.availability}</p>
                <Link to={`/product/${similarProduct.id}`}>
                  <button className="view-product-button" style={{ color: "#2C4F9E" }}>
                    View Product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />

      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={mainImage} alt={product.product_name} />
        </div>
      )}
    </>
  );
}

export default ProductTemplate;
