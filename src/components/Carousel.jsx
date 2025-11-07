import React, { useState, useEffect } from "react";
import "../assets/css/carousel.css";

const Carousel = () => {
  const slides = [
    { name: "Rameshwaram", img: "https://jingleholidaybazar.com/images/rameshwarm-banner.webp" },
    { name: "Himalayas", img: "https://jingleholidaybazar.com/images/himalay.webp" },
    { name: "Akshardham Temple", img: "https://jingleholidaybazar.com/images/akshardham-temple.webp" },
    { name: "Goechala", img: "https://jingleholidaybazar.com/images/goechala-banner.webp" },
    { name: "Pondicherry", img: "https://jingleholidaybazar.com/images/pondicherry-banner.webp" },
    { name: "Darjeeling", img: "https://jingleholidaybazar.com/images/darjeeling-banner.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <img
            src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063942011969"
            alt="Jingle Holiday Logo"
            className="logo"
          />
          <h2 className="brand-name">Jingle Holiday</h2>
        </div>

        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="dropdown">
            <a href="#">Domestic ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Goa</a></li>
              <li><a href="#">Kerala</a></li>
              <li><a href="#">Rajasthan</a></li>
              <li><a href="#">Himachal</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">International ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Dubai</a></li>
              <li><a href="#">Thailand</a></li>
              <li><a href="#">Bali</a></li>
              <li><a href="#">Maldives</a></li>
            </ul>
          </li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="nav-right">
          <span className="phone-number">📞 +91-8506922777</span>
          <button className="pay-now">Pay Now</button>
        </div>
      </header>

      {/* Hero Slideshow */}
      <section className="hero-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="overlay">
              <h1>Welcome to Jingle Holiday Bazar Pvt. Ltd.</h1>
              <p>Discover the Beauty of {slide.name}</p>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Carousel;
