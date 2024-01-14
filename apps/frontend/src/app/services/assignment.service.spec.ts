import 'reflect-metadata';
import { TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentRequest, UpdateAssignmentRequest, IAssignment } from '@omnihost/interfaces';

describe('AssignmentsService', () => {
  let service: AssignmentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssignmentsService],
    });

    service = TestBed.inject(AssignmentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    // Arrange: No additional arrangement needed for this test.

    // Act: No specific action needed for this test.

    // Assert: Check that the service is created successfully.
    expect(service).toBeTruthy();
  });

  //"it" indicates the start of a test, this is the angular's syntax for unit test starts
  it('should get assignments within range', () => {
    // Arrange: Set up input data and expected output data.
    const from = '2024-01-01';
    const to = '2024-01-10';
    const mockAssignments: IAssignment[] = [
      {
        assignmentId: '1',
        room: 'Room 101',
        task: 'Task 1',
        requestedBy: 'John Doe',
        requestedAt: new Date('2024-01-01T12:00:00Z'),
      },
      {
        assignmentId: '2',
        room: 'Room 102',
        task: 'Task 2',
        requestedBy: 'Jane Doe',
        requestedAt: new Date('2024-01-05T14:30:00Z'),
      },
    ];

    // Act: Trigger the method to be tested.
    service.getAssignmentsWithinRange(from, to).subscribe((assignments) => {
      // Assert: Check that the result matches the expected data.
      expect(assignments).toEqual(mockAssignments);
    });

    // Assert: Check that the HTTP request is as expected.
    const req = httpMock.expectOne(`http://localhost:3333/assignments/all?from=${from}&to=${to}`);
    expect(req.request.method).toBe('GET');
    // Provide a mock response.
    req.flush(mockAssignments);
  });

  it('should get assignments by createdAt', () => {
    // Arrange: Set up input data and expected output data.
    const createdAt = new Date();
    const mockAssignments: IAssignment[] = [
      {
        assignmentId: '1',
        room: 'Room 101',
        task: 'Task 1',
        requestedBy: 'John Doe',
        requestedAt: new Date('2024-01-01T12:00:00Z'),
      },
      {
        assignmentId: '2',
        room: 'Room 102',
        task: 'Task 2',
        requestedBy: 'Jane Doe',
        requestedAt: new Date('2024-01-05T14:30:00Z'),
      },
    ];

    // Act: Trigger the method to be tested.
    service.getAssignments(createdAt).subscribe((assignments) => {
      // Assert: Check that the result matches the expected data.
      expect(assignments).toEqual(mockAssignments);
    });

    // Assert: Check that the HTTP request is as expected.
    const req = httpMock.expectOne(`http://localhost:3333/assignments?createdAt=${createdAt.toISOString()}`);
    expect(req.request.method).toBe('GET');
    // Provide a mock response.
    req.flush(mockAssignments);
  });

  it('should create an assignment', () => {
    // Arrange: Set up input data and expected output data.
    const mockCreateAssignmentRequest: CreateAssignmentRequest = {
      room: 'Room 101',
      task: 'Complete task',
      comments: 'Some comments',
      requestedBy: 'John Doe',
      performedBy: 'Jane Doe',
      requestedAt: new Date('2024-01-13T12:00:00Z'),
      completedAt: new Date('2024-01-14T14:30:00Z'),
    };

    const mockCreatedAssignment: IAssignment = {
      assignmentId: '123',
      room: 'Room 101',
      task: 'Complete task',
      comments: 'Some comments',
      requestedBy: 'John Doe',
      performedBy: 'Jane Doe',
      requestedAt: new Date('2024-01-13T12:00:00Z'),
      completedAt: new Date('2024-01-14T14:30:00Z'),
    };

    // Act: Trigger the method to be tested.
    service.createAssignment(mockCreateAssignmentRequest).subscribe((createdAssignment) => {
      // Assert: Check that the result matches the expected data.
      expect(createdAssignment).toEqual(mockCreatedAssignment);
    });

    // Assert: Check that the HTTP request is as expected.
    const req = httpMock.expectOne(`http://localhost:3333/assignments`);
    expect(req.request.method).toBe('POST');
    // Provide a mock response.
    req.flush(mockCreatedAssignment);
  });

  it('should update an assignment', () => {
    // Arrange: Set up input data and expected output data.
    const assignmentId = '123';
    const mockUpdateAssignmentRequest: UpdateAssignmentRequest = {
      room: 'Updated Room 101',
      task: 'Updated task',
      comments: 'Updated comments',
      requestedBy: 'Updated John Doe',
      performedBy: 'Updated Jane Doe',
      requestedAt: new Date('2024-01-15T10:00:00Z'),
      completedAt: new Date('2024-01-16T16:45:00Z'),
    };

    const mockUpdatedAssignment: IAssignment = {
      assignmentId: '123',
      room: 'Updated Room 101',
      task: 'Updated task',
      comments: 'Updated comments',
      requestedBy: 'Updated John Doe',
      performedBy: 'Updated Jane Doe',
      requestedAt: new Date('2024-01-15T10:00:00Z'),
      completedAt: new Date('2024-01-16T16:45:00Z'),
    };

    // Act: Trigger the method to be tested.
    service.updateAssignment(assignmentId, mockUpdateAssignmentRequest).subscribe((updatedAssignment) => {
      // Assert: Check that the result matches the expected data.
      expect(updatedAssignment).toEqual(mockUpdatedAssignment);
    });

    // Assert: Check that the HTTP request is as expected.
    const req = httpMock.expectOne(`http://localhost:3333/assignments/${assignmentId}`);
    expect(req.request.method).toBe('PATCH');
    // Provide a mock response.
    req.flush(mockUpdatedAssignment);
  });

  it('should get an assignment by ID', () => {
    // Arrange: Set up input data and expected output data.
    const assignmentId = '123';
    const mockAssignment: IAssignment = {
      assignmentId: '123',
      room: 'Room 101',
      task: 'Task 1',
      requestedBy: 'John Doe',
      requestedAt: new Date('2024-01-01T12:00:00Z'),
    };

    // Act: Trigger the method to be tested.
    service.getAssignmentById(assignmentId).subscribe((assignment) => {
      // Assert: Check that the result matches the expected data.
      expect(assignment).toEqual(mockAssignment);
    });

    // Assert: Check that the HTTP request is as expected.
    const req = httpMock.expectOne(`http://localhost:3333/assignments/${assignmentId}`);
    expect(req.request.method).toBe('GET');
    // Provide a mock response.
    req.flush(mockAssignment);
  });
});
