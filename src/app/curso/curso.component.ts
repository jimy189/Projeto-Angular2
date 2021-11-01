import { Component } from "@angular/core";

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})

export class CursoComponent {
  //O recurso da vinculação de dados como data binding
    nomeCurso:string;
    vagas:number = 0;
    requisitos: Array<string>;
    alunos: Array<any>;
    alunoAtual: any;
    constructor(){
      this.nomeCurso = 'Angular';
      this.vagas = 3;
      this.requisitos = ["HTML", "CSS", "Javascript"];
      this.alunos = [];
    }
    stateClasses = {
      'sold-out': this.vagas===0,
      'last-chance': this.vagas===1
    };

    matricularAluno(){
      if (this.vagas > 0){
        this.vagas--;
        this.alunos.push(this.alunoAtual);
        console.log(this.alunos);
      }
    }


}

