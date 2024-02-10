import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Calculator() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
