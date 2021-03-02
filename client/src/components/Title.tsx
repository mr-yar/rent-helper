import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1<any>`
  color: ${(props) => props.color.primary};
  font-family: Montserrat, sans-serif;
  font-size: 3rem;
  font-weight: 800;
`;

export const Title = ({theme}: any): JSX.Element => (
  <div>
    <StyledTitle {...theme}>Rent Helper</StyledTitle>
  </div>
);
