import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        OAuthModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
