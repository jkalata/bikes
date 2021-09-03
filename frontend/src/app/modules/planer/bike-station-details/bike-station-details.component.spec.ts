import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStationDetailsComponent } from './bike-station-details.component';

describe('BikeStationDetailsComponent', () => {
  let component: BikeStationDetailsComponent;
  let fixture: ComponentFixture<BikeStationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
