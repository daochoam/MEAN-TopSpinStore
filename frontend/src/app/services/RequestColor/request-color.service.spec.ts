import { TestBed } from '@angular/core/testing';

import { RequestColorService } from './request-color.service';

describe('RequestColorService', () => {
  let service: RequestColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
