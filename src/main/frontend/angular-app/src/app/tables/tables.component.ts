import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TableService, Table } from '../table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatIconModule,
	CommonModule
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tables: Table[] = [];  

  
  constructor(private tableService: TableService) {}

  ngOnInit(): void {
   
    this.tableService.getTables().subscribe(data => {
      this.tables = data;
    });
  }
}
