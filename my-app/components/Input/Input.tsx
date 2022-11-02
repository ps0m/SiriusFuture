import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

type InputProps = {
  id: string;
  onChange: (e: string) => void;
  content: string[] | number[];
  title?: string;
  dynamicStyle?: string;
};

type LabelProps = Pick<InputProps, 'dynamicStyle'>;

const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  font-family: 'Helvetica';
  font-size: 32px;
  line-height: 1.37;
  text-align: center;
  color: #423f45;
  ${(props) => props.dynamicStyle}
`;

const DataList = styled.datalist`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;

  & option {
    min-width: 40px;
    font-family: Calibri, sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: #4f4b61;
  }
  & option:first-of-type {
    text-align: left;
  }
  & option:last-of-type {
    text-align: right;
  }
`;
const InputStyle = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 20px;
  margin: 0;
  background: #ffd748 no-repeat;
  border-radius: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #423f45;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 23px;
    height: 23px;
    background-color: #104987;
    border-radius: 11px;
  }
`;

const Input = ({ id, title, dynamicStyle, content, onChange }: InputProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Label htmlFor={id} dynamicStyle={dynamicStyle}>
        <span>{title}</span>
        <DataList id="forList">
          {content.map((item) => (
            <option key={item} value={item} label={`${item}`}></option>
          ))}
        </DataList>
        <InputStyle
          type="range"
          onChange={onChangeHandler}
          defaultValue={0}
          min={0}
          max={content.length - 1}
          step={1}
          id={id}
          list="forList"
        />
      </Label>
    </>
  );
};
export default Input;
