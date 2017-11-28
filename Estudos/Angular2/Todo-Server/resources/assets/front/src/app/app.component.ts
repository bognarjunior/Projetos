import { Component } from '@angular/core';

import { Task } from './class/task';
import { TaskService } from './task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Todo List';
    // tasks:Array<Task> = [];

    // constructor(){
    //     let taskService = new TaskService();
    //     this.tasks = taskService.tasks;
    //     this.tasks.push(
    //         {
    //             name:'Cozinhar',
    //             value: 50,
    //             date_launch:'2017-11-22'
    //         }
    //     );
    // }
}
