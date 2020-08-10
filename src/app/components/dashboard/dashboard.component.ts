import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserLogComponent} from '../../authentication/user-log.component';

declare var H: any;

enum winState  {
  'closed' = 'double click to maximize' ,
  'open' = 'double click to open side navigation bar'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'flow';
  clickState = true;
  public win: winState = winState.closed;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserLogComponent, {
      width: '850px',
      height: '525px'
    });
  }

  notMaximized() {
    this.clickState = this.clickState ? false : true;
    if (this.clickState) {
      this.win = winState.closed;
    }
    else {
      this.win = winState.open;
    }
  }
}
