import React, { memo } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const LogoComponent: React.FC<{}> = () => {
  const { file } = useStaticQuery(logoQuery);

  return <Img fixed={file.childImageSharp.fixed} />;
};

const logoQuery = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 160, height: 54) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

LogoComponent.displayName = 'Logo';

export default memo(LogoComponent);
