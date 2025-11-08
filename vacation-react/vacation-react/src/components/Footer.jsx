import React from 'react';
import '../assets/css/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container-fluid footer-bg mt-5">
      <div className="container">
        <div className="row py-5">
        
          <div className="col-md-3">
            <h4>Jingle Holiday Bazar</h4>
            <p>Travel with us from here to anywhere...</p>
            <p><strong>Phone:</strong> +91 8506922777 / +91 8506944777</p>
            <p><strong>Email:</strong> jingleholidaybazar@gmail.com</p>
            <p><strong>Support:</strong> thejingleholidaybazar@gmail.com</p>
            <p><strong>24/7 Dedicated Customer Support</strong></p>
          </div>

          
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Blog List</a></li>
              <li><a href="#!">Destinations</a></li>
              <li><a href="#!">Hotels</a></li>
              <li><a href="#!">Gallery</a></li>
            </ul>
          </div>

          
          <div className="col-md-2">
            <h5>Domestic Packages</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Uttarakhand</a></li>
              <li><a href="#!">Mumbai</a></li>
              <li><a href="#!">Ladakh</a></li>
              <li><a href="#!">Meghalaya</a></li>
              <li><a href="#!">North East India</a></li>
              <li><a href="#!">Rajasthan</a></li>
            </ul>
          </div>

        
          <div className="col-md-2">
            <h5>International Packages</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Maldives</a></li>
              <li><a href="#!">Singapore</a></li>
              <li><a href="#!">Switzerland</a></li>
              <li><a href="#!">Saudi Arabia</a></li>
              <li><a href="#!">Thailand</a></li>
              <li><a href="#!">Dubai</a></li>
            </ul>
          </div>

          
          <div className="col-md-2">
            <h5>Yatra</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Mata Vaishno</a></li>
              <li><a href="#!">Kedarnath</a></li>
              <li><a href="#!">Badrinath</a></li>
              <li><a href="#!">Char Dham Yatra</a></li>
              <li><a href="#!">Ramayana Yatra</a></li>
              <li><a href="#!">9 Devi Yatra</a></li>
            </ul>
          </div>
        </div>

    
        <div className="row text-center py-3">
          <div className="col">
            <p>
              Powered By | <strong>Namrata Universal</strong> | All Rights Reserved by JingleHolidayBazar
            </p>
            <div className="social-icons mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
