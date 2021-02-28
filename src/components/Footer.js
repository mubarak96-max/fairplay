import React from 'react'
import {Link} from 'gatsby'
import {FaWhatsappSquare,FaFacebookSquare,FaEnvelopeSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="footer-container">
            <div className="get-involved">
                <Link to='/donate'>donate</Link>
                <Link to='/membership'>Become a member</Link>
            </div>
            <div className="social-media">
                <a href="#" target="_blank">
                    <FaFacebookSquare size={25} color='white'/>
                </a>
                <a href="#" target="_blank">
                    <FaWhatsappSquare size={25} color='white'/>
                </a>
                <a href="#" target="_blank">
                    <FaEnvelopeSquare size={25} color='white'/>
                </a>
            </div>
            <div className="copyright">
               <p>&copy; {`${new Date().getFullYear()} FAIR PLAY OFF PITCH UGANDA`}</p>
            </div>
        </div>
        </footer> 
        </>
    )
}

export default Footer
