// Imports del core de Angular 2 necesarios para este componente
import { Component, OnInit } from '@angular/core';

// Imports personalizados necesarios para este componente
import { Hero } from './hero';
import { HeroService } from './hero.service';

// Decorador
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})

// Clase principal del componente
export class DashboardComponent implements OnInit { 
      heroes: Hero[] = [];

  // Constructor    
  constructor( private heroService: HeroService ) { }

  // Lifecycle Hooks
  ngOnInit(): void {
    this.heroService.getHeroes()
        .then( heroes => this.heroes = heroes.slice( 1, 5 ) );
  }

  gotoDetail(hero: Hero): void { /* no implementado aun */}
}
