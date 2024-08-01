// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "../src/components/AboutUs/AboutUs";
import ProductsPage from "../src/components/ProductsPage/Product";
import ProductTemplate from "../src/components/Product_Template/ProductTemplate";
import Loader from "./components/Loader";
import ContactUs from "./components/ContactUs/ContactUs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExcelReader from "./components/excel/ExcelReader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this duration as per your requirement
  }, []);

  return (
    <>
        <div>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductTemplate />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </>
      )}
    </div>
    {/* <ExcelReader /> */}
    </>
  );
}

export default App;
