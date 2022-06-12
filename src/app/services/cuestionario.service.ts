import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { ListaCuestionario } from '../models/cuestionario/ListaCuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  titulo:string="";
  descripcion:string="";
  urlBase:string;
  urlApi:string;
  idCuestionario: number=0;
  constructor(private http:HttpClient) {
    this.urlBase = environment.endpoint;
    this.urlApi = "/api/Cuestionario/";
   }

  guardarCuestionario(cuestionario:Cuestionario):Observable<any>{
    return this.http.post(this.urlBase + this.urlApi, cuestionario);
  }
  getListCuestionarioByUser():Observable<any>{
    return this.http.get(this.urlBase + this.urlApi+"GetcuestinarioBy");
  }
  deleteCuestionario(Id:number):Observable<any>{
    return this.http.delete(this.urlBase + this.urlApi +Id);
  }
  verCuestionario(Id:number):Observable<any>{
    return this.http.get(this.urlBase + this.urlApi+Id);
  }
  getListaCuestionarios():Observable<any>{
    return this.http.get(this.urlBase + this.urlApi+"GetListCuestionario");
  }
}
