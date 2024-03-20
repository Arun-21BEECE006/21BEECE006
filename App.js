import React from 'react';
import './index';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Products</h1>
      </header>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
