import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
 public dadosCurso: Array<Curso> =  [
   new Curso('Javascript', 'Desenvolvimento', 20,'','30 Abr'),
   new Curso('TypeScript', 'Desenvolvimento', 10,'','30 Abr'),
   new Curso('Angular', 'Desenvolvimento', 60,'','30 Abr'),
   new Curso('React', 'Desenvolvimento', 50,'','30 Abr')
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
