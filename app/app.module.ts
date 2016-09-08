// Imports del core de Angular 2 necesarios para este componente
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Imports personalizados necesarios para este componente
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

// Decorador
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent 
  ],
  bootstrap:    [ AppComponent ]
})

// Clase principal del modulo
export class AppModule { }
