import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserLogComponent} from '../../authentication/user-log.component';
import {GalleryComponent} from '../../components/gallery/gallery.component';
import {BookmarkComponent} from '../../components/bookmark/bookmark.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('dynamic', {read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(
    public dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

   ngOnInit() { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserLogComponent, {
      width: '850px',
      height: '525px'
    });
  }

  addElement(ComponentType: string){
    this.target.clear();
    if (ComponentType === 'Gallery') {
      this.addGalleryComponent();
    }
    if (ComponentType === 'Bookmarks') {
      this.showBookmarksComponent();
    }
  }

  addGalleryComponent(){
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(GalleryComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

  showBookmarksComponent(){
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(BookmarkComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }
}
