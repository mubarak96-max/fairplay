import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "image-25.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageEight = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Fighting against vices in young talents</p>
      </Background>
    </div>
  )
}

export default ImageEight
