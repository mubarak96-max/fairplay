import React, {useState} from 'react'
import Img from 'gatsby-image'
import {graphql,useStaticQuery,Link} from 'gatsby'
import Layout from "../components/layout"
import {FaTimes,FaArrowRight} from 'react-icons/fa'

const team = [
  {
    id: 1,
    names: 'Mwamiatinda',
    position: 'PRO',
    image: '../image-5.jpg',
  },
  {
    id: 2,
    names: 'Person Names',
    position: 'Position',
    image: 'test',
  },
  {
    id: 3,
    names: 'Person Names',
    position: 'Position',
    image: 'test',
  },
  {
    id: 4,
    names: 'Person Names',
    position: 'Position',
    image: 'test',
  },
  
]

const getPic = graphql`
  {
    file(relativePath: {eq: "image-1.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const [showTeam,setShowTeam] = useState(false)
  const data = useStaticQuery(getPic)
    return (
        <Layout>
          <div className="about-image">
            <Img fluid={data.file.childImageSharp.fluid}></Img>
            <p><strong>FAIR PLAY OFF-PITCH</strong> is a nation wide and global network of sports people, leaders, friends and problem solvers coming together to create an impact in sports, communities and everyone</p>
          </div>
          <section className="about">
            <div className="vision">
              <h3>Our mission</h3>
              <p>To be an independent sports organization which effect healthier lives in the sports fraternity, athlete values and reaching out to the vulnerable communities</p>
              <h3>our vision</h3>
              <p>Making sports in nations fairer, promoting values and healthier lives and having a happy community.</p>
            </div>
            <div className="about-us">
              <p><strong>FAIR PLAY OFF-PITCH</strong> is filled with people of passion, committment, intelligence, energy and the will to take action to improve standards of living of sports people and the communities</p>
              <p><strong>FAIR PLAY OFF-PITCH</strong> makes a difference at home and across the globe.</p>
            </div>
            <button className="team-btn" onClick={()=>setShowTeam(!showTeam)}>
              Our team
              {showTeam ? <FaTimes size={24}/> : <FaArrowRight size={24}/>}
            </button>
            {showTeam &&  <div className="our-team">
              {
                team.map((member)=>{
                  const {id,names,position,image} = member
                  return (
                    <div key={id} className="member">
                      <img src={image} alt='image not availabe'/>
                      <h3>{names}</h3>
                      <h4>{position}</h4>
                    </div>
                  )
                })
              }
            </div>}
            <Link to='/activities'>What we do...</Link>
          </section>
        </Layout>
    )
}

export default About