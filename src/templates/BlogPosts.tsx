import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Page } from "../components";

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
  return (
    <Page>
      <div className="prose prose-lg border-gray-500 border-r border-l space-y-6">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Page>
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
