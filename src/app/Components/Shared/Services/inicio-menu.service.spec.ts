import { TestBed } from '@angular/core/testing';

import { InicioMenuService } from './inicio-menu.service';

describe('InicioMenuService', () => {
  let service: InicioMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
