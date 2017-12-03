import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './News.css';
import blank from '../../img/blank-edition.png';
import kurant from '../../img/kurant.png';
import mango from '../../img/mango.png';

class News extends Component {

  constructor() {
    super();

    this.state = {
      productClass: 'products',
      headingClass: 'heading'
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

    if( userPosition >= ( elTop - 100 ) ) {
      this.setState({ productClass: 'products move', headingClass: 'heading move' });
    } else {
      this.setState({ productClass: 'products', headingClass: 'heading' });
    }
  }

  render() {
    return (
      <section className="news">
          <div className={ this.state.productClass }>
            <img src={ kurant } alt="kurant" />
            <img src={ blank } alt="blank-edition" />
            <img src={ mango } alt="mango" />
        </div>
        <div className={ this.state.headingClass }>
          <h2>Expole our latest flavors </h2>
          <span>&#8623;</span>
        </div>
      </section>
    );
  }
}

export default News;