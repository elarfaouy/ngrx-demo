import {AppState} from "../app-state";
import {createSelector} from "@ngrx/store";

export const selectorTasksState = (state: AppState) => state.tasks;

export const selectorAllTasks = createSelector(
  selectorTasksState,
  (state)=> state.tasks
);

export const selectorIsLoading = createSelector(
  selectorTasksState,
  (state)=> state.isLoading
);

export const selectorError = createSelector(
  selectorTasksState,
  (state)=> state.error
);
