import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  imports: [CommonModule] 
})
export class LoadingComponent {
  @Input() isLoading: boolean = false;
}
