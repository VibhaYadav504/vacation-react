import React from 'react';
import '../assets/css/InternationalDestinations.css'; 

const destinations = [
  {
    name: "Dubai",
    img: "https://jingleholidaybazar.com/images/DUBAI1.jpg",
  },
  {
    name: "Sydney",
    img: "https://jingleholidaybazar.com/images/caption.jpg",
  },
  {
    name: "Singapore",
    img: "https://jingleholidaybazar.com/images/download%20(8).jpg",
  },
];

const InternationalDestinations = () => {
  return (
    <section className="international-section">
      <div className="text-content">
        <h2>POPULAR DESTINATION INTERNATIONAL</h2>
        <p>
          Mother Earth along with mankind have co-created some of the most
          spectacular places on this planet. From sprawling cities to
          spectacular national parks, it is hard to keep your bucket list
          stagnant. Keeping in mind iconic attractions, culture, food and ease
          of travel, these are the best places in the world to visit!
        </p>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="destination-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/*  Use <img> instead of background-image */}
            <img src={dest.img} alt={dest.name} className="destination-img" />
            <div className="overlay"></div>
            <div className="destination-info">
              <h3>{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

{/*const InternationalDestinations = () => {
  return (
    <div className="container mt-5">
      {/* Popular Destination International Section 
      <div className="text-center mb-5">
        <h2>POPULAR DESTINATION INTERNATIONAL</h2>
        <p>
          Mother Earth along with mankind have co-created some of the most spectacular places on this planet. From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!
        </p>
      </div>

      {/* Destination Images 
      <div className="row">
        {/* Destination 1 - Dubai 
        <div className="col-md-4 mb-4">
          <div className="destination-card">
            <img
              src="https://jingleholidaybazar.com/images/DUBAI1.jpg"
              className="img-fluid"
              alt="Dubai"
            />
            <div className="destination-name">Dubai</div>
          </div>
        </div>

        {/* Destination 2 - Sydney 
        <div className="col-md-4 mb-4">
          <div className="destination-card">
            <img
              src="https://jingleholidaybazar.com/images/caption.jpg"
              className="img-fluid"
              alt="Sydney"
            />
            <div className="destination-name">Sydney</div>
          </div>
        </div>

        {/* Destination 3 - Singapore 
        <div className="col-md-4 mb-4">
          <div className="destination-card">
            <img
            src='https://jingleholidaybazar.com/images/download%20(8).jpg'
              className="img-fluid"
              alt="Singapore"
            />
            <div className="destination-name">Singapore</div>
          </div>
        </div>
      </div>
    </div>
  );
};*/}

export default InternationalDestinations;
