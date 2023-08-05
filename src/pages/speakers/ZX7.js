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

import info1 from "../../components/assets/zx7/Bitmap-1.png"
import info2 from "../../components/assets/zx7/Bitmap-2.png"
import info3 from "../../components/assets/zx7/Bitmap.png"

import like1 from "../../components/assets/zx9/main.png"
import like2 from "../../components/assets/marki/main.png"
import like3 from "../../components/assets/xx59/main.png"
import { Link } from "react-router-dom"

export const ZX7 = () => {

  return (

    <Wrapper>
      <div className="headphone">

        <div className="container">

          <Link className="back" to='/speakers'>
            Go back
          </Link>

          <div className="products">
            <ProductDetail
              image={main}
              title1='ZX7'
              title2='Speaker'
              text='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
              price={3500 }
            />
          </div>

          <Features
            type='speakers'
            text1='Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.'
            text2='The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'
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
