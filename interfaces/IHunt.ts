import { ITask } from "./ITask";

export interface IHunt {
  start: ITask,
  mode?: string,
  questions: number,
}

export const modes: string[] = ['qr', 'numbers']