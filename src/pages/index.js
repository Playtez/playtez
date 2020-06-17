import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <div style={{ color: `purple` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    {/* <img src='https://source.unsplash.com/random/400x200' alt='' /> */}
    <Img fixed={data.file.childImageSharp.fixed} alt='test one two' />
  </div>
);
export const query = graphql`
  query {
    file(relativePath: { eq: "unsplash.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
