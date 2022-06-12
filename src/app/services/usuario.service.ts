import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeUser } from '../models/change-user';
import { IResponse } from '../models/Response';
import {IUsuario} from '../models/usuario'
import { UsuarioM } from '../models/UsuarioM';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  ulrbase: string
  constructor(private http: HttpClient) {
    this.ulrbase=environment.endpoint;
  }


  saveUser(usuario: UsuarioM):Observable<any> {
    return this.http.post(this.ulrbase+"/api/Usuario",usuario);
  }

  changePassword(usuario:ChangeUser):Observable<any> {
    return this.http.put(this.ulrbase+"/api/Usuario/changePassword",usuario);
  }
}
