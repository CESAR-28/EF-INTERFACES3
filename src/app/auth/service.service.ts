import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  login(usuario: string, password:string) {
    if(usuario == "sl75834797" && password == "28061995") {
      sessionStorage.setItem("login", "true")
    }
  }

  logout(){
    sessionStorage.clear()
  }

  isLogin(): boolean{
    return !!sessionStorage.getItem("login")
  }
}
