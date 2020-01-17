import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { HttpClientModule } from "@angular/common/http";
import { TextMaskModule } from 'angular2-text-mask';


import { FilterFirstNamePipe } from './shared/pipes/first-name-filter.pipe';
import { FilterLastNamePipe } from './shared/pipes/last-name-filter.pipe';
import { InfoComponent } from './info/info.component';
import { ContentFilterPipe } from './shared/pipes/content-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PersonAddComponent,
    PersonViewComponent,
    FilterFirstNamePipe,
    FilterLastNamePipe,
    InfoComponent,
    ContentFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
