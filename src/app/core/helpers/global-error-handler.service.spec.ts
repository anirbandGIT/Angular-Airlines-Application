import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandlerService } from './global-error-handler.service';

describe('ErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalErrorHandlerService = TestBed.get(
      GlobalErrorHandlerService
    );
    expect(service).toBeTruthy();
  });
});
