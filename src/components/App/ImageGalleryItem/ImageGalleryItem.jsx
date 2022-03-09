import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ smallImage, largeImage, description, openModal }) {
  return (
    <li className={css.item} onClick={openModal}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </li>
  );
}

export default ImageGalleryItem;
