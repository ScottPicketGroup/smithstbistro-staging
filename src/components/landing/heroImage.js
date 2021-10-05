import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroImage = ({ data, device }) => {
  const image = getImage(data.allFile.edges[0].node);
  return (
    <GatsbyImage
      image={image}
      alt="bleh"
      style={{ width: `100%`, maxHeight: `100%`, aspectRatio: device === 'mob' ? `1/1` : ``}}
      
    />
  );
};

export default HeroImage;
