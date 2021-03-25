import React from "react"
import { Link } from "gatsby"
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaEnvelopeSquare,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <Link to="/about">Who we are</Link>
            <Link to="/activities">What we do</Link>
            <Link to="/getInvolved">Become part of us</Link>
          </div>
          <div className="footer-contacts">
            <p>prime village building, nateete</p>
            <p>kampala, uganda</p>
            <p>Tel: +2667555....</p>
          </div>
          <div className="social-media">
            <a href="#" target="_blank">
              <FaFacebookSquare size={25} color="white" />
            </a>
            <a href="#" target="_blank">
              <FaWhatsappSquare size={25} color="white" />
            </a>
            <a href="#" target="_blank">
              <FaEnvelopeSquare size={25} color="white" />
            </a>
          </div>
          <div className="copyright">
            <p>
              &copy; {`${new Date().getFullYear()} FAIR PLAY OFF PITCH UGANDA`}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
