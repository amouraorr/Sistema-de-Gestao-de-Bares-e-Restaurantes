import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ActivityMonitorService } from './activity-monitor-service/activity-monitor-service.component'; 
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoginComponent,	
	RouterModule,
	RouterLink

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  isInactive: boolean = false;

  constructor(
	private activityMonitorService: ActivityMonitorService,
	private httpcliente: HttpClient,

	
  ) {}

  ngOnInit() {
    
    this.activityMonitorService.isInactive$.subscribe(inactive => {
      this.isInactive = inactive;
      if (inactive) {
        alert('Your token will expire, please log in again!');
      }
    });
  }
}
