// Imports del core de Angular 2 necesarios para este componente
import { Injectable } from '@angular/core';

// Imports personalizados necesarios para este componente
import { Hero }   from './hero';
import { HEROES } from './mock-heroes';

// Decorador
@Injectable()   // <-- Emite metadatos acerca de nuestro componente
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    } // stub

    // Podemos simular retardos ocasionados por conexiones lentas
    getHeroesSlowly(): Promise<Hero[]> {
    
        return new Promise<Hero[]> ( resolve => setTimeout( resolve, 2000) ) // Retarda 2 segundos
                    .then( () => this.getHeroes() );
    }

}
