import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h1>List of Current Animals:</h1>
  <select (change)='onChange($event.target.value)'>
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="olderAnimals">Older Animals</option>
  </select>
  <div class="animal-wrapper">
    <ul>
      <li *ngFor='let currentAnimal of childAnimalList | ageFilter:filterByAge'>
        <div class="animal">
          <h2>{{currentAnimal.name}}</h2>
          <b>Species: </b>{{currentAnimal.species}}<br>
          <b>Age: </b>{{currentAnimal.age}}<br>
          <b>Diet: </b>{{currentAnimal.diet}}<br>
          <b>Location: </b>{{currentAnimal.location}}<br>
          <b>No. of Caretakers: </b>{{currentAnimal.caretakers}}<br>
          <b>Likes: </b>{{currentAnimal.likes}}<br>
          <b>Dislikes: </b>{{currentAnimal.dislikes}}<br>
          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!!!</button>
        </div>
      </li>
    </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
     this.clickSender.emit(animalToEdit);
  }

  filterByAge: string = 'allAnimals';

  isDone(clickedAnimal: Animal) {
   if(clickedAnimal.done === true) {
   }
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }



}
