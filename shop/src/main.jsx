import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Catalog from "./routes/catalog";
import Orders from "./routes/orders";
import Product from "./routes/product";
import Cart from "./routes/cart";
import "normalize.css";
import "./index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Catalog />} />
                <Route path="orders" element={<Orders />} />
                <Route path="cart" element={<Cart />} />
                <Route path="product/:id" element={<Product />} />
            </Route>
        </Routes>
    </BrowserRouter>
);