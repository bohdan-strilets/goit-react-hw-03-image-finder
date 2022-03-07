import { BiPlusMedical } from 'react-icons/bi';
import css from './Button.module.css';

function Button({ text, handleNextFetch }) {
  return (
    <button className={css.button} type="button" onClick={handleNextFetch}>
      {text} <BiPlusMedical className={css.icon} />
    </button>
  );
}

export default Button;
