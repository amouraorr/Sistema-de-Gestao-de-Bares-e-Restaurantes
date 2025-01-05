import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { TablesComponent } from '../tables/tables.component';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		RouterOutlet,
		MatMenuModule,
		TablesComponent
	],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
	shouldRun = true;
}
