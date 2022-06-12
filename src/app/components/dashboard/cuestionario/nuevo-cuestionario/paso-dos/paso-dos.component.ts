import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  titulo: string = '';
  descripcion: string ="";
  listPreguntas:Pregunta[] = [];

  constructor(
    private router: Router,
    private cuestionarioSv: CuestionarioService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.titulo = this.cuestionarioSv.titulo;
    this.descripcion = this.cuestionarioSv.descripcion
  }

  guardarPregunta(pregunta:Pregunta): void {
    this.listPreguntas.push(pregunta);
    console.log("listadopreguntas",this.listPreguntas);
  }
  borrarPregunta(index:number): void {
    this.listPreguntas.splice(index, 1);
  }
  guardarCuestionario():void {
    const cuestionario:Cuestionario = {
      cName:this.titulo,
      cDescripcion:this.descripcion,
      listPregunta: this.listPreguntas
    };

    // enviamos cuestionario al Back
    this.cuestionarioSv.guardarCuestionario(cuestionario).subscribe({
      next: (data:any)=> {console.log(data);}
    })

    this.router.navigate(['dashboardx'])
  }
}
