import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import styles from './SocialIcons.module.css';

const SocialIcons = () => {
  return (
    <div className={`position-absolute top-50 start-0 translate-middle ${styles.div} d-none d-sm-flex`}>
      <FontAwesomeIcon icon={faTwitter}  className={`${styles.iconItem} ${styles.tw}`} />
      <FontAwesomeIcon icon={faInstagram} className={`${styles.iconItem} ${styles.ig}`} />
      <FontAwesomeIcon icon={faFacebook} className={`${styles.iconItem} ${styles.fb}`} />
    </div>
  );
};

export default SocialIcons;
