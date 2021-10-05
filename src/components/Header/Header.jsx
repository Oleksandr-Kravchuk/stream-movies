import React from 'react';
import Navigation from '../Navigation/Navigation';
import cls from './Header.module.scss';

const Header = () => {
  return (
    <header className={cls.header}>
      <Navigation />
    </header>
  );
};

export default Header;