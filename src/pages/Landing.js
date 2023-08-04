import "./Landing.scss"
import { Wrapper } from '../components/Wrappers/Wrapper'
import { ProductSmall } from "../components/ProductSmall"

import main from "../components/assets/main-landing.png"
import headphone from "../components/assets/headphone-landing.png"
import speaker from "../components/assets/speaker-landing.png"
import pod from "../components/assets/pod-landing.png"


export const Landing = () => {
    return (
        <Wrapper>
            <div className='landing'>
                <div>
                    <div>
                        <h3>NEW PRODUCT</h3>
                        <h1>XX99 Mark II Headphones</h1>
                        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <button>SEE PRODUCT</button>
                    </div>

                    <img src={main} alt="main" />
                </div>

                <div className="middle">
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
            </div>
        </Wrapper>
    )
}
