import React from "react";
import "./cartWidgetContainer.css";


const CartWidget = () => {
    return(
        <div>
            <box-icon  type='solid' name='cart' animation="tada-hover"></box-icon>
            <span className="nav-progressive-content">0</span>
        </div>
    );
};

export default CartWidget;