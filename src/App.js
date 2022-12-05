import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/navbar';
import ItemListContainer from './components/ItemListConteiner/itemListConteiner';

function App() {
  return (
    <div className="Container">
      <header>
        <BasicExample/>
      </header>
      <body>
        <ItemListContainer titulo='Bienvenido a mi tienda Online' subtitulo='Tienda Virtual' text='Encontra los mejores productos del momento'/>
      </body>
    </div>
  );
}

export default App;
