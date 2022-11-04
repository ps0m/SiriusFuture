import styled from '@emotion/styled';
import { MouseEvent, ReactNode } from 'react';
import { OrderSort } from '../../types/types';

interface ButtonProps {
  children?: ReactNode;
  value?: OrderSort;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  dynamicStyle?: string;
  disabled?: boolean;
  active?: boolean;
  big?: boolean;
  green?: boolean;
}

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 20px;
  font-family: Calibri, sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #423f45;
  background: ${(props) => (props.active ? '#FFD748' : '#FFD7488E')};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #423f45;
  }
  ${(props) =>
    props.green &&
    `
    background: #38DF7A;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
  `}
  ${(props) =>
    props.big &&
    `
    min-width:260px;
    min-height:60px;
    line-height: 1.37;
  `}
  ${(props) => props.dynamicStyle}
`;

const Button = ({
  children,
  value,
  onClick,
  disabled,
  active,
  dynamicStyle,
  ...attrs
}: ButtonProps) => {
  const onClickAction = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || !onClick) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  return (
    <ButtonStyle
      value={value}
      onClick={(e) => onClickAction(e)}
      disabled={disabled}
      active={active}
      dynamicStyle={dynamicStyle}
      {...attrs}
    >
      {children}
    </ButtonStyle>
  );
};
export default Button;
