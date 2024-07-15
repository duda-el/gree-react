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
  const [isFilterVisible, setIsFilterVisible] = useState(true); // Start with filter visible by default on desktop
  const [sortOrder, setSortOrder] = useState('name-asc'); // State for sorting order

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

  // Sort products based on sortOrder
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOrder) {
      case 'name-asc':
        return a.product_name.localeCompare(b.product_name);
      case 'name-desc':
        return b.product_name.localeCompare(a.product_name);
      case 'price-asc':
        return parseFloat(a.price.replace('₾', '')) - parseFloat(b.price.replace('₾', ''));
      case 'price-desc':
        return parseFloat(b.price.replace('₾', '')) - parseFloat(a.price.replace('₾', ''));
      default:
        return 0;
    }
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

  // Toggle filter visibility on mobile and tablet
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Handle sorting order change
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Determine screen size to decide visibility
  useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.innerWidth < 1024; // Adjust breakpoint as needed
      if (!isMobileOrTablet) {
        setIsFilterVisible(true); // Always show filter on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      {/* Toggle button for mobile and tablet */}
      <button className="filter-toggle-button" onClick={toggleFilterVisibility}>
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
      <div className="flex for_filter">
        {/* Filter section */}
        <div className={`w-1/4 ${!isFilterVisible ? 'hidden' : ''}`}>
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
        </div>
        {/* Product grid */}
        <div className="w-3/4 p-4">
          <div className="sort-options" style={{ display: "flex", justifyContent: "flex-end", marginRight: "70px", marginBottom: "20px" }}>
            <select value={sortOrder} onChange={handleSortOrderChange} style={{ borderRadius: "5px" }}>
              <option value="name-asc">Sort by Name A-Z</option>
              <option value="name-desc">Sort by Name Z-A</option>
              <option value="price-asc">Sort by Price Low to High</option>
              <option value="price-desc">Sort by Price High to Low</option>
            </select>
          </div>
          <div className="grid-container">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
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
