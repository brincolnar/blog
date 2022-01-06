import * as React from 'react'
import {topicSpan} from './topic.module.css'

const Topic = (props) => {
    return (
      <span className={topicSpan}>
          {props.name}
      </span>
    )
}

export default Topic