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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Autoplay]);

const News = () => {
  const [data, setData] = useState([]);
  const apiCall = async () => {
    try {
      const response = await fetch("http://167.235.50.89:5000/api/news");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <Container fluid className={`${styles.div} position-relative ps-0 pe-0`}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className={styles.swiper}
        // slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
        }}
      >
        {data.length > 0 &&
          data.map((element) =>
            element.status === "1" ? (
              <SwiperSlide>
                <Link
                  to={`/news/${element.id.toString()}`}
                  style={{ all: "unset" }}
                >
                  <NewsItem
                    title={element.title}
                    text={element.text}
                    image={element.image}
                    date={element.createdAt}
                  />
                </Link>
              </SwiperSlide>
            ) : (
              <></>
            )
          )}
      </Swiper>
    </Container>
  );
};

export default News;
