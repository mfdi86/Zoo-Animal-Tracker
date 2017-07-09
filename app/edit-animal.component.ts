import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="edit-animal">
      <div *ngIf="childSelectedAnimal">
        <h1>Edit {{childSelectedAnimal.name}}</h1>
        <h3>Edit Animal</h3>
        <label>Name:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.name"><br>
        <label>Species:</label><br>
        <input [(ngModel)]="childSelectedAnimal.species"><br>
        <label>Age:</label><br>
        <input [(ngModel)]="childSelectedAnimal.age"><br>
        <label>Diet:</label><br>
        <input [(ngModel)]="childSelectedAnimal.diet"><br>
        <label>Location:</label><br>
        <input [(ngModel)]="childSelectedAnimal.location"><br>
        <label>Enter Animal Likes:</label><br>
        <input [(ngModel)]="childSelectedAnimal.likes"><br>
        <label>Dislikes:</label><br>
        <input [(ngModel)]="childSelectedAnimal.dislikes"><br>
        <label>Quantity of Caretakers: (1-3):</label><br>
        <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
        <label>Sex:</label><br>
        <input [(ngModel)]="childSelectedAnimal.sex"><br>
        <button (click)="doneButtonClicked()">Done</button>
        </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
