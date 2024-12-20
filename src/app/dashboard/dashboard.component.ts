import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { ServiceService } from '../auth/service.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute,
    private authService: ServiceService
  ) {

  }

  irOpcionHome(){
    this.router.navigate(["home"],  {relativeTo: this.route})
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["login"])
  }
}
