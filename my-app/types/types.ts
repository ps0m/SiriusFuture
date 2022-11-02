import { Dispatch, SetStateAction } from 'react';

export interface IValue {
  name: string;
  min: number;
  max: number;
}

export type ValueName = 'A' | '9' | '19' | '50' | '99' | '999';

export interface ValueInfo {
  min: number;
  max: number;
}

export enum OrderSort {
  'incr' = 'incr',
  'decr' = 'decr',
}

export type IContext = {
  numberItems: number;
  setNumberItems: Dispatch<SetStateAction<number>>;
  valueItems: number;
  setValueItems: Dispatch<SetStateAction<number>>;
  orderSort: OrderSort;
  setOrderSort: Dispatch<SetStateAction<OrderSort>>;
};
