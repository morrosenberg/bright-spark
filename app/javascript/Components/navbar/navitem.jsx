import React, { Component } from 'react';

const NavItem = props =>
  <li className='nav-item'>
    <a href={props.url} className={'nav-link fa fa-' + props.name + ' ' + 'text-muted'} width='35' height='35' data-toggle='tooltip' title={props.title} data-placement='left'>
    </a>
  </li>;

export default NavItem;
