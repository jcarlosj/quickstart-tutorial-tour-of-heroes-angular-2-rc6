// Imports del core de Angular 2 necesarios para este componente
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports personalizados necesarios para este componente
import { AppComponent }   from './app.component';

// Decorador
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

// Clase principal del modulo
export class AppModule { }
