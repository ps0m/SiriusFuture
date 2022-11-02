import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MyContext } from '../context';
import '../styles/globals.css';
import { OrderSort } from '../types/types';

const App = ({ Component, pageProps }: AppProps) => {
  const [numberItems, setNumberItems] = useState<number>(0);
  const [valueItems, setValueItems] = useState<number>(0);
  const [orderSort, setOrderSort] = useState<OrderSort>(OrderSort.incr);

  return (
    <MyContext.Provider
      value={{ numberItems, setNumberItems, valueItems, setValueItems, orderSort, setOrderSort }}
    >
      <Component {...pageProps} />;
    </MyContext.Provider>
  );
};

export default App;
