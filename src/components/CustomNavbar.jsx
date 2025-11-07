import React from 'react';
import '../assets/css/navbar.css'; 

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <img src="../assets/images/mainlogo.gif" alt="Logo" className="logo" /> */}
          Jingle Holiday Bazaar
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nav-item-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-link" href="#">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-item-link" href="#" id="navbarDropdownDomestic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Domestic
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownDomestic">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-item-link" href="#" id="navbarDropdownInternational" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                International
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownInternational">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-item-link" href="#" id="navbarDropdownPlace" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Place
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownPlace">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-item-link" href="#" id="navbarDropdownPackages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Packages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownPackages">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-link" href="tel:+918506922777">+91-8506922777</a>
            </li>
            <li className="nav-item">
              {<a className="btn btn-primary pay-now-btn" href="#">PAY NOW</a>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
