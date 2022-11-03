import styled from '@emotion/styled';
import { DragEvent, FC, ReactNode } from 'react';
import { KeyValueType } from '../../types/types';

const ChipStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 158px;
  background: url(/for_game/chips/set_1/chip_1.svg) 0 0 /100% 100% no-repeat;
  &:nth-of-type(2n) {
    align-self: flex-start;
  }
  /* &:nth-of-type(3n) {
    align-self: flex-end;
  } */
`;

type ChipPropsType = {
  item: KeyValueType;
  place: string;
  children?: ReactNode;
};

const Chip: FC<ChipPropsType> = ({ item, place, children }) => {
  const dragOverHandler = (e: DragEvent<HTMLDivElement>, item: KeyValueType): void => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const dragStartHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const dragEndHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const dropHandler = (e: DragEvent<HTMLDivElement>, item: KeyValueType): void => {
    e.preventDefault();
  };

  return (
    <ChipStyle
      key={item}
      draggable
      onDragOver={(e) => dragOverHandler(e, item)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, item)}
    ></ChipStyle>
  );
};

export default Chip;
