import React, { Component, Children } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './SlideShow.css';

class SlideShow extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default SlideShow;
