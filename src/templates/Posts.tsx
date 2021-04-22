import React from "react";
import { graphql, Link } from "gatsby";
import { Page } from "../components";

interface INodes {
  nodes: Array<{
    id: string;
    frontmatter: {
      date: string;
      title: string;
      category: string;
    };
    fields: {
      slug: string;
      category: string;
    };
    body: string;
    timeToRead: string;
    excerpt: string;
  }>;
}

interface IMdxQuery {
  data: {
    allMdx: INodes;
  };
}

const Posts = ({ data }: IMdxQuery) => {
  return (
    <Page>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recent Blogs
            </h2>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {data.allMdx.nodes.map((post) => (
              <div key={post.frontmatter.title}>
                <div>
                  <Link to={post.fields.slug} className="inline-block">
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                        post.fields.category === "books"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-red-100 text-red-800"
                      } `}
                    >
                      <svg
                        className={`-ml-1 mr-1.5 h-2 w-2 ${
                          post.fields.category === "books"
                            ? "text-indigo-400"
                            : "text-red-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx={4} cy={4} r={3} />
                      </svg>
                      {post.fields.category}
                    </span>
                  </Link>
                </div>
                <Link to={post.fields.slug} className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.frontmatter.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                </Link>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.frontmatter.date}>
                        {post.frontmatter.date}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.timeToRead} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
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
          category
        }
        body
        timeToRead
        excerpt(pruneLength: 400)
      }
    }
  }
`;
