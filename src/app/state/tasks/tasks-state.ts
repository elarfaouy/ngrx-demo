import {TaskInterface} from "./task.interface";

export interface TasksState {
  isLoading: boolean;
  error: string | null;
  tasks: TaskInterface[];
}
