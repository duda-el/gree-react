// Loader.js
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <ClipLoader color="#00337a" loading={loading} size={120} />
    </div>
  );
};

export default Loader;
