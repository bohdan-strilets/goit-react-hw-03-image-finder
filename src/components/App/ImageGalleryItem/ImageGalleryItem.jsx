import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ smallImage, largeImage, description, openModal }) {
  return (
    <li className={css.item} onClick={openModal}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </li>
  );
}

ImageGalleryItem.prototype = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string,
  description: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
