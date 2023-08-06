import Main from "../../Context"
import img from "../assets/Shape.png"
import "./Payment.scss"
import { useState,useContext } from 'react'

export const Payment = () => {

    const ctx = useContext(Main)

    const [payment, setPayment] = useState('emoney')
 
    const emoney = ctx.emoney
    const handleChange = ctx.handleChange

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    return (
        <section className="payment">
            <h4>Payment details</h4>
            <div className="container">
                <p>Payment Method</p>
                <div className="select">

                    <div className="inputs">
                        <input
                            name='emoney'
                            type="radio"
                            value='emoney'
                            checked={payment === 'emoney'}
                            onChange={handlePayment}
                            id='emoney'
                        />
                        <label htmlFor='emoney'>e-Money</label>
                    </div>

                    <div className="inputs">
                        <input
                            name='cash'
                            type="radio"
                            value='cash'
                            checked={payment === 'cash'}
                            onChange={handlePayment}
                            id='cash'
                        />
                        <label htmlFor='cash'>Cash on Delivery</label>
                    </div>

                </div>
            </div>

            <div className="text">
                {payment === 'emoney' &&
                    <>

                    <div className="inputs">
                        <label htmlFor='cash'>e-Money Number</label>
                        <input
                            name='number'
                            value={emoney.number}
                            onChange={handleChange}
                            id='cash'
                            type="number"
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor='cash'>e-Money PIN</label>
                        <input
                            name='pin'
                            value={emoney.pin}
                            onChange={handleChange}
                            id='cash'
                            type="number"
                            required
                        />
                    </div>
                    </>
                }
                {payment === 'cash' &&
                    <>
                        <img src={img} alt="shape" />

                        <p>
                            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p></>
                }
            </div>
        </section>
    )
}
