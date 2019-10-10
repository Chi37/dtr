import React from 'react';
import {Link} from "react-router-dom"

const NavBar = (props) => {
  let nav = props.user ?
  <>
    <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
  </>
    :
  <>
    <Link to='/login' className='NavBar-link'>LOG IN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </>
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;