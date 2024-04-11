import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personal from './pages/Personal';

const RoutesList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/personal'}>Personal</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/personal' element={<Personal />} />
      </Routes>
    </div>
  );
};

export const routeConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/personal',
    component: Personal,
  },
];

export default RoutesList;
