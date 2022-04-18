import { TestBed } from '@angular/core/testing';

import { FlightsService } from './flights.service';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`getFlights should not be null`, () => {
    expect(service.getFlights()).not.toBeNull();
  });

  it(`should return flight results is greater than 0`, () => {
    expect(service.getFlights().length).toBeGreaterThan(0);
  });

});
