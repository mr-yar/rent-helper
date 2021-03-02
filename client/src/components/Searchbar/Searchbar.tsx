import React from 'react';
import styled from 'styled-components';
import loupe from './icons/loupe.svg';
import arrow from './icons/arrow.svg';
import {Flex} from '../../utils/styled-components/Flex';

const Input = styled.input`
  position: relative;
  color: ${(props) => props.color};
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;
const StyledLink = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
`;
const LoupeImg = styled.img`
  width: 2rem;
  margin-right: 2rem;
`;
const ArrowImg = styled.img`
  width: 2rem;
`;
const StyledSearchbar = styled.div`
  width: 90%;
`;

export const Searchbar = (props: any) => (
  <StyledSearchbar>
    <Flex justify="space-between">
      <Flex>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="searchbar" style={{display: 'inline-block'}}>
          <LoupeImg src={loupe} alt="" />
        </label>
        <Input {...props} id="searchbar" autoComplete="off" />
      </Flex>
      <StyledLink href="/">
        <ArrowImg src={arrow} alt="" />
      </StyledLink>
    </Flex>
  </StyledSearchbar>
);
