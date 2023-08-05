import styled from "./ProductDetail.module.css"
import img from "../assets/headphones/headphone1.png"
import { useState } from 'react'
import { Link } from "react-router-dom"

export const ProductDetail = () => {

    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(2999)

    const increment = () => {
        setAmount(p => p + 1)
    }

    const decrement = () => {
        setAmount(p => p - 1)
    }

    return (
        <section className={styled.section}>
            
            <div className={styled.container}>
                <Link to='/headphones'>Go Back</Link>

                <div className={styled.img}>
                    <img src={img} alt='headphone' />
                    <div className={styled.dropshadow}></div>
                </div>

                <div className={styled.content}>
                    <div className={styled.text} >
                        <h6>New Product</h6>
                        <h3>xxx99 mark ii <br /> Headphone</h3>
                        <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
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
