import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-splash-screen></app-splash-screen>
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-languages></app-languages>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'angular-portfolio';
}
