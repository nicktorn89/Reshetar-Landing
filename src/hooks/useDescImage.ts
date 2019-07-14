import { useStaticQuery, graphql } from 'gatsby';

export const useDescImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "description-photo.jpg" }) {
          childImageSharp {
            fixed(width: 308, height: 308) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `);

  return file;
};
