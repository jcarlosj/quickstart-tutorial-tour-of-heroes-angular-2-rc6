// Imports del core de Angular 2 necesarios para este componente
import { Component } from '@angular/core';

// Imports personalizados necesarios para este componente
import { Hero }    from './hero';

// Decorador
@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})

// Clase principal del componente
export class HeroFormComponent {
  
  // Atributos: 
  powers = ['Really Smart', 'Super Flexible',   // <-- Datos simulados
            'Super Hot', 'Weather Changer'];
  model = new Hero(                             // <-- Datos simulados
      18, 'Dr IQ', 
      this.powers[0], 
      'Chuck Overstreet'
  );
  submitted = false;
  
  // Metodos
  onSubmit() { 
    this.submitted = true; 
  }

  get diagnostic() { 
    return JSON.stringify( this.model );    // <-- Retorna cadena JSON 
  }
}
