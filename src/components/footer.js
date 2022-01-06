import * as React from 'react'
import { Link, StaticQuery } from 'gatsby'
import { footerCentered } from './footer.module.css'
import "@fontsource/source-sans-pro"
import { graphql } from 'gatsby'
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import youtube from "../images/youtube.png"

const Footer = (props) => {
    return (
        <footer>
            <div className={footerCentered}>
                <Link to="https://twitter.com/BColnar"><img width="36" height="30" src={twitter} alt="Twitter" /></Link>
                <Link to="https://github.com/brincolnar"><img width="32" height="30" src={github} alt="Github" /></Link>
                <Link to="/"><img width="43" height="30" src={youtube} alt="Youtube" /></Link>
            </div>
        </footer>
    )
}

export default Footer