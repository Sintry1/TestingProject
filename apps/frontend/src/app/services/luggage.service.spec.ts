import 'reflect-metadata';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ICreateLuggageRequest, ILuggage, LuggageType } from '@omnihost/interfaces';
import { LuggageSortOptions, SortOrder } from '@omnihost/interfaces';
import { LuggageService } from '../services/luggage.service';
import 'multer';

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

  const testCases = [
    {
      description: 'should fetch checkin luggages with default parameters',
      createdAt: new Date(),
      sortBy: undefined,
      sortOrder: undefined,
      search: '',
      expectedLuggages: [
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
      ],
    },
    {
      description: 'should fetch checkin luggages sorted by name in descending order',
      createdAt: new Date(),
      sortBy: LuggageSortOptions.NAME,
      sortOrder: SortOrder.DESCENDING,
      search: '',
      expectedLuggages: [
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
      ],
    },
    {
      description: 'should fetch luggage by ID',
      id: '1',
      expectedLuggage: {
        luggageId: '1',
        luggageType: LuggageType.CHECKIN,
        arrivalTime: new Date('2022-01-01T12:00:00Z'),
        bags: '2',
        name: 'John Doe',
        tagNr: 'ABC123',
        location: 'Storage Room',
        bbLr: 'Employee1',
        files: ['file1.jpg', 'file2.jpg'],
        downloadUrls: ['http://localhost:3333/file1.jpg', 'http://localhost:3333/file2.jpg'],
      },
    },
  ];

  for (const testCase of testCases) {
    it(testCase.description, (done) => {
      if ('id' in testCase && testCase.id !== undefined) {
        // It's a getById test case with a defined id
        const { id, expectedLuggage } = testCase;
        const expectedUrl = `http://localhost:3333/luggages/id/${id}`;

        // Act: Make the service method call and subscribe to the observable
        service.getById(id).subscribe(
          // Assert: Check that the response matches the expected data
          (luggage) => {
            try {
              expect(luggage).toEqual(expectedLuggage);
              done(); // Call done to signal that the asynchronous test is done
            } catch (error) {
              done.fail(error as string | { message: string } | undefined);
            }
          },
          (error: string | { message: string } | undefined) => {
            done.fail(error);
          }
        );

        // Assert: Verify that the HTTP request was made correctly
        const req = httpTestingController.expectOne(expectedUrl);

        expect(req.request.method).toEqual('GET');

        // Act: Provide the mock data for the HTTP response
        req.flush(expectedLuggage);
      } else {
        // It's a getCheckin test case (existing test case structure)
        const { createdAt, sortBy, sortOrder, search, expectedLuggages } = testCase;

        // Log the expected and actual URLs to the console
        const expectedUrl = `http://localhost:3333/luggages/checkin?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`;

        // Act: Make the service method call and subscribe to the observable
        service.getCheckin(createdAt, sortBy, sortOrder, search).subscribe(
          // Assert: Check that the response matches the expected data
          (luggages) => {
            try {
              expect(luggages).toEqual(expectedLuggages);
              done(); // Call done to signal that the asynchronous test is done
            } catch (error) {
              done.fail(error as string | { message: string } | undefined);
            }
          },
          (error: string | { message: string } | undefined) => {
            done.fail(error);
          }
        );

        // Assert: Verify that the HTTP request was made correctly
        const req = httpTestingController.expectOne(expectedUrl);

        expect(req.request.method).toEqual('GET');

        // Act: Provide the mock data for the HTTP response
        req.flush(expectedLuggages);
      }
    });
  }

  describe('create', () => {
    const createLuggageRequest: ICreateLuggageRequest = {
      luggageType: LuggageType.CHECKIN,
      name: 'John Doe',
      bags: '2',
      tagNr: 'ABC123',
      location: 'Storage Room',
      bbLr: 'Employee1',
    };

    it('should create luggage and return the created luggage', (done) => {
      // Arrange
      const expectedUrl = `http://localhost:3333/luggages`;
      const expectedResponse: ILuggage = {
        luggageId: 'newLuggageId',
        luggageType: LuggageType.CHECKIN,
        name: 'John Doe',
        bags: '2',
        tagNr: 'ABC123',
        location: 'Storage Room',
        bbLr: 'Employee1',
        files: ['file1.jpg', 'file2.jpg'],
      };

      // Act
      service.create(createLuggageRequest).subscribe(
        // Assert
        (createdLuggage) => {
          try {
            expect(createdLuggage).toEqual(expectedResponse);
            done();
          } catch (error) {
            done.fail(error as string | { message: string } | undefined);
          }
        },
        (error: string | { message: string } | undefined) => {
          done.fail(error);
        }
      );

      // Assert
      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(createLuggageRequest);

      // Provide the mock data for the HTTP response
      req.flush(expectedResponse);
    });
  });
});
