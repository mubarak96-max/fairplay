import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageSix = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Disovering and reviving talents from the grassroots</p>
      </Background>
    </div>
  )
}

export default ImageSix
