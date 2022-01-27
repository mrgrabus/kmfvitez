import styles from "./News.module.css";
// import 'swiper/swiper-bundle.min.css'

import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import NewsItem from "./NewsItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

const News = () => {
  return (
    <Container fluid className={`${styles.div} position-relative ps-0 pe-0`}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className={styles.swiper}
        slidesPerView={4}
      >
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default News;
