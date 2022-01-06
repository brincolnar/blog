import * as React from 'react'
import {pageTitle} from './container.module.css'
import "@fontsource/source-sans-pro"

const Container = (props) => {
    return (
      <main>
          <h1 className={pageTitle}>{props.title}</h1>
          {props.children}
      </main>
    )
}

export default Container