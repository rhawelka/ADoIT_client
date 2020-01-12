import {Component, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {TasksService} from '../services/tasks.service';
import {AuthenticationService, UserDetails} from '../services/authentication.service';

@Component({selector: 'app-tasks', templateUrl: './tasks.component.html', styleUrls: ['./tasks.component.css']})
export class TasksComponent implements OnInit {

    details : UserDetails;
    tasks : Task[];
    task : Task;
    editTask : Task;

    constructor(private _taskService : TasksService, private _auth : AuthenticationService) {}

    ngOnInit() {
        this.getTasks();
        // Authorization
        this
            ._auth
            .profile()
            .subscribe(user => {
                this.details = user;
            }, err => {
                console.error(err);
            })
    }

    onSubmit(taskName) {
        console.log(taskName)
        this.add(taskName)
    }

    getTasks() : void {
        this
            ._taskService
            .getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            }, err => {
                console.error(err);
            })
    }

    add(taskName : string) : void {
        this.task = {
            id: null,
            task_name: taskName
        };
        this
            ._taskService
            .addTask(this.task)
            .subscribe(task => {this.tasks.push(task)},
        err => {
            console.error(err);
        });
    }

    delete(task : Task) : void {
        this.tasks = this
            .tasks
            .filter(h => h !== task);
        this
            ._taskService
            .deleteTask(task.id)
            .subscribe(
             err => {
                console.error(err);
            }
            );
    }

    edit(task) {
        this.editTask = task;
    }
    update() {
        if (this.editTask) {
            this
                ._taskService
                .updateTask(this.editTask)
                .subscribe(task => {
                    const ix = task
                        ? this
                            .tasks
                            .findIndex(h => h.id === task.id)
                        : -1;
                    if (ix > -1) {
                        this.tasks[ix] = task;
                    }
                }, err => {
                  console.error(err);
              });
            this.editTask = undefined;
        }
    }

}
