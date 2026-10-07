import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home.component';
import { HeaderComponent } from './presentation/home/components/header/header.component';
import { BodyComponent } from './presentation/home/components/body/body.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ServicesComponent } from './presentation/home/components/services/services.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProblemsComponent } from './presentation/home/components/problems/problems.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NavComponent,
    ServicesComponent,
    ProblemsComponent
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
