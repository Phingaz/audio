import styled from "./Final.module.css"
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useContext } from 'react'
import Main from "../../Context";

import marki from "../assets/marki/main.png"
import markii from "../assets/markii/main.png"
import xx59 from "../assets/xx59/main.png"
import zx9 from "../assets/zx9/main.png"
import zx7 from "../assets/zx7/main.png"
import yx1 from "../assets/yx1/main.png"

export const Final = () => {

    let data = {}

    const ctx = useContext(Main)
    const formData = ctx.formData
    const home = ctx.home
    const itemsLength = ctx.cart.items.length

    switch (formData[0]?.title1) {
        case "XX99 Mark II":
            data = {
                title: 'XX99 Mark II',
                price: 2999,
                img: markii
            }
            break;
        case "XX99 Mark I":
            data = {
                title: 'XX99 Mark I',
                price: 1750,
                img: marki
            }
            break;
        case "ZX9":
            data = {
                title: 'ZX9',
                price: 4500,
                img: zx9
            }
            break;
        case "ZX7":
            data = {
                title: 'ZX7',
                price: 3500,
                img: zx7
            }
            break;
        case "XX59":
            data = {
                title: 'XX59',
                price: 899,
                img: xx59
            }
            break;
        case "YX1 WIRELESS":
            data = {
                title: 'YX1 WIRELESS',
                price: 599,
                img: yx1
            }
            break;
        default:
            break;
    }

    return (
        <div className={styled.final}>
            <div className={styled.container}>
                <CheckRoundedIcon className={styled.icon} />
                <h3>Thank you <br /> for your order</h3>

                <p>
                    You will receive an email confirmation shortly.
                </p>

                <div className={styled.items}>
                    <div className={styled.item}>
                        <div className={styled.info}>
                            <img src={data.img} alt="" />
                            <div className={styled.data}>
                                <h4>{data.title}</h4>
                                <h6>${data.price?.toLocaleString()}</h6>
                            </div>
                            <p>x1</p>
                        </div>

                        <p className={styled.length}>and {itemsLength - 1} other item(s)</p>

                    </div>


                    <div className={styled.total}>
                        <p>GRAND TOTAL</p>
                        <h6>${formData.grandTotal?.toLocaleString()}</h6>
                    </div>
                </div>

                <button onClick={() => home()} className={styled.btn}>Home</button>

            </div>
        </div>
    )
}
