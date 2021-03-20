import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "image-19.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageFour = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Nurturing and guiding young talents</p>
      </Background>
    </div>
  )
}

export default ImageFour
