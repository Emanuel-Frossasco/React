import React from "react";
import {useNavigate } from "react-router-dom";
import CardProduct from '../../components/CardProdcut/itemListConteiner';
import {PRODUCTS} from '../../constants/data/products';
import './styles.css';

const ItemListContainer = () => {
  const navigate = useNavigate();

  const onHandlerSelect = (product) => {
    navigate(`/item/${product.id}`, { state: product });
  };



  return (
    <div className="container">
      <div className="content-title">
        <h2 className="title">Productos</h2>
      </div>
      <div className="container-products">
        {PRODUCTS.map((product) => (
          <CardProduct
            product={product}
            key={product.name}
            onSelect={onHandlerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
