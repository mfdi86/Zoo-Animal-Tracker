//This file is the root component.

import { Component } from '@angular/core';
import { Animal } from './animal.model';

//Annotation/Decorator/determines component's APPEARANCE
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Animal Tracker</h1>
    <h3>{{appDescription}}</h3>
    <!--Animal List-->
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <!--Edit Animals-->
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal><!--Expect an action from the output newAnimalSender.  $event is a paramter which accepts whatever newAnimalSender brings up from the child-->
  </div>
  `
})

// Class Declaration (determines the component's BEHAVIOR)
export class AppComponent {
  selectedAnimal: null;
  appDescription: string = 'An application to store zoo animal profiles';
  masterAnimalList: Animal[] = [
    new Animal('Elephant', 'Thomas', 3, 'Leaves', 'Forest Two', 2, 'Male', 'Bath time', 'Loud noises'),
    new Animal('Gorilla', 'Susan', 2, 'Leaves', 'Forest One', 1, 'Female', 'Music', 'Sad faces'),
    new Animal('Tiger', 'Joe', 4, 'Mice', 'JungleOne', 1, 'Male', 'Running around', 'Loud noises')
  ];

// this method defines selectedAnimal as the Animal with the most recently clicked edit button:
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
