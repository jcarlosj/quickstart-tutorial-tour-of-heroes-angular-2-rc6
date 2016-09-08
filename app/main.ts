// Imports del core de Angular 2 necesarios para este componente
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Imports personalizados necesarios para este componente
import { AppModule } from './app.module';

// Iniciador del modulo raiz
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);