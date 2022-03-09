import PropTypes from 'prop-types';
import { BiPlusMedical } from 'react-icons/bi';
import css from './Button.module.css';

function Button({ text, handleNextFetch }) {
  return (
    <button className={css.button} type="button" onClick={handleNextFetch}>
      {text} <BiPlusMedical className={css.icon} />
    </button>
  );
}

Button.prototype = {
  text: PropTypes.string,
  handleNextFetch: PropTypes.func.isRequired,
};

export default Button;
