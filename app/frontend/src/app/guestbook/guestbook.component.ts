import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {GuestbookService} from './guestbook.service';
import {NgForm} from '@angular/forms';

export interface GuestbookData {

  name: string;
  message: string;

}

/**
 * @title Data table with sorting, pagination, and filtering.
 */

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-guestbook',
  styleUrls: ['./guestbook.component.css'],
  templateUrl: './guestbook.component.html',
})

export class GuestbookComponent implements OnInit {
  displayedColumns: string[] = ['name', 'message'];

  dataSource: MatTableDataSource<GuestbookData>;

  name: string;
  message: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private guestbookService: GuestbookService) {

  }

  ngOnInit() {
    this.guestbookService.getGuestbook().subscribe(({version, guestBook}) => {
      console.log("Backend version: " + version);
      this.dataSource = new MatTableDataSource(guestBook);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onSubmit(myform: NgForm) {

    this.guestbookService.postGuestbook({name: this.name, message: this.message}).subscribe(result => {
      this.guestbookService.getGuestbook().subscribe(({version, guestBook}) => {
        console.log("Backend version: " + version);
        this.dataSource = new MatTableDataSource(guestBook);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.name = '';
        this.message = '';
      })
    })
    console.log('Successful submit');
    console.log(this.name);
    console.log(this.message);
  }
}


