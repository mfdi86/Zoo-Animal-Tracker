//This file is the root component.

import { Component } from '@angular/core';
import { Animal } from './animal.model';

//Annotation/Decorator/determines component's APPEARANCE
@Component({
  selector: 'app-root',
  template: `
  <div class="hero">
    <div class="hero-text">
      <h1>ANIMAL TRACKS</h1>
      <h3>{{appDescription}}</h3>
    </div>
  </div>
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <div class="animal-forms">
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <!--Expect an action from the output newAnimalSender.  $event is a paramter which accepts whatever newAnimalSender brings up from the child-->
    <edit-animal [childSelectedAnimal]="selectedAnimal"
    (doneButtonClickSender)="finishedEditing()"></edit-animal>
    </div>
  </div>
  `
})

// Class Declaration (determines the component's BEHAVIOR)
export class AppComponent {
  appDescription: string = 'AN APPLICATION TO STORE ZOO ANIMAL PROFILES!';
  masterAnimalList: Animal[] = [
    new Animal('Elephant', 'Thomas', 1, 'Leaves', 'Forest Two', 3, 'Male', 'Bath time', 'Loud noises'),
    new Animal('Gorilla', 'Susan', 2, 'Leaves', 'Forest One', 2, 'Female', 'Music', 'Sad faces'),
    new Animal('Lion', 'Jolene', 4, 'Mice', 'JungleTwo', 1, 'Female', 'Running around', 'Pineapple'),
    new Animal('Red Panda', 'Joe', 7, 'Mice', 'JungleOne', 1, 'Male', 'Running around', 'Loud noises')
  ];

  selectedAnimal = null;

  finishedEditing() {
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
