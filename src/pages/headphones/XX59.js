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

import main from "../../components/assets/xx59/main.png"

import info1 from "../../components/assets/xx59/Bitmap-1.png"
import info2 from "../../components/assets/xx59/Bitmap-2.png"
import info3 from "../../components/assets/xx59/Bitmap.png"

import like1 from "../../components/assets/markii/interested/like1.png"
import like2 from "../../components/assets/markii/main.png"
import like3 from "../../components/assets/markii/interested/like3.png"
import { Link } from "react-router-dom"

export const XX59 = () => {

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
              price={899}
            />
          </div>

          <Features
            type='markii'
            text1='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.'
            text2='More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
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
            title2='XX99 MARK II'
            title3='ZX9 SPEAKER'

            link1='/headphones/mark_i'
            link2='/headphones/mark_ii'
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
