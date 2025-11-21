import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-tasks',
  imports: [],
  templateUrl: './new-tasks.html',
  styleUrl: './new-tasks.css',
})
export class NewTasks {
  @Output() cancel = new EventEmitter<void>();
  
  onCancel() {
    this.cancel.emit();
  }
}
