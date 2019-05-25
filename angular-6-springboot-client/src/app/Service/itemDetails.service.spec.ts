import { TestBed } from '@angular/core/testing';

import { ItemDetailsService } from './itemDetails.service';

describe('ItemDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDetailsService = TestBed.get(ItemDetailsService);
    expect(service).toBeTruthy();
  });
});
