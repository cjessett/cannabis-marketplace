import { products } from '../../products.json';

// actionTypes
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

// selectors
export const getVisibleProducts = (products, query) => {
  if (!query) return products;
  const queryFilter = prop => product => product[prop] && product[prop].toLowerCase().includes(query.toLowerCase());
  const names = products.filter(queryFilter('name'));
  const brands = products.filter(queryFilter('brand'));
  const categories = products.filter(queryFilter('category'));
  const kinds = products.filter(queryFilter('kind'));
  const kind_subtypes = products.filter(queryFilter('kind_subtype'));
  const descriptions = products.filter(queryFilter('description'));
  return [names, brands, categories, kinds, kind_subtypes, descriptions]
    .flat()
    .filter((match, idx, self) => self.indexOf(match) === idx);
}

export const setSearchValue = value => ({ type: 'SET_SEARCH_VALUE', payload: value });

// reducer
const initialState = {
  collection: products,
  searchValue: '',
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      }
    default:
      return state;
  }
}