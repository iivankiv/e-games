import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/header.component';

const MainLayout = () => {
  return (
    <div className="Main">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
