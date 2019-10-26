import React from 'react';
import classes from './Navbar.module.css';

const Nav = () => {
  return (
    <nav className={classes.bao_nav}>
      <div className={classes.item}><a>Profile</a> </div>
      <div className={classes.item}><a>Messages</a> </div>
      <div className={classes.item}><a>News</a> </div>
      <div className={classes.item}><a>Music</a> </div>
      <div className={classes.item}><a>Settings</a>  </div>
    </nav>
  );
};

export default Nav;