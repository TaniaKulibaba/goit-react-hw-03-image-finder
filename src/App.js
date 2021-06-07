import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PixabayApi from './services/PixabayApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';



class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImg: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [], error: null });
  }

  fetchImg = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    PixabayApi.fetchImg(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .then(() => {
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }


  handleOpenModal = (e) => {
    this.setState({
      showModal: true,
      largeImg: e.target.dataset.source,
    });
  };
  handleCloseModal = () => {
    this.setState({
      showModal: false,
      largeImg: '',
    });
  };

  render() {
    const { images, isLoading, error,  showModal, largeImg  } = this.state;
      return (
        <div className="App">
          {error && <h1>Error!!!</h1>}
          <Searchbar onSubmit={this.onChangeQuery} />
          <ImageGallery onClick={this.handleOpenModal} items={images}>
            {isLoading && (
              <Loader
                className="Spinner"
                type="TailSpin"
                color="Blue"
                height={100}
                width={100}
                timeout={3000}
              />
            )}
          {images.length > 0 && (<Button onClick={this.fetchImg} />)}            
          </ImageGallery>

          {showModal && (<Modal onClose={this.handleCloseModal} src={largeImg} />) }
      </div>
    )
  }
};

export default App;