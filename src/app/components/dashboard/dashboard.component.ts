import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserLogComponent} from '../../authentication/user-log.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {
   }

   ngOnInit() { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserLogComponent, {
      width: '850px',
      height: '525px'
    });
  }
}
