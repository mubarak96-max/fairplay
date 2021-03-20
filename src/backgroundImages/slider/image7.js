import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "image-23.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageSeven = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Reaching out to needy communities</p>
      </Background>
    </div>
  )
}

export default ImageSeven
