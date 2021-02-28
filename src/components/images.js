import React, {useState} from 'react'
import Img from 'gatsby-image'
import {graphql,useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    images:allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      imagesList:nodes {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `

const Images = () => {
    const[imageIndex,setImageIndex] = useState(1)
    const data = useStaticQuery(getImages)
    const {images:{imagesList}} = data;

    const [...childImageSharp] = imagesList;
    console.log(data);

    return (
        <div className="image-shows">
            {
              imagesList.map((pic)=>{
                return (
                  <>
                  <div className="caption-image">
                     <Img fluid={pic.childImageSharp.fluid}></Img>
                  </div>
                 </>
                )
              })
            }
        </div>
    )
}

export default Images
