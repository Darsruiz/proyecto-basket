import { TestBed } from '@angular/core/testing';

import { LogueadoService } from './logueado.service';

describe('LogueadoService', () => {
  let service: LogueadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogueadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
