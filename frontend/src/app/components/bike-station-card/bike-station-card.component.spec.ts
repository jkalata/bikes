import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStationCardComponent } from './bike-station-card.component';

describe('BikeStationCardComponent', () => {
  let component: BikeStationCardComponent;
  let fixture: ComponentFixture<BikeStationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeStationCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
