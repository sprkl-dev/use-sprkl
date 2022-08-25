import {Outlet, Link} from "react-router-dom";
import * as React from "react";
import {createContext, useEffect, useMemo, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


export const AppContext = createContext(undefined)

export default function App() {

    const localCart = (localStorage.getItem('cart') || '').split(',').filter(i => !!i);
    const [cart, setCartState] = React.useState(localCart || []);
    const [orders, setOrders] = React.useState([]);
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    const setCart = (val) => {
        localStorage.setItem('cart',val)
        setCartState(val)
    }

    const cartQty = useMemo(() => {
        return cart.length
    }, [cart])

    const checkout = () => {
        axios.post(`/api/orders/orders`, {items: cart.map(i => (products.find(p => p.id === i)).name)})
            .then(resp => {
                fetchOrders().then(() => {
                    setCart([])
                    navigate(`/orders`)
                })
            })
    }

    const state = {
        cart,
        setCart,
        products,
        orders,
        setOrders,
        checkout,
    }

    const [isCatalogLoaded, setIsCatalogLoaded] = useState(false)

    const fetchProducts = () => {
         return axios.get(`/api/catalog/catalog`)
             .then(resp => {
                 const data = resp.data.map(i => ({
                     ...i,
                     image: `/src/assets/products/${i.name}.jpg`
                 }))
                 setProducts(data)
                 setIsCatalogLoaded(true)
             })

        //setProducts([{"id":"3","name":"hat","price":100, "image":"/src/assets/products/hat.webp"},{"id":"2","name":"jeans","price":500, "image":"/src/assets/products/jeans.webp"},{"id":"1","name":"t-shirt","price":300, "image":"/src/assets/products/shirt.webp"}])
    }
    const fetchOrders = () => {
        return axios.get(`/api/orders/orders`)
            .then(resp => {
                setOrders(resp.data)
            })
    }

    useEffect(() => {
        fetchProducts();
        fetchOrders();
    }, []);

    return (
        <div className="app">
            <header className="header">
                <div className="container">
                    <div className="user-menu">
                        <a href="#">
                            <div className="user-avatar-container">
                                <span>Hi</span>
                            </div>
                        </a>
                    </div>
                    <Link className="user-cart" to={'/cart'}>
                        <img src="/src/assets/shopping-cart.png" width={'20px'} height={'20px'}/>
                        <span>{cartQty}</span>
                    </Link>
                    <Link to={'/'}>
                        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
                    </Link>
                </div>
            </header>
            <main className="content">
                <div className="container">
                    <div className="content__main">
                        {
                            isCatalogLoaded ?
                                <AppContext.Provider value={state}>
                                    <Outlet/>
                                </AppContext.Provider>
                                : null
                        }

                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-grid">
                            <div className="footer-column">
                                <img src="/src/assets/logo.png" alt="Sprkl Logo" className="footer-logo" />
                                <p className="footer-text">
                                    We offer people the freedom to choose, customize and order items from thousands of branded options for any occasion, milestone or seasonal campaign.
                                </p>
                                <div className="footer-info">
                                    <span>Email us:</span>
                                    <a href="support@sprkl.dev">support@sprkl.dev</a>
                                </div>
                            </div>
                            <div className="footer-column">
                                <h4 className="footer-title">Information</h4>
                                <ul className="footer-nav">
                                    <li className="footer-nav-item">About Us</li>
                                    <li className="footer-nav-item">FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © 2021 Sprkl. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
