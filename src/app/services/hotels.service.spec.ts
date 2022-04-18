import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels.service';

describe('HotelsService', () => {
  let service: HotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`getHotels should not be null`, () => {
    expect(service.getHotels()).not.toBeNull();
  });

  it(`should return hotel results is greater than 0`, () => {
    expect(service.getHotels().length).toBeGreaterThan(0);
  });
  
});
