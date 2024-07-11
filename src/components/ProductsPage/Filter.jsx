import React, { useState } from "react";
import Slider from "react-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ProductsPage.css"; // Make sure to include your CSS file

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedModel, setSelectedModel] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setDropdownOpen(false);
  };

  return (
    <div className="w-full h-auto flex">
      <div className="w-1/4 p-4 bg-white">
        <div
          className="flex justify-between items-center mb-4 py-5 border-b border-t"
          style={{ fontFamily: "tkt" }}
        >
          <h2 className="text-xl font-bold">ფილტრი</h2>
          <div className="flex items-center">
            <button className="text-gray-500 flex items-center mr-4">
              <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
              გასუფთავება
            </button>
          </div>
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
          <h3 className="text-lg font-bold mb-2">GREE მოდელები</h3>
          <div className="mb-4 relative select-container">
            <select
              className="w-full p-2 border rounded border-customLightBlue text-left"
              value={selectedModel}
              onChange={(e) => handleModelChange(e.target.value)}
            >
              <option value="">აირჩიეთ მოდელი</option>
              <option value="GREE LOMO">GREE LOMO</option>
              <option value="GREE U-CROWN">GREE U-CROWN</option>
              <option value="GREE SOYAL">GREE SOYAL</option>
              <option value="GREE FAIRY">GREE FAIRY</option>
              <option value="GREE AMBER">GREE AMBER</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-red-500" style={{width: "60%", marginTop: "80px"}}></div>
      <button className="flex items-center mt-8 ml-10 end p-5 h-10 bg-gray-100" style={{ fontFamily: "tkt", borderRadius: "50px" }}>
        სორტირება
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Filter;
