import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';
import css from './App.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Footer from './Footer';

class App extends Component {
  state = {
    searchQuery: '',
  };

  getSearchRequest = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <Container styleClass={css.section__header}>
          <Searchbar onSubmit={this.getSearchRequest} />
        </Container>
        <Container>
          <ImageGallery searchQuery={searchQuery} />
        </Container>
        <Container styleClass={css.section__footer}>
          <Footer />
        </Container>
        <ToastContainer />
      </>
    );
  }
}

export default App;
