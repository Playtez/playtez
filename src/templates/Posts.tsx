import { graphql } from "gatsby";
import React from "react";

const Posts = ({ data }) => {
  return <div> posts</div>;
};

export default Posts;

export const posts = graphql`
  query allPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          date
          title
        }
        body
      }
    }
  }
`;
