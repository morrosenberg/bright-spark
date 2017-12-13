import React, { Component } from 'react';
import Social from '../social/social';
import '../../Styles/_footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <nav className="footer sticky-bottom">
        <div className="block text-center">
          <Social />
        </div>
        <div className="text-center text-white">Bright Spark &copy; 2017</div>
      </nav>
    )
  }
}
