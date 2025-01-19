import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/commons/header/header.component';
import { InsertComponent } from './components/insert/insert/insert.component';
import { HomeComponent } from './components/home/home/home.component';
//inizializzazione dell'istanza-funzione TranslateHttoLoader per la lettura dei file di configurazione dei linguaggi
const httpLoaderFactory: (http:HttpClient)=>TranslateHttpLoader=(http:HttpClient) => new TranslateHttpLoader(http,'./i18n/','.json')
const components:any=[HeaderComponent,InsertComponent,HomeComponent]
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())
    ,importProvidersFrom([TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpLoaderFactory,
        deps:[HttpClient]
      },
    })]),provideHttpClient()]
};
