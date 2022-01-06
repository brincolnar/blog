import * as React from 'react'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import { centered, emailDiv, } from "./contact.module.css"
 
const ContactPage = () => {
    return (
        <div className="site">
            <div className="site-content contact-div">
                <Navigation />
                <Container title="Contact">
                    <div className={centered}>
                        <div className={emailDiv}>
                            <p>colnar.brin3@gmail.com</p>
                        </div>
                        <div>
                            <Link to="https://github.com/brincolnar"><img src={github} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="https://twitter.com/BColnar"><img src={twitter} alt="" /></Link>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage
