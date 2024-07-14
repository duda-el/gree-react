import React from 'react';
import Slider from 'react-slider';
import './ProductsPage.css'; // Make sure to include your CSS file

const Filter = ({ onSearch, products, onModelChange, minPrice, maxPrice, onPriceChange, clearFilters }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  const uniqueModelNames = [...new Set(products.map(product => product.model_name))];

  const handleModelCheckboxChange = (event) => {
    onModelChange(event.target.name);
  };

  const handleSliderChange = ([min, max]) => {
    onPriceChange(min, max);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    onPriceChange(value === "" ? 0 : Number(value), maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    onPriceChange(minPrice, value === "" ? 10000 : Number(value));
  };

  return (
    <div className="w-1/4 p-4 bg-white" style={{ maxWidth: "350px" }}>
      <div className="flex justify-between items-center mb-4 py-5 border-b border-t" style={{ fontFamily: "tkt" }}>
        <h2 className="text-xl font-bold">Filter</h2>
        <button className="text-gray-500" onClick={clearFilters}>Clear</button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by product name"
          className="w-full p-2 border rounded mb-4"
          onChange={handleSearchChange}
        />
        <Slider
          className="horizontal-slider"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          min={0}
          max={10000}
          value={[minPrice, maxPrice]}
          onChange={handleSliderChange}
          renderTrack={(props, state) => {
            const { key, ...restProps } = props; // Destructure key out of props
            return (
              <div
                key={key}
                {...restProps}
                className={`slider-track ${state.index === 0 ? "slider-track-0" : "slider-track-1"}`}
              />
            );
          }}
        />
        <div className="flex justify-between mt-5">
          <div className="relative w-40" style={{ fontFamily: "tkt" }}>
            <input
              type="number"
              className="w-full p-2 pl-16 pr-6 border rounded border-customLightBlue text-center"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              MIN:
            </label>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black font-bold">
              ₾
            </span>
          </div>
          <div className="relative w-40" style={{ fontFamily: "tkt" }}>
            <input
              type="number"
              className="w-full p-2 pl-16 pr-6 border rounded border-customLightBlue text-center"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              MAX:
            </label>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black font-bold">
              ₾
            </span>
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "tkt" }}>
        <h3 className="text-lg font-bold mb-2">GREE Models</h3>
        {uniqueModelNames.map(modelName => (
          <div key={modelName} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name={modelName}
                className="mr-2"
                onChange={handleModelCheckboxChange}
              />
              {modelName}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
