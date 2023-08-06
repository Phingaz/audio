import "./Checkout.scss"
import { Wrapper } from '../components/Wrappers/Wrapper'
import { Input } from "../components/Utilities/Input"
import { useState, useContext } from 'react'
import Main from "../Context"
import { Link } from "react-router-dom"
import { Payment } from "../components/Utilities/Payment"

import styled from "./Checkout.module.css"

import marki from "../components/assets/marki/main.png"
import markii from "../components/assets/markii/main.png"
import xx59 from "../components/assets/xx59/main.png"
import zx9 from "../components/assets/zx9/main.png"
import zx7 from "../components/assets/zx7/main.png"
import yx1 from "../components/assets/yx1/main.png"
import { Final } from "../components/Utilities/Final"

export const Checkout = () => {

    let img;
    let total = [];

    const ctx = useContext(Main)

    const input = ctx.input
    const items = ctx.cart.items
    const error = ctx.error
    const handleChange = ctx.handleChange
    const checkout = ctx.handleSubmit

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
                    <p>x{el.quantity}</p>
                </div>
            </div>
        )
    })

    const totalPrice = total.reduce((partialSum, a) => partialSum + a, 0)
    const grandTotal = totalPrice + 50 + 1079

    return (
        <Wrapper>
            {
                error.submitted && <Final />
            }
            <div className='checkout'>

                <div className="container">

                    <div className="category">
                        <Link to='/'>Go back</Link>

                        <div className="wrapper" >
                            <form className="section one">
                                <h1>Checkout</h1>

                                <section className="billing">
                                    <h4>Billing details</h4>
                                    <div className="inputs">
                                        <Input
                                            id='name'
                                            label='Name'
                                            name='name'
                                            type='text'
                                            value={input.name}
                                            onChange={handleChange}
                                            placeholder='Alexei Ward'
                                            valid={error.success}
                                            error=''
                                        />
                                        <Input
                                            id='phone'
                                            label='Phone Number'
                                            name='phone'
                                            type="number"
                                            value={input.phone}
                                            onChange={handleChange}
                                            placeholder='1 (234) 567- 890'
                                            valid={error.success}
                                            error=''
                                        />

                                        <Input
                                            id='email'
                                            label='Email Address'
                                            name='email'
                                            type='email'
                                            value={input.email}
                                            onChange={handleChange}
                                            placeholder='alexeiward@gmail.com'
                                            valid={error.success}
                                            error=''
                                        />
                                    </div>
                                </section>

                                <section className="shipping">
                                    <h4>Shipping Info</h4>
                                    <div className="address">
                                        <Input
                                            id='address'
                                            label='Address'
                                            name='address'
                                            type='text'
                                            value={input.address}
                                            onChange={handleChange}
                                            placeholder='1137 Williams Avenue'
                                            valid={error.success}
                                            error=''
                                        />
                                        <div className="aside">
                                            <Input
                                                id='zip'
                                                label='ZIP-Code'
                                                name='zip'
                                                type='number'
                                                value={input.zip}
                                                onChange={handleChange}
                                                placeholder='10011'
                                                valid={error.success}
                                                error=''
                                            />
                                            <Input
                                                id='city'
                                                label='City'
                                                name='city'
                                                type='text'
                                                value={input.city}
                                                onChange={handleChange}
                                                placeholder='New York'
                                                valid={error.success}
                                                error=''
                                            />
                                            <Input
                                                id='country'
                                                label='Country'
                                                name='country'
                                                type='text'
                                                value={input.country}
                                                onChange={handleChange}
                                                placeholder='United States'
                                                valid={error.success}
                                                error=''
                                            />
                                        </div>
                                    </div>
                                </section>

                                <Payment />
                            </form>

                            <div className="section two">
                                <h4>Summary</h4>
                                <div className="summary">
                                    <div className={styled.container}>

                                        <div className={styled.items}>
                                            {item}
                                            <div className={styled.total}>
                                                <p>Total</p>
                                                <h6>{totalPrice}</h6>
                                            </div>
                                            <div className={styled.total}>
                                                <p>Shipping</p>
                                                <h6>$50</h6>
                                            </div>
                                            <div className={styled.total}>
                                                <p>VAT(INCLUDED)</p>
                                                <h6>$1,079</h6>
                                            </div>
                                            <div className={styled.total}>
                                                <p>GRAND TOTAL</p>
                                                <h6>${grandTotal.toLocaleString()}</h6>
                                            </div>
                                            <button onClick={() => checkout(grandTotal)}>Continue and Pay</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
