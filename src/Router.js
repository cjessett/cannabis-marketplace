import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DataCollection from './Pages/DataCollection';
import ProductsPage from './Pages/Products';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path='/' exact component={DataCollection} />
      <Route path='/products/' component={ProductsPage} />
    </Router>
  );
}

export default App;
