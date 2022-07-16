import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header.component';

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
