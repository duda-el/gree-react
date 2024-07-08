import React, { useState } from "react";
import Slider from "react-slider";
import "./ProductsPage.css"; // Make sure to include your CSS file

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleSliderChange = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value === "" ? "" : Number(value));
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value === "" ? "" : Number(value));
  };

  return (
    <div className="w-1/4 p-4 bg-white">
      <div
        className="flex justify-between items-center mb-4 py-5 border-b border-t"
        style={{ fontFamily: "tkt" }}
      >
        <h2 className="text-xl font-bold">ფილტრი</h2>
        <button className="text-gray-500">გასუფთავება</button>
      </div>
      <div className="mb-4">
        <Slider
          className="horizontal-slider"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          min={0}
          max={10000}
          value={[minPrice || 0, maxPrice]}
          onChange={handleSliderChange}
          renderTrack={(props, state) => (
            <div
              {...props}
              className={`slider-track ${
                state.index === 0 ? "slider-track-0" : "slider-track-1"
              }`}
            />
          )}
        />
        <div className="flex justify-between mt-5">
          <div className="relative w-40" style={{fontFamily: "tkt"}}>
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
          <div className="relative w-40" style={{fontFamily: "tkt"}}>
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
      <div style={{fontFamily: "tkt"}}>
        <h3 className="text-lg font-bold mb-2">GREE მოდელები</h3>
        <div className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            GREE LOMO
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            GREE U-CROWN
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            GREE SOYAL
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            GREE FAIRY
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            GREE AMBER
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
