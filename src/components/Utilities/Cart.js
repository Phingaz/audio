import styled from './Cart.module.css'
import { useContext } from 'react'
import Main from '../../Context'

import marki from "../assets/marki/main.png"
import markii from "../assets/markii/main.png"
import xx59 from "../assets/xx59/main.png"
import zx9 from "../assets/zx9/main.png"
import zx7 from "../assets/zx7/main.png"
import yx1 from "../assets/yx1/main.png"

export const Cart = ({ product }) => {

    let img;
    let total = []

    const ctx = useContext(Main)
    const showCart = ctx.cart.showCart
    const increment = ctx.incrementCart
    const decrement = ctx.decrementCart
    const remove = ctx.removeAll
    const items = ctx.cart.items
    const checkout = ctx.checkout
    const isVisible = ctx.cartIsVisible

    const item = items.map(el => {
        const quantity = el.quantity
        const price = el.price
        total.push(quantity * price)

        switch (el.title1) {
            case "XX99 Mark II":
                img = markii
                break;
            case "XX99 Mark I":
                img = marki
                break;
            case "ZX9":
                img = zx9
                break;
            case "ZX7":
                img = zx7
                break;
            case "XX59":
                img = xx59
                break;
            case "YX1 WIRELESS":
                img = yx1
                break;

            default:
                break;
        }

        return (
            <div key={el.id} className={styled.item}>
                <div className={styled.product}>
                    <div className={styled.img}>
                        <img src={img} alt={el.product} />
                    </div>
                    <div className={styled.details}>
                        <h6>{el.title1}</h6>
                        <p>${isNaN(el.price * el.quantity) ? 0 : el.price * el.quantity.toLocaleString()}</p>
                    </div>
                </div>
                <div className={styled.amount}>
                    <span onClick={() => decrement(el)}> -</span>

                    <p>{el.quantity}</p>

                    <span onClick={() => increment(el)}>+</span>
                </div>
            </div>
        )
    })

    const grandTotal = total.reduce((partialSum, a) => partialSum + a, 0)

    return (
        <div className={`${showCart ? styled.cart : styled.hidden}`}>
            <div className={styled.container}>
                <div className={styled.head}>
                    <h4>Cart{`(${items.length})`}</h4>
                    <button onClick={() => remove()} >Remove all</button>
                </div>

                <div className={styled.items}>
                    {item}
                    <div className={styled.total}>
                        <p>Total</p>
                        <h6>${grandTotal.toLocaleString()}</h6>
                    </div>
                   <div className={styled.btns}>
                   <button onClick={() => isVisible()} className={styled.continue}>Continue Shopping</button>
                    <button onClick={() => checkout()}>Checkout</button>
                   </div>
                </div>
            </div>
        </div>
    )
}
