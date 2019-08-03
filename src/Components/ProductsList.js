import React from 'react';
import { connect } from 'react-redux';

import { getVisibleProducts } from '../store/ducks/products';

import Product from './Product';

function ProductsList({ products }) {
  if (!products.length) return <h3 className="d-flex justify-content-center m-3">No Results</h3>
  return (
    <section className="row justify-content-center mt-3">
      {products.map(p => <Product key={p.id} {...p} />)}
    </section>
  );
}

function mapStateToProps({ products }) {
  const { collection, searchValue } = products;
  const visibleProducts = getVisibleProducts(collection, searchValue);
  return { products: visibleProducts };
}

export default connect(mapStateToProps)(ProductsList);