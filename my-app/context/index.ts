import { createContext } from 'react';
import { IContextType, OrderSort } from '../types/types';

export const InitialContext: IContextType = {
  numberItems: 0,
  setNumberItems: () => '',
  valueItems: 0,
  setValueItems: () => '',
  orderSort: OrderSort.incr,
  setOrderSort: () => '',
  numberOfTheme: 1,
  setNumberOfTheme: () => '',
};

export const MyContext = createContext<IContextType>(InitialContext);
