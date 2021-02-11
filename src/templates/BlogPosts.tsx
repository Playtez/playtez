import { graphql } from "gatsby";
import React from "react";

const BlogPosts = ({ data }) => {
  return <h1>this is blogposts</h1>;
};

export const data = graphql`
  query BlogPosts($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
    }
  }
`;

export default BlogPosts;
