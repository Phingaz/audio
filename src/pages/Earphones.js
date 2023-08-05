import "./ProductPage.scss"

import { Section } from "../components/Utilities/Section"

import earphone from "../components/assets/earphone/earphone1.png"

import headphone from "../components/assets/landing/headphone-landing.png"
import speaker from "../components/assets/landing/speaker-landing.png"
import pod from "../components/assets/landing/pod-landing.png"

import { Wrapper } from "../components/Wrappers/Wrapper"
import { ProductSmall } from "../components/Utilities/ProductSmall"
import { Location } from "../components/Utilities/Location"

export const Earphones = () => {
  return (

    <Wrapper>
      <div className="headphone">
        <div className="title">
          <h1>Earphones</h1>
        </div>
        <div className="container">
          <div className="products">
            <Section
              image={earphone}
              title1='YX1 WIRELESS'
              title2='Earphones'
              head='New Product'
              text='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
            />

          </div>

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

          <Location />

        </div>
      </div>
    </Wrapper>
  )
}
