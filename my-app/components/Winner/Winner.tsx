import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, MouseEvent, useContext } from 'react';
import { MyContext } from '../../context';
import { OrderSort } from '../../types/types';
import Button from '../Button/Button';

const WinnerStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 840px;
  height: 565px;
  gap: 4px;
  padding: 0px 150px;
  background: url(/winner_back.svg) 0 0 /100% 100% no-repeat;
`;

const Title = styled.div`
  position: relative;
  padding-bottom: 22px;
  font-family: 'Circe Rounded Alt';
  font-weight: 400;
  font-size: 128px;
  line-height: 1.3;
  background: linear-gradient(180deg, #fff9d8 8.65%, #ffe44f 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Mask = styled.div`
  position: absolute;
  font-family: 'Circe Rounded Alt ';
  font-style: normal;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-weight: 400;
  font-size: 128px;
  line-height: 163px;
  display: flex;
  align-items: center;
  color: #1e813a;
  filter: blur(10px);
`;

const Text = styled.div`
  padding-bottom: 73px;
  font-family: 'Circe Rounded';
  text-align: center;
  font-size: 40px;
  color: #5f40a1;
`;

export const Winner: FC = () => {
  const { setNumberItems, setValueItems, setOrderSort } = useContext(MyContext);

  const resetSettings = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNumberItems(0), setValueItems(0), setOrderSort(OrderSort.incr);
  };

  return (
    <WinnerStyled>
      <Title>
        Победа!
        <Mask>Победа!</Mask>
      </Title>
      <Text>Молодец! Ты успешно справился с заданием!</Text>
      <div>
        <Link href="/">
          <Button
            big
            green
            onClick={resetSettings}
            dynamicStyle="font-family: 'Circe Rounded'; background:#2BD600"
          >
            Заново
          </Button>
        </Link>
      </div>
    </WinnerStyled>
  );
};
