import { TestBed } from '@angular/core/testing';

import { HolidaysService } from './holidays.service';


describe('HolidaysService - Service Test', () => {
  let service: HolidaysService;
  let noValues : any;
  let randumValues : any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysService);
    noValues = service.holidaySearch('', '', '', 0)
    randumValues = service.holidaySearch('dfsaf ', 'fdsadf', '2000-01-01', 1000)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should not null when no value provided`, () => {
    expect(noValues).not.toBeNull();
  });

  it(`should not null when any random value provided`, () => {
    expect(randumValues).not.toBeNull();
  });

});

describe('HolidaysService for Test 1: when departing from MAN, to AGP on 01/07/2023 for 7 nights', () => {
  let service: HolidaysService;
  let valueWithAirportCode: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysService);
    valueWithAirportCode = service.holidaySearch('man', 'agp', '2023-07-01', 7);
  });

  it(`should return flightId 2 `, () => {
    expect(valueWithAirportCode.Flight.Id).toEqual(2);
  });

  it(`should return hotelId 9 `, () => {
    expect(valueWithAirportCode.Hotel.Id).toEqual(9);
  });

});

describe('HolidaysService Test - 2: when departing from LONDON, to PMI on 15/06/2023 for 10 nights', () => {
  let service: HolidaysService;
  let valueWithCityName: any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysService);
    valueWithCityName = service.holidaySearch('London', 'PMI', '2023-06-15', 10);
  });

  it(`should return flightId 6`, () => {
    expect(valueWithCityName.Flight.Id).toEqual(6);
  });

  it(`should return hotelId 5`, () => {
    expect(valueWithCityName.Hotel.Id).toEqual(5);
  });

});

describe('HolidaysService Test - 3: when departing from any airport giving empty string, to LPA on 10/11/2022 for 14 nights', () => {
  let service: HolidaysService;
  let anyAirportDepartures : any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysService);
    anyAirportDepartures = service.holidaySearch('', 'LPA', '2022-11-10', 14);
  });

  it(`should return flightId 6`, () => {
    expect(anyAirportDepartures.Flight.Id).toEqual(7);
  });

  it(`should return hotelId 5`, () => {
    expect(anyAirportDepartures.Hotel.Id).toEqual(6);
  });

});
