import { BsFillHeartFill } from 'react-icons/bs';
import 'animate.css';
import css from './Footer.module.css';

function Footer({ searchQuery, totalHits, page, imagesOnPage }) {
  return (
    <footer className={css.footer}>
      <BsFillHeartFill />
    </footer>
  );
}

export default Footer;
