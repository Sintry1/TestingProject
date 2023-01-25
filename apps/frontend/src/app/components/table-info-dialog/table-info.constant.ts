import { TableInfoOptions } from '@omnihost/interfaces';

export interface tableInfoObject {
  tableName: string;
  tableInformation: attributeInfo[];
}

interface attributeInfo {
  name: string;
  description: string;
}

export const tableInfo: tableInfoObject[] = [
  {
    tableName: TableInfoOptions.CHECK_IN,
    tableInformation: [
      {
        name: 'Room nr',
        description: "The guest's room number.",
      },
      {
        name: 'Name',
        description: "The guest's last name.",
      },
      {
        name: 'Time of arrival',
        description: "The guest's time of the arrival.",
      },
      {
        name: 'Nr of bags',
        description: `The number of bags the guest has. If the luggages sizes vary then write the number of main suitcases, add a “+” sign followed by the number of other items.`,
      },
      {
        name: 'Tag nr',
        description: 'The tag number found at the bottom of the luggage tag.',
      },
      {
        name: 'BB in LR',
        description:
          '(Bell boy in Luggage room) The initials of the bell boy who placed the luggage in the luggage room.',
      },
      {
        name: 'Location',
        description:
          'The location where the luggage has been stored. Can be LR, LR1, S1, Room or other. If other, please add an explanation in the comments.',
      },
      {
        name: 'Time in room',
        description: "When the luggage was placed in the guest's room.",
      },
      {
        name: 'BB up',
        description:
          "(Bell boy up) The initials of the bell boy who delivered the luggage to the guest's room.",
      },
      {
        name: 'Comments',
        description: 'If something needs further explanation.',
      },
    ],
  },
  {
    tableName: TableInfoOptions.CHECK_OUT,
    tableInformation: [
      {
        name: 'Room nr',
        description: "The guest's room number.",
      },
      {
        name: 'Name',
        description: "The guest's last name.",
      },
      {
        name: 'Nr of bags',
        description: `The number of bags the guest has. If the luggages sizes vary then write the number of main suitcases, add a “+” sign followed by the number of other items.`,
      },
      {
        name: 'Tag nr',
        description: 'The tag number found at the bottom of the luggage tag.',
      },
      {
        name: 'BB in LR',
        description:
          '(Bell boy in Luggage room) The initials of the bell boy who placed the luggage in the luggage room.',
      },
      {
        name: 'BB down',
        description:
          "(Bell boy down) The initials of the bell boy, who brought the luggage down from the guest's room.",
      },
      {
        name: 'Location',
        description:
          'The location where the luggage has been stored. Can be LR, LR1, S1, Room or other. If other, please add an explanation in the comments.',
      },
      {
        name: 'Time out',
        description: 'When the luggage was handed back to the guest at departure.',
      },
      {
        name: 'BB out',
        description:
          '(Bell boy out) The initials of the bell boy who gave the luggage to the guest at departure.',
      },
      {
        name: 'Comments',
        description: 'If something needs further explanation.',
      },
    ],
  },
  {
    tableName: TableInfoOptions.LONG_TERM,
    tableInformation: [
      {
        name: 'Date in',
        description: 'When the luggage was handed into the hotel.',
      },
      {
        name: 'Room nr',
        description: "The guest's room number.",
      },
      {
        name: 'Name',
        description: "The guest's last name.",
      },
      {
        name: 'Nr of bags',
        description: `The number of bags the guest has. If the luggages sizes vary then write the number of main suitcases, add a “+” sign followed by the number of other items.`,
      },
      {
        name: 'Tag nr',
        description: 'The tag number found at the bottom of the luggage tag.',
      },
      {
        name: 'Date needed',
        description: 'The guests expected pick up date.',
      },
      {
        name: 'BB in LR',
        description:
          '(Bell boy in Luggage room) The initials of the bell boy who placed the luggage in the luggage room.',
      },
      {
        name: 'Location',
        description:
          'The location where the luggage has been stored. Can be LR, LR1, S1, Room or other. If other, please add an explanation in the comments.',
      },
      {
        name: 'BB out',
        description: '(Bell boy out) The initials of the bell boy who gave it to the guest.',
      },
      {
        name: 'Date out',
        description: 'When the luggage was handed over to the guest.',
      },
      {
        name: 'Comments',
        description: 'If something needs further explanation.',
      },
    ],
  },
  {
    tableName: TableInfoOptions.CARS,
    tableInformation: [
      {
        name: 'Room nr',
        description: "The guest's room number.",
      },
      {
        name: 'Tag nr',
        description: 'The tag number found at the bottom of the luggage tag.',
      },
      {
        name: 'Arr',
        description: "(Arrival) The guest's arrival date.",
      },
      {
        name: 'Dep',
        description: "(Departure) The guest's departure date.",
      },
      {
        name: 'Name',
        description: "The guest's last name.",
      },
      {
        name: 'License plate',
        description: "The license plate of the guest's car.",
      },
      {
        name: 'Park exp',
        description:
          '(Parking expiration time) The expiration time of the parking registration made in SimplyTure.com',
      },
      {
        name: 'Pick up time',
        description: 'The date and time of when the car needs to be ready for the guest.',
      },

      {
        name: 'BB down',
        description:
          '(Bell boy up) The initials of the bell boy who drove the car from the hotel to the parking garage.',
      },
      {
        name: 'BB up',
        description:
          '(Bell boy up) The initials of the bell boy who drove it from the parking garage to the hotel.',
      },
      {
        name: 'Location',
        description: 'The cars parking location.',
      },
      {
        name: 'Lot',
        description: '(Parking lot) The parking lot of the car.',
      },
      {
        name: 'Delivery time',
        description: 'When the car was handed over to the guest.',
      },
      {
        name: 'BB out',
        description: '(Bell boy out) The initials of the bell boy who gave the keys to the guest.',
      },
      {
        name: 'Comments',
        description: 'If something needs further explanation.',
      },
    ],
  },
  {
    tableName: TableInfoOptions.TASKS,
    tableInformation: [
      {
        name: 'Time',
        description: 'The tasks expected time of completion.',
      },
      {
        name: 'Task',
        description: 'An explanation of what the task is.',
      },
      {
        name: 'Done',
        description: 'When the task was completed.',
      },
      {
        name: 'Initials',
        description: 'The initials of the person who completed the task.',
      },
    ],
  },
  {
    tableName: TableInfoOptions.ASSIGNMENTS,
    tableInformation: [
      {
        name: 'Room nr',
        description: "The guest's room number.",
      },
      {
        name: 'Task',
        description:
          'An abbreviation of the task. Can either be RA = room assignment, RM = room move or other. If other do a further explanation in the comment field.',
      },
      {
        name: 'Comments',
        description: 'A further explanation of the assignment.',
      },
      {
        name: 'Requested by',
        description:
          'The one who gave the bell boy the assignment. Can be reception, guest or other. If other do a further explanation in the comments.',
      },
      {
        name: 'Requested at',
        description: 'When the assignment was requested.',
      },
      {
        name: 'Performed by',
        description: 'The initials of the bell boy who did the assignment.',
      },
      {
        name: 'Performed at',
        description: 'When the assignment was completed.',
      },
    ],
  },
  {
    tableName: TableInfoOptions.BIKES,
    tableInformation: [
      {
        name: 'Room nr',
        description: "The guest's room number.",
      },
      {
        name: 'Name',
        description: "The guest's last name.",
      },
      {
        name: 'Reserved by',
        description: 'Who reserved the bike.',
      },
      {
        name: 'Nr. of bikes',
        description: 'Number of bikes the guest is renting.',
      },
      {
        name: 'Pick up time',
        description: 'Time the bikes were picked up.',
      },
      {
        name: 'Returned',
        description: 'When the bike(s) was returned.',
      },
      {
        name: 'Comments',
        description: 'If something needs further explanation.',
      },
    ],
  },
];
