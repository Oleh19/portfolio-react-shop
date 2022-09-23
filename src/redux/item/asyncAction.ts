import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item, SearchItemParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchItems = createAsyncThunk<Item[], SearchItemParams>(
  'item/fetchItemsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Item[]>(`https://6314f9b45b85ba9b11dabe90.mockapi.io/items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);