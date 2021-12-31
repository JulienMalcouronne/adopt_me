import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true}
  }
  componentDidCatch(error, info) {
    // this work with Sentry, Azure Monitor, New Relic, TrackJS
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() =>
        this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/"/>
    } else if (this.state.hasError) {
      return(
        <h2>
          this listing has an error. <Link to="/">Click here</Link> to go to the home page or wait 5 seconds.
        </h2>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

/* <ErrorBoundary>
  <h1>Hi there</h1>
</ErrorBoundary> */
