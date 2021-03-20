import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ImageOne from "../backgroundImages/slider/image1"
import ImageTwo from "../backgroundImages/slider/image2"
import ImageThree from "../backgroundImages/slider/image3"
import ImageFour from "../backgroundImages/slider/image4"
import ImageFive from "../backgroundImages/slider/image5"
import ImageSix from "../backgroundImages/slider/image6"
import ImageSeven from "../backgroundImages/slider/image7"
import ImageEight from "../backgroundImages/slider/image8"

const Slider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        autoPlay
        transitionTime={500}
        interval={5000}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
      >
        <div>
          <ImageOne />
        </div>
        <div>
          <ImageTwo />
        </div>
        <div>
          <ImageThree />
        </div>
        <div>
          <ImageFour />
        </div>
        <div>
          <ImageFive />
        </div>
        <div>
          <ImageSix />
        </div>
        <div>
          <ImageSeven />
        </div>
        <div>
          <ImageEight />
        </div>
      </Carousel>
    </div>
  )
}

export default Slider
