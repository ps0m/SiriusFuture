import styled from '@emotion/styled';
import { FC } from 'react';
import { KeyValueType } from '../../types/types';
import Chip from '../Chip/Chip';
import { TextStyled } from '../TextStyled/TextStyled';

const ChipContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 890px;
  width: 100%;
  margin-bottom: 120px;
  height: 260px;
`;

type ChipContainerType = {
  chips: KeyValueType[];
  setCurrent: (newItem: KeyValueType) => void;
  sortList: KeyValueType[];
};

export const ChipContainer: FC<ChipContainerType> = ({ chips, setCurrent, sortList }) => {
  const rightOrder: number[] = chips.map((item) => sortList.indexOf(item));
  return (
    <ChipContainerStyled>
      {chips.map((item, index) => (
        <Chip key={item} value={item} setCurrent={setCurrent} index={rightOrder[index] % 5}>
          <TextStyled>{item}</TextStyled>
        </Chip>
      ))}
    </ChipContainerStyled>
  );
};
