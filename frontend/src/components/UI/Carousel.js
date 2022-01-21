import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import Card from "./Card";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore, { EffectCoverflow } from "swiper";

SwiperCore.use([EffectCoverflow]);

const Carousel = () => {
  return (
    <div
      className={`${styles.wrapper} container position-absolute top-50 start-50 translate-middle`}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={false}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 5,
          stretch: 20,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
