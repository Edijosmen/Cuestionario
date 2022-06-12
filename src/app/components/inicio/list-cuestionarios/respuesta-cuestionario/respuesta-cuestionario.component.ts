import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-respuesta-cuestionario',
  templateUrl: './respuesta-cuestionario.component.html',
  styleUrls: ['./respuesta-cuestionario.component.css']
})
export class RespuestaCuestionarioComponent implements OnInit {
  cuestionario:Cuestionario;
  respuestas:number[];
  respon:string="";
  constructor(
    private router: Router,
    private resptCuestioarioSv:RespuestaCuestionarioService
  ) {
    this.cuestionario = resptCuestioarioSv.cuestionario;
    this.respuestas = resptCuestioarioSv.respuesta;
   }


  ngOnInit(): void {
   this.validarDatos();
    
  }

  validarDatos():void{
    if(this.cuestionario==undefined && this.respuestas.length==0){
      this.router.navigate(['/inicio/listaCuestionario']);
    }
  }

  


}
