import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "./src/components";
import "./src/styles/styles.css";

const components = {
  h1: (props) => <h1 className="text-9xl" {...props} />,
  code: (props) => {
    console.log("code");

    return (
      <div className="bg-white rounded-lg max-w-min p-4">
        <span className="" {...props} />;
      </div>
    );
  },
  p: (props) => <p {...props} className="mt-4" />,
};
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  );
};
