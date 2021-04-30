import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgSwitchCase } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainPageComponent } from './components/main-page/main-page.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CocinaComponent } from './components/cocina/cocina.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TitleComponent,
    FooterComponent,
    CocinaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
