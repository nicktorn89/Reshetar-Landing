import { useStaticQuery, graphql } from 'gatsby';

export const useAdvantagesImg = () => {
  const { first, second, third, fourth } = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "wedding-cake.svg" }) {
          ...imageURL
        }
    
        second: file(relativePath: { eq: "star.svg" }) {
          ...imageURL
        }
    
        third: file(relativePath: { eq: "interlocking-rings.svg" }) {
          ...imageURL
        }

        fourth: file(relativePath: { eq: "rouble-symbol.svg" }) {
          ...imageURL
        }
      }
    `);

  return [first, second, third, fourth];
};

export const imageURL = graphql`
  fragment imageURL on File {
    publicURL
  }
`;
