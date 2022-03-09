import PropTypes from 'prop-types';
import css from './Container.module.css';

function Container({ children, title, styleClass }) {
  return (
    <div className={`${css.section} ${styleClass}`}>
      {title && <h2 className={css.title}>{title}</h2>}
      <div className={css.container}>{children}</div>
    </div>
  );
}

Container.prototype = {
  children: PropTypes.element,
  title: PropTypes.string,
  styleClass: PropTypes.any,
};

export default Container;
