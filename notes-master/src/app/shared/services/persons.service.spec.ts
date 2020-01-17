import { TestBed } from '@angular/core/testing';

import { PersonsApiService } from './persons-api.service';

describe('PersonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonsApiService = TestBed.get(PersonsApiService);
    expect(service).toBeTruthy();
  });
});
