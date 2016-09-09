// Imports del core de Angular 2 necesarios para este componente
import { Component } from '@angular/core';

// Decorador
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
 `
})

// Clase principal del componente
export class AppComponent {
  title = 'Tour of Heroes';
}