import React, { useEffect } from 'react';
import Slider from 'react-slider';
import './ProductsPage.css'; // Make sure to include your CSS file

const Filter = ({ onSearch, products, onModelChange, minPrice, maxPrice, onPriceChange, clearFilters }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedModels, setSelectedModels] = React.useState([]);
  const [min, setMin] = React.useState(minPrice);
  const [max, setMax] = React.useState(maxPrice);

  useEffect(() => {
    setMin(minPrice);
    setMax(maxPrice);
  }, [minPrice, maxPrice]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const uniqueModelNames = [...new Set(products.map(product => product.model_name))];

  const handleModelCheckboxChange = (event) => {
    const modelName = event.target.name;
    const newSelectedModels = selectedModels.includes(modelName)
      ? selectedModels.filter(name => name !== modelName)
      : [...selectedModels, modelName];
    setSelectedModels(newSelectedModels);
    onModelChange(modelName);
  };

  const handleSliderChange = ([newMin, newMax]) => {
    setMin(newMin);
    setMax(newMax);
    onPriceChange(newMin, newMax);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    const newMin = value === "" ? 0 : Number(value);
    setMin(newMin);
    onPriceChange(newMin, max);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    const newMax = value === "" ? 10000 : Number(value);
    setMax(newMax);
    onPriceChange(min, newMax);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedModels([]);
    setMin(0);
    setMax(10000);
    clearFilters();
  };

  return (
    <div className="w-1/4 p-4 bg-white" style={{ maxWidth: "350px", width: "100%" }}>
      <div className="flex justify-between items-center mb-4 py-5 border-b border-t" style={{ fontFamily: "tkt" }}>
        <h2 className="text-xl font-bold">ფილტრი</h2>
        <button className="text-gray-500" onClick={handleClearFilters}>გასუფთავება</button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="მოძებნეთ პროდუქტი დასახელებით"
          className="w-full p-2 border rounded mb-4 text-md"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ fontFamily: "tkt" }}
        />
        <Slider
          className="horizontal-slider"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          min={0}
          max={10000}
          value={[min, max]}
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
        <div className="flex justify-between mt-5" style={{ gap: "10px" }}>
          <div className="relative w-40" style={{ fontFamily: "tkt" }}>
            <input
              type="number"
              className="w-full p-2 pl-16 pr-6 border rounded border-customLightBlue text-center"
              value={min}
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
              value={max}
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
        <h3 className="text-lg font-bold mb-2">მოდელები</h3>
        {uniqueModelNames.map(modelName => (
          <div key={modelName} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name={modelName}
                className="mr-2"
                checked={selectedModels.includes(modelName)}
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
