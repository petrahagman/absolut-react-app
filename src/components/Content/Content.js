import React, { Component } from 'react';
import Articles from '../Articles/Articles';

class Content extends Component {

  constructor() {
    super();

    this.state = {
      items: []
    };

  }

  getContent = () => {
    
    fetch('http://addb.absolutdrinks.com/drinks/?pageSize=8&apiKey=09a4085e4e2646a68ed709fc1ac6358c')
    .then(response => response.json())
    .then( response => {
      this.setState({ items: response.result });
    })
    // If no result
    .catch( err => {
      console.warn('No items found');
    })

  }

  componentDidMount() {
    this.getContent();
  }

  render() {
    return (
      <div>
        <Articles items={ this.state.items } />
      </div>
    );

  }
}

export default Content;