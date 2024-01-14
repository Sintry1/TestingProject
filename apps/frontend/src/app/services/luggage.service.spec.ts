import 'reflect-metadata';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LuggageType } from '@omnihost/interfaces';
import { Luggage } from '@omnihost/models';
import { LuggageSortOptions, SortOrder } from '@omnihost/interfaces';
import { LuggageService } from '../services/luggage.service';

describe('LuggageService', () => {
  let service: LuggageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LuggageService],
    });

    // Arrange: Inject the LuggageService and HttpTestingController
    service = TestBed.inject(LuggageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Cleanup: Ensure there are no outstanding HTTP requests
    httpTestingController.verify();
  });

  it('should fetch checkin luggages', () => {
    // Arrange: Set up the expected data for the HTTP response
    const expectedLuggages: Luggage[] = [
      {
        luggageId: '1',
        luggageType: LuggageType.CHECKIN,
        arrivalTime: new Date('2022-01-01T12:00:00Z'),
        bags: '2',
        name: 'John Doe',
        tagNr: 'ABC123',
        location: 'Storage Room',
        bbLr: 'Employee1',
        files: ['file1.jpg', 'file2.jpg'],
      },
      {
        luggageId: '2',
        luggageType: LuggageType.CHECKOUT,
        arrivalTime: new Date('2022-01-02T12:30:00Z'),
        bags: '1',
        name: 'Jane Doe',
        tagNr: 'DEF456',
        location: 'Front Desk',
        bbLr: 'Employee2',
        files: ['file3.jpg', 'file4.jpg'],
      },
    ];

    // Act: Make the service method call and subscribe to the observable
    const createdAt = new Date();
    const sortBy = LuggageSortOptions.ARRIVAL_TIME;
    const sortOrder = SortOrder.ASCENDING;
    const search = '';

    service.getCheckin(createdAt, sortBy, sortOrder, search).subscribe(
      // Assert: Check that the response matches the expected data
      (luggages) => {
        expect(luggages).toEqual(expectedLuggages);
      },
      fail
    );

    // Assert: Verify that the HTTP request was made correctly
    const req = httpTestingController.expectOne(
      `apiUrl/luggages/checkin?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
    expect(req.request.method).toEqual('GET');

    // Act: Provide the mock data for the HTTP response
    req.flush(expectedLuggages);
  });
});
