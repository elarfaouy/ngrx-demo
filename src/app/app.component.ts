import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectorAllTasks} from "./state/tasks/tasks.selectors";
import * as TasksActions from "./state/tasks/tasks.actions";
import {AppState} from "./state/app-state";
import {Observable} from "rxjs";
import {TaskInterface} from "./state/tasks/task.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ngrx-tasks';
  tasks$: Observable<TaskInterface[]> = this.store.pipe(select(selectorAllTasks));
  task: TaskInterface = {
    id: null,
    title: "",
    status: ""
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(TasksActions.LoadTasks())
  }

  saveTask(){
    // action
    console.log(this.task)
    this.store.dispatch(TasksActions.AddTask({task: this.task}))

    // reset default
    this.task= {
      id: null,
      title: "",
      status: ""
    }
  }
}
