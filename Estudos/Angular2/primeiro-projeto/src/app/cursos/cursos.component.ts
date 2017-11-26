import { CursosService } from './cursos.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CursosComponent implements OnInit {
    nomePortal: string;
    cursos: string[];
    constructor(private cursoService: CursosService) { 
        this.nomePortal = 'Portal de treinamento de Cursos';
        this.cursos = this.cursoService.getCursos();
    }

    ngOnInit() {
    }

}
