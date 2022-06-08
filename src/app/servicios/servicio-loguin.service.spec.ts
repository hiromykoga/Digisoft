import { TestBed } from '@angular/core/testing';

import { ServicioLoguinService } from './servicio-loguin.service';

describe('ServicioLoguinService', () => {
  let service: ServicioLoguinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLoguinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
