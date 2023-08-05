import "./ProductPage.scss"

import { Section } from "../components/Utilities/Section"

import speaker1 from "../components/assets/speaker/speaker1.png"
import speaker2 from "../components/assets/speaker/speaker2.png"

import headphone from "../components/assets/landing/headphone-landing.png"
import speaker from "../components/assets/landing/speaker-landing.png"
import pod from "../components/assets/landing/pod-landing.png"

import { Wrapper } from "../components/Wrappers/Wrapper"
import { ProductSmall } from "../components/Utilities/ProductSmall"
import { Location } from "../components/Utilities/Location"

export const Speakers = () => {
  return (

    <Wrapper>
      <div className="headphone">
        <div className="title">
          <h1>Speakers</h1>
        </div>
        <div className="container">
          <div className="products">
            <Section
              image={speaker1}
              title1='ZX9'
              title2='Speaker'
              head='New Product'
              text='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
            />
            <Section
              order={1}
              image={speaker2}
              title1='ZX&'
              title2='Headphones'
              text='Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
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
