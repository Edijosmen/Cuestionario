import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { DetalleRespuestaComponent } from './cuestionario/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { EstadisticasComponent } from './cuestionario/estadisticas/estadisticas.component';
import { NuevaPreguntaComponent } from './cuestionario/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { NuevoCuestionarioComponent } from './cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasounoComponent } from './cuestionario/nuevo-cuestionario/pasouno/pasouno.component';
import { VerCuestionarioComponent } from './cuestionario/ver-cuestionario/ver-cuestionario.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
  CambiarPasswordComponent,
  CuestionarioComponent,
  NuevoCuestionarioComponent,
  PasounoComponent,
  PasoDosComponent,
  NuevaPreguntaComponent,
  EstadisticasComponent,
  DetalleRespuestaComponent,
  VerCuestionarioComponent,
  NuevoCuestionarioComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
