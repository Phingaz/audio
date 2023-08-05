import "./Headphone.scss"

import { Section } from "../components/Utilities/Section"

import headphone1 from "../components/assets/headphones/headphone1.png"
import headphone2 from "../components/assets/headphones/headphone2.png"
import headphone3 from "../components/assets/headphones/headphone3.png"

import headphone from "../components/assets/landing/headphone-landing.png"
import speaker from "../components/assets/landing/speaker-landing.png"
import pod from "../components/assets/landing/pod-landing.png"

import { Wrapper } from "../components/Wrappers/Wrapper"
import { ProductSmall } from "../components/Utilities/ProductSmall"
import { Location } from "../components/Utilities/Location"

export const Headphones = () => {
  return (

    <Wrapper>
      <div className="headphone">
        <div className="container">
          <div className="products">
            <Section
              image={headphone1}
              title1='XX99 Mark II'
              title2='Headphones'
              head='New Product'
              text='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
              link='/headphones/mark_i'
            />
            <Section
              order={1}
              image={headphone2}
              title1='XX99 Mark I'
              title2='Headphones'
              text='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
            />
            <Section
              image={headphone3}
              title1='XX59'
              title2='Headphones'
              text='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
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
