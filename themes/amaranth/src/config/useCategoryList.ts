import { graphql, useStaticQuery } from "gatsby";

type SiteListQueryType = {
  allSitePage: {
    edges: {
      node: {
        path: string;
      };
    }[];
  };
};

const useCategoryList = () => {
  const res = useStaticQuery<SiteListQueryType>(
    graphql`
      query PageListQuery {
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
      }
    `
  );

  const list = res.allSitePage?.edges
    .map((edge) => edge.node.path)
    .filter((path) => path.split("/")[1] === "category");

  if (list === undefined) {
    return [];
  }

  return list;
};

export default useCategoryList;
