import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "./src/components";
import "./src/styles/styles.css";

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider>
      <Layout>{element}</Layout>
    </MDXProvider>
  );
};
