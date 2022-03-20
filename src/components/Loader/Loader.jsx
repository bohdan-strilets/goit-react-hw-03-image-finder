import { MdOutlineCameraswitch } from 'react-icons/md';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <MdOutlineCameraswitch className={css.loader} />
    </div>
  );
}

export default Loader;
