import 'reflect-metadata';
import { TestBed } from '@angular/core/testing';
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
    expect(service).toBeTruthy();
  });

  it('should get assignments within range', () => {
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

    service.getAssignmentsWithinRange(from, to).subscribe((assignments) => {
      expect(assignments).toEqual(mockAssignments);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments/all?from=${from}&to=${to}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAssignments);
  });

  it('should get assignments by createdAt', () => {
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

    service.getAssignments(createdAt).subscribe((assignments) => {
      expect(assignments).toEqual(mockAssignments);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments?createdAt=${createdAt.toISOString()}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAssignments);
  });

  it('should create an assignment', () => {
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

    service.createAssignment(mockCreateAssignmentRequest).subscribe((createdAssignment) => {
      expect(createdAssignment).toEqual(mockCreatedAssignment);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreatedAssignment);
  });

  it('should update an assignment', () => {
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

    service.updateAssignment(assignmentId, mockUpdateAssignmentRequest).subscribe((updatedAssignment) => {
      expect(updatedAssignment).toEqual(mockUpdatedAssignment);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments/${assignmentId}`);
    expect(req.request.method).toBe('PATCH');
    req.flush(mockUpdatedAssignment);
  });

  it('should get an assignment by ID', () => {
    const assignmentId = '123';
    const mockAssignment: IAssignment = {
      assignmentId: '123',
      room: 'Room 101',
      task: 'Task 1',
      requestedBy: 'John Doe',
      requestedAt: new Date('2024-01-01T12:00:00Z'),
    };

    service.getAssignmentById(assignmentId).subscribe((assignment) => {
      expect(assignment).toEqual(mockAssignment);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments/${assignmentId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAssignment);
  });

  it('should handle getting assignments with only "from" provided', () => {
    const from = '2024-01-01';
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

    service.getAssignmentsWithinRange(from).subscribe((assignments) => {
      expect(assignments).toEqual(mockAssignments);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments/all?from=${from}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAssignments);
  });

  it('should handle getting assignments with only "to" provided', () => {
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

    service.getAssignmentsWithinRange(undefined, to).subscribe((assignments) => {
      expect(assignments).toEqual(mockAssignments);
    });

    const req = httpMock.expectOne(`http://localhost:3333/assignments/all?to=${to}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAssignments);
  });
});
