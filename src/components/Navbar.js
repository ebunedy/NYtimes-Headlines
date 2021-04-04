import React from 'react';
import styled from 'styled-components';
import NavbarTitle from './NavbarTitle';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { nav, btnNumber } = useGlobalContext();

  return (
    <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
      <div className='right container'>
        {nav.map((item, index) => {
          const { name, id } = item;
          return (
            <NavbarTitle
              key={item.id}
              title={name}
              id={id}
              checkBtn={index + 1 === btnNumber}
            />
          );
        })}
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  height: 6rem;
  background: white;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.5);
  .right {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Navbar;
