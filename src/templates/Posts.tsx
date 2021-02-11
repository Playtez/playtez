import { graphql } from "gatsby";
import React from "react";

const Posts = ({ data }) => {
  console.log("this is in posts", { data });
  return <div> heelo posts</div>;
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
