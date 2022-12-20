import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-conteainer">
      <div className="conteiner">
        <div className="content-title">
          {" "}
          <h2 className="title">Carrito</h2>
          <div className="content-description">
            <p>Tu carrito esta vacio!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;