import { TestBed } from '@angular/core/testing';

import { ExpiredItemDetailsService } from './expired-item-details.service';

describe('ExpiredItemDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpiredItemDetailsService = TestBed.get(ExpiredItemDetailsService);
    expect(service).toBeTruthy();
  });
});
