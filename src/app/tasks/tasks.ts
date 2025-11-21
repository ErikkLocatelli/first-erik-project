import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTasks } from './new-tasks/new-tasks';
import {NgFor} from '@angular/common';
import { DUMMY_TASKS } from './dummy-tasks';


@Component({
  selector: 'app-tasks',
  imports: [Task, NewTasks, NgFor],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true}) id!: String;
  @Input({ required: true }) name: String | undefined;
  
  isAddingTask = false;
  tasks = DUMMY_TASKS

get selectedUserTasks() {
  return this.tasks.filter(task => task.userId === this.id);
}

onCompleteTask(id: string) {
  this.tasks = this.tasks.filter(task => task.id !== id);
}

onStartAddTask() {
  this.isAddingTask = true;
}

onCancelAddTask() {
  this.isAddingTask = false;
}

}