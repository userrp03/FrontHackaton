import { TestBed } from '@angular/core/testing';

import { DonationRecordService } from './donation-record.service';

describe('DonationRecordService', () => {
  let service: DonationRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
