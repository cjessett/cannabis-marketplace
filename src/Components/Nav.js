import React from 'react';

import Search from './Search';

export default function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Cannabis Marketplace</span>
      <Search />
    </nav>
  )
}