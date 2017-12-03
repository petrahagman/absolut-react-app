import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Front.css';

class Front extends Component {

  constructor() {
    super();

    this.state = {
      classname: 'logo'
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  //Animation based on user position
  handleScroll(e) {

    //User and element positions
    let userPosition = window.scrollY;
    let elTop = ReactDOM.findDOMNode(this).offsetTop;

    if( userPosition >= (elTop + 280) ) {
      this.setState({ classname: 'logo move'});
    } else {
      this.setState({ classname: 'logo'});
    }

  }

  render() {
    return (
      <div>
        <div className="front"></div>
        <div className={ this.state.classname }></div>
      </div>
    );
  }
}

export default Front;