import {Component, OnInit} from '@angular/core';
import {Task} from "../models/task";
import {TasksService} from "../tasks.service";

@Component({selector: 'app-tasks', templateUrl: './tasks.component.html', styleUrls: ['./tasks.component.css']})
export class TasksComponent implements OnInit {

    tasks: Task[];
    task: Task;
    // editTask: Task;

    constructor(private _taskService: TasksService) {}

    ngOnInit() {
        this.getTasks();
    }

    onSubmit(taskName){
      console.log(taskName)
      this.add(taskName)
    }

    getTasks(): void {
        this
            ._taskService
            .getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            })
    }

    add(taskName: string) : void {
       this.task = {id:null,task_name:taskName};
       this._taskService.addTask(this.task).subscribe(task => this.tasks.push(task));
    }

    delete(task: Task): void {
      this.tasks = this.tasks.filter(h => h !== task);
      this._taskService.deleteTask(task.id).subscribe();
    }

    // edit(task){
    //   this.editTask = task;
    // }

    // update(){
    //   if(this.editTask){
    //     this._taskService.updateTask(this.editTask).subscribe(task => {
    //       const ix = task ? this.tasks.findIndex(h => h.id === task.id) : -1;
    //       if(ix > -1){
    //         this.tasks[ix] = task;
    //       }
    //     });
    //     this.editTask = undefined;
    //   }
    // }

}
