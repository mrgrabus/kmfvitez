import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import Card from "./Card";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore, { EffectCoverflow } from "swiper";
import { useEffect, useState } from "react";

SwiperCore.use([EffectCoverflow]);

const Carousel = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const varijabla = [];
    const response = await fetch("http://localhost:5000/api/matches/feature");
    const responseData = await response.json();
    for (const key in responseData) {
      varijabla.push(responseData[key]);
    }
    setData(varijabla.reverse());
  };
  const slides = [];
  data.map((item) =>
    slides.push(
      <SwiperSlide key={item.id}>
        <Card
          location={item.location}
          isHome={item.isHome}
          teamName={item.team.teamName}
          date={item.date}
          grb={item.team.grb}
        />
      </SwiperSlide>
    )
  );
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className={`${styles.wrapper} container position-absolute top-50 start-50 translate-middle`}
    >
      {slides.length ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={false}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          {slides}
        </Swiper>
      ) : null}
    </div>
  );
};

export default Carousel;
