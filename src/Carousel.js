import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };


  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }

  handleIndexClick = (event) => {
    this.setState({
      // + to make it a number
      active: +event.target.dataset.index,
    });
  };


  render () {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal"/>
        <div className='carousel-smaller'>
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index= {index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel

// props come from parents compenent while state is for each component itself

// Carousel.defaultProps

// const carousel = new Carousel;

// carousel.defaultProps
// carousel.props;
