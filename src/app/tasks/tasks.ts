import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import {NgFor} from '@angular/common';
import { DUMMY_TASKS } from './dummy-tasks';


@Component({
  selector: 'app-tasks',
  imports: [Task, NgFor],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true}) id!: String;
  @Input({ required: true }) name: String | undefined;
   tasks = DUMMY_TASKS

get selectedUserTasks() {
  return this.tasks.filter(task => task.userId === this.id);
}

}