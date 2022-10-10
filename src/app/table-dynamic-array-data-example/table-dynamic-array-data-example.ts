import { Component, Injectable, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { TableserviceService } from '../service/tableservice.service';
import { TableDialogAdddataComponent } from '../table-dialog-adddata/table-dialog-adddata.component';

@Component({
  selector: 'table-dynamic-array-data-example',
  styleUrls: ['table-dynamic-array-data-example.css'],
  templateUrl: 'table-dynamic-array-data-example.html',
})
@Injectable({
  providedIn: 'root',
})
export class TableDynamicArrayDataExample {
  dialogConfig = new MatDialogConfig();
  displayedColumns: string[] = ['date', 'title', 'category', 'image'];
  dataSource = [...ELEMENT_DATA];
  constructor(
    public dialog: MatDialog,
    private dataservice: TableserviceService
  ) {
    this.dataservice.data.subscribe((data) => {
      this.dataSource.push(data);
      this.table.renderRows();
      this.dialogConfig.disableClose = false;

    });
  }

  openDialog() {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    this.dialog.open(TableDialogAdddataComponent, {
      width: '16%',
      height: '33%',
    });
  }

  @ViewChild(MatTable) table!: MatTable<Element>;
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData(index:number) {
    this.dataSource.splice(index, 1);
    console.log(this.dataSource);
    this.table.renderRows();
  }
}

export interface Element {
  date: string | [];
  title: string;
  category: string;

}

const ELEMENT_DATA: Element[] = [
  { date: '1 /9 /2021', title: 'Post 1', category: 'Java Developer' },
  { date: '5 /9 /2021', title: 'Post 2', category: 'MEAN Developer' },
  { date: '12 /9 /2021', title: 'Post 3', category: 'MEARN Developer' },
  { date: '15 /9 /2021', title: 'Post 4', category: 'Andriod Developer' },
  { date: '18 /9 /2021', title: 'Post 5', category: 'Python Developer' },
  { date: '10 /10 /2021', title: 'Post 6', category: 'Java Script Developer' },
  { date: '22 /10 /2021', title: 'Post 7', category: 'VUE Developer' },
  { date: '28 /10 /2021', title: 'Post 8', category: 'IOS Developer' },
  { date: '2 /11 /2021', title: 'Post 9', category: 'AWS Developer' },
  { date: '3 /12 /2021', title: 'Post 10', category: 'Linux Developer' },
];
