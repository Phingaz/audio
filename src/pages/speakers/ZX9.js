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

import main from "../../components/assets/zx9/main.png"

import info1 from "../../components/assets/zx9/Bitmap-1.png"
import info2 from "../../components/assets/zx9/Bitmap-2.png"
import info3 from "../../components/assets/zx9/Bitmap.png"

import like1 from "../../components/assets/zx7/main.png"
import like2 from "../../components/assets/marki/main.png"
import like3 from "../../components/assets/xx59/main.png"
import { useNavigate } from "react-router-dom"

export const ZX9 = () => {
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
              title1='ZX9'
              title2='Speaker'
              text='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
              price={4500}
            />
          </div>

          <Features
            type='speakers'
            text1='Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).'
            text2='Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
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

            title1='ZX7 Speaker'
            title2='XX99 mark i'
            title3='XX59'

            link1='/speakers/zx7'
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
