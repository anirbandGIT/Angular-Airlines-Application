import { TestBed } from '@angular/core/testing';

import { DeveloperGuard } from './developer.guard';

describe('Developer.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeveloperGuard = TestBed.get(DeveloperGuard);
    expect(service).toBeTruthy();
  });
});
