import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TaskService} from "../../services/task.service";
import * as TasksActions from "./tasks.actions";
import {catchError, EMPTY, map, mergeMap, of} from "rxjs";

@Injectable()
export class TasksEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {
  }

  taskLoad$ = createEffect((): any => this.actions$.pipe(
    ofType(TasksActions.LoadTasks),
    mergeMap(() => this.taskService.getTasks().pipe(
      map(value => TasksActions.LoadTasksSuccess({tasks: value})),
      catchError(err => of(TasksActions.LoadTasksFailure({error: err.message})))
    ))
  ));

  saveTask$ = createEffect((): any => this.actions$.pipe(
    ofType(TasksActions.AddTask),
    mergeMap((actions) => this.taskService.saveTask(actions.task).pipe(
      map(value => console.log(value)),
      catchError(err => EMPTY)
    ))
  ));
}
