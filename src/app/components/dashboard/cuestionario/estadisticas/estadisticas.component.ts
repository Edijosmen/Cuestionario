import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  idCuestionario: number;
  respuestaCuestionario: any;
  constructor(
    private aRoute: ActivatedRoute,
    private RCuestionarioSv:RespuestaCuestionarioService,
    private toastr :ToastrService

  ) { 
    this.idCuestionario = this.aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getListaCuestionarios();
    console.log(this.respuestaCuestionario,"nginit");
  }
  getListaCuestionarios():void {
   this.RCuestionarioSv.getListaCuestionarios(this.idCuestionario).subscribe({
      next: (data: any) =>{
         this.respuestaCuestionario = data;
        console.log(this.respuestaCuestionario,"dfdf");
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  deleteRespuesta(id:number):void {
    console.log(id);
    this.RCuestionarioSv.getRespuestaCuestionarioByID(id).subscribe({
      next: (data:any)=> { 
        this.toastr.success("Respuesta Eliminada con Exito!!","Eliminado");
        this.getListaCuestionarios();
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
