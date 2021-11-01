import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  // vai deixar o acesso dessa variavel externa
  @Input() public cursos: Array<Curso> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
