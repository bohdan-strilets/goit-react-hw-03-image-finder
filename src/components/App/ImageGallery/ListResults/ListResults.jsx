import { Component } from 'react';
import ImageGalleryItem from 'components/App/ImageGalleryItem';
import Modal from 'components/App/Modal';
import css from './ListResults.module.css';

class ListResult extends Component {
  state = {
    showModal: false,
    currentImageUrl: null,
    currentImageDescription: null,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        currentImageUrl,
        currentImageDescription,
      }));
    }
  };

  render() {
    const { images } = this.props;
    const { showModal, currentImageUrl, currentImageDescription } = this.state;
    return (
      <>
        <ul className={css.gallery}>
          {images.map(({ webformatURL, largeImageURL, tags }, index) => (
            <ImageGalleryItem
              key={index}
              smallImage={webformatURL}
              largeImage={largeImageURL}
              description={tags}
              openModal={this.openModal}
            />
          ))}
        </ul>
        {showModal && (
          <Modal onClose={this.toggleModal} title={currentImageDescription}>
            <img
              src={currentImageUrl}
              alt={currentImageDescription}
              loading="lazy"
            />
          </Modal>
        )}
      </>
    );
  }
}

export default ListResult;
