import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';



@Component({
  selector: 'app-user-retired',
  templateUrl: './user-retired.component.html',
  styleUrls: ['./user-retired.component.css']
})
export class UserRetiredComponent implements OnInit {

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
