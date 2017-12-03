import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';
import Content from './components/Content/Content';
import Front from './components/Front/Front';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  detectmob() {

    // If user device is desktop
    if( window.innerWidth > 1200 ) {
      // Scroll to elements based on user position
      window.addEventListener('mousewheel', this.handleScroll.bind(this));
    }

  }

  handleScroll(e) {

    // Y position
    let moveY = e.deltaY;

    // User and element positions
    let userPosition = window.scrollY;
    let newsTop = ReactDOM.findDOMNode(this.refs.news).offsetTop;
    let contentTop = ReactDOM.findDOMNode(this.refs.content).offsetTop;
    let footerTop = ReactDOM.findDOMNode(this.refs.footer).offsetTop;

    // If scroll direciton is down
    if( moveY > 0 ) {
      
      // Snap to element based on user position

      if ( userPosition > (footerTop - 350) && userPosition < footerTop ) {
        
        e.preventDefault();
        scrollToComponent(this.refs.footer, {
          align: 'top',
          duration: 200
        });

      } else if ( userPosition > (contentTop - 350) && userPosition < contentTop ) {
        
        e.preventDefault();
        scrollToComponent(this.refs.content, {
          align: 'top',
          duration: 200,
          offset: 0.3
        });

      } else if ( userPosition > (newsTop - 450) && userPosition < newsTop ) {
        
        e.preventDefault();
        scrollToComponent(this.refs.news, {
          align: 'top',
          duration: 350
        });

      }

    }

    // If scroll direciton is up
    if( moveY < 0 ) {
      
      // Snap to element with horizontal scroll (Content component)
      if ( userPosition < (footerTop - 500) && userPosition > contentTop ) {
        
        e.preventDefault();
        scrollToComponent(this.refs.content, {
          align: 'top',
          duration: 150
        });

      }

    }
  }

  componentDidMount() {
    // Detect user device
    this.detectmob();
    window.addEventListener('resize', this.detectmob.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }

  render() {
    return ( 
      <div className="App">
        <Front ref="front" />
        <News ref="news" />
        <Content ref="content" />
        <Footer ref="footer" />
      </div>
    );
  }
}

export default App;
