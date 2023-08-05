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

import main from "../../components/assets/markii/main.png"

import info1 from "../../components/assets/markii/Bitmap-1.png"
import info2 from "../../components/assets/markii/Bitmap-2.png"
import info3 from "../../components/assets/markii/Bitmap.png"

import like1 from "../../components/assets/markii/interested/like1.png"
import like2 from "../../components/assets/markii/interested/like2.png"
import like3 from "../../components/assets/markii/interested/like3.png"
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
              image={main}
              title1='XX99 Mark II'
              title2='Headphones'
              newProduct='New Product'
              text='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
              price={2999}
            />
          </div>

          <Features
            type='markii'
            text1='Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.'
            text2='The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'
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

            title1='XX99 MARK I'
            title2='XX59'
            title3='ZX9 SPEAKER'

            link1='/headphones/mark_i'
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
