import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error })
  }

  // This gives us a wrapper that catches error
  render () {
    if (this.state.hasError) {
      return <h1>{this.sate.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
