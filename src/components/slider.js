import React from 'react'
import {graphql,useStaticQuery,Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel} from 'react-responsive-carousel'

const query = graphql`
  {
    images:allImageSharp {
      nodes {
        fluid (quality: 100, maxWidth: 2480){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Slider = () => {
    const data = useStaticQuery(query)
    console.log(data)
    return (
        
            <div className="carousel-wrapper">
                <Carousel infiniteLoop autoPlay transitionTime={2000} interval={7000} showArrows={false} showStatus={false} showIndicators={false} thumbWidth={200}>
                    {
                        data.images.nodes.map((image)=>{
                            return (
                              <div className='slider-image'>
                                    <Img style={{height:"400px", width: '100%'}} fluid={image.fluid}></Img>
                              </div>
                                
                            )
                        })
                    }
                </Carousel>
            </div>
        
    )
}

export default Slider
