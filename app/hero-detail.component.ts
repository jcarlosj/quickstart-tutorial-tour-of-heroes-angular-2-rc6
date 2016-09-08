// Imports del core de Angular 2 necesarios para este componente
import { Component, Input } from '@angular/core';

// Imports personalizados necesarios para este componente
import { Hero } from './hero';

// Decorador
@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

// Clase principal del componente
export class HeroDetailComponent {
  @Input()      // <-- Habilita la entrada de datos desde otro componente
  hero: Hero;   // <-- Recibe datos de entrada
}
