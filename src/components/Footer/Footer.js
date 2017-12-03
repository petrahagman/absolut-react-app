import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import logo from '../../img/logo2.png';
import lime from '../../img/lime.png';
import ginger from '../../img/ginger.png';
import ice from '../../img/ice.png';

class Footer extends Component {
  
  constructor() {
    super();

    this.state = {
      classname: 'container'
    }

  }

  // Animation based on user position
  handleScroll(e) {

    // User and element positions
    let userPosition = window.scrollY;
    let elTop = ReactDOM.findDOMNode(this).offsetTop;

    if( userPosition >= ( elTop - 100 ) ) {
      this.setState({ classname: 'container move' });
    } else {
      this.setState({ classname: 'container' });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return(
      <footer>
          <img className="logo-black" src={ logo } alt="absolut"/>
          <a href="https://www.absolut.com/se/">
            <span className="button ribbon">Contact</span>
          </a>
          <div className={ this.state.classname }>
            <img className="ginger" src={ ginger } alt="ginger"/>
            <img className="lime" src={ lime } alt="lime"/>
            <img className="ice" src={ ice } alt="ice"/>
          </div>
      </footer>
    );
  } 
}

export default Footer;