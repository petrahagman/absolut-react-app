import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Drink from '../Drink/Drink';
import './Articles.css';

class Articles extends Component  {
    
  constructor(){
    super();

    this.state = {
      transform: 0,
      direction: ''
    }

  }

  detectmob() {
    
    if( window.innerWidth > 1200 ) {
      this.setState({ direction: 'horizontal' });
      const holder = ReactDOM.findDOMNode(this.refs.holder)
      holder.addEventListener('mousewheel', this.handleScroll.bind(this));
    
    // If mobile device (mobile/tablet)
    } else {
      this.setState({ direction: 'vertical' });
    }

  }

  xMovement = {
    transform: 0
  }

  handleScroll(e) {

    // User and element positions
    let userPosition = window.scrollY;
    let elTop = ReactDOM.findDOMNode(this).offsetTop;
    let elWidth = ReactDOM.findDOMNode(this).offsetWidth;
    
    // X and Y positions
    let moveY = e.deltaY;
    let xPos = 0;

    if( moveY ) {
      
      if( userPosition == elTop ) {

        if( this.state.transform > (elWidth * 7) ) {
          
          if (moveY < 0) {
            e.preventDefault();
            xPos = this.state.transform + moveY;
          } else {
            xPos = this.state.transform;
          }

        } else if( this.state.transform >= 0 && this.state.transform <= (elWidth * 7) ) {
          
          e.preventDefault();
          xPos = this.state.transform + moveY;

        }

        // Update X position based on Y movement
        this.setState({ transform: xPos });
        this.xMovement = {
          transform: `translateX(-${this.state.transform}px)`
        }
      
      } else if ( userPosition < (elTop - 10) ) {
        
        // Reset X position
        this.setState({ transform: 0 });
      
      }

    }

  }

  componentDidMount() {
    // Detect user device
    this.detectmob();
    window.addEventListener('resize', this.detectmob.bind(this));
  }

  componentWillUnmount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder)
    holder.removeEventListener('mousewheel', this.handleScroll);
  }

  render() {

    // Show items if available
    if( this.props.items.length !== 0 ) {

      let drinkList =  this.props.items.map(( item, index ) => {
        return <Drink key={ index } item={ item } name={ item.name } id={ item.id } ingredients={ item.ingredients } />
      });

      return (
        <section className="articles">
          <div className={ this.state.direction } ref="holder" style={ this.xMovement } >
              { drinkList }
          </div>
        </section>
      );

    } else {

      return (
        <section ref="holder"></section>
      );

    }

  }
}

export default Articles;    