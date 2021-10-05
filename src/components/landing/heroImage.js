import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby"
const HeroImage = ({  device }) => {

  

    return (
      <StaticQuery
      query={graphql`
      query MyQuery {
        allFile(filter: { name: { in: "hero" } }) {
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
      `}
      render={data => (
        <GatsbyImage
        image={getImage(data.allFile.edges[0].node.childImageSharp)}
        alt="bleh"
        style={{ width: `100%`, maxHeight: `100%`, aspectRatio: device === 'mob' ? `1/1` : ``}}
        
      />
      )}
    />
     
    );
  
};

export default HeroImage;

