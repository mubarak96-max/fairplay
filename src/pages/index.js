import React from "react"
import { Link } from "gatsby"
import Slider from "../components/slider"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Slider />
      <main className="home">
        <SEO title="Home" />
        <div className="home-intro">
          <p className="mission">
            <strong>FAIRPLAY OFF PITCH</strong> is a non-profit making
            organisation that promotes athlete values, healthier richer lives
            and reaching out to the vulnerable communities.
          </p>
          <Link to="/overview">Learn More..</Link>
        </div>
        <div className="impact">
          <h3>Our Impact</h3>
          <ul>
            <li>
              <strong>FAIR PLAY OFF-PITCH</strong> has not only changed the
              mantra of all stakeholders but has also steadily changed the lives
              and attitude of the society towards all athletes. This has been
              evident through the increasing number of active registered members
              from the initial thirteen to 543 members by the end of 2019.
            </li>
            <li>
              <strong>FAIR PLAY OFF-PITCH</strong> has reached out to more than
              2000 members.
            </li>
            <li>
              Created a sense of brotherhood and sisterhood among athletes.
            </li>
            <li>
              Created a platform for the young talents to get exposed to the
              rest of the world.
            </li>
            <li>
              <strong>FAIR PLAY OFF-PITCH</strong> has over time extended a
              helping hand to the young talented girl children.
            </li>
            <li>
              It has bridged the gap between the athletes and the community.
            </li>
            <li>
              Also has managed to put up a strong bond between former athletes
              and the active ones.
            </li>
            <li>
              It has managed to have ambassadors in all entertainment
              disciplines.
            </li>
            <li>
              It has managed to boost humanity and morals in the society through
              various events.
            </li>
            <li>
              <strong>FAIR PLAY OFF-PITCH</strong> has managed to fully fund a
              number of young but full of potential lads on the course of
              refereeing and sports management at Uganda Olympics Committee.
            </li>
            <li>
              The organization has also managed to create partnerships with
              sports governing bodies, schools and institutions like UOC, NCS,
              FUFA, FUBA, UBF, name it.
            </li>
            <li>
              These partnerships so far have helped us secure empowerment short
              courses, opportunities and bursaries for the young talents. Adding
              on that after earning the knowledge, member started to inspire and
              teach the society on how one can benefit from his or her
              attributes.
            </li>
            <li>
              Each day that passes <strong>FAIR PLAY OFF-PITCH</strong> records
              various milestones and many are coming with the will of God,
              hardwork and a spirit of sportsmanship
            </li>
          </ul>
          <Link to="/activities">What we do...</Link>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
