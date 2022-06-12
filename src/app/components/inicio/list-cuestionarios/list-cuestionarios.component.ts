import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaCuestionario } from 'src/app/models/cuestionario/ListaCuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {
  listaCuestionario:any;
  idCuestionario: number = 0;
  constructor(
    private router: Router,
    private cuestionarioSv: CuestionarioService,
    private respuestasCuestionarios:RespuestaCuestionarioService
  ) { }

  ngOnInit(): void {
    this.listaCuestionarios();
  }

  listaCuestionarios(): void {
    this.cuestionarioSv.getListaCuestionarios().subscribe({
      next:(data:ListaCuestionario)=>{
        this.listaCuestionario = data;
      }
    })
  }
  ingresarNombre(id:number): void {
    this.router.navigate(['/inicio/Cuestionario/nombre']);
    this.respuestasCuestionarios.settIdCuestionario(id);
  }
}
