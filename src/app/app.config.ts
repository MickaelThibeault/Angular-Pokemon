import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

export const appConfig: ApplicationConfig = {
  providers: [
      provideHttpClient(),
      importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100, dataEncapsulation: false })),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
  ]
};
