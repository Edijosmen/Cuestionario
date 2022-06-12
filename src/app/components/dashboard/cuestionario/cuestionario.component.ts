import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';
import { AuthService } from 'src/app/services/auth.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  nombreUsuario: string | undefined;
  listCuestionario:Cuestionario[]=[];
  constructor(
    private loginSv: AuthService,
    private router: Router,
    private cuestionarioSv: CuestionarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getNombreUser()
    this.getCuestionarioByUser();
    this.listar();
  }

  getNombreUser(): void{
    console.log(this.loginSv.getTokenDecoded());
    this.nombreUsuario = this.loginSv.getTokenDecoded().sub.toUpperCase();
  }

  getCuestionarioByUser(): void {
    this.cuestionarioSv.getListCuestionarioByUser().subscribe({
      next:(data: Cuestionario[]) =>{
        this.listCuestionario = data;
       
      },
      error:(err) =>{
        console.log(err);
      }
    })
  }


  eliminarCuestionario(id:any): void {
    if(confirm(" Esta seguro que desea Eliminar el Cuestionario")){
      this.cuestionarioSv.deleteCuestionario(id).subscribe({
        next:(data:any)=>{ console.log(data);
          this.toastr.success("Cuestionario Eliminado con Exito!","Registro Eliminado");
          this.getCuestionarioByUser();
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
    
  }
  listar():void{
    for (let cuestionario of this.listCuestionario) {
      console.log("cuestionario",cuestionario);
    }
  }
}
