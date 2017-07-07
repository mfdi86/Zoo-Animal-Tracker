import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'; //might not need this?
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <div class="animal-container">
      <div class="each-animal">
        <b><h2>{{currentAnimal.name}}</h2></b>
        <img src={{currentAnimal.image}}><br>
        <b>Species: </b>{{currentAnimal.species}}<br>
        <b>Age: </b>{{currentAnimal.age}}<br>
        <b>Diet: </b>{{currentAnimal.diet}}<br>
        <b>Location: </b>{{currentAnimal.location}}<br>
        <b>No. of Caretakers: </b>{{currentAnimal.caretakers}}<br>
        <b>Likes: </b>{{currentAnimal.like}}<br>
        <b>Dislikes: </b>{{currentAnimal.dislike}}<br>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  caretakers = null;

  editButtonHasBeenClicked(animalToEdit: Animal) {
     this.clickSender.emit(animalToEdit);
   }

  //set done property of animal to true or false
  // toggleDone(clickedAnimal: Animal, setAge: boolean) {
  //   clickedAnimal.done = setAge;
  // }

  isDone(clickedAnimal: Animal) {
   if(clickedAnimal.done === true) {
   }
  }
}
