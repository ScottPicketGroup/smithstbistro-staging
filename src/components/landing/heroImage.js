import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const HeroImage = () => {

      

const data = useStaticQuery(graphql`
query MyQuery {
  allImageSharp(filter: {id: {in: "a3ca096a-199d-527a-bdd5-8464009e34ce"}}) {
    edges {
      node {
        id
        gatsbyImageData
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
