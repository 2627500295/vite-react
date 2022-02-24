import { createModel } from '@rematch/core';

import delay from 'delay';

import type { RootModel } from './index';

export type CounterState = number;

export const counter = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment: (state: CounterState, payload: number) => state + payload,
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number): Promise<void> {
      await delay(500);
      dispatch.counter.increment(payload);
    },
  }),
});
