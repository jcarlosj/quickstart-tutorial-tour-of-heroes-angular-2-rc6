// Imports del core de Angular 2 necesarios para este componente
import { Component } from '@angular/core';

// Decorador
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})

// Clase principal del componente
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}