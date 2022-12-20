import { Routes, Route} from "react-router-dom";
import Cart from "../pages/cart/cart";
import ItemListContainer from "../pages/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "../pages/ItemDetailConteiner/ItemDeteailConteiner"


const Router = () => {

    return (
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
}

export default Router;