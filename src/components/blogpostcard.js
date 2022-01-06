import * as React from 'react'
import Topic from './topic'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { blogpostcardDiv, imageWrapper, postInfoWrapper, postTitleSpan, postDateSpan, topicSpan, postSynopsisParagraph, imageWrapperMobile } from "./blogpostcard.module.css"

const BlogPostCard = (props) => {

    const smallImage = getImage(props.postImage.small);
    const mediumImage = getImage(props.postImage.medium);
    const topics = props.topics.split(',');

    return (
        <div className={blogpostcardDiv}>
            <div className={imageWrapper}>
                <GatsbyImage image={smallImage} alt="Image" />
            </div>
            <div className={imageWrapperMobile}>
                <GatsbyImage image={mediumImage} alt="Image" />
            </div>

            <div className={postInfoWrapper}>
                <span className={postTitleSpan}>{props.postTitle}</span>
                <p className={postSynopsisParagraph}>{props.postSynopsis}</p>
            </div>
            <span className={postDateSpan}>{props.postDate}</span>
            <span className={topicSpan}>
                {topics.map(topic => <Topic name={topic} />)}
            </span>

        </div>
    )
}

export default BlogPostCard