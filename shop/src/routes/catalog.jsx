import {useContext, useEffect, useState} from "react";
import {AppContext} from "../App";
import { ReactComponent as Icon } from "../assets/icon.svg";
import { Link, useNavigate  } from 'react-router-dom';

export default function Catalog() {
    const state = useContext(AppContext)
    const {products, cart, setCart} = state;
    const navigate = useNavigate();

    return (
        <div className="catalog">
            <h3 className="title">Our collections</h3>
                <div className="tabs">
                    <ul className="tabs-nav">
                        <li className="tabs-nav-item">All</li>
                        <li className="tabs-nav-item">Home & Accessories</li>
                        <li className="tabs-nav-item">Tees & Apparel</li>
                        <li className="tabs-nav-item">Hats & Bags</li>
                    </ul>
                </div>
            <div className="products">
                {
                    products.map(i => (
                        <div className="products__item" key={i.id}>
                            <div className="products__item__image">
                            <Link to={'/product/'+i.id}>
                                <img src={i.image} alt="Product" />
                            </Link>
                            </div>
                            <div className="products__item__name">{i.name}</div>
                            <div className="products__item__price">{i.price} coins</div>
                            <button
                                className="products__item__button"
                                onClick={() => {setCart([...cart, i.id]); navigate('/cart')}}
                            >
                                Add to cart
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}