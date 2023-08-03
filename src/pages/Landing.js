import "./Landing.scss"
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Wrapper } from '../components/Wrapper'

export const Landing = () => {
    return (
        <Wrapper>
            <div className='landing'>
                <div>
                    <h3>NEW PRODUCT</h3>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button>SEE PRODUCT</button>
                </div>
            </div>
        </Wrapper>
    )
}
