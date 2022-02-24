import { init, RematchDispatch, RematchRootState } from '@rematch/core';

import immer from '@rematch/immer';

import select from '@rematch/select';

import loading, { ExtraModelsFromLoading } from '@rematch/loading';

import updated, { ExtraModelsFromUpdated } from '@rematch/updated';

import persist from '@rematch/persist';

import storage from 'redux-persist/lib/storage';

import { models, RootModel } from './models';

export const store = init<
  RootModel,
  ExtraModelsFromLoading<RootModel> & ExtraModelsFromUpdated<RootModel>
>({
  models,
  plugins: [
    updated(),
    loading(),
    persist({
      key: 'persist-storage',
      storage,
      whitelist: ['settings'],
    }),
    immer({
      whitelist: ['settings'],
    }),
    select(),
  ],
});

export type Store = typeof store;

export type Dispatch = RematchDispatch<RootModel>;

export type RootState = RematchRootState<RootModel>;
