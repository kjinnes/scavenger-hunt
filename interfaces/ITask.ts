import { IRiddle } from "./IRiddle";

export interface ITask {
  type: string,
  riddle: IRiddle,
  next: null | ITask,
}

export const Types = {
  photo: 'photo',
  find: 'find',
  truth: 'truth',
  dare: 'dare',
}

// photo: take a selfie in a certain way
// find: find an item, take a picture
// truth: answer a funny question (will be collected and displayed)
// dare: like task master, build something maybe