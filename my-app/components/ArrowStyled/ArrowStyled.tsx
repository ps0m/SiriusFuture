import styled from '@emotion/styled';
import { TextStyled } from '../TextStyled/TextStyled';

export const ArrowStyled = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 103%;
  padding-right: 40px;
  width: 357px;
  height: 68px;
  background-image: url(/arrow.svg);
  background-color: linear-gradient(272.91deg, #feffde 12.25%, rgba(255, 255, 255, 0) 49.37%);
  ${(props) =>
    props.left &&
    `
      left: -0%;
      padding-right: 0px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
  `}

  ${(props) =>
    props.right &&
    `
      right: -3%;
  `}
`;

export const ArrowStyleLeft = () => (
  <ArrowStyled left>
    <TextStyled small reverse>
      По возрастанию
    </TextStyled>
  </ArrowStyled>
);

export const ArrowStyleRight = () => (
  <ArrowStyled right>
    <TextStyled small>По убыванию</TextStyled>
  </ArrowStyled>
);
