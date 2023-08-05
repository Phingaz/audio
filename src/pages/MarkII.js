import "./ProductDetails.scss"

import { ProductDetail } from "../components/Utilities/ProductDetail"

import headphone from "../components/assets/landing/headphone-landing.png"
import speaker from "../components/assets/landing/speaker-landing.png"
import pod from "../components/assets/landing/pod-landing.png"

import { Wrapper } from "../components/Wrappers/Wrapper"
import { ProductSmall } from "../components/Utilities/ProductSmall"
import { Location } from "../components/Utilities/Location"
import { Features } from "../components/Utilities/Features"
import { OtherLikes } from "../components/Utilities/OtherLikes"
import { InfoPictures } from "../components/Utilities/Infopictures"

import info1 from "../components/assets/markii/Bitmap-1.png"
import info2 from "../components/assets/markii/Bitmap-2.png"
import info3 from "../components/assets/markii/Bitmap.png"

import like1 from "../components/assets/markii/interested/like1.png"
import like2 from "../components/assets/markii/interested/like2.png"
import like3 from "../components/assets/markii/interested/like3.png"
import { Link } from "react-router-dom"

export const MarkII = () => {

  return (

    <Wrapper>
      <div className="headphone">

        <div className="container">

        <Link className="back" to='/headphones'>
          Go back
        </Link>

          <div className="products">
            <ProductDetail
              title1='YX1 WIRELESS'
              title2='Earphones'
              head='New Product'
              text='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
            />
          </div>

          <Features />

          <InfoPictures
            image1={info1}
            image2={info2}
            image3={info3}
          />

          <OtherLikes
            image1={like1}
            image2={like2}
            image3={like3}

            title1='XX99 MARK I'
            title2='XX59'
            title3='ZX9 SPEAKER'

            link1=''
            link2=''
            link3=''
          />

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
