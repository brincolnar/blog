import * as React from 'react'
import { imageWrapper } from "./responsiveimage.module.css"

const ResponsiveImage = (props) => {
    return (
        <div className={imageWrapper}>
            <img style={{ height: "auto" }} width={props.width} height={props.height} src={props.src} alt={props.alt} />
            <br />
            <span style={{ fontSize: "1em", color: "grey" }}>{props.imageDescription}</span>
        </div>
    )
}

export default ResponsiveImage