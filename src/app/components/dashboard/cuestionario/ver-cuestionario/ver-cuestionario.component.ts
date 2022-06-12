import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-ver-cuestionario',
  templateUrl: './ver-cuestionario.component.html',
  styleUrls: ['./ver-cuestionario.component.css']
})
export class VerCuestionarioComponent implements OnInit {
  idCuestionario:number = 0;
  cuestionario:any;
  constructor(
    private router: Router,
    private cuestionarioSv: CuestionarioService,
    private aRoute: ActivatedRoute
    
  ) {
    this.idCuestionario = this.aRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getVerCuestionario();
  }


  getVerCuestionario():void {
    this.cuestionarioSv.verCuestionario(this.idCuestionario).subscribe({
      next:(data:any)=>{ 
        console.log(data);
        this.cuestionario = data;
      },
      error:(err)=>{ console.log(err);
      }
    })
  }
}
