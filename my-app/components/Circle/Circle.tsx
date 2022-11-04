import styled from '@emotion/styled';
import { DragEvent, FC } from 'react';
import { KeyValueType } from '../../types/types';

type CirclePropsType = {
  value: KeyValueType;
  compare: (newItem: KeyValueType) => void;
};

const CircleStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  max-height: 130px;
  padding-bottom: 15%;
  background: rgba(0, 0, 0, 0.06) 0 0/50% 50%;
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

const Circle: FC<CirclePropsType> = ({ value, compare }) => {
  const dropHandler = (e: DragEvent<HTMLDivElement>, value: KeyValueType): void => {
    e.preventDefault();
    compare(value);
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  return (
    <CircleStyle
      onDrop={(e) => dropHandler(e, value)}
      onDragOver={(e) => dragOverHandler(e)}
    ></CircleStyle>
  );
};

export default Circle;
