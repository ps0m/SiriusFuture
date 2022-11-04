import styled from '@emotion/styled';
import Link from 'next/link';
import { MouseEvent, useContext, useRef, useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { MyContext } from '../context';
import { ARRAY_NUMBER, ARRAY_VALUES } from '../helpers/constants';
import { getRandomNumber } from '../helpers/helpers';
import { OrderSort } from '../types/types';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(/background_settings.jpg) 0 0 / cover no-repeat;
`;

const Card = styled.div`
  width: 700px;
  height: 660px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 55px 50px;
  background: linear-gradient(180deg, #7f75f0 -100%, #101f32 100%);
  border-radius: 40px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: 20px;
    background-color: #ffffff;
    border-radius: inherit;
  }
`;

const ButtonGroup = styled.div<{ dynamicStyle: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  ${(props) => props.dynamicStyle}
`;

const contentForInputValues = ARRAY_VALUES.map((item) => item.name);

const Home = () => {
  const number = useRef(0);
  const values = useRef(0);
  const [order, setOrder] = useState(OrderSort.incr);

  const { setNumberItems, setValueItems, setOrderSort, setNumberOfTheme } = useContext(MyContext);

  const setNumber = (value: string) => {
    number.current = +value;
  };

  const setValues = (value: string) => {
    values.current = +value;
  };

  const handlerOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;

    if (value === order) {
      return;
    }

    if (value !== OrderSort.decr && value !== OrderSort.incr) {
      return;
    }

    setOrder(value);
  };

  const setParametersGame = () => {
    setNumberItems(number.current);
    setValueItems(values.current);
    setOrderSort(order);
    setNumberOfTheme(getRandomNumber(1, 4));
  };

  return (
    <Section>
      <Card>
        <Input
          id="number"
          onChange={setNumber}
          content={ARRAY_NUMBER}
          title="Кол-во предметов"
          dynamicStyle={`margin-bottom:55px; width:60%`}
        />

        <Input
          id="values"
          onChange={setValues}
          content={contentForInputValues}
          title="Значения"
          dynamicStyle={`margin-bottom:70px; width:90%`}
        />

        <ButtonGroup dynamicStyle={'margin-bottom:90px'}>
          <Button onClick={handlerOrder} value={OrderSort.incr} active={order === 'incr'}>
            По возрастанию
          </Button>

          <Button onClick={handlerOrder} value={OrderSort.decr} active={order === 'decr'}>
            По убыванию
          </Button>
        </ButtonGroup>
        <Link href="/game">
          <Button onClick={setParametersGame} big green>
            Играть
          </Button>
        </Link>
      </Card>
    </Section>
  );
};

export default Home;
