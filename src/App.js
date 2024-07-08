// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "../src/components/AboutUs/AboutUs";
import ProductsPage from "../src/components/ProductsPage/Product"
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this duration as per your requirement
  }, []);

  return (
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
