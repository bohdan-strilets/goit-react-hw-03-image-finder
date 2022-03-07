import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchImages from '../../services/images-api';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      fetchImages(searchQuery, page).then(({ hits }) =>
        this.setState({ images: hits })
      );
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        {images && (
          <ul className={css.gallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                smallImage={webformatURL}
                largeImage={largeImageURL}
                description={tags}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
