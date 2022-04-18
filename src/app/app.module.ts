import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolidayFinderComponent } from './components/holiday-finder/holiday-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayFinderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
