import { Col, Container, Row } from "react-bootstrap";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
        <Col lg={3} md={4}>
          <div className={styles.box}> </div>
          <p className={styles.title}>Ime proizvoda</p>
          <p className={styles.price}>99.99$</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
