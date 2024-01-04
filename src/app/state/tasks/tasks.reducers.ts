import {createReducer, on} from "@ngrx/store";
import {TasksState} from "./tasks-state"
import * as TasksActions from "./tasks.actions";

const initialState: TasksState = {
  tasks: [],
  error: null,
  isLoading: false
}
export const TasksReducers = createReducer(
  initialState,
  on(TasksActions.LoadTasks, (state)=>({
    ...state,
    isLoading: true
  })),
  on(TasksActions.LoadTasksSuccess, (state, {tasks}) => ({
    ...state,
    tasks: tasks,
    isLoading: false
  })),
  on(TasksActions.LoadTasksFailure, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  })),
  on(TasksActions.AddTask, (state, {task}) => ({
    ...state,
    isLoading: false,
    tasks: [...state.tasks, task]
  })),
)
