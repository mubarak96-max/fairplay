import React from "react"
import BackgroundImage from "gatsby-background-image"

const Background = ({ img, children }) => {
  return (
    <BackgroundImage fluid={img} className="background-image">
      <div className="overlay">
        <div className="background-content">{children}</div>
      </div>
    </BackgroundImage>
  )
}

export default Background
