import TheHeader from '@/Components/TheHeader/TheHeader';
import React from 'react';
import {Outlet} from 'react-router-dom'

function MainLayout () {
  return (
    <div>
      <TheHeader />
        <main>
            <Outlet />
        </main>
    </div>
  );
}

export default MainLayout;



