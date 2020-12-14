import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './navbar.css'
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="logo"
 />        </Link>

        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/user" className="nav-link">Хэрэглэгч</Link>
          </li>
          <li className="navbar-item">
          <Link to="/orders" className="nav-link">Захиалга өгөх</Link>
          </li>
        </ul>

      </nav>
    );
  }
}