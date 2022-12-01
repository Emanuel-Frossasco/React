import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import BasicExample from './components/navbar';
import ItemListContainer from './components/ItemListConteiner/itemListConteiner';

function App() {
  return (
    <div className="Container">
      <header>
        <BasicExample/>
      </header>
      <body>
        <ItemListContainer/>
      </body>
    </div>
  );
}

export default App;
