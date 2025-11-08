import React from 'react';
import '../assets/css/DestinationComponent.css'; 
const destinations = [
  {
    name: "Amritsar, Punjab",
    img: "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg",
  },
  {
    name: "Gangtok, Sikkim",
    img: "https://jingleholidaybazar.com/images/Gangtok.jpg",
  },
  {
    name: "Agra, Uttar Pradesh",
    img: "https://jingleholidaybazar.com/images/Taj-mahal.jpg",
  },
];

const DestinationComponent = () => {
  return (
    <section className="destination-section">
      <div className="text-content">
        <h2>POPULAR DESTINATION IN INDIA</h2>
        <p>
          Explore India’s most beautiful and culturally rich destinations — from
          the Golden Temple in Amritsar to the snow-capped peaks of Sikkim and
          the timeless beauty of the Taj Mahal in Agra.
        </p>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="destination-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
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
export default DestinationComponent;
