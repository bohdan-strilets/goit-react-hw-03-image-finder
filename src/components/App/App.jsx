import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';
import css from './App.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

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
        {/* <div className={css.section}>
          <div className={css.container}>
            <Searchbar onSubmit={this.getSearchRequest} />
          </div>
        </div>

        <div className={css.container}>
          <ImageGallery searchQuery={searchQuery} />
        </div>
        <ToastContainer /> */}

        <Container styleClass={css.section__bg}>
          <Searchbar onSubmit={this.getSearchRequest} />
        </Container>
        <Container>
          <ImageGallery searchQuery={searchQuery} />
        </Container>
        <ToastContainer />
      </>
    );
  }
}

export default App;
