import styled from '@emotion/styled';
import { FC, useContext } from 'react';
import { MyContext } from '../../context';
import { KeyValueType } from '../../types/types';
import { ArrowStyleLeft, ArrowStyleRight } from '../ArrowStyled/ArrowStyled';
import Chip from '../Chip/Chip';
import Circle from '../Circle/Circle';
import { TextStyled } from '../TextStyled/TextStyled';

const PanelStyled = styled.div<{ numberOfTheme: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 890px;
  width: 100%;
  height: 230px;
  gap: 4px;
  padding: 10px;
  ${(props) => `
  background: url(/for_game/set_${props.numberOfTheme}/panel/panel.svg) 0 0 /100% 100% no-repeat;`}
  & div {
    align-self: center;
  }
`;

type PanelType = {
  chips: KeyValueType[];
  sortList: KeyValueType[];
  compare: (newItem: KeyValueType) => void;
};

export const Panel: FC<PanelType> = ({ chips, sortList, compare }) => {
  const { orderSort, numberOfTheme } = useContext(MyContext);

  return (
    <PanelStyled numberOfTheme={numberOfTheme}>
      {orderSort === 'incr' ? <ArrowStyleLeft /> : <ArrowStyleRight />}
      {chips.map((item, index) => {
        return item === null ? (
          <Circle key={sortList[index]} value={sortList[index]} compare={compare} />
        ) : (
          <Chip key={item} value={item} index={index % 5}>
            <TextStyled>{item}</TextStyled>
          </Chip>
        );
      })}
    </PanelStyled>
  );
};
