import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-item',
  templateUrl: './cursos-item.component.html',
  styleUrls: ['./cursos-item.component.scss']
})
export class CursosItemComponent implements OnInit {
  @Input() public curso: Curso = new Curso('nome','categoria', 20,'thumbnail','');
  constructor() { }

  ngOnInit(): void {
  }

}

