import {createAction, props} from "@ngrx/store";
import {TaskInterface} from "./task.interface";

export const LoadTasks = createAction(
  "[Tasks] Load Tasks"
);

export const LoadTasksSuccess = createAction(
  "[Tasks] Load Tasks Success",
  props<{tasks: TaskInterface[]}>()
);

export const LoadTasksFailure = createAction(
  "[Tasks] Load Tasks Failure",
  props<{error: string}>()
);

export const AddTask = createAction(
  "[Tasks] Add Task",
  props<{task: TaskInterface}>()
);
