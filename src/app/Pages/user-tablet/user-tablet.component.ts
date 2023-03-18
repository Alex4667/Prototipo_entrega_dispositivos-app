import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-user-tablet',
  templateUrl: './user-tablet.component.html',
  styleUrls: ['./user-tablet.component.css']
})
export class UserTabletComponent implements OnInit{

  datatable: any;

  constructor() { }

  ngOnInit(): void {



  }

  ngAfterViewInit(): void {
    this.datatable = $('#tabla').DataTable({
      //opciones de DataTables
    });

  }

}
