import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRountingModule } from './app-routing.module';
import { PagesModule } from './page/pages.module';
import { AuthModule } from './auth/auth.module';

// Componentes
import { AppComponent } from './app.component';
import { NotpageFoundComponent } from './notpage-found/notpage-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotpageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
