import React from 'react';
import { connect } from 'react-redux';

import { getVisibleProducts } from '../store/ducks/products';

import Nav from '../Components/Nav';
import ProductsList from '../Components/ProductsList';

function ProductsPage({ count, address }) {
  const location = address ? `near ${address}` : 'in all cities';
  return (
    <div>
      <Nav />
      <h5 className="mt-3 ml-3">Found {count} products {location}</h5>
      <ProductsList />
    </div>
  );
}

function mapStateToProps({ user, products }) {
  const { collection, searchValue } = products;
  const { city, state, hasLocation } = user;
  const visibleProducts = getVisibleProducts(collection, searchValue);
  const count = visibleProducts.length;
  const address = hasLocation ? `${city}, ${state}` : '';
  return { count, address };
}

export default connect(mapStateToProps)(ProductsPage);