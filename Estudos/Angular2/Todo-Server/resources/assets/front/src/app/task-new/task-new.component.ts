import { Component, OnInit, Input } from '@angular/core';

import { Task } from './../class/task';
import { TaskService } from '../task.service';
@Component({
    selector: 'app-task-new',
    templateUrl: './task-new.component.html',
    styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
    
    task:Task  = {
        name: "",
        value: 0,
        date_launch: this.getDate()
    };

    constructor(private taskService:TaskService) { }

    ngOnInit() {
    }

    addTask(){
        let task = Object.assign({}, this.task);
        this.taskService.createTask(task)
            .then(() => {
                alert('Tarefa incluída com sucesso!')
            });
        this.clearTask();
    }
 
     clearTask() {
        this.task = {
            name: "",
            value: 0,
            date_launch: this.getDate()
        }
    }
    /*
    * Utilizado apenas para simular a dada em inglês
    * e utilizar o pipe para formatação
    */
    getDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-').toString();
    }
}
