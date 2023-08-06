import "../ProductDetails.scss"

import { ProductDetail } from "../../components/Utilities/ProductDetail"

import headphone from "../../components/assets/landing/headphone-landing.png"
import speaker from "../../components/assets/landing/speaker-landing.png"
import pod from "../../components/assets/landing/pod-landing.png"

import { Wrapper } from "../../components/Wrappers/Wrapper"
import { ProductSmall } from "../../components/Utilities/ProductSmall"
import { Location } from "../../components/Utilities/Location"
import { Features } from "../../components/Utilities/Features"
import { OtherLikes } from "../../components/Utilities/OtherLikes"
import { InfoPictures } from "../../components/Utilities/Infopictures"

import main from "../../components/assets/yx1/main.png"

import info1 from "../../components/assets/yx1/Bitmap-1.png"
import info2 from "../../components/assets/yx1/Bitmap-2.png"
import info3 from "../../components/assets/yx1/Bitmap.png"

import like1 from "../../components/assets/zx9/main.png"
import like2 from "../../components/assets/marki/main.png"
import like3 from "../../components/assets/xx59/main.png"
import { useNavigate } from "react-router-dom"

export const YX1 = () => {

  const navigate = useNavigate()

  return (

    <Wrapper>
      <div className="headphone">

        <div className="container">

          <button className="back"onClick={() => navigate(-1)}>
            Go back
          </button>

          <div className="products">
            <ProductDetail
              newProduct='New product'
              image={main}
              title1='YX1 WIRELESS'
              title2='earphones'
              text='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
              price={599 }
            />
          </div>

          <Features
            type='earphones'
            text1='Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.'
            text2='The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
          />

          <InfoPictures
            image1={info1}
            image2={info2}
            image3={info3}
          />

          <OtherLikes
            image1={like1}
            image2={like2}
            image3={like3}

            title1='ZX9 Speaker'
            title2='XX99 mark i'
            title3='XX59'

            link1='/speakers/zx9'
            link2='/headphones/mark_i'
            link3='/headphones/xx59'
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
