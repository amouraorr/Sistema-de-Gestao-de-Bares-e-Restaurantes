import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthResponse } from '../interfaces/auth-response';
import { UserService } from '../user.service';
import { LoadingComponent } from '../loading/loading.component'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    LoadingComponent,
	CommonModule
  ]
})
export class LoginComponent {
  isLoading = false; // Initialize isLoading to false

  constructor(
    private authService: AuthService, 
    private router: Router,            
    private userService: UserService    
  ) {}

  // OnSubmit method
  onSubmit(form: any) {
      this.isLoading = true; // Show the loading icon immediately

      this.authService.login(form.value.username, form.value.password).subscribe(
          (response: AuthResponse) => {        
              // Simulate a delay to show loading effect
              setTimeout(() => {
                  if (response) {
                      // Armazenar o token separadamente
                      localStorage.setItem('token', response.token); 
                      // Armazenar as informações do usuário
                      localStorage.setItem('user', JSON.stringify(response)); 
                      console.log("Token:", response.token); 

                      this.userService.changeUsername(response.username);
                      
                      this.router.navigate(['/dashboard']).then(success => {
                          this.isLoading = false; // Hide loading after navigation
                          if (!success) {
                              console.error('Failed to navigate to the dashboard');
                          }
                      });
                  } else {
                      console.error('Empty response from server');
                      window.alert('Login successful, but no user data available.');
                      this.isLoading = false; // Hide loading in case of empty response
                  }
              }, 2000); // Delay of 2 seconds to simulate loading
          },
          (error: any) => {
              // Add delay also in case of error to test loading
              setTimeout(() => {
                  this.isLoading = false; // Hide loading in case of error
                  window.alert(`Login attempt failed for user, please check your credentials and try again.`);
                  console.error('Login error:', error);
              }, 2000); // Delay of 2 seconds to show loading in case of error
          }
      );
  }

}
