import { TestBed } from '@angular/core/testing';

import { FormGuard } from './form.guard';

describe('FormGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormGuard = TestBed.get(FormGuard);
    expect(service).toBeTruthy();
  });
});
