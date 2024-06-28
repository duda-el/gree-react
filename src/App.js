// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Loader from './Loader';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
