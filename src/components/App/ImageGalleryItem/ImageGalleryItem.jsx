import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ smallImage, largeImage, description }) {
  return (
    <li className={css.item}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </li>
  );
}

export default ImageGalleryItem;
