import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [	
	SidenavComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  token: string | null = null;

  ngOnInit() {
    this.token = localStorage.getItem('token'); // Recupera o token do localStorage
    console.log("Token:", this.token); // Imprime o token no console
  }
}
