import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './components/dashboard/cuestionario/cuestionario.component';
import { DetalleRespuestaComponent } from './components/dashboard/cuestionario/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { EstadisticasComponent } from './components/dashboard/cuestionario/estadisticas/estadisticas.component';
import { NuevoCuestionarioComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasounoComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/pasouno/pasouno.component';
import { VerCuestionarioComponent } from './components/dashboard/cuestionario/ver-cuestionario/ver-cuestionario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component:InicioComponent,children:[
    {path:'', component: BienvenidaComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'Cuestionario',
      loadChildren:()=> import('./components/inicio/list-cuestionarios/list-cuestionarios.module')
      .then(x=>x.ListCuestionariosModule)},
    
  ]},
  {path:'dashboardx',component: DashboardComponent,canActivate:[AuthGuard],
                    loadChildren:()=> import('./components/dashboard/dashboard.module')
                    .then(x=>x.DashboardModule)},
  //{path:'**',redirectTo:'/inicio',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
