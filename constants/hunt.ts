import { ITask, Types } from "../interfaces/ITask"
import defaultRiddles from "./riddles"

const two: ITask = {
  type: Types.photo,
  riddle: defaultRiddles.clock,
  next: null,
}

const start: ITask = {
  type: Types.photo,
  riddle: defaultRiddles.keyboard,
  next: two,
}

export const hunt = {
  start,
}