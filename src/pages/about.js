import * as React from 'react'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import './about.css'

const AboutPage = () => {
    return (
        <div className="site">
            <div className="site-content">
                <Navigation />
                <Container title="About me">
                    <div className="about">
                        <p style={{ marginBottom: "80px" }}>
                            Welcome to my blog! I post here when I find something that I feel is worth writing down.
                        </p>
                        <p style={{ marginBottom: "80px" }}>
                           Currently senior CS student focusing on AI. In my free time I am exploring various CS areas like algorithms, low-level stuff, game development and more.
                        </p>
                        <p>
                            If you find my work interesting, want to talk about it or have project ideas/work offer hit me up(details on the <Link href="/contact">Contact page</Link>).
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage