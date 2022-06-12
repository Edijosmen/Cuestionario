import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})
export class IngresarNombreComponent implements OnInit {
  nombreParticipante:string = "";
  constructor(
    private router: Router,
    private respuetaCuestionario:RespuestaCuestionarioService,
  ) { }

  ngOnInit(): void {
    if(this.respuetaCuestionario.getIdCuestionario()==0){
      this.router.navigate(['/inicio/Cuestionario'])
    }
  }

  siguientePaso(): void {
    this.respuetaCuestionario.nombreParticipante = this.nombreParticipante;
    this.router.navigate(['/inicio/Cuestionario/Responder']);
  }
}
