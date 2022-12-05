import React from "react";
import "./itemListConteiner.css"


const ItemListContainer = (props) => {
    return(
        <div className="item-list-container">
            <div className="item-list-title"><h2 className="title">{props.titulo}</h2></div>
            <div className="item-list-subtitle"> <h3 className="subtitle">{props.subtitulo}</h3></div>
            <div className="item-list-content-description">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ItemListContainer;