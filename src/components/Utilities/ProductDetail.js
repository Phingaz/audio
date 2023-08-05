import Main from "../../Context"
import styled from "./ProductDetail.module.css"
import { useContext } from 'react'

export const ProductDetail = ({ image, newProduct, title1, title2, text, price }) => {

    const ctx = useContext(Main)

    const quantity = ctx.quantity.productQuantity
    const increment = ctx.increment
    const decrement = ctx.decrement
    const addToCart = ctx.addToCart

    const id = new Date().getTime()

    return (
        <section className={styled.section}>

            <div className={styled.container}>

                <div className={styled.img}>
                    <img src={image} alt='headphone' />
                    <div className={styled.dropshadow}></div>
                </div>

                <div className={styled.content}>
                    <div className={styled.text} >
                        <h6>{newProduct}</h6>
                        <h3>{title1} <br /> {title2}</h3>
                        <p>{text}</p>
                        <p className={styled.price}>$ {price * quantity}</p>
                    </div>

                    <div className={styled.btn}>
                        <div className={styled.amount}>
                            <span onClick={decrement}>-</span>
                            <p>{quantity}</p>
                            <span onClick={increment}>+</span>
                        </div>
                        <button
                            onClick={() => addToCart({ id, title1, quantity, price })} className={styled.add}>
                            add to cart
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}
