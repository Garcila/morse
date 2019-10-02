import React from 'react';

const Header = ({title, subtitle}) => {
  return (
    <>
      <div className='header'></div>
      <div className='titleInside'>
        <h1 id='title'>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default Header;
