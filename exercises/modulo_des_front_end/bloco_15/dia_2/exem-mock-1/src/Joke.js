import React from 'react';

class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
    const data = await response.json();

    this.setState({ joke: data.joke });
  }

  render() {
    const { joke } = this.state;
    return (
      <div data-testid="joke-element">
        { joke }
      </div>
    );
  }
}

export default Joke;
