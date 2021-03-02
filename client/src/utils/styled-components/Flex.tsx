import React from 'react';
import styled from 'styled-components';

export const StyledFlex = styled.div<any>`
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.justify || 'center'};
`;

export const Flex = (props: any) => <StyledFlex {...props} />;
