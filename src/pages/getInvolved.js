import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const getInvolved = () => {
  return (
    <>
      <Layout>
        <SEO title="Get Involved" />
        <div className="page-title">
          <h2>get involved</h2>
        </div>
        <section className="involved">
          <div className="about-links">
            <h3>Go to</h3>
            <ul>
              <li>
                <Link to="#donate">Donate</Link>
              </li>
              <li>
                <Link to="#member">Membership</Link>
              </li>
            </ul>
          </div>
          <div className="donate">
            <h2 id="donate">Donate</h2>
            <p>
              By donating, you can help unlock potential of a lot of needy
              people
            </p>
            <h5>
              Thank you for your interest in donating to{" "}
              <strong>FAIR PLAY OFF-PITCH</strong>
            </h5>
            <p>
              <strong>FAIR PLAY OFF-PITCH</strong> is a place of hope for
              vulnerable people with tremendous needs and the unpriveledged
              talented people. We are determined to provide assistance, care,
              leadership and mentorship to these people. For many, we really are
              “the needle in a haystack” they’ve been looking for.
            </p>
            <p>
              Your donation will help us fulfill our vision of “Making sports in
              nations fairer, promoting values and healthier lives and having a
              happy community”, discovering talents, nurturing them and
              improving standards of living of communities.
            </p>
            <p>
              If you would like to make a donation, please call +256... or
              deposit on account number 1350...
            </p>
          </div>
          <div className="membership">
            <h2 id="member">Become a member</h2>
            <p>
              By becoming a member you get a priviledge of exploring
              opportunities created by <strong>FAIR PLAY OFF-PITCH</strong>
              before non-members and getting connections from influential people
              in the sports fraternity, the government and the community at
              large.
            </p>
            <p>
              Are you a sports person, a community leader, a sports stakeholder,
              government official, member of the civil society, a foreign
              promoter or a well wisher?.. Join us so that we promote talents
              and transform our communities.
            </p>
            <p>
              You can become a registered member of{" "}
              <strong>FAIR PLAY OFF-PITCH</strong> by filling in the form below
              and submitting your details and we will be giving you feedback or
              visiting our offices at Prime Village Building, Nateete. For more
              information, call 0758....
            </p>
            <form
              action="https://formspree.io/f/mwkaenqg"
              method="POST"
              className="membership-form"
            >
              <input type="text" name="names" required placeholder="Names" />
              <input
                type="text"
                name="phone-number"
                required
                placeholder="Phone Number"
                required
              />
              <input type="text" name="email" placeholder="E-Mail" />
              <input type="text" name="address" placeholder="Address" />
              <input type="text" name="profession" placeholder="Profession" />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="how would you want to work with FAIR PLAY OFF-PITCH"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </section>
        <Link to="/" className="back-home">
          Back Home
        </Link>
      </Layout>
    </>
  )
}

export default getInvolved
