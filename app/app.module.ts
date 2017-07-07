//Import statements from the Angular core:

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';


@NgModule({
  imports: [ BrowserModule ], //other modules used in THIS module
  declarations: [ AppComponent ], //all components residing in THIS module
  bootstrap:    [ AppComponent ] //components required immediately upon launching
})

//Class Declaration (determines the component's BEHAVIOR)
export class AppModule { }
