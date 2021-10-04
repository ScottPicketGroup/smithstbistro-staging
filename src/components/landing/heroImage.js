import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const HeroImage = () => {

      

const data = useStaticQuery(graphql`
query MyQuery {
  allFile(filter: {name: {in: "hero"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`)

const image = getImage(data.allFile.edges[0].node)
    return (
   
       <GatsbyImage image={image} alt="bleh" style={{width: `100%`,  maxHeight: `100%`}}/>
     
    )
}

export default HeroImage
