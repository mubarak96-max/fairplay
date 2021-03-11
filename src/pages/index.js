import React from "react"
import { Link} from "gatsby"
import WelcomeImage from '../components/welcomeImage'
import Slider from '../components/slider'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () =>{
   return <Layout>
     <Slider/>
     <main className="home">
    <SEO title="Home" />
      <div className="home-text">
        <p className="mission"><strong>FAIRPLAY OFF PITCH</strong> is a non-profit making organisation that promotes athlete values, healthier richer lives and reaching out to the vulnerable communities.</p>
        <p className="info">Uganda is endowed with a lot of talents. Uganda is the most youthful country on the globe and has the mass that can be powerful in the sports world. <strong>FAIRPLAY OFF PITCH</strong> brigdes the gap between sports, stakeholders and communities.</p>
        <Link to='/about'>Learn more about FAIR PLAY OFF-PITCH</Link>
      </div>
    </main>
  </Layout>
}

export default IndexPage
