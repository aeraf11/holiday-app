import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Hotel } from '../models/hotel.model';
import { FlightsService } from './flights.service';
import { HotelsService } from './hotels.service';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  flights: Flight[];
  hotels: Hotel[];

  constructor(
    private flightService: FlightsService,
    private hotelService: HotelsService
  ) { 
    this.flights = this.flightService.getFlights()
    this.hotels = this.hotelService.getHotels()
  }
  holidaySearch(DepartingFrom: string, TravelingTo: string, DepartureDate: string, Duration: number) {
    var londonAirports = ["LEK", "LCY", "LGW", "LHR"];

    var flightSearch = this.flights.filter(f => {
      if(DepartingFrom === ''){
        return f.to === TravelingTo && f.departure_date === DepartureDate 
      } 
      else if(DepartingFrom.toUpperCase() === 'LONDON'){
        return londonAirports.includes(f.from) && f.to === TravelingTo.toUpperCase() && f.departure_date === DepartureDate 
      }
      else {
        return f.from === DepartingFrom.toUpperCase() && f.to === TravelingTo.toUpperCase() && f.departure_date === DepartureDate 
      }
    })[0];
    var hotelSearch = this.hotels.filter(h => 
    {
      var connectingAirport = false;
      h.local_airports.forEach(a => {
        if(a === TravelingTo.toUpperCase()){
          connectingAirport = true;
        }
      });
      return h.arrival_date === DepartureDate && h.nights == Duration && connectingAirport
    })[0];
    var result = {
        Flight: {
            Id: flightSearch ? flightSearch?.id : 0
          , DepartingFrom: flightSearch ? flightSearch?.from : DepartingFrom
          , TravellingTo:  flightSearch ? flightSearch?.to : TravelingTo
          , Price:  flightSearch ? flightSearch?.price : 0
        }
      , Hotel: {
            Id: hotelSearch ? hotelSearch?.id : 0
          , Name: hotelSearch ? hotelSearch?.name : ''
          , Price: hotelSearch ? hotelSearch?.price_per_night : 0
        }
      , TotalPrice : (flightSearch ?flightSearch?.price : 0) + (hotelSearch ? hotelSearch?.price_per_night : 0)
    }
    return result;
  }

}
