// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Loader from './Loader';

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
          <Home />
          <AboutUs />
        </>
      )}
    </div>
  );
}

export default App;
