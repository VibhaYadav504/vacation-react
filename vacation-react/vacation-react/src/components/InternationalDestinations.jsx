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



export default InternationalDestinations;
