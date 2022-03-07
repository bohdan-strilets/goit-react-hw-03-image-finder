import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchImages from 'components/services/images-api';
import ImageGalleryItem from 'components/App/ImageGalleryItem';
import Loader from 'components/App/Loader';
import StartPage from './StartPage';

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });

      fetchImages(searchQuery, page)
        .then(({ hits }) => {
          if (hits.length > 1) {
            return this.setState({ images: hits, status: 'resolved' });
          } else {
            return this.setState({ status: 'idle' });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, status, error } = this.state;

    if (status === 'idle') {
      return <StartPage text="Write what you want to find." />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return console.log(error);
    }

    if (status === 'resolved') {
      return (
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
      );
    }
  }
}

export default ImageGallery;
