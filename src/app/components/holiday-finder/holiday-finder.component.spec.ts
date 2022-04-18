import { ComponentFixture, TestBed } from '@angular/core/testing';

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
