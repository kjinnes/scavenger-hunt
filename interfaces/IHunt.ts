import { ITask } from "./ITask";

export interface IHunt {
  start: ITask,
  mode: string,
}

export const modes: string[] = ['qr', 'numbers']