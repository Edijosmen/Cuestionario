import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-pasouno',
  templateUrl: './pasouno.component.html',
  styleUrls: ['./pasouno.component.css']
})
export class PasounoComponent implements OnInit {
  cuestionarioDate:FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cuestionarioSv: CuestionarioService
          ) {
           this.cuestionarioDate = this.fb.group({
              titulo:['', Validators.required],
              descripcion:['', Validators.required]
            });
           }

  ngOnInit(): void {
  }
  pasoUno(): void {
    this.cuestionarioSv.titulo = this.cuestionarioDate.value.titulo;
    this.cuestionarioSv.descripcion = this.cuestionarioDate.value.descripcion;
   
    this.router.navigate(['dashboardx/nuevoCuestionario/pasoDos'])
  }
}
