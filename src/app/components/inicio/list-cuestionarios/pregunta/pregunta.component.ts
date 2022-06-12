import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionario } from 'src/app/models/cuestionario/RespuestaCuestionario';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  cuestionario:any;
  idCuestionario: number;
  listaPregunta:Pregunta[]=[];
  check:number=0;
  index:number=0;
  opcionSelecionada:any;
  respuesta:string="";
  listaRespuestaDetalles:any[]=[];
  constructor(
    private router: Router,
    private respuestaCuestionario:RespuestaCuestionarioService,
    private cuestionarioSv:CuestionarioService,
    
    
  ) {
    this.idCuestionario = this.respuestaCuestionario.getIdCuestionario();
   }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionario.getIdCuestionario();
    if(this.idCuestionario ==0){
      this.router.navigate(['/inicio/Cuestionario'])
    }
    this.getCuestionario();
    console.log("id",this.idCuestionario);
  }

  getCuestionario():void{
    this.cuestionarioSv.verCuestionario(this.idCuestionario).subscribe({
      next:(data:any) => {
        this.cuestionario = data;
        this.respuestaCuestionario.cuestionario = data;
        this.listaPregunta= data.listPregunta;
        console.log(this.cuestionario);
        console.log(this.respuestaCuestionario.idCuestionario);
      }
    })
  }
  obtenerPregunta():string{
  
    return this.listaPregunta[this.index].descripcion;
    
    
  }
  checkOption(respt:any,id:any): void {
    this.opcionSelecionada=respt;
    this.check=1;
   
  }
  siguientePregunta(index:number): void {
    if(this.check!=0){
      console.log(this.listaPregunta.length,"logintud");
      if(this.index <this.listaPregunta.length){
        console.log(this.index,"index < " +this.listaPregunta.length);
        this.index++;
      }
      let cuestionarioDetalle = {respuestaId:this.opcionSelecionada.id};
      this.listaRespuestaDetalles.push(cuestionarioDetalle);
      console.log(this.index,"index");
      if(this.index >= this.listaPregunta.length){
        this.setRespuestaCuestionario();
      }
      this.respuestaCuestionario.respuesta.push(this.opcionSelecionada.id);
      this.check=0;
    }

    
  }
  ngclass(respuesta:any):string{
    if(respuesta==this.opcionSelecionada){
      return "active text-light";
    }
    return "";
  }

  setRespuestaCuestionario():void{
    const respuestaCuestionario: RespuestaCuestionario = {
      cuestionarioId:this.respuestaCuestionario.idCuestionario,
      nombreParticipante:this.respuestaCuestionario.nombreParticipante,
      listaCuestionarioDetalle: this.listaRespuestaDetalles
    }
    console.log(respuestaCuestionario);
    this.respuestaCuestionario.setRespuestaCuestionario(respuestaCuestionario).subscribe({
      next:(data:any)=> {
        console.log("respuestaback",data);
        this.router.navigate(['inicio/Cuestionario/resultado/respuestas']);
      },
      error:(err)=>{
        console.log("error:",err);
      }
    });
  }
}
