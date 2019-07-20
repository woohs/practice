import React, { Component } from 'react';
import logo from './../../assets/logo.svg';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img src={logo} className="logo-img" alt="logo" />
        </div>

      </div>
    )
  }
}
