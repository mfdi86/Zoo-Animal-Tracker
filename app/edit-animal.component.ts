import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:
    <div>
      <div *ngIf="childSelectedAnimal">
      <div *ngIf="childSelectedAnimal">
        <div id="edit-animal-wrapper">
        <h1>Edit Animal</h1>
        <label>Enter Animal Name:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.name">
        <br>
        <label>Enter Animal Species:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.species">
        <br>
        <label>Enter Animal Age:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.age">
        <br>
        <label>Enter Animal Diet:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.diet">
        <br>
        <label>Enter Animal Location:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.location">
        <br>
        <label>Enter Animal Likes:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.likes">
        <br>
        <label>Enter Animal Dislikes:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
        <br>
        <label>Enter Quantity of Caretakers: (1-3):</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.caretakers">
        <br>
        <label>Enter Animal Sex:</label>
        <br>
        <input [(ngModel)]="childSelectedAnimal.sex">
        <br>
        // <label>Edit number of pints available:</label>
        // <br>
        // <button (click)="decreaseButtonClicked()" class="pints-available">-1</button>
        // <button (click)="increaseButtonClicked()" class="pints-available">+1</button>
        // <br>
        // <label>Customer Favorite?</label>
        // <input type="checkbox" (click)="popularClicked(childSelectedAnimal)"/><br>
        // <label>Staff Favorite?</label>
        // <input type="checkbox" (click)="staffPickClicked(childSelectedAnimal)"/><br>
        // <br>
        <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
})
