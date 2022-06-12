import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Cuestionario } from '../models/cuestionario';
import { RespuestaCuestionario } from '../models/cuestionario/RespuestaCuestionario';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  myAppUrl: string;
  myApiUrl: string;

  nombreParticipante: string="";
  idCuestionario: number=0;
  respuesta: number[]=[];
  respuestas:Respuesta[]=[];
  cuestionario!:Cuestionario;
  constructor(
    private http: HttpClient
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = "/api/RespuestaCuestionario/";
   }

  settIdCuestionario(id:number): void {
    this.idCuestionario=id;
  }
  getIdCuestionario(): number {
    return this.idCuestionario;
  }

  setRespuestaCuestionario(rCuestionario:RespuestaCuestionario):Observable<any> {
    return this.http.post(this.myAppUrl+this.myApiUrl,rCuestionario);
  }

  getListaCuestionarios(idCuestionario:number): Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+idCuestionario);
  }

  getRespuestaCuestionarioByID(idCuestionario:number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+idCuestionario);
  }

  //get lista de respuestas de cuestionariosDetalle
  getlistaRespuestasDetalle(id:number):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+"RespuestaDetalle/"+id);
  }
}