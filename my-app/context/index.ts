import { createContext } from 'react';
import { IContext, OrderSort } from '../types/types';

export const InitialContext: IContext = {
  numberItems: 0,
  setNumberItems: () => '',
  valueItems: 0,
  setValueItems: () => '',
  orderSort: OrderSort.incr,
  setOrderSort: () => '',
};

export const MyContext = createContext<IContext>(InitialContext);
