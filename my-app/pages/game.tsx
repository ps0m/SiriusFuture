import styled from '@emotion/styled';
import { useContext, useEffect, useRef, useState } from 'react';
import Chip from '../components/Chip/Chip';
import { MyContext } from '../context';
import { ARRAY_NUMBER, ARRAY_VALUES } from '../helpers/constants';
import { getRandomList } from '../helpers/helpers';
import { KeyValueType } from '../types/types';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(/for_game/background/back_1.svg) 0 0 / cover no-repeat;
`;

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 890px;
  width: 100%;
  height: 230px;
  gap: 4px;
  padding: 10px;
  background: url(/for_game/panel/panel_1.svg) 0 0 /100% 100% no-repeat;
`;

const Circle = styled.div`
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

const ChipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 890px;
  width: 100%;
  height: 260px;
`;

const Text = styled.span`
  margin: 0;
  font-size: 56px;
  line-height: 1.16;
  letter-spacing: 2px;
  color: #ffffff;
  -webkit-text-stroke: 2px #242546;
  text-shadow: 2px 0 #242546, -2px 0 #242546, 0 2px #242546, 0 -2px #242546, 2px 2px #242546,
    -2px -2px #242546, 2px -2px #242546, -2px 2px #242546; ;
`;

const Game = () => {
  const { numberItems, valueItems, orderSort } = useContext(MyContext);
  const randomList = useRef<KeyValueType[]>([]);
  const sortRandomList = useRef<KeyValueType[]>([]);
  const [chipsInField, setChipsInField] = useState<KeyValueType[]>([]);
  const [chipsInPanel, setChipsInPanel] = useState<KeyValueType[]>([]);

  useEffect(() => {
    const nameGroup = ARRAY_VALUES[valueItems].name;
    const min = ARRAY_VALUES[valueItems].min;
    const max = ARRAY_VALUES[valueItems].max;
    const number = ARRAY_NUMBER[numberItems] + 1;

    randomList.current = getRandomList(min, max, number);

    if (typeof nameGroup === 'string') {
      randomList.current = randomList.current.map((item) => String.fromCharCode(+item));
      sortRandomList.current = [...randomList.current].sort((a, b) =>
        String(a).localeCompare(String(b))
      );
    } else {
      sortRandomList.current = [...randomList.current].sort((a, b) => +a - +b);
    }

    console.log(sortRandomList.current);

    const indexSingleChipInPanel = orderSort === 'incr' ? 0 : sortRandomList.current.length - 1;

    setChipsInField(
      randomList.current.filter((chip: number | string) => {
        return chip !== sortRandomList.current[indexSingleChipInPanel];
      })
    );

    const initialChipsInPanel = Array(number).fill(null);
    initialChipsInPanel.splice(
      indexSingleChipInPanel,
      0,
      sortRandomList.current[indexSingleChipInPanel]
    );

    setChipsInPanel(initialChipsInPanel);
  }, [numberItems, orderSort, valueItems]);

  return (
    <Main>
      <ChipContainer>
        {chipsInField.map((item) => (
          <Chip key={item} item={item} place={'field'}>
            <Text>{item}</Text>
          </Chip>
        ))}
      </ChipContainer>

      <Panel>
        {chipsInPanel.map((item, index) => {
          return item === null ? (
            <Circle key={index} />
          ) : (
            <Chip key={item} item={item} place={'panel'}>
              <Text>{item}</Text>
            </Chip>
          );
        })}
      </Panel>
    </Main>
  );
};

export default Game;
