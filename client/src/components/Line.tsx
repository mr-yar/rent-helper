import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div<any>`
  width: 100%;
  height: 0.1rem;
  margin: 3rem 0;
  background: ${(props) => props.color.stroke};
`;
export const Line = (props: any): JSX.Element => <StyledLine {...props} />;
