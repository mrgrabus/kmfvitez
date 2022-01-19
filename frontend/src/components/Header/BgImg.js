import bg from '../../assets/Img/bgImg.png';
import styles from './BgImg.module.css'

const BgImg = () => {
  return <div className='position-relative'>
    <img src={bg} alt='pozadina' className={styles.pozadina}></img>
  </div>;
};

export default BgImg;
