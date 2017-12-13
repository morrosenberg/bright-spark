import React, { Component } from 'react';
import NavLinksLeft from './navlinksleft';
import NavLinksRight from './navlinksright';
import '../../Styles/_navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-toggleable-md sticky-top'>   
        <a className='navbar-brand text-bold text-white text-center mx-auto' href='/'>Bright Spark
        </a>
      </nav>
    );
  }
}

export default NavBar;

