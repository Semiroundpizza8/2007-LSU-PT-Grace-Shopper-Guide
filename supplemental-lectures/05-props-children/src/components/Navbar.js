import React from 'react';
import ReactDOM from 'react-dom';


const Navbar = (props) => {
  return <>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Props Children Demo</a>
      <a>Home</a>
      <a>Contact</a>
      {props.children}
    </nav>
  </>
}

export default Navbar
