import styled from '@emotion/styled';
import { DragEvent, FC, ReactNode, useContext } from 'react';
import { MyContext } from '../../context';
import { KeyValueType, numbersForTheme } from '../../types/types';

const ChipStyle = styled.div<numbersForTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 158px;
  ${(props) => `
  background: url(/for_game/set_${props.numberOfTheme}/chips/chip_${props.index}.svg) 0 0 /100% 100% no-repeat;
  `}
  &:nth-of-type(2n) {
    align-self: flex-start;
  }
`;

type ChipPropsType = {
  value: KeyValueType;
  setCurrent?: (newItem: KeyValueType) => void;
  children?: ReactNode;
  index: number;
};

const Chip: FC<ChipPropsType> = ({ value, setCurrent, children, index }) => {
  const { numberOfTheme } = useContext(MyContext);

  const dragStartHandler = (e: DragEvent<HTMLDivElement>, value: KeyValueType): void => {
    if (!setCurrent) {
      return;
    }
    const img = new Image();
    img.src = `/for_game/set_${numberOfTheme}/chips/chip_${index}.svg`;
    e.dataTransfer.setDragImage(img, 70, 70);
    setCurrent(value);
  };

  return (
    <ChipStyle
      key={value}
      draggable
      onDragStart={(e) => dragStartHandler(e, value)}
      numberOfTheme={numberOfTheme}
      index={index}
    >
      {children}
    </ChipStyle>
  );
};

export default Chip;
