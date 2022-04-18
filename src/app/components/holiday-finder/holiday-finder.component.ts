import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { Hotel } from 'src/app/models/hotel.model';
import { FlightsService } from 'src/app/services/flights.service';
import { HolidaysService } from 'src/app/services/holidays.service';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-holiday-finder',
  templateUrl: './holiday-finder.component.html',
  styleUrls: ['./holiday-finder.component.css']
})
export class HolidayFinderComponent implements OnInit {
  flights: Flight[];
  hotels: Hotel[];
  
  constructor(
    private flightService: FlightsService,
    private hotelService: HotelsService,
    private holidayService: HolidaysService
  ){
  this.flights = this.flightService.getFlights()
  this.hotels = this.hotelService.getHotels()
}
  ngOnInit(): void {
  }
  holidaySearch(DepartingFrom: string, TravelingTo: string, DepartureDate: string, Duration: number) {
    return this.holidayService.holidaySearch(DepartingFrom, TravelingTo, DepartureDate, Duration);
  }
}
