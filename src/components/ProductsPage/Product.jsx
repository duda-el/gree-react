import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Filter from './Filter'; // Adjust the path as needed
import Card from '../Card/index'; // Adjust the path as needed
import './ProductsPage.css'; // Import your CSS file

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModels, setSelectedModels] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); // Adjust the path as needed
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
        console.log('Fetched Products:', data); // Debugging log
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term, selected models, and price range
  const filteredProducts = products.filter(product => {
    const productPrice = parseFloat(product.price.replace('₾', ''));
    return (
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedModels.length === 0 || selectedModels.includes(product.model_name)) &&
      productPrice >= minPrice && productPrice <= maxPrice
    );
  });

  console.log('Filtered Products:', filteredProducts); // Debugging log

  // Handle search term change
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // Handle model name checkbox change
  const handleModelChange = (modelName) => {
    if (selectedModels.includes(modelName)) {
      setSelectedModels(selectedModels.filter(name => name !== modelName));
    } else {
      setSelectedModels([...selectedModels, modelName]);
    }
  };

  // Handle price range change
  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <Filter
          onSearch={handleSearch}
          products={products}
          onModelChange={handleModelChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={handlePriceChange}
          clearFilters={() => {
            setSearchTerm('');
            setSelectedModels([]);
            setMinPrice(0);
            setMaxPrice(10000);
          }}
        />
        <div className="w-3/4 p-4">
          <div className="grid-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Card key={product.id} product={product} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
