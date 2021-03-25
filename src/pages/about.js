import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Team from "../components/team"

const About = ({ location }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="page-title">
        <h3>About Us</h3>
      </div>
      <div className="about-links">
        <h3>Go to</h3>
        <ul>
          <li>
            <Link to={`${location.pathname}#history`}>History</Link>
          </li>
          <li>
            <Link to={`${location.pathname}#team`}>Management Team</Link>
          </li>
        </ul>
      </div>
      <main className="about">
        <div className="overview">
          <div className="about-fop">
            <h3>about the organization</h3>
            <p>
              Fair play deals or manages athletes on and off the pitch. It
              promotes their values, discipline and their aspirations on the
              field and in their day to day lives as well as reaching out to the
              needy and vulnerable communities through sports.
            </p>
          </div>
          <div className="vision">
            <h3>Our vision</h3>
            <p>
              To improve sports countrywide. To promote athlete values and
              healthier lives. And also to make sure everyone lives in a happy
              community.
            </p>
            <h3>our mission</h3>
            <p>
              To be an independent sports organization which effects healthier
              lives to the sports fraternity, athlete values and reaching out to
              the vulnerable communities.
            </p>
          </div>
          <div className="overview-info">
            <p>
              <strong>FAIR PLAY OFF-PITCH</strong> carries out it's activities
              and events every after two months as it promotes and creates
              awareness about what the organization does and also carrying out
              some of the activities through these events.
            </p>
            <p>
              The organization have partnerships with sports governing bodies,
              government agencies, other organizations, schools and institutions
              like UOC, NCS, FUFA, FUBA, UBF, name it.
            </p>
          </div>
        </div>

        <div className="history">
          <h3 id="history">a brief history</h3>
          <p>
            Fair Play Off pitch (F.O.P) is a none profit making organization
            that was established on March 29, 2019 by 13 Members led by vision
            bearer Muhammad Kiwuuwa. Other pioneers included; Ali Mukiibi,
            Shafiq Bisaso, Shafiq Kagimu Kuchi, Nicholas Tendo Musoke, Twaha
            Mutyaba, Isa Mubiru, Raymond Walugembe, Ronald Lutabi, Richard
            Bossa, George Dungu, Derrick Temaligwe and Abdul Swabulu Mugenyi.
          </p>
          <p>
            This came about after a broad research made on talent, mainly on
            athletes both on and off the pitch locally and internationally for
            seven solid months. Basing on the research we made, what we
            discovered encouraged us to come up with a uniting body that can
            help solve the challenges and also create a fair competition in this
            field. The two main discoveries;
          </p>
          <ul>
            <li>
              We discovered that so many talents never fulfill their potential
              due to lack of guidance, motivation, empowerment and self belief.
            </li>
            <li>
              We also discovered that so many athletes retire without any
              savings or investments which makes them poor people despite quite
              big chunks of money passing through their hands during the glory
              days.
            </li>
          </ul>
        </div>

        <div id="team">
          <Team />
        </div>
        <Link to="/activities">What we do...</Link>
      </main>
    </Layout>
  )
}

export default About
