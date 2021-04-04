import React from 'react';
import { useGlobalContext } from '../context';

const NavbarTitle = ({ title, id, checkBtn }) => {
  const { setNewParams } = useGlobalContext();
  return (
    <button
      className={`navBtn ${checkBtn ? 'activeBtn' : null}`}
      onClick={() => setNewParams(id)}
    >
      {title}
    </button>
  );
};

export default NavbarTitle;
