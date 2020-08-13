import { PhotosService } from './services/photos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AgmCoreModule} from '@agm/core';

import {AppComponent} from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { UserLogComponent } from './authentication/user-log.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ExperimentDirective } from './experiment.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhotosComponent } from './components/photos/photos.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    UserLogComponent,
    ExperimentDirective,
    DashboardComponent,
    PhotosComponent, AlbumsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,

    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule,
    AppRoutingModule,
    MatTooltipModule
  ],
  providers: [PhotosService /*creates single instance of photoservice in entire module*/],
  bootstrap: [AppComponent],
  entryComponents: [UserLogComponent, AlbumsComponent]
})
export class AppModule { }
