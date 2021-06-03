import { TestBed } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth.guard';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoAuthGuard = TestBed.get(NoAuthGuard);
    expect(service).toBeTruthy();
  });
});
