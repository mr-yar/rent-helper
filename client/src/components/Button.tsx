import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button<any>`
  display: inline-block;
  padding: 1.5rem 2rem;
  margin: 1rem;
  color: ${(props) => props.color.primary};
  background-color: ${(props) => props.color.secondaryBg};
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  border: 0.1rem solid ${(props) => props.color.stroke};
  border-radius: 1rem;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
  }
  ${(props) => props.active
    && css`
      background-color: ${props.color.mainBg};
      font-weight: 700;
      box-shadow: 0 0 0 .3rem ${props.color.selectedBoxShadow};
    `}
`;
export const Button = (props: any): JSX.Element => {
  // eslint-disable-next-line react/destructuring-assignment
  console.log(props.color.selectedBoxShadow);
  return <StyledButton {...props} />;
};
