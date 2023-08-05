import styled from "./ProductSmall.module.css"
import { Link } from "react-router-dom"

export const ProductSmall = ({ image, title, link }) => {
    return (
        <div className={styled.card} >
            <img
                className={styled.img}
                src={image}
                alt="headphone"
            />
            <div className={styled.dropshadow}></div>
            <div className={styled.content}>
                <h6>{title}</h6>

                <Link
                    to={link}
                >Shop <span className={styled.icon}>&gt;</span> </Link>
            </div>
        </div>
    )
}
