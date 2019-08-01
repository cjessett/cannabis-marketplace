import React, { useState } from 'react';

import Product from './Components/Product';
import './App.css';
import data from './products.json';

function App() {
  const [products] = useState(data.products);
  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-center mb-4">
        <h1>Cannabis Marketplace</h1>
      </header>
      <section className="row justify-content-center">
        {products.map(p => <Product key={p.id} {...p} />)}
      </section>
    </div>
  );
}

export default App;
