import { TestBed } from '@angular/core/testing';

import { NewpostvalidatorService } from './newpostvalidator.service';

describe('NewpostvalidatorService', () => {
  let service: NewpostvalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpostvalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
