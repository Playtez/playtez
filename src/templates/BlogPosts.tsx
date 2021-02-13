import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export interface BlogPostTemplateProps {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
        date?: string;
        summary?: string;
      };
      fields: {
        slug: string;
      };
      body: any;
    };
  };
}

const BlogPosts = ({ data }: BlogPostTemplateProps) => {
  console.log(data);
  return (
    <div>
      <div className="prose prose-lg">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </div>
  );
};

export const data = graphql`
  query BlogPosts($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
      body
    }
  }
`;

export default BlogPosts;
