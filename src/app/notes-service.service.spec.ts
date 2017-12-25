import { TestBed, inject } from '@angular/core/testing';

import { NotesServiceService } from './notes-service.service';

describe('NotesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesServiceService]
    });
  });

  it('should be created', inject([NotesServiceService], (service: NotesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
