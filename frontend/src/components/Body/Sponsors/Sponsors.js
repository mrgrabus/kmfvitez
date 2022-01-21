import { Col, Container, Row } from 'react-bootstrap'
import styles from './Sponsors.module.css'
import nb from '../../../assets/Img/Sponsors/nb-box.png'
import ni from '../../../assets/Img/Sponsors/nike-box.png'
import pu from '../../../assets/Img/Sponsors/puma-box.png'
import ua from '../../../assets/Img/Sponsors/ua-box.png'


const Sponsors = () => {
    return <Container className={styles.sponsors}>
    <Row>
        <Col lg={3} className='text-center'>
        <a href="#"><img src={nb} alt="nb"></img></a> 
        </Col>
        <Col lg={3} className='text-center'>
        <a href="#"><img src={ni} alt="nike"></img></a> 
        </Col>
        <Col lg={3} className='text-center'>
        <a href="#"><img src={pu} alt="nb"></img></a> 
        </Col>
        <Col lg={3} className='text-center'>
        <a href="#"><img src={ua} alt="nb"></img></a> 
        </Col>
    </Row>
  </Container>
}

export default Sponsors;