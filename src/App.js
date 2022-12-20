import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/navbar';
import Router from './routes/Router'
//import { useNavigate } from 'react-router-dom';
//import { PRODUCTS } from './constants/data/products';
//import ItemListConteiner from './components/ItemListConteiner/itemListConteiner';



function App() {
  return (
    <div className="MainContainer">
      <header>
        <BasicExample/>
      </header>
      <div>
        <Router/>
      </div>
    </div>
  );
}
//PONER LA PAGINA HOME Y VER SI ASI ANDA POR QUE SINO PARECE QUE SE LO COME ESTO ASI AL PRODUCTS/:ID
export default App;


      /*<body>
        <div className="home-container">
          <h1>Productos destacados</h1>
            <div className='products-container'>
              {PRODUCTS.map((product) => (
                <ItemListConteiner product={product} key={product.id} onSelect={onHandlerSelect}/>
            ))}
          </div>
        </div>
      </body>*/