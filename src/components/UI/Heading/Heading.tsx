import React, { memo } from 'react';

import { HeadingProps } from './types';

import { HeadingText } from './styled';

const Heading: React.FC<HeadingProps> = ({ className, children, fontSize, node }) => 
  <HeadingText className={className} fontSize={fontSize} as={node} >
    {children}
  </HeadingText>;

export default memo(Heading);
