import React, { memo } from 'react';

import { StatusProps } from './types';

import { StatusContainer, StatusText } from './styled';

const Status: React.FC<StatusProps> = ({ status }) => 
  <StatusContainer status={status} >
    <StatusText>
    {status 
      ? 'Благодарим за доверие! Мы cвяжемся с Вами в ближайшие 15 минут.'
      : 'Упс...Письмо не отправилось'}
    </StatusText>
  </StatusContainer>;

export default memo(Status);
