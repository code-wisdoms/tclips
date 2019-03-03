import React from 'react';
import styled from 'styled-components';

export const ErrorMessage = () => (
  <React.Fragment>
    <ErrorHeader>ERROR!</ErrorHeader>
    <ErrorText>Failed to load. Check your link</ErrorText>
  </React.Fragment>
);

const ErrorHeader = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  color: red;
`;

const ErrorText = styled.p`
  color: red;
`;
