import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Posts = ({ data }) => {
  return (
    <div>
      {" "}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data.allMdx.nodes.map((node) => {
        return <MDXRenderer>{node.body}</MDXRenderer>;
      })}
    </div>
  );
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
        fields {
          slug
        }
        body
      }
    }
  }
`;
