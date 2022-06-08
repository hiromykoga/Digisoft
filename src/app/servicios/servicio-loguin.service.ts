import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioLoguinService {

  urlBase:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  autorizacionLoguin(usuario:string,clave:string){
    console.log('-----------> autorizacionLoguin');
    console.log('-----------> usuario: '+usuario);
    console.log('-----------> clave: '+clave);
    
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(usuario+":"+clave)})
    return this.http.get<string>(this.urlBase+'login',{headers,responseType:'text' as 'json'});
  }
}
