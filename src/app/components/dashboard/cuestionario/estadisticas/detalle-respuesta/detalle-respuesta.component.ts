import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-detalle-respuesta',
  templateUrl: './detalle-respuesta.component.html',
  styleUrls: ['./detalle-respuesta.component.css']
})
export class DetalleRespuestaComponent implements OnInit {
  cuestionario:any;
  listaRespuestaDetalle: any[]=[];
  idRespuesta:number;
  constructor(
    private aRoute: ActivatedRoute,
    private RCuestionarioSv :RespuestaCuestionarioService
  ) { 
    this.idRespuesta = this.aRoute.snapshot.params['id'];
  }
  
  ngOnInit(): void {
    this.getRespuestasCuestionarioDetalle();
  }

  getRespuestasCuestionarioDetalle():void {
    this.RCuestionarioSv.getlistaRespuestasDetalle(this.idRespuesta).subscribe({
      next:(data:any)=> {
        this.cuestionario= data.cuestionario;
        this.listaRespuestaDetalle = data.respuestas;
        console.log(data);
        console.log(this.listaRespuestaDetalle);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
