import React from 'react';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-center items-center relative h-16 bg-slate-600 text-white">
      <Link to="/" className="absolute left-4 rounded bg-slate-500 hover:bg-slate-700 py-2 px-4 cursor-pointer">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div>Header!!!</div>
    </header>
  );
};

export default Header;
