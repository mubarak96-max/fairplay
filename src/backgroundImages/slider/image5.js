import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "image-5.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageFive = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Preparing active athletes for life after retirement</p>
      </Background>
    </div>
  )
}

export default ImageFive
