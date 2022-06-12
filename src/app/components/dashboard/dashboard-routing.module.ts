import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { DetalleRespuestaComponent } from './cuestionario/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { EstadisticasComponent } from './cuestionario/estadisticas/estadisticas.component';
import { NuevoCuestionarioComponent } from './cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasounoComponent } from './cuestionario/nuevo-cuestionario/pasouno/pasouno.component';
import { VerCuestionarioComponent } from './cuestionario/ver-cuestionario/ver-cuestionario.component';

const routes: Routes = [
  {path:'',component:CuestionarioComponent},
    {path:'ver-cuestionario/:id', component:VerCuestionarioComponent},
    {path:'changePassword',component: CambiarPasswordComponent},
    {path:'estadisticas/:id', component: EstadisticasComponent},
    {path:'detalle-Respuesta/:id', component: DetalleRespuestaComponent},
    {path:'nuevoCuestionario',component: NuevoCuestionarioComponent, children:[
      {path:'pasoUno',component: PasounoComponent},
      {path:'pasoDos',component: PasoDosComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
