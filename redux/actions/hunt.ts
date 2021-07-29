import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_HUNT } from "./types";
import { hunt } from '../../constants/hunt';

export const getHunt = createAsyncThunk(GET_HUNT, async () => {
  const response = await hunt;
  return response;
})

