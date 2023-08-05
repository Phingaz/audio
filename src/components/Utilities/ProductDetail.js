import styled from "./ProductDetail.module.css"
import { useState } from 'react'

export const ProductDetail = ({image, newProduct, title1, title2, text, price}) => {

    const [amount, setAmount] = useState(1)
    // const [price, setPrice] = useState(2999)

    const increment = () => {
        setAmount(p => p + 1)
    }

    const decrement = () => {
        setAmount(p => p - 1)
    }

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
                        <p className={styled.price}>$ {price * amount}</p>
                    </div>

                    <div className={styled.btn}>
                        <div className={styled.amount}>
                            <span onClick={decrement}>-</span>
                            <p>{amount}</p>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className={styled.add}>add to cart</button>
                    </div>
                </div>
            </div>

        </section>
    )
}
