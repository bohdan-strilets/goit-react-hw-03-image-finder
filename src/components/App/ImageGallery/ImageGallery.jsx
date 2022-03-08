import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchImages from 'components/services/images-api';
import ImageGalleryItem from 'components/App/ImageGalleryItem';
import Loader from 'components/App/ImageGallery/Loader';
import Button from 'components/App/Button';
import StartPage from './StartPage';
import ErrorPage from './ErrorPage';

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    imagesOnPage: 0,
    totalHits: 0,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ page: 1, status: 'pending' });

      fetchImages(searchQuery, page)
        .then(({ hits, totalHits }) => {
          if (hits.length > 1) {
            return this.setState({
              images: hits,
              imagesOnPage: hits.length,
              totalHits: totalHits,
              status: 'resolved',
            });
          } else {
            return this.setState({ status: 'idle' });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevState.page !== page) {
      fetchImages(prevProps.searchQuery, page).then(({ hits }) =>
        this.setState(({ images, imagesOnPage }) => {
          return {
            images: [...images, ...hits],
            imagesOnPage: imagesOnPage + hits.length,
            status: 'resolved',
          };
        })
      );
    }
  }

  handleNextFetch = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, status, error, imagesOnPage, totalHits } = this.state;

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
        <>
          <ul className={css.gallery}>
            {images.map(({ webformatURL, largeImageURL, tags }, index) => (
              <ImageGalleryItem
                key={index}
                smallImage={webformatURL}
                largeImage={largeImageURL}
                description={tags}
              />
            ))}
          </ul>
          {imagesOnPage >= 12 && imagesOnPage < totalHits && (
            <Button text="Load more" handleNextFetch={this.handleNextFetch} />
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
