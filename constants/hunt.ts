import { ITask, Types } from "../interfaces/ITask"
import defaultRiddles from "./riddles"

const three: ITask = {
  type: Types.photo,
  riddle: defaultRiddles.battery,
  next: null,
}

const two: ITask = {
  type: Types.photo,
  riddle: defaultRiddles.clock,
  next: three,
}

const start: ITask = {
  type: Types.photo,
  riddle: defaultRiddles.keyboard,
  next: two,
}

export const hunt = {
  start,
  mode: 'qr',
  questions: 10,
}