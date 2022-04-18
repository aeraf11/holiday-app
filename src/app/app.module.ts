import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolidayFinderComponent } from './components/holiday-finder/holiday-finder.component';
import { FlightsService } from './services/flights.service';
import { HolidaysService } from './services/holidays.service';
import { HotelsService } from './services/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    HolidayFinderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FlightsService, HotelsService, HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
