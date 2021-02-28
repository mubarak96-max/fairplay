import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const WelcomeImage = () => {
  const data = useStaticQuery(graphql`
     {
    file(relativePath: {eq: "image-3.jpg"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  console.log(data)
  return (
      <div className="welcome-image">
          <Img fluid={data.file.childImageSharp.fluid}></Img>
      </div>
  )
}

export default WelcomeImage
