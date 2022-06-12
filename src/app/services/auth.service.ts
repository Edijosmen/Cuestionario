import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { IUsuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ulrbase: string
  constructor(private http: HttpClient) {
    this.ulrbase=environment.endpoint;
  }


  loginUser(usuario: IUsuario):Observable<any> {
    return this.http.post(this.ulrbase+"/api/login",usuario);
  }

  setLocalStorage(data:string): void {
     localStorage.setItem("Token",JSON.stringify(data));
  }

  removeLocalStorage():void {
    localStorage.removeItem("Token");
  }
  getTokenDecoded():any{
    var token :string;
    const helper = new JwtHelperService();
    if(localStorage["Token"]){
      token = localStorage.getItem('Token')!;
      const decodedToken = helper.decodeToken(token);
      return decodedToken;
    }
   return null;
    
  }
  getToken():string{
    return localStorage.getItem('Token')!;
  }
}
