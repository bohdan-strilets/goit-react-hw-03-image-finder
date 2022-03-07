import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <div>
        <Searchbar onSubmit={this.getSearchRequest} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
