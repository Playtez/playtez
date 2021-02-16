import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "./src/components";
import "./src/styles/styles.css";

const components = {
  h1: (props) => (
    <h1
      className="text-6xl m-4 mb-12 pt-10 font-serif text-green-700"
      {...props}
    />
  ),
  h2: (props) => <h2 className="text-2xl m-4 text-mango-700" {...props} />,
  code: (props) => {
    return (
      <div className="bg-white rounded-lg max-w-min p-4">
        <span className="" {...props} />;
      </div>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="bg-gray-100 p-2 mx-6 mb-4 border-l-4 border-gray-400 italic"
      {...props}
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="leading-relaxed font-light text-gray-500 mt-2 mb-4 px-6 "
    />
  ),
};
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  );
};
