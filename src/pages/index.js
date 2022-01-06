import React, { useState  } from "react"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Container from '../components/container'
import BlogPostCard from "../components/blogpostcard"
import image1 from '../images/unrealeng1.jpg'
import image2 from '../images/ubuntuserver2.png'
import image3 from '../images/game_designvsgame_development02-4.jpg'
import { graphql, Link } from 'gatsby'
import './index.css'
import "@fontsource/source-sans-pro"

const IndexPage = ({ data }) => {

  let [graphqlData, setData] = useState(data.allMdx.nodes);

  function sortByDate(e) {
    e.preventDefault();
    let order = e.target.value;
    console.log('sorted graphqlData by ' + order);

    graphqlData = graphqlData.sort(function (a, b) {

      if (new Date(a.frontmatter.date) < new Date(b.frontmatter.date)) {

        if (order == 'earliest') {
          return -1;
        } else {
          return 1;
        }

      } else if (new Date(a.frontmatter.date) > new Date(b.frontmatter.date)) {
        if (order == 'earliest') {
          return 1;
        } else {
          return -1;
        }
      } else {
        return 0;
      }

    });

    // spread operator used (returns all the values)
    setData([...graphqlData]);
    console.log(graphqlData)
  }

  function filterByTopic(e) {
    e.preventDefault();

    let topic = e.target.value;
    console.log(topic)

    // filter posts by topic
    if (topic == 'All') {
      setData([...data.allMdx.nodes]);
    } else {
      graphqlData = data.allMdx.nodes.filter(post => post.frontmatter.topics.split(',').indexOf(topic) != -1);
      setData([...graphqlData]);
    }
  }


  return (
    <div className="site">
      <div className="site-content">
        <Navigation />
        <Container title='Blog Posts: '>
          <div className="header-div">
            <span className="first-select">
              from:
              <select onChange={sortByDate} name="" id="date-selector">
                <option value="latest">latest</option>
                <option value="earliest">earliest</option>
              </select>
            </span>
            <span className="second-select">
              topic:
              <select onChange={filterByTopic} name="" id="topic-selector">
                <option value="All">All</option>
                <option value="Game Development">Game Development</option>
                <option value="Low-level">Low-level</option>
                <option value="Web Development">Web Development</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
            </span>
          </div>
          <div>
            {/* sort by date/topics with React (graphql only runs on build time) */}
            {
              graphqlData.map((node) => (
                <Link to={node.fields.slug}>
                  <article key={node.id}>
                    <BlogPostCard
                      postTitle={node.frontmatter.title}
                      postDate={node.frontmatter.date}
                      postSynopsis={node.frontmatter.synopsis}
                      postImage={node.frontmatter.hero_image}
                      topics={node.frontmatter.topics}
                    />
                  </article>
                </Link>
              ))
            }

          </div>
        </Container>
      </div>
      <Footer className="footer" />
    </div>
  )

}

export const query = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        synopsis
        title
        topics
        hero_image {
          small: childImageSharp {
            gatsbyImageData(height: 300, width: 270)
          }
          
          medium: childImageSharp {
            gatsbyImageData(height: 233, width: 761)
          }
        }
      },
      fields {
        slug
      }
      id
      body
    }
  }
}
`


export default IndexPage
