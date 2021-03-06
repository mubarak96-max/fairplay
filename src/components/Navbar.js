import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import logo from "../logo/logo.jpg"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showInvolved, setShowInvolved] = useState(false)
  return (
    <nav>
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="fair play off pitch" className="logo-image" />
          </Link>
          <Link
            to="/"
            style={{
              textTransform: "uppercase",
              fontSize: "1rem",
              color: "white",
            }}
          >
            fair play off-pitch
          </Link>
        </div>
        <div className="button">
          <button onClick={() => setShowNav(!showNav)}>
            {showNav ? (
              <FaTimes color="skyblue" size={29} />
            ) : (
              <FaBars color="skyblue" size={29} />
            )}
          </button>
          <span>MENU</span>
        </div>
      </div>

      <div className={`${showNav ? "links" : "hide-links"}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activities">Our Causes</Link>
          </li>
          <li>
            <Link to="/events">News & Events</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/getInvolved">Get Involved</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
