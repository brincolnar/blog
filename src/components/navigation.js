import * as React from 'react'
import './navigation.css'
import { Link } from 'gatsby'
import "@fontsource/source-sans-pro"
import hamburger from "../images/hamburger.png"

const Navigation = () => {

    const responsive = () => {
        console.log('click...')
        const navigation = document.getElementById("responsiveNavigation");
        console.log(navigation);
        if(navigation.className === "navigation") {
            navigation.className += " responsive";
        } else {
            navigation.className = "navigation";
        }
    }

    return (
        <nav className="navigation" id="responsiveNavigation">
            <Link className="logo" to="/"><span>BC</span></Link>
            <a href="javascript:void(0);" className="icon" onClick={responsive}>
                <img style={{ borderRadius: "0px" }} width="40" height="40" src={hamburger} alt="" />
            </a>
            <div className="centered">
                <Link to="/">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    )
}

export default Navigation