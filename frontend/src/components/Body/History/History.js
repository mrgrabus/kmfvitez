import { Container } from "react-bootstrap";
import history from "../../../assets/Img/history.png";
import styles from "./History.module.css";
import MainButton from "../../UI/MainButton";

const History = () => {
  return (
    <Container fluid className={`ps-0 pe-0 ${styles.history}`}>
      <div className={styles.historyBg}>
        <div className={styles.historyContent}>
          <h1>Historija kluba</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet porta dolor. Aenean rutrum gravida mi at tempus. Suspendisse
            ante odio, mattis ac elit at, consequat elementum risus. Sed ut
            imperdiet velit, vitae viverra est. Donec luctus pulvinar fermentum.
            Aliquam ultrices placerat eros hendrerit congue. Praesent eget augue
            a velit consequat vestibulum. Curabitur arcu odio, suscipit et elit
            molestie, luctus venenatis urna. Suspendisse potenti. Aliquam sed
            dui mattis, consectetur risus in, rhoncus odio. In hac habitasse
            platea dictumst. Donec ultricies quam et turpis feugiat, vel
            convallis ipsum vulputate.
          </p>
          <MainButton txt="Learn more" />
        </div>
        <img
          className={styles.historySlika}
          src={history}
          alt="historija kmf vitez"
        />
      </div>
    </Container>
  );
};

export default History;
