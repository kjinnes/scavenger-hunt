import {  SET_START, NEXT_CLUE } from "../actions/types"
import { createAction, createReducer } from '@reduxjs/toolkit'
import { ITask } from "../../interfaces/ITask";

export const setStart = createAction(SET_START);
const nextClue = createAction(NEXT_CLUE);
// const decrement = createAction('counter/decrement')
// const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState: ITask|null = null;

const currentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStart, (state, action) => action.payload)
    .addCase(nextClue, (state, action) => {
      return state.next;
    })
    // .addCase(decrement, (state, action) => {
    //   state.value--
    // })
    // .addCase(incrementByAmount, (state, action) => {
    //   state.value += action.payload
    // })
})

// <{ hunt: any; }, AnyAction> | ReducersMapObject<{ hunt: any; }, AnyAction> 
export default currentReducer;
