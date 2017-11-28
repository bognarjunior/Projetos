import { Injectable } from '@angular/core';

import { Task } from './class/task';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

    constructor(private http:Http) { }

    getTasks():Promise<Array<Task>>{
        return this.http.get('http://localhost:8000/tasks')
                .toPromise()
                .then(response => response.json());
    }
    createTask(task:Task){
        return this.http.post('http://localhost:8000/tasks', task)
                .toPromise();
    }
}
