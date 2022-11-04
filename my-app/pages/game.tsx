import styled from '@emotion/styled';
import { useContext, useEffect, useRef, useState } from 'react';
import { ChipContainer } from '../components/ChipContainer/ChipContainer';
import { Panel } from '../components/Panel/Panel';
import { Winner } from '../components/Winner/Winner';
import { MyContext } from '../context';
import { ARRAY_NUMBER, ARRAY_VALUES } from '../helpers/constants';
import { getRandomList } from '../helpers/helpers';
import { KeyValueType } from '../types/types';

const Main = styled.main<{ numberOfTheme: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${(props) => `
  background: url(/for_game/set_${props.numberOfTheme}/background/back.svg) 0 0 / cover no-repeat;`}
`;

const Game = () => {
  const { numberItems, valueItems, orderSort, numberOfTheme } = useContext(MyContext);
  const randomList = useRef<KeyValueType[]>([]);
  const sortRandomList = useRef<KeyValueType[]>([]);
  const [chipsInField, setChipsInField] = useState<KeyValueType[]>([]);
  const [chipsInPanel, setChipsInPanel] = useState<KeyValueType[]>([]);
  const [isWin, setIsWin] = useState<boolean>(false);

  const [currentChip, setCurrentChip] = useState<KeyValueType | null>(null);

  useEffect(() => {
    const nameGroup = ARRAY_VALUES[valueItems].name;
    const min = ARRAY_VALUES[valueItems].min;
    const max = ARRAY_VALUES[valueItems].max;
    const number = ARRAY_NUMBER[numberItems];

    randomList.current = getRandomList(min, max, number + 1);

    if (typeof nameGroup === 'string') {
      randomList.current = randomList.current.map((item) => String.fromCharCode(+item));
      sortRandomList.current = [...randomList.current].sort((a, b) =>
        String(a).localeCompare(String(b))
      );
    } else {
      sortRandomList.current = [...randomList.current].sort((a, b) => +a - +b);
    }

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

  const setNewCurrentChip = (newItem: KeyValueType) => setCurrentChip(newItem);

  const compareChipWithTarget = (value: KeyValueType) => {
    if (currentChip !== value) {
      return;
    }

    const indexOfSort = sortRandomList.current.indexOf(value);

    setChipsInPanel((prev) => {
      prev[indexOfSort] = value;
      return prev;
    });

    setChipsInField(
      chipsInField.filter((chip: number | string) => {
        return chip !== value;
      })
    );
  };

  useEffect(() => {
    setIsWin(!chipsInField.length);
  }, [chipsInField]);

  return (
    <Main numberOfTheme={numberOfTheme}>
      <ChipContainer
        chips={chipsInField}
        setCurrent={setNewCurrentChip}
        sortList={sortRandomList.current}
      />

      <Panel
        chips={chipsInPanel}
        sortList={sortRandomList.current}
        compare={compareChipWithTarget}
      />

      {isWin && <Winner />}
    </Main>
  );
};

export default Game;
