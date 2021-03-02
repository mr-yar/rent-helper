import React from 'react';
import styled from 'styled-components';
import {Searchbar} from '../Searchbar/Searchbar';
import {Button} from '../Button';
import {Line} from '../Line';

const StyledFilters = styled.div`
  position: relative;
  flex-basis: 33%;
`;

export const Filters = ({theme}: any): JSX.Element => (
  <StyledFilters>
    <Searchbar {...theme} />
    <Line {...theme} />
    <Button {...theme}>Townhouse</Button>
    <Button {...theme}>House</Button>
    <Button active {...theme}>
      Apartment
    </Button>
    <Button {...theme}>Condo</Button>
    <Line {...theme} />
  </StyledFilters>
);
