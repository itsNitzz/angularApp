import {Directive, ElementRef, HostListener} from '@angular/core';
import {AppComponent} from './app.component';


@Directive({
  selector: '[appExperiment]'
})
export class ExperimentDirective {

  constructor(private el: ElementRef, public ex: AppComponent) { }
  clickState = true;

  @HostListener('dblclick', ['$event.target'])
  notMaximized() {
    this.clickState = this.clickState ? false : true;
    console.log(this.clickState);
  }
}
