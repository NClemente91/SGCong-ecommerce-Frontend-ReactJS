import React from 'react';

import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

import '../App/App.css';

const App = () => {
  return (
    <div className="general-container">
      <NavBar/>
      <ItemListContainer titleProduct="Productos"/>
    </div>
  );
}

export default App;