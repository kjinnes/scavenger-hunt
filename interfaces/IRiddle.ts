import { ITask } from "./ITask";
import { ImageSourcePropType } from "react-native";

export interface IRiddle {
  label: string,
  riddle: string,
  image?: ImageSourcePropType,
}