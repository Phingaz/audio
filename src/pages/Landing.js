import "./Landing.scss"
import { Wrapper } from '../components/Wrappers/Wrapper'
import { ProductSmall } from "../components/ProductSmall"

import main from "../components/assets/landing/main-landing.png"
import headphone from "../components/assets/landing/headphone-landing.png"
import speaker from "../components/assets/landing/speaker-landing.png"
import pod from "../components/assets/landing/pod-landing.png"

import speaker2 from "../components/assets/landing/category-two-speaker.png"
import speaker3 from "../components/assets/landing/category-three-speaker.png"
import pods from "../components/assets/landing/category-buds.png"
import person from "../components/assets/landing/person.png"


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
                            <button>SEE PRODUCT</button>
                        </div>

                        <img src={main} alt="main" />
                    </div>
                </div>

                <div className="container two">
                    <div className="category one">
                        <ProductSmall
                            image={headphone}
                            title='Headphones'
                            link='/'
                        />
                        <ProductSmall
                            image={speaker}
                            title='Speakers'
                            link='/'
                        />
                        <ProductSmall
                            image={pod}
                            title='Earphones'
                            link='/'
                        />
                    </div>

                    <div className="category two">
                        <img src={speaker2} alt="speaker" />
                        <div className="text">
                            <h2>ZX9 <br />SPEAKER</h2>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <button>SEE PRODUCT</button>
                        </div>
                    </div>

                    <div className="category three">
                        <img src={speaker3} alt="speaker" />
                        <div className="info">
                            <h4>ZX7 SPEAKER</h4>
                            <button>see product</button>
                        </div>
                    </div>

                    <div className="category four">
                        <img src={pods} alt="buds" />
                        <div className="info">
                            <h4>YX1 Earphones</h4>
                            <button>see product</button>
                        </div>
                    </div>

                    <div className="category five">
                        <div className="info">
                            <h5>Bringing you the <span>best</span>  audio gear
                            </h5>
                            <p>
                                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                            </p>
                        </div>

                        <img src={person} alt="person" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
