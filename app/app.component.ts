//This file is the root component.

//Import statements from the Angular core:
import { Component } from '@angular/core';
import { Animal } from './animal.model';

//Annotation/Decorator/determines component's APPEARANCE
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Animal Tracker</h1>
    <h3>{{appDescription}}</h3>
  </div>
  `
})

//Class Declaration (determines the component's BEHAVIOR)
export class AppComponent {
  appDescription: string = 'An application to store zoo animal profiles';
}
