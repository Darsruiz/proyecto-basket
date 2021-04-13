import { TestBed } from '@angular/core/testing';

import { IsLogueadoGuard } from './is-logueado.guard';

describe('IsLogueadoGuard', () => {
  let guard: IsLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
