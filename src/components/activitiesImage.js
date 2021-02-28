import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const ActivitiesImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "image-19.jpg"}) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <div className="activities-image">
          <Img fluid={data.file.childImageSharp.fluid}></Img>
          <p>FAIRPLAY OFF THE PITCH is dedicated to causes that are directed to discover talents, nurture them and improve standards of living of communities working together with sports bodies, government agencies, NGOs and different individuals.</p>
      </div>
  )
}

export default ActivitiesImage
