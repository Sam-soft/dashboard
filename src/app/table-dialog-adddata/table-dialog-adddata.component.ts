import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableserviceService } from '../service/tableservice.service';
import { TableDynamicArrayDataExample } from '../table-dynamic-array-data-example/table-dynamic-array-data-example';

@Component({
  selector: 'app-table-dialog-adddata',
  templateUrl: './table-dialog-adddata.component.html',
  styleUrls: ['./table-dialog-adddata.component.css']
})
export class TableDialogAdddataComponent implements OnInit {



  data: string | [] = [];
  addingdata(date: string | [], title: string, category: string){
    console.log(date, title, category);

    this.dataservice.data.next({
      date,
      title,
      category
    })
  }

  constructor(private dataservice: TableserviceService) {

  }

  ngOnInit(): void {

  }

}

