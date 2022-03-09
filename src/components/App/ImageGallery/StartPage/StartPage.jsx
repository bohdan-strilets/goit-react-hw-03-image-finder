import PropTypes from 'prop-types';
import { BiImages } from 'react-icons/bi';
import css from './StartPage.module.css';

function StartPage({ text }) {
  return (
    <div className={css.wrapper}>
      <BiImages className={css.icon} />
      <p className={css.text}>{text}</p>
    </div>
  );
}

StartPage.prototype = {
  text: PropTypes.string,
};

export default StartPage;
