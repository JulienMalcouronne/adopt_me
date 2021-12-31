import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from "./Carousel";
import ErrorBoundary from './ErrorBoundary';

class Details extends Component {
  state = { loading: true };
  // two possible way the one kept work only thanks to preset and babel setup
  // constructor() {
  //   super();
  //   this.state = { loading: true };
  // }
  async componentDidMount() {
    const res = await fetch(
      //match params permit to get the id of the animal
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    )
    const json = await res.json();
    this.setState(
      Object.assign(
      {
      loading: false,
      // name: json.pets[0].name for each thing we need or
      // breed: json.pets[0].breed, for each item
      },
      json.pets[0]
      )
    );
  }

  render() {
    if (this.state.loading){
      return <h2>loading ...</h2>
    }
    console.log(this.state);
    const { animal, breed, city, state, description, name, images } = this.state;
    return(
      <div className='details'>
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>

      </div>

    )
  }
}

const DetailsWithRouter = withRouter(Details);
export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  )
};
