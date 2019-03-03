import React from 'react';
import styled from 'styled-components';

export const Result = ({ title, broadcaster, preview, download_link }) => {
  return (
    <ResultWrapper>
      <Title>{title}</Title>
      <Broadcaster>{broadcaster}</Broadcaster>
      <Preview src={preview} />
      <div>
        <Download href={download_link}>Click to download</Download>
      </div>
    </ResultWrapper>
  );
}

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
`;

const Title = styled.h2`
  font-size: 1.1rem;
`;

const Broadcaster = styled.span`
  font-size: 0.8rem;
  color: #5e5e5e;
  margin-bottom: 3px;
`;

const Preview = styled.img`
  width: 480px;
  margin-bottom: 11px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Download = styled.a`
  background-color: #6441a5;
  text-decoration: none;
  color: #fff;
  padding: 6px 10px 6px;
  border-radius: 2px;
`;
