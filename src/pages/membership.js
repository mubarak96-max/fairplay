import React from 'react'
import {graphql,useStaticQuery,Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const getImage = graphql`
{
      file(relativePath: {eq: "image-11.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`

const Membership = () => {
    const data = useStaticQuery(getImage)
    return (
        <Layout>
            <div className="membership-image">
                <Img fluid={data.file.childImageSharp.fluid}></Img>
            </div>
            <div className="membership">
                <p>By becoming a member you get a priviledge of exploring opportunities created by <strong>FAIR PLAY OFF-PITCH</strong> before non-members and getting connections from influential people in the sports fraternity, the government and the community at large.</p>
                <p>Are you a sports person, a community leader, a sports stakeholder, government official, member of the civil society, a foreign promoter or a well wisher?.. Join us so that we promote talents and transform our communities.</p>
                <p>You can become a registered member of <strong>FAIR PLAY OFF-PITCH</strong> by filling in the form below and submitting your details and we will be giving you feedback or visiting our offices at Prime Village Building, Nateete. For more information, call 0758....</p>
            </div>

            <form className="membership-form">
                <div className="form-field">
                    <input type="text" required placeholder="Names"/>
                </div>
                <div className="form-field">
                    <input type="text" required placeholder="Phone Number"/>
                </div>
                <div className="form-field">
                    <input type="text" placeholder="E-Mail"/>
                </div>
                <div className="form-field">
                    <input type="text" placeholder="Address"/>
                </div>
                <div className="form-field">
                    <input type="text" placeholder="Profession"/>
                </div>
                <textarea name="message" cols="30" rows="10"
                placeholder="how would you want to work with FAIR PLAY OFF-PITCH"
                ></textarea>
                <button>Send</button>
            </form>
            <Link to='/' className='back-home'>Back Home</Link>
        
        </Layout>
    )
}

export default Membership
