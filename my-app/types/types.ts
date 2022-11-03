import { Dispatch, SetStateAction } from 'react';

export type KeyValueType = string | number;

export type ValueType = {
  name: KeyValueType;
  min: number;
  max: number;
};

export type ValueNameType = 'A' | '9' | '19' | '50' | '99' | '999';

export type ValueInfoType = {
  min: number;
  max: number;
};

export enum OrderSort {
  'incr' = 'incr',
  'decr' = 'decr',
}

export type IContextType = {
  numberItems: number;
  setNumberItems: Dispatch<SetStateAction<number>>;
  valueItems: number;
  setValueItems: Dispatch<SetStateAction<number>>;
  orderSort: OrderSort;
  setOrderSort: Dispatch<SetStateAction<OrderSort>>;
};
