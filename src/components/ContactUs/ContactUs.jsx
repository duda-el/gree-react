import React, { useState } from 'react';
import './ContactUs.css';
import Header from "../Header/Header";
import Footer from "../Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <>
      <Header />
      <div className="contact-us-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>დაგვიკავშირდით</h2>
          <p>ჩვენი გუნდი მზად არის დაგეხმაორთ!</p>
          <div className="form-group">
            <label htmlFor="firstName">სახელი</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="თქვენი სახელი"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">გვარი</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="თქვენი გვარი"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">ელ-ფოსტა</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">ტელეფონის ნომერი</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(+995) 5** ** ** **"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">შეტყობინება</label>
            <textarea
              id="message"
              name="message"
              placeholder="ტექსტი"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className='sendBtn'>გაგზავნა</button>
        </form>
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6878862630583!2d44.75986451166096!3d41.72725337472532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472e06a73a2bb%3A0x21ed7cea9567cad5!2sOtar%20Chiladze%20Street!5e0!3m2!1sen!2sge!4v1722100027089!5m2!1sen!2sge"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
