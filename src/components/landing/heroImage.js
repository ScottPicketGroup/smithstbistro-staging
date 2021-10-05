import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroImage = ({device}) => {



    return (
      <StaticImage src="../../images/hero.png" alt="A kitten" style={{width: `100%`,  maxHeight: `100%`, aspectRatio: device === "mob" ? `1` : ``}} />
       
     
    )
}

export default HeroImage
