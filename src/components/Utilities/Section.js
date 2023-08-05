import styled from "./Section.module.css"
import { Link } from "react-router-dom"

export const Section = ({ image, head, title1, title2, text, link, order }) => {

    return (
        <section className={styled.section}>

            <div className={styled.container}>
                <div style={{order: order}} className={styled.img}>
                    <img src={image} alt='headphone' />
                    <div className={styled.dropshadow}></div>
                </div>
                <div className={styled.text}>
                    <h6>{head}</h6>
                    <h3>{title1} <br /> {title2}</h3>
                    <p>{text}</p>
                    <Link
                        className='link-btn'
                        to={link}>
                        See product
                    </Link>
                </div>
            </div>

        </section>
    )
}
