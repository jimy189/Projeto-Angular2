import { Component } from "@angular/core";

@Component({
  selector: 'app-test',
  template: ''
})

export class TestComponent {
  //O recurso da vinculação de dados como data binding
    nomeCurso:string;
    vagas:number;
    requisitos: Array<string>;
    constructor(){
      this.nomeCurso = 'Angular';
      this.vagas = 10;
      this.requisitos = ["HTML", "CSS", "Javascript"];
    }
    matricularAluno(){
      if (this.vagas > 0){
        this.vagas--;
      }
    }
}
