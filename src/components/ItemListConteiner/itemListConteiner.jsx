import React from "react";
import "./itemListConteiner.css"


const ItemListContainer =() => {
    return(
        <div className="item-list-container">
            <div className="item-list-title"><h2 className="title">Bienvenido a Mi tienda Online</h2></div>
            <div className="item-list-subtitle"> <h3 className="subtitle">Tienda Virtual </h3></div>
            <div className="item-list-content-description">
                <p>Encontraras los mejores productos del momento</p>
            </div>
        </div>
    )
}

export default ItemListContainer;