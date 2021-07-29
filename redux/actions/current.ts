import { SET_START, NEXT_CLUE } from "./types";
import { store } from "../store";

export const setStart = () => {
  const state = store.getState();
  return {
    type: SET_START,
    payload: state.hunt.start,
  }
}