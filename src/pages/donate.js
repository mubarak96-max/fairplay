import React from 'react'
import {graphql,useStaticQuery,Link} from 'gatsby'
import Layout from "../components/layout"
import Img from 'gatsby-image'

const getImage = graphql`
 {
    file(relativePath: {eq: "image-4.jpg"}) {
      childImageSharp {
        fluid(quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Donate = () => {
  const data = useStaticQuery(getImage)
    return (
        <Layout>
          <div className="donate-image">
            <Img fluid={data.file.childImageSharp.fluid}></Img>
            <p>By donating, you can help unlock potential of a lot of needy people</p>
          </div>
          <section className="donate">
            <h5>Thank you for your interest in donating to <strong>FAIR PLAY OFF-PITCH</strong></h5>
            <p><strong>FAIR PLAY OFF-PITCH</strong> is a place of hope for vulnerable people with tremendous needs and the unpriveledged talented people. We are determined to provide assistance, care, leadership and mentorship to these people. For many, we really are “the needle in a haystack” they’ve been looking for.</p>
            <p>Your donation will help us fulfill our vision of “Making sports in nations fairer, promoting values and healthier lives and having a happy community”, discovering talents, nurturing them and improving standards of living of communities.</p>
            <p>If you would like to make a donation, please call +256... or deposit on account number 1350...</p>
            <Link to='/'>Back Home</Link>
          </section>
        </Layout>
    )
}

export default Donate
