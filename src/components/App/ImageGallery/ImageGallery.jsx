import PropTypes from 'prop-types';
import { Component } from 'react';
import fetchImages from 'components/services/images-api';
import Loader from 'components/App/ImageGallery/Loader';
import Button from 'components/App/Button';
import StartPage from './StartPage';
import ErrorPage from './ErrorPage';
import ListResult from './ListResults';

class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

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
      return <ErrorPage text={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ListResult images={images} />
          {imagesOnPage >= 12 && imagesOnPage < totalHits && (
            <Button text="Load more" handleNextFetch={this.handleNextFetch} />
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
