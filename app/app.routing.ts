// Imports del core de Angular 2 necesarios para este componente
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Clases personalizadas de nuestra aplicación
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component'

// Array de tuplas con la definicion (configuracion) de las rutas
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent 
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

// Exportamos una constante con la configuracion del modulo de rutas, agregando (con forRoot) 
// a su arbol de rutas, nuevas rutas (appRoutes), teniendo acceso a proveedores de servicios 
// y directivas necesarias para nuestra navegacion 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);