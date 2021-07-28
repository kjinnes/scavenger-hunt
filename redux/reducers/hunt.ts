import { GET_HUNT } from "../actions/types"
import { getHunt } from "../actions/hunt";
import { createAction, createReducer } from '@reduxjs/toolkit'
import { IHunt } from "../../interfaces/IHunt";

// const getHunt = createAction(GET_HUNT)
// const decrement = createAction('counter/decrement')
// const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState: IHunt|null = null;

const huntReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHunt.fulfilled, (state, action) => (action.payload))
    // .addCase(decrement, (state, action) => {
    //   state.value--
    // })
    // .addCase(incrementByAmount, (state, action) => {
    //   state.value += action.payload
    // })
})

// <{ hunt: any; }, AnyAction> | ReducersMapObject<{ hunt: any; }, AnyAction> 
export default huntReducer;
