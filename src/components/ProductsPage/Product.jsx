import React from 'react';
import Header from '../Header/Header';
import Filter from './Filter'; // Adjust the path as needed

const Products = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Filter />
        <div className="w-3/4 p-4">
          {/* Your product list or content goes here */}
          {/* Render your products here */}
        </div>
      </div>
    </div>
  );
};

export default Products;
