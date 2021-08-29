import { Action, AnyAction, AsyncThunkAction, configureStore, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import { ThunkAction } from "redux-thunk";
import reducers from "./reducers";

const logger = createLogger({
  level: {
    prevState: false,
    action: 'log',
    nextState: false,
  },
  diff: true,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkDispatch<RootState, undefined, any>

// AsyncThunkAction<{ start: ITask; mode: string; questions: number; }, void, {}>