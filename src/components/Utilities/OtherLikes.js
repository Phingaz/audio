import styled from "./OtherLikes.module.css"
import { Link } from "react-router-dom"

export const OtherLikes = ({ image1, title1, link1, image2, title2, link2, image3, title3, link3 }) => {

    return (
        <section className={styled.section}>
            <div className={styled.container}>

                <h3>you may also like</h3>

                <div className={styled.items}>

                    <div className={styled.item} >
                        <div className={styled.img}>
                            <img src={image1} alt='headphone' />
                        </div>

                        <h4>{title1}</h4>

                        <Link to={link1} className="link-btn">See product</Link>
                    </div>

                    <div className={styled.item} >
                        <div className={styled.img}>
                            <img src={image2} alt='headphone' />
                        </div>

                        <h4>{title2}</h4>

                        <Link to={link2} className="link-btn">See product</Link>
                    </div>

                    <div className={styled.item} >
                        <div className={styled.img}>
                            <img src={image3} alt='headphone' />
                        </div>

                        <h4>{title3}</h4>

                        <Link to={link3} className="link-btn">See product</Link>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
