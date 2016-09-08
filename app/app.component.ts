// Imports del core de Angular 2 necesarios para este componente
import { Component } from '@angular/core';

// Clase Hero
export class Hero {
  id: number;
  name: string;
}

// Decorador
@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `

})

// Clase principal del componente
export class AppComponent {
  // Atributos
  title = 'Tour of Heroes';
  hero: Hero = { // <-- Instanciamos la clase Hero
    id: 1,
    name: 'Windstorm'
  };
}