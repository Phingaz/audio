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

import main from "../../components/assets/marki/main.png"

import info1 from "../../components/assets/marki/Bitmap-1.png"
import info2 from "../../components/assets/marki/Bitmap-2.png"
import info3 from "../../components/assets/marki/Bitmap.png"

import like1 from "../../components/assets/markii/main.png"
import like2 from "../../components/assets/markii/interested/like2.png"
import like3 from "../../components/assets/markii/interested/like3.png"
import { useNavigate } from "react-router-dom"

export const MarkI = () => {

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
              image={main}
              title1='XX99 Mark I'
              title2='Headphones'
              text='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. '
              price={1750}
            />
          </div>

          <Features
            type='headphones'
            text1='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.'
            text2='From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
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

            title1='XX99 MARK II'
            title2='XX59'
            title3='ZX9 SPEAKER'

            link1='/headphones/mark_ii'
            link2='/headphones/xx59'
            link3='/speakers/zx9'
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
