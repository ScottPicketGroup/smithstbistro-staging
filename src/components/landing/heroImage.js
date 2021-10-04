import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const HeroImage = () => {

      

const data = useStaticQuery(graphql`
query heroImageQuery {
  allImageSharp(filter: {id: {in: "182063df-7cc9-5146-889b-032d651c3899"}}) {
    edges {
      node {
        id
        gatsbyImageData( placeholder: BLURRED)
       
      }
    }
  }
}
`)

const image = getImage(data.allImageSharp.edges[0].node)
    return (
        <GatsbyImage image={image} alt="bleh" style={{width: `100%`,  maxHeight: `100%`}}/>
     
    )
}

export default HeroImage
