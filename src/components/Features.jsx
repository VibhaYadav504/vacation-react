import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination,Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/Features.css";
const Features = () => {
  const tours = [
  {
    title: "Week At Thiksey Monastery",
    image: "https://jingleholidaybazar.com/images/Leh03.jpg",
    desc: "A 12-storey complex with over 500 monks, among the most beautiful Buddhist monasteries in Ladakh.",
    link: "#"
  },
  {
    title: "Week At Solang Valley, Manali",
    image: "https://jingleholidaybazar.com/images/Solang-Valley.jpg",
    desc: "Mini valley located about 8500 feet above sea level, famous for snow-based sports.",
    link: "#"
  },
  {
    title: "Week At Beach in Goa",
    image: "https://jingleholidaybazar.com/images/india-goa-best-beaches-vagator-beach.jpg",
    desc: "Goa is the smallest state in India, famous for beaches, sunshine and nightlife.",
    link: "#"
  },
];


  const gallery = [
    { title: "New Delhi", img: "https://jingleholidaybazar.com/images/Red-Fort.jpg" },
    { title: "Shimla", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv56ffeb2wZnqWeaG5zl0EYdTF-8CQdnNmX4c67SmU99WVgDfgVAognIsexa6dfH2ArAA&usqp=CAU" },
    { title: "Agra", img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" },
    { title: "Kullu and Manali", img: "https://jingleholidaybazar.com/images/Manali1-1.jpg" },
    { title: "Mussoorie and Dehradun", img: "https://jingleholidaybazar.com/images/Mussoorie1.jpg" },
    { title: "Dalhousie", img: "https://jingleholidaybazar.com/images/Khajjiar.jpg" },
    { title: "Jim Corbett National Park", img: "https://jingleholidaybazar.com/images/Jim-Corbett.jpg" },
    { title: "Amritsar", img: "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg" },
  ];

  const hotels = [
    {
      name: "Taj Aravali Resort & Spa",
      img: "https://jingleholidaybazar.com/images/Taj-Aravali-Resort-Spa.jpg",
      desc: "Prices for Taj Aravali Resort and Spa start at ₹12,999 per night."
    },
    {
      name: "Snow City Hotel, Mandi",
      img: "https://jingleholidaybazar.com/images/172808300.jpg",
      desc: "Set in Mandi hills with mountain views, includes private lounge and garden."
    },
    {
      name: "Hideout Premiere",
      img: "https://jingleholidaybazar.com/images/5.jpg",
      desc: "A collection of elegantly designed resorts in Goa starting from ₹4,499."
    },
  ];

  return (
    <div className="travel-container">
      {/* <section className="featured">
        <h2>FEATURED TOURS IN INDIA</h2>
        <p>
          India is a vibrant land of startling contrasts where the traditional and modern worlds meet.
        </p>
        <div className="tours-grid">
          {tours.map((tour, index) => (
            <div key={index} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <h3>{tour.title}</h3>
              <p>{tour.desc}</p>
              <a href={tour.link}>More Details</a>
            </div>
          ))}
        </div>
      </section> */}

      <section className="featured">
      <h2>FEATURED TOURS IN INDIA</h2>
      <p>
        India is a vibrant land of startling contrasts where the traditional and modern worlds meet.
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="toursSwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="tour-card">
              <div className="tour-img-wrapper">
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className="tour-info">
                <h3>{tour.title}</h3>
                <p>{tour.desc}</p>
                <a href={tour.link}>More Details</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

      <section className="gallery">
      <h2>GALLERY</h2>
      <p>At Jingle Holiday Bazar, explore the best destinations across India.</p>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

<section className="hotels">
      <h2>POPULAR HOTELS</h2>
      <p>At Jingle Holiday Bazar, browse the best hotels nationally and internationally.</p>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="hotelSwiper"
      >
        {hotels.map((hotel, index) => (
          <SwiperSlide key={index} className="hotel-card">
            <div className="hotel-img-wrapper">
              <img src={hotel.img} alt={hotel.name} />
            </div>
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

</div>
  );
};

export default Features;