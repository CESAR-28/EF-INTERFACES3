import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: ServiceService,
    private router: Router
  ){

  }

  login(usuario: HTMLInputElement, password: HTMLInputElement){
    this.service.login(usuario.value, password.value)

    this.router.navigateByUrl("/dashboard")
  }
}
