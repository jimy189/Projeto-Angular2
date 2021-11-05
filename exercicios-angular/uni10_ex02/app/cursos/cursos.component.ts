import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [
    CursosService
  ]
})
export class CursosComponent implements OnInit {
  public dadosCurso;
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.dadosCurso = this.cursosService.getCursos();
  }

}
