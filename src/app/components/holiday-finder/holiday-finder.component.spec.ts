import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnonymousSubject } from 'rxjs/internal/Subject';

import { HolidayFinderComponent } from './holiday-finder.component';

describe('HolidayFinderComponent', () => {
  let component: HolidayFinderComponent;
  let fixture: ComponentFixture<HolidayFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('HolidayFinderComponent Holiday Service Test', () => {
  let component: HolidayFinderComponent;
  let fixture: ComponentFixture<HolidayFinderComponent>;
  let departureAirportSearch: any;
  let departureCitySearch: any;
  let anyDepartureSearch: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    departureAirportSearch = component.holidaySearch('man', 'agp', '2023-07-01', 7);
    departureCitySearch = component.holidaySearch('London', 'PMI', '2023-06-15', 10);
    anyDepartureSearch = component.holidaySearch('', 'LPA', '2022-11-10', 14);
  });

  it('should return not null ', () => {
    expect(departureAirportSearch).not.toBeNull();
  });
  it('should return flightId 2 when departing from MAN, to AGP on 01/07/2023 for 7 nights', () => {
    expect(departureAirportSearch.Flight.Id).toEqual(2);
  });
  it('should return hotelId 9 when departing from MAN, to AGP on 01/07/2023 for 7 nights', () => {
    expect(departureAirportSearch.Hotel.Id).toEqual(9);
  });
  it('should return flightId 6 when departing from LONDON, to PMI on 15/06/2023 for 10 nights', () => {
    expect(departureCitySearch.Flight.Id).toEqual(6);
  });
  it('should return hotelId 5 when departing from LONDON, to PMI on 15/06/2023 for 10 nights', () => {
    expect(departureCitySearch.Hotel.Id).toEqual(5);
  });
  it('should return flightId 7 when departing from ANY, to LPA on 10/11/2022 for 14 nights', () => {
    expect(anyDepartureSearch.Flight.Id).toEqual(7);
  });
  it('should return hotelId 6 when departing from ANY, to LPA on 10/11/2022 for 14 nights', () => {
    expect(anyDepartureSearch.Hotel.Id).toEqual(6);
  });

})