import styles from "./News.module.css";
// import 'swiper/swiper-bundle.min.css'

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import NewsItem from "./NewsItem";

SwiperCore.use([Navigation]);

const News = () => {
  return (
    <Container fluid className={`${styles.div} position-relative ps-0 pe-0`}>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
