import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()   // <-- Emite metadatos acerca de nuestro componente
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    } // stub
}
