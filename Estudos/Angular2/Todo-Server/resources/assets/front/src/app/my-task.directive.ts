import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Task } from './class/task';
@Directive({
  selector: '[appMyTask]'
})
export class MyTaskDirective {

    private _myTask:Task;

    constructor(private el:ElementRef) {
        this.el.nativeElement.innerHTML += 'Conteúdo inserido';
    }

    get appMyTask() {
        return this._myTask;
    }
    @Input()
    set appMyTask(value: Task){
        this._myTask = value;
        this.changeColorTask();
    }

    @HostListener('click')
    onclick(){
        alert(this.appMyTask);
    }

    changeColorTask() {
        this.el.nativeElement.style.color = this.appMyTask.value > 5 ? 'green' : 'red';
    }
}
