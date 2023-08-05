import "./Landing.scss"
import { Wrapper } from '../components/Wrappers/Wrapper'
import { ProductSmall } from "../components/Utilities/ProductSmall"

import main from "../components/assets/landing/main-landing.png"
import headphone from "../components/assets/landing/headphone-landing.png"
import speaker from "../components/assets/landing/speaker-landing.png"
import pod from "../components/assets/landing/pod-landing.png"

import speaker2 from "../components/assets/landing/category-two-speaker.png"
import speaker3 from "../components/assets/landing/category-three-speaker.png"
import pods from "../components/assets/landing/category-buds.png"
import { Location } from "../components/Utilities/Location"
import { Link } from "react-router-dom"


export const Landing = () => {
    return (
        <Wrapper>
            <div className='landing'>

                <div className="container one">
                    <div className='hero'>
                        <div className='aside'>
                            <h6 className="spacedout">NEW PRODUCT</h6>
                            <h1>XX99 Mark II Headphones</h1>
                            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                            <Link className="link-btn" to='/headphones/mark_ii'>SEE PRODUCT</Link>
                        </div>

                        <img src={main} alt="main" />
                    </div>
                </div>

                <div className="container two">
                    <div className="category one">
                        <ProductSmall
                            image={headphone}
                            title='Headphones'
                            link='/headphones'
                        />
                        <ProductSmall
                            image={speaker}
                            title='Speakers'
                            link='/speakers'
                        />
                        <ProductSmall
                            image={pod}
                            title='Earphones'
                            link='/earphones'
                        />
                    </div>

                    <div className="category two">
                        <img src={speaker2} alt="speaker" />
                        <div className="text">
                            <h2>ZX9 <br />SPEAKER</h2>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Link
                                className="link-btn"
                                to='/speakers/zx9'
                            >SEE PRODUCT</Link>
                        </div>
                    </div>

                    <div className="category three">
                        <img src={speaker3} alt="speaker" />
                        <div className="info">
                            <h4>ZX7 SPEAKER</h4>
                            <Link
                                to='/speakers/zx7'
                                className="link-btn"
                            >see product</Link>
                        </div>
                    </div>

                    <div className="category four">
                        <img src={pods} alt="buds" />
                        <div className="info">
                            <h4>YX1 Earphones</h4>
                            <Link
                                to='/earphones/yx1'
                                className="link-btn"
                            >see product</Link>
                        </div>
                    </div>

                    <Location />

                </div>
            </div>
        </Wrapper>
    )
}
