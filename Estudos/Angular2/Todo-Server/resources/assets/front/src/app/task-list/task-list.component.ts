import { Component, OnInit } from '@angular/core';

import { Task } from './../class/task';
import { TaskService } from './../task.service';
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasksList:Array<Task> = []; 
    
    constructor(private taskService:TaskService) { 
        this.taskService.getTasks()
        .then((tasks:Array<Task>) => this.tasksList = tasks);
    }
    
    ngOnInit() {
    }
}
