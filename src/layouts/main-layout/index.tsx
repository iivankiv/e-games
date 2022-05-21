import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/header.component';

const MainLayout = () => {
  return (
    <div className="Main">
      <Header />
      <div className="Main-Container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
