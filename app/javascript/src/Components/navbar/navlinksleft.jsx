import React, { Component } from 'react';
import NavItem from './navitem';
import data from './data';

export default class NavLinksLeft extends React.Component {
  render() {
    return (
      <div>        
        <ul className='navbar-nav mt-2 mt-md-0'>
          {data.map(info =>
            <NavItem key={info.id} {...info} />
          )}
        </ul>
      </div>
    );
  }
}
