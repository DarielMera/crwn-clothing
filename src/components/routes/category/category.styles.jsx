import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h2` // Using h2 since it's a title
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;