import React from 'react';
import classes from './Header.module.css';

let imgAdress = 'https://avatars.mds.yandex.net/get-pdb/964102/4c097f4b-a098-43b5-b94a-f18d1a461e2c/s1200';
const Header = () => {
  return (
    <header className={classes.bao_header}>
      <img src={imgAdress}></img>
    </header>
  );
}

export default Header;