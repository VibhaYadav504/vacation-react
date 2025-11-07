import React, { useState } from "react";
import "../assets/css/servicesComponent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHome, FaHotel, FaPlane } from "react-icons/fa";

const services = [
  {
    title: "Jingle Holiday Bazar Homestays",
    icon: <FaHome size={60} color="#000" />,
    desc: "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the comforts of a homely environment, Jingle Holiday Bazar Homestays is the answer. Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast. It has a stronghold in South India and across most hill stations of North India, with these places providing unique homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg, Wayanad, among other places.",
  },
  {
    title: "Jingle Holiday Bazar Hotels",
    icon: <FaHotel size={60} color="#000" />,
    desc: "We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you hygienic, sanitised rooms across hotels in India. Explore a raft of interesting features such as Clean Pass stays, travel again offers and long stay discounts encouraging you to travel again, make your hotel booking while keeping your anxieties at bay.",
  },
  {
    title: "Jingle Holiday Bazar Flights",
    icon: <FaPlane size={60} color="#000" />,
    desc: "Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed. It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand. The entire activity of searching air connectivity between two cities, checking the schedule of the flight and zeroing in on one that's most convenient to you can feel like a lot of work especially if you are in a hurry to book your flights.",
  },
];

const ServicesComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>OUR SERVICES</h2>
        <p>
          At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and holiday booking you make with us by bringing you the best price deals.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="card service-card">
              <div className="icon-wrapper">{service.icon}</div>
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className={`card-text ${expandedIndex === index ? "expanded" : ""}`}>
                  {expandedIndex === index
                    ? service.desc
                    : service.desc.slice(0, 200) + (service.desc.length > 200 ? "..." : "")}
                </p>
                <a
                  href="#!"
                  className="btn"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesComponent;
