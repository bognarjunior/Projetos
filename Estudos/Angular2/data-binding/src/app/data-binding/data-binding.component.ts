import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    url: string = 'http://curso.com.br';
    cursoAngular: boolean = true;
    urlImage: string = 'http://lorempixel.com/400/200/nature';

    valorAtual:string = '';
    valorSalvo: string = '';

    isMouseOver:boolean = false;

    constructor() { }

    getValor(){
        return 2;
    }

    getCurtirCurso() {
        return true;
    }

    botaoClicado(){
        alert('Clicado');
    }

    onKeyUp(e: KeyboardEvent){
        this.valorAtual = ( <HTMLInputElement> e.target).value;
    }

    salvarValor(value){
        this.valorSalvo = value;
    }

    onMouseOverOut() {
        this.isMouseOver = !this.isMouseOver;
    }

    ngOnInit() {
    }

}
