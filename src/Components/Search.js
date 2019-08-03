import React from 'react';
import { connect } from 'react-redux';

import { setSearchValue } from '../store/ducks/products';

function Search({ value, setSearchValue }) {
  return (
    <form className="form-inline">
      <input
        type="text"
        value={value}
        onChange={e => setSearchValue(e.target.value)}
        className="form-control mr-sm-2"
        placeholder="Search"
      />
    </form>
  )
}

function mapStateToProps(state) {
  const { searchValue } = state.products;
  return { value: searchValue };
}

export default connect(mapStateToProps, { setSearchValue })(Search);