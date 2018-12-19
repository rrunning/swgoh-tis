import { TestBed } from '@angular/core/testing';

import { FetchCharactersService } from './fetch-characters.service';

describe('FetchCharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchCharactersService = TestBed.get(FetchCharactersService);
    expect(service).toBeTruthy();
  });
});
