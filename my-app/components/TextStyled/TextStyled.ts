import styled from '@emotion/styled';

export const TextStyled = styled.span<{ small?: boolean; reverse?: boolean }>`
  margin: 0;
  font-size: 56px;
  line-height: 1.16;
  letter-spacing: 2px;
  color: #ffffff;
  -webkit-text-stroke: 2px #242546;
  text-shadow: 2px 0 #242546, -2px 0 #242546, 0 2px #242546, 0 -2px #242546, 2px 2px #242546,
    -2px -2px #242546, 2px -2px #242546, -2px 2px #242546;
  ${(props) =>
    props.small &&
    `
    font-size: 36px;
    letter-spacing: 0px;
     -webkit-text-stroke: 2px #242546;
     text-shadow: 1px 0 #242546, -1px 0 #242546, 0 1px #242546, 0 -1px #242546, 1px 1px #242546,
      -1px -1px #242546, 1px -1px #242546, -1px 1px #242546;
  `}
  ${(props) =>
    props.reverse &&
    `
      transform: matrix(-1, 0, 0, 1, 0, 0);
  `}
`;
