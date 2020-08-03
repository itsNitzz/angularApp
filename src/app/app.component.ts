import {Component, HostListener, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserLogComponent} from './authentication/user-log.component';

declare var H: any;

enum winState  {
  'closed' = 'double click to maximize' ,
  'open' = 'double click to open side navigation bar'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'flow';
  clickState = true;
  lat = 51.678418;
  lng = 7.809007;
  public win: winState = winState.closed;

  @ViewChild('map')
  public mapElement: ElementRef;
  constructor(public dialog: MatDialog) {  }

  public ngOnInit() { }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserLogComponent, {
      width: '850px',
      height: '525px'
    });
  }

  @HostListener('dblclick', ['$event.target'])
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

