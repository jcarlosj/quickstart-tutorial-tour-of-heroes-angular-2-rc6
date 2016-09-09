// Imports del core de Angular 2 necesarios para este componente
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Imports personalizados necesarios para este componente
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { routing }             from './app.routing';

// Decorador
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing 
  ],
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent 
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})

// Clase principal del modulo
export class AppModule { }
