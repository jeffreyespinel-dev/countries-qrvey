import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { MaterialModule } from './_modules/material.module';
import { ToolbarComponent } from './_master-page/toolbar/toolbar.component';
import { ContinentsListComponent } from './_components/continents-list/continents-list.component';
import { ContinentItemComponent } from './_components/continents-list/continent-item/continent-item.component';
import { CountriesListComponent } from './_components/continents-list/continent-item/countries-list/countries-list.component';
import { CountryItemComponent } from './_components/continents-list/continent-item/countries-list/country-item/country-item.component';
import { ViewCountryComponent } from './_components/continents-list/continent-item/countries-list/country-item/view-country/view-country.component';

import { DataService } from './_services/data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContinentsListComponent,
    ContinentItemComponent,
    CountriesListComponent,
    CountryItemComponent,
    ViewCountryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [ViewCountryComponent]
})
export class AppModule { }
