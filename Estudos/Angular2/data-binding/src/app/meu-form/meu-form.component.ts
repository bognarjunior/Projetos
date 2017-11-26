import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-meu-form',
    templateUrl: './meu-form.component.html',
    styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
    nome: string = "Bognar";
    
    pessoa: any = {
        nome: "Bognar",
        idade: 34
    }
    constructor() { }

    ngOnInit() {
    }

}
