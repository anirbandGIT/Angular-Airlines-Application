import { TestBed } from '@angular/core/testing';

import { PassengerMealService } from './passenger-meal.service';

describe('PassengerMealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassengerMealService = TestBed.get(PassengerMealService);
    expect(service).toBeTruthy();
  });
});
