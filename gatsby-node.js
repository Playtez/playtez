// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;
//   if (page.path === "/") {
//     page.matchPath = `/*`;
//     createPage(page);
//   }
// };

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    const sourceName = getNode(node.parent).sourceInstanceName;

    createNodeField({
      name: "slug",
      node,
      value,
    });

    createNodeField({
      name: "sourceName",
      node,
      value: sourceName,
    });

    createNodeField({
      name: "category",
      node,
      value: node.frontmatter.category,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              date
              title
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // creates a page for all posts
  createPage({
    path: "/posts",
    component: path.resolve(`${__dirname}/src/templates/Posts.tsx`),
  });

  //create pages per mdx file
  query.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`${__dirname}/src/templates/BlogPosts.tsx`),
      context: {
        id: node.id,
      },
    });
  });
};
