import * as React from "react";
import {useContext, useMemo} from "react";
import {AppContext} from "../App";

export default function Cart() {
    const state = useContext(AppContext)
    const {products, cart, setCart, checkout} = state;

    console.log(cart)

    const cartItems = useMemo(() => {
        const temp = cart.reduce((a, i) => {
            if (!a[i]) {
                const product = products.find(p => p.id === i)
                a[i] = {
                    ...product,
                    quantity: 0,
                }
            }
            a[i].quantity++
            return a
        }, {})
        return Object.values(temp) || []
    }, [cart])

    const cartTotal = useMemo(() => {
        return cartItems.reduce((a, i) => (a + i.quantity * i.price), 0)
    }, [cartItems])

    return (
        <div className="cart">
            <div className="cart__header">
                Shopping cart
            </div>
            <div className="container">
                {
                cartTotal > 0
                    ? <>
                    <div className="cart__inner">
                        <table className="cart__items">
                            <thead>
                                <tr>
                                    <th>Sprkl Collection</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((i) => (
                                        <tr className="cart__item" key={i.id}>
                                            <td>
                                                <img src={i.image} alt="Product" className="cart__item__image" />
                                                {i.name}
                                             </td>
                                            <td> {i.price} coins</td>
                                            <td> <input type="number" readOnly={true} value={i.quantity} className="cart__item__quantity" /></td>
                                            <td> 
                                                <button onClick={() => {
                                                    setCart(cart.filter(c => c !== i.id));
                                                }}>
                                                X
                                                </button>
                                                {i.quantity * i.price} coins
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="cart__card">
                            <div className="cart__card__title">Cart total</div>
                            <div className="cart__card__total">
                                <span>Order total: </span>
                                <span>{cartTotal} coins</span>
                            </div>
                            <div className="cart__card__info">
                                <div>
                                    <span>Your credit: </span>
                                    <span>100 coins</span>
                                </div>
                                <div>
                                    <span>Your balance: </span>
                                    <span>35 coins</span>
                                </div>
                            </div>
                            <button onClick={checkout} className="cart__card__checkout">
                                Proceed to Checkout
                            </button>
                        </div>                     
                    </div>
                    </>
                    : <div className="cart__empty">
                        No Products
                    </div>
            }
            </div>
        </div>
    )
}