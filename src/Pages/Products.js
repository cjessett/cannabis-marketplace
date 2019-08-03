import React from 'react';

import Nav from '../Components/Nav';
import ProductsList from '../Components/ProductsList';

export default function ProductsPage() {
  return (
    <div>
      <Nav />
      <h2 className="d-flex justify-content-center m-3">Products</h2>
      <ProductsList />
    </div>
  );
}