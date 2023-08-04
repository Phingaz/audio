import styled from "./ProductSmall.module.css"

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

                <a href={link}>Shop</a>
            </div>
        </div>
    )
}
