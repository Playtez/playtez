import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { graphql, Link, useStaticQuery } from "gatsby";

interface IQuery {
  allMdx: {
    edges: {
      node: {
        id: number;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
        };
        slug: string;
      };
    };
  };
}

export const Header = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="max-w-screen-xl flex justify-between mx-auto">
        <Link
          to="/"
          className="flex justify-center text-center font-semibold font-mono"
        >
          {"< "}
          <br />
          playtez.me
          <br />
          {"/>"}
        </Link>

        <nav className="flex items-center space-x-8 text-lg">
          <div className="relative inline-block text-left focus:bg-gray-800">
            <Link to="/posts">Posts</Link>
            {/* <BlogOptions /> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

interface IMdx {
  allMdx: {
    edges: Array<{
      node: {
        id: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
          category: string;
        };
        slug: string;
      };
    }>;
  };
}

const BlogOptions = () => {
  const mdxEntries: IMdx = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              category
            }
            slug
          }
        }
      }
    }
  `);

  return (
    <Menu>
      {({ open }) => {
        return (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="inline-flex justify-center w-full font-medium transition duration-150 ease-in-out focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                <span className="hover:text-gray-300">Blog</span>
                <div className="my-auto">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="py-1">
                  {mdxEntries.allMdx.edges.map(({ node }) => {
                    return (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={`/${node.frontmatter.category}/`}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-md text-left`}
                          >
                            {node.frontmatter.category}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
};
