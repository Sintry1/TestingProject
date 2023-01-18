import { IBike } from '@omnihost/interfaces';

export const bikes: IBike[] = [
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '131f7734-c973-4ae3-8ff8-49b981be8d54',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '476',
    reservedBy: 'hm',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: null,
    bbOut: 'UE',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7027f480-b5fa-4be7-b798-910a7056df6e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Gaétane',
    room: '446',
    reservedBy: 'wr',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'LD',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eb934f38-bd6f-433e-afe8-996a21fdd6ae',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Zoé',
    room: '524',
    reservedBy: 'rq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'BI',
    bbIn: 'ZU',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '682c33ce-9885-4bfe-a3c5-5d0e3ab1766e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '788',
    reservedBy: 'gt',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PA',
    bbIn: 'OZ',
    timeOut: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4b3d1f8-2e91-456e-9d3d-a666fdc78558',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Estève',
    room: '884',
    reservedBy: 'jp',
    bikeFormCompleted: true,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UV',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '702c9544-77eb-49db-947a-61fd74ce059a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '663',
    reservedBy: 'sm',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: null,
    bbOut: 'XA',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '380f91c6-e008-4bfa-a610-a12359b943ee',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '211',
    reservedBy: 'ol',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FJ',
    bbIn: 'EL',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db4bedef-52e0-4e07-95ef-d0b8761a218f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '035',
    reservedBy: 'eu',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TH',
    bbIn: 'YD',
    timeOut: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d28a53f-0672-4cb0-bf0e-1dca4d6e4666',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '587',
    reservedBy: 'ej',
    bikeFormCompleted: true,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: null,
    bbOut: 'SP',
    bbIn: 'JU',
    timeOut: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '92227eae-8c92-4470-be11-ec862b0773d2',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '837',
    reservedBy: 'xs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CU',
    bbIn: 'QO',
    timeOut: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64aa89d1-2359-4c05-8320-fbf6fa85939e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Anaïs',
    room: '536',
    reservedBy: 'zv',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QE',
    bbIn: 'HI',
    timeOut: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3a8d2ff8-65d8-4913-a36e-5fbb38780ef7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '921',
    reservedBy: 'sf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LE',
    bbIn: 'YL',
    timeOut: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dfa95208-61c3-4dde-b26c-1fb049aab7b4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åslög',
    room: '434',
    reservedBy: 'gq',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DW',
    bbIn: 'YL',
    timeOut: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7013b2cb-3a96-42b3-ab0c-94600ede1480',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '128',
    reservedBy: 'fn',
    bikeFormCompleted: null,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3be5cc7c-33e1-4651-812e-b6e7118bc6f1',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Kallisté',
    room: '998',
    reservedBy: 'mu',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'HY',
    timeOut: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c35be91-216e-4b59-948d-3ab526a63f71',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '186',
    reservedBy: 'jv',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BS',
    bbIn: 'WQ',
    timeOut: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf75f2a5-c29a-49e7-819c-fa443137c5df',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Michèle',
    room: '406',
    reservedBy: 'gi',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TT',
    bbIn: 'VY',
    timeOut: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '047edf7c-9daf-4cc3-b40a-b9f77e31a85a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '485',
    reservedBy: 'hy',
    bikeFormCompleted: null,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: null,
    bbOut: 'MY',
    bbIn: 'FH',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '524e8577-122f-4f4b-9c30-ec349832a2f1',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Göran',
    room: '541',
    reservedBy: 'et',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'TQ',
    bbIn: 'FY',
    timeOut: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '23b05d81-f954-4599-ba88-4658712b2130',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '377',
    reservedBy: 'mv',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: null,
    bbOut: 'OU',
    bbIn: 'EY',
    timeOut: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e922fc04-23b0-465b-91dc-97550ba32850',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Eliès',
    room: '314',
    reservedBy: 'lr',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27279711-ee28-4666-ac73-54bc79aa7d27',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '722',
    reservedBy: 'pa',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'GU',
    timeOut: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f235966b-8a02-4e64-bb22-8bb8bd25ff05',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '327',
    reservedBy: 'oc',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IX',
    bbIn: 'JT',
    timeOut: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fcf7cabb-975d-4abc-a604-b54d0336057b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '368',
    reservedBy: 'px',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GY',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31874b83-f221-4b0e-82a6-08d5a6993b47',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '732',
    reservedBy: 'rd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'FT',
    timeOut: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7d91751f-5f0e-44a5-be9a-719c0119105c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kuí',
    room: '795',
    reservedBy: 'uh',
    bikeFormCompleted: false,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KJ',
    bbIn: 'SO',
    timeOut: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79ea0986-12c8-4e23-ae09-e78e68447b3b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '203',
    reservedBy: 'dq',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DE',
    bbIn: 'IB',
    timeOut: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2f4892e-bee8-43a4-9c76-b06d78a82fd1',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '644',
    reservedBy: 'dg',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HQ',
    bbIn: 'US',
    timeOut: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7ab00c5-b2b6-4567-acac-cbb7a55bae48',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '707',
    reservedBy: 'hl',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: null,
    bbOut: 'PG',
    bbIn: 'US',
    timeOut: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '41f19169-2aa1-4e6b-b1b3-0a11880bf9e3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '521',
    reservedBy: 'na',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'LH',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e48ad8c2-e843-4215-8945-a7d8b3dbaad9',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '105',
    reservedBy: 'og',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OK',
    bbIn: 'GM',
    timeOut: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08312e2f-b270-47cf-8bec-4fa917a3981d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maëlle',
    room: '150',
    reservedBy: 'hm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'LI',
    timeOut: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '064ad1f4-934a-4cbc-9e65-602d671ade81',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '906',
    reservedBy: 'hn',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'OP',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '71d74d75-cbf9-4ae4-9edf-8d75cd923b2e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maïté',
    room: '817',
    reservedBy: 'gr',
    bikeFormCompleted: null,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HK',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '55938701-cbbd-45aa-b377-65eb49599de4',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '110',
    reservedBy: 'gw',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: null,
    bbOut: 'LK',
    bbIn: 'DM',
    timeOut: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4ea2f53-cd8a-4f6b-ab7d-61ca49c4f5d4',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Joséphine',
    room: '038',
    reservedBy: 'xk',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: null,
    bbOut: 'SZ',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7cf0d51c-da4a-42ca-acbf-89c073f923b6',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëlys',
    room: '563',
    reservedBy: 'pw',
    bikeFormCompleted: null,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EY',
    bbIn: 'SX',
    timeOut: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '481cbac1-6986-4a77-9d82-48516aefd5ac',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '939',
    reservedBy: 'hd',
    bikeFormCompleted: false,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HE',
    bbIn: 'HW',
    timeOut: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7e9338ce-a9f2-4b64-b7f6-71a66da34d12',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méghane',
    room: '625',
    reservedBy: 'kx',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'DK',
    bbIn: 'QC',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '877b4bc7-cc65-40a8-8540-374df629be0e',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Sélène',
    room: '603',
    reservedBy: 'sn',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CT',
    bbIn: 'UD',
    timeOut: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3283247-a61b-4b69-afe3-f0a928e43a85',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '771',
    reservedBy: 'le',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'XT',
    bbIn: 'WK',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'caf2f4d1-9a9e-438a-a582-c92cda9cb387',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '414',
    reservedBy: 'jw',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VS',
    bbIn: 'CD',
    timeOut: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ebd82e4f-30db-4747-ab75-ada55af7e53e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Magdalène',
    room: '164',
    reservedBy: 'sl',
    bikeFormCompleted: false,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: null,
    bbOut: 'VM',
    bbIn: 'IO',
    timeOut: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7368ea0e-71a6-4c37-b67a-334c65a8d852',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aí',
    room: '604',
    reservedBy: 'nl',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JV',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8aef73d0-9ce5-4b70-b907-d8cd1d4111ff',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '828',
    reservedBy: 'yi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VU',
    bbIn: 'GN',
    timeOut: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7dc0c9a-c753-438b-8ec5-b7bf811c96fd',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '748',
    reservedBy: 'zb',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HU',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94301e6a-1ca9-40ae-8fae-ea325f8dc9b7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '113',
    reservedBy: 'wm',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KO',
    bbIn: 'KE',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4e1b381d-287b-4adf-bd7b-e5c47ee5d39c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '110',
    reservedBy: 'ms',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0fba6d58-c8ff-4154-b614-e98b7fd59095',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '177',
    reservedBy: 'fl',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QR',
    bbIn: 'RP',
    timeOut: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3014ff7-e922-4eb6-88b7-4c3e39bbfe03',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '655',
    reservedBy: 'hk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MP',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8b74807-aa3c-4042-8ec6-e0c0391d8540',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bénédicte',
    room: '341',
    reservedBy: 'oh',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WQ',
    bbIn: 'AM',
    timeOut: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5e32a656-fd40-426d-a7c9-ac435f1583e3',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '373',
    reservedBy: 'yd',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LR',
    bbIn: 'MV',
    timeOut: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '62df67a9-d8c6-4114-b199-9683ab6561bb',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '285',
    reservedBy: 'he',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: null,
    bbOut: 'AV',
    bbIn: 'RB',
    timeOut: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27ff3c29-ba53-4374-956d-b60f7c24dc86',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '638',
    reservedBy: 'qv',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XN',
    bbIn: 'MC',
    timeOut: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '845f3e20-34ce-47d7-b666-51162c6ba48b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '311',
    reservedBy: 'fu',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MV',
    bbIn: 'VS',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd92c48fb-5ea7-4a3e-91eb-32e597daca29',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Célia',
    room: '231',
    reservedBy: 'ly',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: null,
    bbOut: 'UC',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4e00e537-4265-4dcb-a640-cad4954f36cc',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '804',
    reservedBy: 'kn',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'IS',
    timeOut: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5b691a0-a751-456c-a37b-4b4257bd98b7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '719',
    reservedBy: 'gt',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WS',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'caae98bf-55e7-42f0-bfa5-45e0e1e09b9f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '181',
    reservedBy: 'ga',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EQ',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a144d51a-4e6f-476d-903a-4da06c34fb95',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Yè',
    room: '471',
    reservedBy: 'km',
    bikeFormCompleted: false,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WA',
    bbIn: 'NU',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c60b71ea-8126-4517-a0f4-4037526d1edd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('14/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '124',
    reservedBy: 'bx',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'ZX',
    timeOut: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0528b475-5f93-4d54-ad68-d0a5a14c969d',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaëlle',
    room: '327',
    reservedBy: 'bf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CL',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53a396b8-8bbe-4ce7-b5f7-bac347e4bf84',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '407',
    reservedBy: 'mv',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'AA',
    timeOut: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0b90e47-556f-4db9-b542-d69153160bdb',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '292',
    reservedBy: 'lt',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AS',
    bbIn: 'WD',
    timeOut: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6892f1fa-f4b0-4da9-95b5-4cc1f8e99da2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méghane',
    room: '152',
    reservedBy: 'eo',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: null,
    bbOut: 'WE',
    bbIn: 'LU',
    timeOut: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d41e722-508f-45d0-b913-9870c37ec0fd',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '754',
    reservedBy: 'ow',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LT',
    bbIn: 'HS',
    timeOut: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b033b702-e995-4b13-a0af-db1a1b6ba6a0',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '318',
    reservedBy: 'oq',
    bikeFormCompleted: null,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SK',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0c7db805-70cf-4038-be27-1cd5a50d5e17',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('13/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '643',
    reservedBy: 'jq',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QP',
    bbIn: 'UZ',
    timeOut: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd71b0389-3958-4262-b871-8bc03ae8bce0',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Lóng',
    room: '170',
    reservedBy: 'hm',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
    bbOut: 'RX',
    bbIn: 'DF',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '936ae125-d0e4-4b08-8515-ea1ec0df89eb',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Åslög',
    room: '104',
    reservedBy: 'ej',
    bikeFormCompleted: false,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EW',
    bbIn: 'SB',
    timeOut: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b7958e3-bb55-4a67-8790-61663596fa70',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '037',
    reservedBy: 'dq',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MP',
    bbIn: 'QP',
    timeOut: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5830df1d-d55a-42a4-b7c8-d4196c5c4ec8',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '415',
    reservedBy: 'xc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VZ',
    bbIn: 'DF',
    timeOut: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4cc6411-3b3f-45a8-8f84-677669df9ef1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '851',
    reservedBy: 'xu',
    bikeFormCompleted: true,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YE',
    bbIn: 'XM',
    timeOut: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '93468fcb-d5fd-4fe6-b94e-743e3324519a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '115',
    reservedBy: 'nb',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZT',
    bbIn: 'FL',
    timeOut: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b843f90f-f5e8-4988-a3e7-bc1e5f3841e2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '396',
    reservedBy: 'hv',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'TM',
    timeOut: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2dd6e651-c909-4b2c-9f6d-11c605724bcd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '360',
    reservedBy: 'cq',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YR',
    bbIn: 'UT',
    timeOut: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9490519d-c13c-4579-a5fc-8230d69ca103',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaïs',
    room: '471',
    reservedBy: 'qo',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'BB',
    timeOut: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '733096bd-bd4c-4f97-8400-e853767db7f8',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Ruì',
    room: '189',
    reservedBy: 'yi',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'RZ',
    timeOut: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7fcc4f16-04f8-422e-a3ea-d7c819c6b4f3',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Méng',
    room: '616',
    reservedBy: 'bb',
    bikeFormCompleted: false,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: null,
    bbOut: 'VQ',
    bbIn: 'GG',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '465588b7-71c0-4d51-89b0-b1c4c66a9358',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '725',
    reservedBy: 'gl',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DI',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0b0ed93f-5a95-476f-8abe-a8a61a90198f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-ève',
    room: '252',
    reservedBy: 'mu',
    bikeFormCompleted: null,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BB',
    bbIn: 'ZK',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40804e26-31cf-428d-be63-9930bd345359',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Kù',
    room: '291',
    reservedBy: 'bt',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: null,
    bbOut: 'PS',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd799d5f8-ae54-4dc0-86ed-0f4fa4edf068',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '636',
    reservedBy: 'sh',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YR',
    bbIn: 'DY',
    timeOut: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2b410edb-f1fc-4949-a34f-4862303fc473',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Pò',
    room: '964',
    reservedBy: 'pd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DX',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '37b53050-2ee7-4282-bf2a-378b1d9177bb',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '686',
    reservedBy: 'ef',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: null,
    bbOut: 'GD',
    bbIn: 'OD',
    timeOut: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da5d2b5e-22a7-4b02-805a-4a30bc6b290d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '249',
    reservedBy: 'zv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5a31a31-4f8b-4491-8279-67f83360ff93',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '529',
    reservedBy: 'rv',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PC',
    bbIn: 'HB',
    timeOut: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '556b9a5e-2050-4871-9cae-4f35810c3269',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '873',
    reservedBy: 'gh',
    bikeFormCompleted: true,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ER',
    bbIn: 'YH',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '607807dc-a81e-43a2-bf68-ea0008930f0e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Solène',
    room: '186',
    reservedBy: 'fn',
    bikeFormCompleted: null,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GM',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef705f9d-cb6a-4491-8959-50ef913b861b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('10/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '973',
    reservedBy: 'zz',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FH',
    bbIn: 'QV',
    timeOut: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2bf54ab-2b0c-4f09-aa7c-4604e2f88f68',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lóng',
    room: '088',
    reservedBy: 'fr',
    bikeFormCompleted: false,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'JF',
    timeOut: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fe52c441-05d3-4ba3-a2b2-f48d291ee3e6',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Rébecca',
    room: '023',
    reservedBy: 'yg',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NJ',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd79f7cee-e6df-4179-a694-7da6fceaa9bd',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '477',
    reservedBy: 'qp',
    bikeFormCompleted: false,
    comments: 'Nulla tempus.',
    completedAt: null,
    bbOut: 'NU',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80aa7312-bd2e-4810-a1d8-e7661a8155a0',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '057',
    reservedBy: 'uh',
    bikeFormCompleted: true,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VH',
    bbIn: 'CF',
    timeOut: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27787ecd-a70c-4f7f-8dd2-34e37ee61207',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '921',
    reservedBy: 'fe',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AX',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f57c94e2-57da-4d7e-bf8f-001c0a312890',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '240',
    reservedBy: 'fr',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: null,
    bbOut: 'MJ',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab2ae50e-d176-4fa8-99b3-a6c579f017c9',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaé',
    room: '130',
    reservedBy: 'ie',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DU',
    bbIn: 'SR',
    timeOut: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eeea1e02-955d-44b8-bd0c-686b2a5b1c45',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Géraldine',
    room: '615',
    reservedBy: 'cn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XD',
    bbIn: 'NN',
    timeOut: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a3af8e1-6035-42c3-87f9-a2e094f5a041',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '317',
    reservedBy: 'zj',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EM',
    bbIn: 'IL',
    timeOut: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3f9792b-01c6-4f68-a667-40966e5ab4eb',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '060',
    reservedBy: 'ee',
    bikeFormCompleted: null,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: null,
    bbOut: 'OR',
    bbIn: 'LI',
    timeOut: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f753b3fd-6651-4d99-95d6-8a8bf55b25ea',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Béatrice',
    room: '677',
    reservedBy: 'sl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KN',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a176ad1-c917-4b97-bdfe-3a250a9dfac0',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Crééz',
    room: '188',
    reservedBy: 'qa',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XU',
    bbIn: 'HX',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42d9ec77-8a79-4190-867a-bc626465d6bc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '246',
    reservedBy: 'bq',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: null,
    bbOut: 'MD',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82ad5fb7-5d03-43c1-b5e9-3ea3e1897272',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Mahélie',
    room: '606',
    reservedBy: 'rv',
    bikeFormCompleted: false,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AZ',
    bbIn: 'HU',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e09501cb-0801-476e-875c-643a7bf0aaac',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '895',
    reservedBy: 'kh',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RN',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd46bfa9-c78b-4ac2-bf29-7341be19ad24',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '057',
    reservedBy: 'sw',
    bikeFormCompleted: null,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CB',
    bbIn: 'WP',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1f051e7a-590a-4110-a6f1-d802b14cb711',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '337',
    reservedBy: 'de',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QM',
    bbIn: 'LB',
    timeOut: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3627a259-f7b9-4150-b002-56e31d52aeb0',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '894',
    reservedBy: 'mj',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BQ',
    bbIn: 'EC',
    timeOut: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8ece291-d1b1-49ed-b157-38ccb3676c70',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '727',
    reservedBy: 'yv',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AX',
    bbIn: 'BS',
    timeOut: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db6f3057-8292-4d42-9036-d57ea439db99',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '515',
    reservedBy: 'yt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YY',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00733f63-52a2-481a-abd3-3d161daeccf1',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mà',
    room: '338',
    reservedBy: 'it',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DI',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'daa1026d-185a-49b0-8a35-a72e93eec973',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Östen',
    room: '132',
    reservedBy: 'ep',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'FA',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b65d76de-224c-45bc-9c89-744befbc6cd8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '522',
    reservedBy: 'le',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DA',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '274a7b7d-cea1-4347-b2a2-ebf49ad457ba',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '390',
    reservedBy: 'mi',
    bikeFormCompleted: null,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: null,
    bbOut: 'TW',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8a847ac-4616-4b2e-b69b-4844aa074ed1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '616',
    reservedBy: 'ag',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GN',
    bbIn: 'PS',
    timeOut: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a97eb929-1457-4dea-90bd-df566b22061c',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Zhì',
    room: '808',
    reservedBy: 'ew',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'TC',
    bbIn: 'GL',
    timeOut: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7bc929d-0cfd-46a2-bab9-1aaf2c75193a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '180',
    reservedBy: 'gv',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IZ',
    bbIn: 'GG',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e044a939-319c-4d24-a8b2-309568263df8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mà',
    room: '405',
    reservedBy: 'ff',
    bikeFormCompleted: null,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XJ',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2e5b29c-e547-4279-acb1-974e5d439c85',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Simplifiés',
    room: '622',
    reservedBy: 'wt',
    bikeFormCompleted: false,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '26c5f303-e2c2-4ae2-9b72-19a21507b934',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '317',
    reservedBy: 'ab',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KD',
    bbIn: 'JS',
    timeOut: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f391cfcd-91c9-406b-9797-f6295fa209b5',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '171',
    reservedBy: 'qh',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZW',
    bbIn: 'CD',
    timeOut: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e1cba6e-95b4-4e6b-9464-6b63b2b060ed',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Hélène',
    room: '799',
    reservedBy: 'dp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DA',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '97f36eee-406c-4035-a1f8-197beef563d6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Océane',
    room: '865',
    reservedBy: 'ee',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MI',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '901d0b5d-4292-4b79-b142-4ec2b2f042f3',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Océanne',
    room: '684',
    reservedBy: 'hi',
    bikeFormCompleted: false,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZA',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '398b6353-2384-41b0-8ca9-e963180ff451',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '324',
    reservedBy: 'dk',
    bikeFormCompleted: false,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XV',
    bbIn: 'ER',
    timeOut: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ffef027-666d-4e90-915c-92a3dcb820d5',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Léonore',
    room: '754',
    reservedBy: 'ae',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YX',
    bbIn: 'ZE',
    timeOut: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fb057722-6d4c-404b-a3b0-68e8afea8533',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('15/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '052',
    reservedBy: 'it',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KA',
    bbIn: 'HF',
    timeOut: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a71e1d5-feb0-4d26-b03e-28f4a122f38b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '522',
    reservedBy: 'py',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OW',
    bbIn: 'ZM',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7db1c289-2e31-41a3-b0c1-eb2b81d82bd3',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '554',
    reservedBy: 'fo',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UR',
    bbIn: 'UL',
    timeOut: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b367058c-4214-4d31-a613-26420a32e280',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Athéna',
    room: '286',
    reservedBy: 'yn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LJ',
    bbIn: 'DY',
    timeOut: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '254e0db7-bdf9-440c-a396-9a0c0dfb36ce',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aurélie',
    room: '053',
    reservedBy: 'os',
    bikeFormCompleted: null,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'AM',
    timeOut: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '606bcd08-bfda-46d4-ad33-ecedffbafc0a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '114',
    reservedBy: 'qe',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PG',
    bbIn: 'YC',
    timeOut: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c7bce0da-a3e6-4af5-ab86-1650caac037a',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Yáo',
    room: '595',
    reservedBy: 'ou',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TP',
    bbIn: 'MZ',
    timeOut: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '083b139f-87ed-464b-9c05-184cc95e9202',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '153',
    reservedBy: 'ym',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'YY',
    bbIn: 'ED',
    timeOut: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a6db133-df2a-4ea2-b424-c6dc90240b44',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '536',
    reservedBy: 'qj',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'CV',
    timeOut: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f803ba77-0cd4-46be-a207-633c7fd1755c',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Pénélope',
    room: '273',
    reservedBy: 'ez',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'EE',
    timeOut: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2b71fd1c-cf37-48b5-b862-c9e07d3b71ea',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Táng',
    room: '831',
    reservedBy: 'yd',
    bikeFormCompleted: null,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: null,
    bbOut: 'FB',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '68c16599-f9bd-4f72-ad3d-dda87ebd5f60',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Anaël',
    room: '945',
    reservedBy: 'hs',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BD',
    bbIn: 'IR',
    timeOut: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a320f18-d1b6-414e-ab87-29ecd2f6e245',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Valérie',
    room: '899',
    reservedBy: 'ai',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WF',
    bbIn: 'CX',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cdac6a1d-b1fd-4cb1-8192-bbd9190dce78',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '530',
    reservedBy: 'kw',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: null,
    bbOut: 'WJ',
    bbIn: 'UV',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b278c743-6996-4225-b320-fce5c13bb5cc',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('17/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '506',
    reservedBy: 'ac',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GZ',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '50ab7432-b902-4943-8c15-64369e12a08b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '030',
    reservedBy: 'dw',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: null,
    bbOut: 'MX',
    bbIn: 'VY',
    timeOut: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e3985d1-2818-4662-9455-e3303582c02b',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Amélie',
    room: '899',
    reservedBy: 'lo',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54719113-a557-4d39-b1bc-815e7ca9ece8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Intéressant',
    room: '904',
    reservedBy: 'qx',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PU',
    bbIn: 'FO',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42ffc500-02f0-4db1-81ca-18b62692560d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('16/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océanne',
    room: '558',
    reservedBy: 'up',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PZ',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be64573d-883f-4d19-a36c-ef696db25e94',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '749',
    reservedBy: 'wi',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VX',
    bbIn: 'RS',
    timeOut: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a319a80-0c2d-4c11-90a5-c7e5b8268f64',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '644',
    reservedBy: 'iu',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DV',
    bbIn: 'BF',
    timeOut: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a6ef7ce8-20a2-4737-91ab-db11e5824c0f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méng',
    room: '888',
    reservedBy: 'nb',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VC',
    bbIn: 'WZ',
    timeOut: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c64acfaa-3525-4f10-8339-a2849bc53520',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '923',
    reservedBy: 'ld',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SN',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53e772c0-24df-495f-ba3d-c86bdb53dbad',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '591',
    reservedBy: 'iz',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FN',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14bc0f28-6b5c-4c76-9f46-4a5ef2c8d79f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Josée',
    room: '422',
    reservedBy: 'xv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'XL',
    bbIn: 'GR',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5481dc28-211c-4570-bf3c-7ffa2bc76d00',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estève',
    room: '935',
    reservedBy: 'wx',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: null,
    bbOut: 'HQ',
    bbIn: 'PP',
    timeOut: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9bc42512-5ac1-4761-aec8-c42348fbb468',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Åslög',
    room: '581',
    reservedBy: 'lk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TC',
    bbIn: 'TV',
    timeOut: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a1f9a1c-5e46-4291-abf6-b3c6370c96b2',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Eloïse',
    room: '802',
    reservedBy: 'yb',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'BG',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aec57765-fc5d-485f-8175-19d46c819304',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '253',
    reservedBy: 'zm',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GI',
    bbIn: 'DV',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '402e537c-3d89-483b-a204-7ddbaa7d82a1',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Erwéi',
    room: '607',
    reservedBy: 'bi',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AS',
    bbIn: 'WD',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '607bfa4e-185f-46ad-8ac4-6880cc5955c0',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Crééz',
    room: '515',
    reservedBy: 'nh',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'LG',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb474692-404e-4a5a-a910-0633a253cd4f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Pélagie',
    room: '543',
    reservedBy: 'id',
    bikeFormCompleted: true,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IH',
    bbIn: 'GC',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cad6960c-2419-44c5-b9f0-0f7420e38eac',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëline',
    room: '069',
    reservedBy: 'pk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MV',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8af1e13e-7768-45e5-a05b-9d28a5cb9cda',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '604',
    reservedBy: 'zr',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NC',
    bbIn: 'WY',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '696f1942-6b55-4b54-bdb9-976fa5dc5876',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '483',
    reservedBy: 'xt',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZR',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25547cfe-6a94-4227-94e5-ebd6e80ef86c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marlène',
    room: '011',
    reservedBy: 'ru',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: null,
    bbOut: 'GP',
    bbIn: 'ZD',
    timeOut: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c3b9f30-5155-4d88-8409-50ceaebea174',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '977',
    reservedBy: 'cn',
    bikeFormCompleted: true,
    comments: 'Sed ante.',
    completedAt: null,
    bbOut: 'SW',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '26738a5e-787e-43ec-b225-94b1b7d35e91',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '814',
    reservedBy: 'rn',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'IN',
    timeOut: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3df9840-082c-49a6-86f5-b294b1cbce59',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Estée',
    room: '270',
    reservedBy: 'qc',
    bikeFormCompleted: false,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: null,
    bbOut: 'QE',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5c90097-0a07-4ca8-82a4-b5f6f76561fa',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '943',
    reservedBy: 'lf',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VR',
    bbIn: 'YA',
    timeOut: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88e8c926-9258-499a-89ab-8db157287002',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '731',
    reservedBy: 'ld',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OI',
    bbIn: 'DK',
    timeOut: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80159061-9a8a-461a-b637-39026cc336fc',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Bérangère',
    room: '045',
    reservedBy: 'kv',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AL',
    bbIn: 'KT',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3ecf4f5-33d7-4892-af8c-5b3caa6990b1',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélia',
    room: '415',
    reservedBy: 'vm',
    bikeFormCompleted: null,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OL',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2fe1973b-75a8-45cf-bfa1-5d9e3d96e23c',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Daphnée',
    room: '304',
    reservedBy: 'pq',
    bikeFormCompleted: null,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'SE',
    timeOut: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '159a28b3-668c-4b12-bc77-44564bdf5dbd',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Edmée',
    room: '100',
    reservedBy: 'hj',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UD',
    bbIn: 'VL',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '20d0f9ef-185a-4f9f-99b4-bf3145bf605d',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '572',
    reservedBy: 'pp',
    bikeFormCompleted: null,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PF',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '636ef8a1-b6e6-4d4a-ab5a-a5d443bf5c38',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Táng',
    room: '453',
    reservedBy: 'qq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KZ',
    bbIn: 'QG',
    timeOut: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f37556b-6116-4bf5-9eba-bd25441e2399',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '666',
    reservedBy: 'mq',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JU',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2a3523e-4e19-4f32-a0e0-cc6180260422',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '920',
    reservedBy: 'qc',
    bikeFormCompleted: true,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NM',
    bbIn: 'WA',
    timeOut: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0cd352e3-85d5-4766-a01e-48f787e7f236',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Solène',
    room: '719',
    reservedBy: 'qv',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DT',
    bbIn: 'IF',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'af30663b-f386-499a-ac87-5e284495578d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Yú',
    room: '337',
    reservedBy: 'lz',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '98aecb6e-8357-4e5c-b432-ee5dad3386de',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '708',
    reservedBy: 'zy',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UC',
    bbIn: 'RL',
    timeOut: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b6f883df-1f6e-4e4c-8443-53cb82491efb',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Sélène',
    room: '396',
    reservedBy: 'jh',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WP',
    bbIn: 'OP',
    timeOut: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4799680e-0d60-407b-9940-9b60445a32d5',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '838',
    reservedBy: 'mq',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: null,
    bbOut: 'NL',
    bbIn: 'QK',
    timeOut: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a84d265c-76b1-4d22-a835-b3d720892dbd',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëlann',
    room: '092',
    reservedBy: 'xt',
    bikeFormCompleted: null,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'JK',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc8f1d5a-253f-4cc4-bd4a-4ae5e85e3698',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '550',
    reservedBy: 'ds',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EM',
    bbIn: 'HI',
    timeOut: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07af3f47-9765-4bdb-8e92-3747d35acc22',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '582',
    reservedBy: 'jc',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: null,
    bbOut: 'TU',
    bbIn: 'YP',
    timeOut: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8b9c134-5dfd-41d8-9f2e-ab2c18212505',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '005',
    reservedBy: 'ly',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'UE',
    timeOut: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f64453ee-dede-4dab-9553-2f277661ad1e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '364',
    reservedBy: 'qu',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CS',
    bbIn: 'EQ',
    timeOut: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1f74433f-e1d1-43ac-bfff-50c992a7e0e0',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '498',
    reservedBy: 'yc',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RX',
    bbIn: 'CN',
    timeOut: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3a15a7f5-3240-46e5-9533-d100cb44e89b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '474',
    reservedBy: 'dw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'AP',
    bbIn: 'LY',
    timeOut: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eb62a4dc-841f-4903-a9e5-458623f7c8ef',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '143',
    reservedBy: 'vf',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GW',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b28666d-e2e2-48f9-97fe-3c861db9ef98',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '316',
    reservedBy: 'lq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'KA',
    bbIn: 'OK',
    timeOut: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6846ff03-d795-4362-b861-6a8d05dff1af',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '531',
    reservedBy: 'jg',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'XA',
    timeOut: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2289390d-ea54-473f-9a99-5259cab97847',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maïlys',
    room: '081',
    reservedBy: 'xl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LH',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2edb772e-6e01-463b-a29b-4aa735c4a37d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Personnalisée',
    room: '516',
    reservedBy: 'ga',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SN',
    bbIn: 'YP',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70fa7780-924c-46d1-9b3c-833e00053d56',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mélodie',
    room: '348',
    reservedBy: 'zb',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RF',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09d68d52-39c2-4514-b433-e0ec69203832',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maéna',
    room: '222',
    reservedBy: 'kx',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
    bbOut: 'GU',
    bbIn: 'FF',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '38bbe25f-6f71-4851-bde8-adaa9c6005f3',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Märta',
    room: '814',
    reservedBy: 'ed',
    bikeFormCompleted: true,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a323bb59-334b-42b1-8af1-ca23b7b01c7f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '008',
    reservedBy: 'sx',
    bikeFormCompleted: false,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YQ',
    bbIn: 'CI',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a979cc5-7468-4c0a-b47d-bc940cbb2e10',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '918',
    reservedBy: 'nj',
    bikeFormCompleted: null,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JG',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c598bb16-3493-4d54-b3c5-17bac0698489',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '036',
    reservedBy: 'ee',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MG',
    bbIn: 'QE',
    timeOut: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4be2d3f7-f4fb-4c7d-9279-ab3dbae87182',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '839',
    reservedBy: 'xs',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'YT',
    bbIn: 'BA',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9da50a8-fef7-4ae1-8990-966e0c132ae9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dafnée',
    room: '350',
    reservedBy: 'po',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SP',
    bbIn: 'FJ',
    timeOut: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd712b1d5-f9df-4127-ad5c-5ae5d6176334',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '016',
    reservedBy: 'sm',
    bikeFormCompleted: false,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UU',
    bbIn: 'PV',
    timeOut: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b42ab0a-c611-4c29-87fe-4ee7d0ac2a20',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kallisté',
    room: '244',
    reservedBy: 'ld',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VF',
    bbIn: 'LX',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aac31431-b3d4-4b4e-9d41-10cfca0d5c22',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mélinda',
    room: '349',
    reservedBy: 'he',
    bikeFormCompleted: null,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1098fce0-4ebd-42ec-95a5-24dffe6e0b56',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '992',
    reservedBy: 'mn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JZ',
    bbIn: 'GY',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31373fbd-b8a6-479c-a47c-b430fd3f51df',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '680',
    reservedBy: 'fx',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BI',
    bbIn: 'SN',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c601c9db-da72-448b-98b1-980761599fff',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Rachèle',
    room: '568',
    reservedBy: 'od',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZF',
    bbIn: 'QT',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7a075dc-18cb-4b5e-8dbf-b35a4688fe60',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '970',
    reservedBy: 'ui',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MW',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9804bd53-a6d6-4684-bf68-43829b8959d8',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mén',
    room: '238',
    reservedBy: 'zi',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'GX',
    bbIn: 'YY',
    timeOut: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '837e55ce-bd8c-431a-8104-e2597be1d67d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '406',
    reservedBy: 'sr',
    bikeFormCompleted: null,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RU',
    bbIn: 'TC',
    timeOut: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5a8fec1a-2075-438b-bf43-abd871593218',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méline',
    room: '851',
    reservedBy: 'zr',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WM',
    bbIn: 'UL',
    timeOut: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '992d3c68-75b9-4c24-9dd5-aa1e80d89d1f',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bénédicte',
    room: '157',
    reservedBy: 'yh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TI',
    bbIn: 'EO',
    timeOut: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eb6c3c0d-c8af-47fd-969b-63233897056f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andrée',
    room: '031',
    reservedBy: 'zz',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LA',
    bbIn: 'IP',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4684ad1-7637-4125-80d4-4c225f520d04',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '265',
    reservedBy: 'zu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PF',
    bbIn: 'VT',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef2919fb-d290-476c-9301-87e537587525',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Dafnée',
    room: '195',
    reservedBy: 'fv',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
    bbOut: 'NW',
    bbIn: 'SD',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce10c1ce-753f-4b71-9b45-e2c9899637d4',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '621',
    reservedBy: 'rs',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LQ',
    bbIn: 'MQ',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b49f4e3-427f-44ed-a67f-3df7f1f82864',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '784',
    reservedBy: 'gm',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: null,
    bbOut: 'EM',
    bbIn: 'ZV',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bde48e05-e7a2-4c06-921d-48d06be1c7c9',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '502',
    reservedBy: 'cr',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AV',
    bbIn: 'RJ',
    timeOut: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1dc4292a-f2fd-4567-a2d3-ebdc285520a4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '323',
    reservedBy: 'mx',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CE',
    bbIn: 'KY',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4cf5f350-43d2-4c85-be9c-ee1f6bf81123',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léone',
    room: '315',
    reservedBy: 'jk',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d05fe6b-7514-4b3f-bc41-446390096038',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léane',
    room: '074',
    reservedBy: 'vk',
    bikeFormCompleted: false,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: null,
    bbOut: 'DH',
    bbIn: 'HE',
    timeOut: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a749af95-aa4c-4f81-909e-e49649bfe6b3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '645',
    reservedBy: 'kv',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TC',
    bbIn: 'WV',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d953433-ee66-44f1-9d33-22a7e450f82d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '162',
    reservedBy: 'rv',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BA',
    bbIn: 'LS',
    timeOut: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c134b80-a8f0-482d-a1bf-e38c67207b65',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aloïs',
    room: '645',
    reservedBy: 'qv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DW',
    bbIn: 'RY',
    timeOut: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa33b693-1b56-4dd0-bf24-79053256cbf8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '726',
    reservedBy: 'wr',
    bikeFormCompleted: true,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AZ',
    bbIn: 'VM',
    timeOut: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c461ff56-83cc-4c00-ba5f-777ea10dd907',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Lauréna',
    room: '282',
    reservedBy: 'ln',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'DO',
    timeOut: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c2c3302-f19d-4053-bb0f-c9ab41f1dd8a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '482',
    reservedBy: 'op',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MI',
    bbIn: 'OE',
    timeOut: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a0347ca-f8a5-4ac7-a18c-e1469ec59d34',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Léonie',
    room: '426',
    reservedBy: 'lq',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AH',
    bbIn: 'QR',
    timeOut: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0643efc0-b38f-472c-93ed-19d1e5253674',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '269',
    reservedBy: 'nh',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OD',
    bbIn: 'JT',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9978b8d-21bd-4e88-a461-0b18b1d7f922',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '873',
    reservedBy: 'hk',
    bikeFormCompleted: false,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eeefc87f-828a-4a60-87a1-5987afb3aaf8',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Naéva',
    room: '134',
    reservedBy: 'zk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e88ee394-26e0-4e87-9f7c-682dc5ea0ff5',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélodie',
    room: '637',
    reservedBy: 'se',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CQ',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3d1569f-202f-45ae-a3ba-97036ee16e00',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Zhì',
    room: '951',
    reservedBy: 'bz',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MR',
    bbIn: 'PJ',
    timeOut: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cae48cbe-ce27-437e-9869-f949624e32d4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '728',
    reservedBy: 'xk',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LU',
    bbIn: 'OH',
    timeOut: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '095e9532-d3b4-4925-83b8-4a5671520f2d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '622',
    reservedBy: 'yh',
    bikeFormCompleted: null,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SY',
    bbIn: 'CK',
    timeOut: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '353bebcc-f3c9-4fc0-a3ee-a9b6ca1580c4',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Hélène',
    room: '834',
    reservedBy: 'uj',
    bikeFormCompleted: false,
    comments: 'In blandit ultrices enim.',
    completedAt: null,
    bbOut: 'NT',
    bbIn: 'MB',
    timeOut: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34f350f5-e4b4-4d4a-bda0-5daa1da6e811',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '617',
    reservedBy: 'ob',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RU',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4e14b15-271e-4f70-90b8-780ce526b1c2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '219',
    reservedBy: 'zn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HC',
    bbIn: 'OH',
    timeOut: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0af2c8dc-2f51-4771-a393-de7c20c90906',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lén',
    room: '482',
    reservedBy: 'jt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AA',
    bbIn: 'WM',
    timeOut: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '023005be-fdda-4030-b307-1ba191807dfa',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Camélia',
    room: '190',
    reservedBy: 'qr',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NV',
    bbIn: 'RE',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6615772e-ffef-4423-a445-024a5426b1c7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '757',
    reservedBy: 'mk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BS',
    bbIn: 'FD',
    timeOut: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae9538c5-11ed-4a31-b5ec-836ea1efc532',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Aimée',
    room: '656',
    reservedBy: 'rc',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XV',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a83d7f47-4241-4d1a-9820-40ba5c2d09b3',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Mà',
    room: '197',
    reservedBy: 'lt',
    bikeFormCompleted: null,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'BU',
    timeOut: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5a182d74-5bd5-431c-bf4e-fd8f949c142d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '558',
    reservedBy: 'ex',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WB',
    bbIn: 'FN',
    timeOut: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '15ebc26e-d2ce-4042-a9ec-c8bfb22dcae4',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Estève',
    room: '724',
    reservedBy: 'hl',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OD',
    bbIn: 'FT',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4959b679-7b80-4cbf-b768-e18dd5684d62',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Eliès',
    room: '096',
    reservedBy: 'fb',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'CT',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b94f6d5-fa71-4be6-8f41-04e7c6ae89d2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '542',
    reservedBy: 'gk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'DH',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e804d8ee-f792-409a-9c3b-83c87ae1aafc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Frédérique',
    room: '601',
    reservedBy: 'vi',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: null,
    bbOut: 'AK',
    bbIn: 'ZJ',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9be58434-69d6-4f59-a32d-53d4423bc353',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Gérald',
    room: '985',
    reservedBy: 'fo',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VU',
    bbIn: 'RK',
    timeOut: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e666ce5-9773-49f1-a719-da884ef8a0e6',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méryl',
    room: '577',
    reservedBy: 'dc',
    bikeFormCompleted: true,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: null,
    bbOut: 'ZY',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bff4b78f-cd7c-46ed-8a50-8549d586a027',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélinda',
    room: '778',
    reservedBy: 'iq',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: null,
    bbOut: 'FR',
    bbIn: 'OC',
    timeOut: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '751ed1fa-e8d7-4d85-966f-0703fa5d82c4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maéna',
    room: '203',
    reservedBy: 'pq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XC',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80766b61-bd21-4c03-8fe6-24fe1b4f2e6c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '655',
    reservedBy: 'to',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'RU',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2d32a38-38c7-4c74-8bab-6ea2d2b9c0d8',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Léone',
    room: '225',
    reservedBy: 'ax',
    bikeFormCompleted: null,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OV',
    bbIn: 'RF',
    timeOut: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e045b619-4b62-4800-8b9a-f7c88e14ff84',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '935',
    reservedBy: 'cm',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GJ',
    bbIn: 'JP',
    timeOut: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f37a5a58-3f99-46e1-ad18-d4cb8485cac0',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Sélène',
    room: '118',
    reservedBy: 'qh',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZY',
    bbIn: 'TO',
    timeOut: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5cb6ea98-fea1-444f-a5a7-101c5f8188de',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Lyséa',
    room: '926',
    reservedBy: 'ap',
    bikeFormCompleted: true,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'UY',
    timeOut: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '61023367-df87-4eb1-b2e8-feb18208c1fb',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '024',
    reservedBy: 'sn',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: null,
    bbOut: 'JL',
    bbIn: 'AT',
    timeOut: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4d0e36d-0462-4721-bc2d-178f20650d4b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '515',
    reservedBy: 'mv',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OK',
    bbIn: 'BT',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cac68860-b1e2-4c29-8af9-1f47e9860f32',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '835',
    reservedBy: 'rv',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CG',
    bbIn: 'AC',
    timeOut: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd23712d3-88f4-4766-86e6-743023428b80',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '577',
    reservedBy: 'fy',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IT',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e6ae9f8-752f-4aba-afa4-ff6fd72613e3',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Cinéma',
    room: '022',
    reservedBy: 'xc',
    bikeFormCompleted: false,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PZ',
    bbIn: 'PP',
    timeOut: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95395b00-cbe2-46eb-8ceb-c5205a8c69da',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '175',
    reservedBy: 'po',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: null,
    bbOut: 'XE',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1054d685-bf34-43d5-a29d-7baef55babde',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Frédérique',
    room: '417',
    reservedBy: 'bk',
    bikeFormCompleted: false,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UI',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7eff256b-1d1c-406a-a8db-ae30e5d3a1d0',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '573',
    reservedBy: 'sz',
    bikeFormCompleted: false,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: null,
    bbOut: 'OS',
    bbIn: 'EK',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '230e0f29-f31e-4bb5-8ad6-3c4d73cb82ae',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Dorothée',
    room: '865',
    reservedBy: 'ws',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IL',
    bbIn: 'YL',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31ffe978-60b5-4f69-8f85-d96ed7c3cae8',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marlène',
    room: '465',
    reservedBy: 'pl',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'CD',
    timeOut: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c49f4f7-3727-450d-82da-5f19d71df055',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Yóu',
    room: '131',
    reservedBy: 'nh',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: null,
    bbOut: 'TD',
    bbIn: 'GR',
    timeOut: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83055963-8615-4306-b50e-ed3fc18fa6f6',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '436',
    reservedBy: 'nw',
    bikeFormCompleted: false,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'HW',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1e5eee4d-0762-4ed6-b16c-c8d5ab70cfc6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åsa',
    room: '102',
    reservedBy: 'gv',
    bikeFormCompleted: false,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UE',
    bbIn: 'VC',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '50db0468-e2c8-4675-8ffe-0e689c8f7228',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '042',
    reservedBy: 'vh',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OC',
    bbIn: 'NK',
    timeOut: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '19d226f4-450a-4f26-adce-de2f46f9dcf8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '119',
    reservedBy: 'cg',
    bikeFormCompleted: null,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AV',
    bbIn: 'LB',
    timeOut: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7d3b9b15-40af-4544-9d21-f48c42688481',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Kallisté',
    room: '058',
    reservedBy: 'wl',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: null,
    bbOut: 'QC',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd487b00d-f93c-4cec-bf73-9e00e45e1279',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Simplifiés',
    room: '259',
    reservedBy: 'py',
    bikeFormCompleted: null,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
    bbOut: 'UR',
    bbIn: 'WV',
    timeOut: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5accce99-af95-4c2d-be1c-c36ae580ab69',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '377',
    reservedBy: 'tk',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: null,
    bbOut: 'RD',
    bbIn: 'UU',
    timeOut: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '44778b60-f467-4608-bff9-ac7178081282',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '403',
    reservedBy: 'sc',
    bikeFormCompleted: false,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'LO',
    timeOut: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '511bf5e4-af17-4833-a42e-c086e8298e00',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Joséphine',
    room: '164',
    reservedBy: 'by',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AX',
    bbIn: 'UR',
    timeOut: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8313254e-41c9-4e7e-a00d-1937aec5d6c2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Laïla',
    room: '888',
    reservedBy: 'ep',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RC',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e48605a6-43fd-4b37-9e83-14fbd5fcbf79',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Yénora',
    room: '779',
    reservedBy: 'az',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SK',
    bbIn: 'PA',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '72e90959-97a3-43ab-8d5a-6b4b13db5c8d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '114',
    reservedBy: 'hn',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AC',
    bbIn: 'PJ',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e4c08f3-b126-495a-8460-30f6007e3315',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '277',
    reservedBy: 'ff',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JR',
    bbIn: 'SE',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd366f51d-d8ea-4db3-828f-64cf7db9c54c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '789',
    reservedBy: 'jo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'CD',
    bbIn: 'WB',
    timeOut: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea557351-6192-4b20-bf1c-d79a9dc5dbbc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '862',
    reservedBy: 'yq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RR',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '43f0d1fe-569a-4917-b393-2ee90b0d8938',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '984',
    reservedBy: 'rw',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CK',
    bbIn: 'CX',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e53601d5-1c40-4146-8c8e-91b903dd50c1',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Håkan',
    room: '638',
    reservedBy: 'en',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: null,
    bbOut: 'XY',
    bbIn: 'HB',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '440b1089-d195-464f-9954-5e6050068188',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '605',
    reservedBy: 'ki',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: null,
    bbOut: 'HO',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0690bb23-8cfe-4561-9d85-440b024ea8ed',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åslög',
    room: '965',
    reservedBy: 'xu',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OA',
    bbIn: 'MD',
    timeOut: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7fcbcae3-2e0b-49d2-9bee-dab7310909ff',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '571',
    reservedBy: 'jp',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DZ',
    bbIn: 'FL',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e7d6aa76-5244-4154-8a75-b25998c4cc10',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '248',
    reservedBy: 'ia',
    bikeFormCompleted: null,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XN',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08f2ac26-7c55-49bb-8115-d1aa3210dd49',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '317',
    reservedBy: 'ub',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'BB',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42b782f8-0e2b-41ad-84f0-b36d30d9f041',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '897',
    reservedBy: 'bn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'XP',
    bbIn: 'ST',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27d0b162-c195-4f5e-a5be-d34e94d1a24a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aimée',
    room: '677',
    reservedBy: 'ff',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'CY',
    timeOut: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47c855a1-3893-49c7-9f45-33fb9686c12f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '892',
    reservedBy: 'in',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KQ',
    bbIn: 'LR',
    timeOut: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f1f2623-d26e-4101-bfa5-6bcaf29c9d8d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '283',
    reservedBy: 'nn',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'LT',
    timeOut: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dba5a5c9-affe-4924-9591-d869e6adaf9b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '326',
    reservedBy: 'ac',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'YK',
    timeOut: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2251bf7-0d21-4f3f-8972-173f6e85c0d2',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Annotés',
    room: '268',
    reservedBy: 'cn',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AG',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8804303-eedb-4065-8918-b7078cd7ef1d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '775',
    reservedBy: 'ms',
    bikeFormCompleted: null,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: null,
    bbOut: 'FK',
    bbIn: 'MJ',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7876bec1-b84b-4f14-8889-c4bf4b1d0be7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Frédérique',
    room: '544',
    reservedBy: 'vb',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: null,
    bbOut: 'PV',
    bbIn: 'IY',
    timeOut: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ff1fad4a-73c3-40c8-8963-8a4493d2964a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '813',
    reservedBy: 'cn',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NT',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a023a4d-8b93-4b92-a197-c7fdc1273cae',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '401',
    reservedBy: 'nq',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: null,
    bbOut: 'PH',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '74fa815e-03b9-4cd2-aa31-ec8d7121a135',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mélys',
    room: '734',
    reservedBy: 'lb',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QQ',
    bbIn: 'BN',
    timeOut: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f693424-7173-4367-bbc1-3d17ccadcb9a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aloïs',
    room: '389',
    reservedBy: 'cx',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NT',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b1b956d-03e8-4e14-8635-2c55f7a15a55',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '867',
    reservedBy: 'hj',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PO',
    bbIn: 'YF',
    timeOut: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4efd23f-21b5-4ecd-a55e-48ffc79cd6ba',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Yú',
    room: '988',
    reservedBy: 'xz',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '75cdd752-b860-4556-a53c-25c0abbfa91b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Sélène',
    room: '123',
    reservedBy: 'dj',
    bikeFormCompleted: null,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LQ',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa43c7ec-7b3f-41b2-8bed-2e6c575f5f2e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andrée',
    room: '858',
    reservedBy: 'te',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'ZC',
    timeOut: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '781db2bd-d3e1-4a5d-abc3-5c5bb5aedb63',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '385',
    reservedBy: 'da',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZN',
    bbIn: 'GQ',
    timeOut: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47d0d8d0-0ce1-47f4-9663-d5b2f110fa46',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('15/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Esbjörn',
    room: '182',
    reservedBy: 'wr',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DO',
    bbIn: 'TT',
    timeOut: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9436d796-a9e6-4e88-8dc9-030cf38036f9',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Stévina',
    room: '083',
    reservedBy: 'ff',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UB',
    bbIn: 'GN',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '907b402d-0e5a-4dbe-b24b-58d4dcf58da8',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Edmée',
    room: '476',
    reservedBy: 'fl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MB',
    bbIn: 'IB',
    timeOut: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ef98d25-f645-4ce3-8bb8-128b563dd8b7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '321',
    reservedBy: 'rp',
    bikeFormCompleted: null,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'UW',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd43bfc18-1138-431e-aafc-8bc0ce505597',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mylène',
    room: '534',
    reservedBy: 'hb',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NU',
    bbIn: 'RN',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fee3917a-94bb-4872-a952-9e725330dc02',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Hélèna',
    room: '946',
    reservedBy: 'gf',
    bikeFormCompleted: true,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JN',
    bbIn: 'DS',
    timeOut: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cac982fc-962a-4d65-9ecc-29a593aeca41',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '594',
    reservedBy: 'vr',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: null,
    bbOut: 'XM',
    bbIn: 'MB',
    timeOut: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79664d2a-9f5d-4892-bada-920a89a8ff48',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naéva',
    room: '359',
    reservedBy: 'nj',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SW',
    bbIn: 'SB',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '19e6daf5-bb60-46d0-b2ff-93a676f56e8e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naéva',
    room: '429',
    reservedBy: 'ur',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HJ',
    bbIn: 'MP',
    timeOut: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0144f394-3e8a-4c7b-9b04-5df9813cbb7b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Örjan',
    room: '142',
    reservedBy: 'qp',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UW',
    bbIn: 'PJ',
    timeOut: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3ff05eb-2d0c-46b0-820a-0d78b2749ccc',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '721',
    reservedBy: 'nr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SH',
    bbIn: 'KJ',
    timeOut: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '428ba2ff-82f2-4b51-acfd-ce33a09db013',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '644',
    reservedBy: 'vb',
    bikeFormCompleted: true,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NY',
    bbIn: 'XU',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fd40be26-22f0-462c-8def-700bbef46fb8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '284',
    reservedBy: 'lq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LT',
    bbIn: 'WF',
    timeOut: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ada2af7-2453-4000-8d6b-a2326dfffdf4',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '807',
    reservedBy: 'pb',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GF',
    bbIn: 'PS',
    timeOut: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '71ca9450-5fe6-4376-b36c-fd0522e2cfd6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '408',
    reservedBy: 'vk',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GP',
    bbIn: 'SN',
    timeOut: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64d3ed6d-7644-4e1d-a26b-0430d9762527',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '668',
    reservedBy: 'qs',
    bikeFormCompleted: true,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZS',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3c6b086-cf6d-447b-ac18-2c3b5d0ee20f',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Laurélie',
    room: '675',
    reservedBy: 'uj',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: null,
    bbOut: 'DM',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '84b952d8-5616-4c5e-b209-4927fbd8f4b3',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Wá',
    room: '934',
    reservedBy: 'kk',
    bikeFormCompleted: null,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: null,
    bbOut: 'UR',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3fdcbd88-bde3-4a68-8109-200d9faeb533',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Aloïs',
    room: '222',
    reservedBy: 'gn',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OW',
    bbIn: 'FL',
    timeOut: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8beafec6-4ac0-4de0-8670-6e22bf0d2867',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Cinéma',
    room: '975',
    reservedBy: 'nh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ME',
    bbIn: 'BJ',
    timeOut: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a1342f73-b4ee-4b27-aee3-98bc4667a57a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '078',
    reservedBy: 'hv',
    bikeFormCompleted: null,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NH',
    bbIn: 'CI',
    timeOut: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f2bd509-45c6-4cb7-8bc5-437b43ddf9a8',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '667',
    reservedBy: 'wc',
    bikeFormCompleted: null,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CE',
    bbIn: 'PG',
    timeOut: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95c76bc3-7187-47cc-8ba4-6617f89e7c8e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Josée',
    room: '756',
    reservedBy: 'ni',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CE',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8354cade-f60d-4b62-bff4-d7ba68a6757b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '436',
    reservedBy: 'xo',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '50ee05a4-d364-470c-b259-160bed20215c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Yénora',
    room: '104',
    reservedBy: 'ek',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
    bbOut: 'XB',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b34bcd1-3080-4fea-b7c5-72982a9dc715',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Liè',
    room: '422',
    reservedBy: 'ni',
    bikeFormCompleted: false,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bd3a971-2668-4bd0-b509-e482cc69cb07',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Gisèle',
    room: '495',
    reservedBy: 'ib',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VC',
    bbIn: 'NT',
    timeOut: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eef8985c-5983-4854-9f8c-71f1d6a53412',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '166',
    reservedBy: 'kt',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TX',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ebf6f6ee-60a0-4e49-acc6-0d06993823e3',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '325',
    reservedBy: 'zq',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HN',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5414a56-22b3-4cc0-9c73-0a38ec92f69d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maïlis',
    room: '211',
    reservedBy: 'im',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZO',
    bbIn: 'XT',
    timeOut: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1292aff5-017e-4dfd-98df-3716ca478431',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Athéna',
    room: '374',
    reservedBy: 'vn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NE',
    bbIn: 'ZO',
    timeOut: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd0fa3cd7-1c54-476f-a12f-8c0a84747d3a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '010',
    reservedBy: 'tn',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DP',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9453afa7-2153-409f-9adc-664ecf73a5a2',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Valérie',
    room: '529',
    reservedBy: 'xl',
    bikeFormCompleted: null,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UM',
    bbIn: 'JI',
    timeOut: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2590a3a5-5c60-456d-8a28-a9785f2a8432',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '897',
    reservedBy: 'lx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AY',
    bbIn: 'RG',
    timeOut: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9953a17f-eef5-491e-bf93-b01a5bf457d4',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '425',
    reservedBy: 'cf',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TM',
    bbIn: 'JH',
    timeOut: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8ca743b8-4fee-407f-bfa3-650c249a8c9f',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '119',
    reservedBy: 'en',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RV',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b0fec3c0-34e1-458e-b76b-148b9e162ecf',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '518',
    reservedBy: 'dh',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QA',
    bbIn: 'FK',
    timeOut: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '19ef1254-b6c6-443d-b6cc-85794f20a385',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Régine',
    room: '097',
    reservedBy: 'sz',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ML',
    bbIn: 'GK',
    timeOut: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bde94e6c-ef50-4754-ae3c-04330a42d9cd',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '443',
    reservedBy: 'xi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'QG',
    bbIn: 'AY',
    timeOut: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3f7d015-f4db-4c3f-bc04-16e2a9653175',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '403',
    reservedBy: 'qg',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UY',
    bbIn: 'KB',
    timeOut: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27337c8b-2902-4995-b1d0-0141611490f0',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '265',
    reservedBy: 'ed',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'GG',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02d855c3-b991-4bba-a2e2-459e24b9552b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vérane',
    room: '004',
    reservedBy: 'lr',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MI',
    bbIn: 'FY',
    timeOut: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4762d2a-a448-4424-a1ce-78fa38fb6dc8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '860',
    reservedBy: 'qx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RC',
    bbIn: 'HM',
    timeOut: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '81919e9f-0944-4589-b9dc-72e4997442f9',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '704',
    reservedBy: 'te',
    bikeFormCompleted: null,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OD',
    bbIn: 'TJ',
    timeOut: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5d357f7-8daa-4b50-9212-d8773dccfe80',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélanie',
    room: '547',
    reservedBy: 'xv',
    bikeFormCompleted: true,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RW',
    bbIn: 'FZ',
    timeOut: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '91f52213-0de5-44ad-bab6-fcc24d4b1be5',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '292',
    reservedBy: 'wt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1414451a-9501-44a1-946e-2855ae289731',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Alizée',
    room: '563',
    reservedBy: 'px',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DI',
    bbIn: 'VS',
    timeOut: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec7943d7-43f4-4987-8532-37771ef0c573',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélia',
    room: '041',
    reservedBy: 'lj',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: null,
    bbOut: 'PB',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c897bec-db48-45b4-a9ed-ba5634444949',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '871',
    reservedBy: 'dv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4e31fef1-d6c0-45b2-805d-5550c27629ec',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '683',
    reservedBy: 'nf',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DP',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36649878-95b7-4eaf-92a6-ac4f13b92159',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Méng',
    room: '719',
    reservedBy: 'zl',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PT',
    bbIn: 'GS',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '547c64f7-9932-4e0d-9c67-b741632d3494',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '983',
    reservedBy: 'zc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FU',
    bbIn: 'VH',
    timeOut: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6736409-da13-4005-921f-50463770ddc7',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '475',
    reservedBy: 'ma',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OS',
    bbIn: 'SF',
    timeOut: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5318c04c-17ad-45af-97e3-689be6fda7ea',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Táng',
    room: '910',
    reservedBy: 'it',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SO',
    bbIn: 'CE',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '579899b2-9773-4ff4-ba85-bee3567d1e7f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maïly',
    room: '794',
    reservedBy: 'dv',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KQ',
    bbIn: 'RA',
    timeOut: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e65a13e-df14-437e-b8d9-ee5e7c199491',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Yénora',
    room: '482',
    reservedBy: 'uc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'KX',
    bbIn: 'DM',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae7f1803-1e72-4e0c-b777-ea9e43172add',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '375',
    reservedBy: 'ko',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WS',
    bbIn: 'HM',
    timeOut: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1ced0d9a-a5cb-4040-977e-ef62a85f392c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '372',
    reservedBy: 'na',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IK',
    bbIn: 'UO',
    timeOut: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '198ff71a-7a0b-4eb8-ac85-5fc452ba69fd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '645',
    reservedBy: 'lr',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HS',
    bbIn: 'MS',
    timeOut: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '32b1061e-f86d-46a6-b796-9ba4488e26f1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '831',
    reservedBy: 'eb',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BB',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '244becb6-e8ea-4702-840a-5637cdfa988d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '384',
    reservedBy: 'km',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: null,
    bbOut: 'KC',
    bbIn: 'NC',
    timeOut: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0b26cb86-c8a7-45be-b7e0-ab98f89ba0e9',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Nadège',
    room: '271',
    reservedBy: 'wa',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PM',
    bbIn: 'CZ',
    timeOut: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c08e7ded-be81-45d8-8099-4165f3c93324',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Béatrice',
    room: '633',
    reservedBy: 'nm',
    bikeFormCompleted: null,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VC',
    bbIn: 'AW',
    timeOut: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '20e02850-0170-4374-9e13-1398662a3bdf',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '897',
    reservedBy: 'jc',
    bikeFormCompleted: true,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'QU',
    timeOut: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '33f284e3-7520-47b2-b126-168c54434aa7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Alizée',
    room: '747',
    reservedBy: 'cp',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AP',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dca07ec3-44a8-479a-aa34-1bbe3c1c2acc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '023',
    reservedBy: 'mk',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OY',
    bbIn: 'VI',
    timeOut: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '647a246f-d0f4-4451-aff5-26e5ea549255',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '771',
    reservedBy: 'eb',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NI',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '84bb80f4-a68c-4756-8aea-93c8ebcb74e7',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Aurélie',
    room: '344',
    reservedBy: 'bk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'KW',
    bbIn: 'SR',
    timeOut: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '41d0bd2d-024f-462a-a21e-f30447067b0f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '822',
    reservedBy: 'ad',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'QC',
    timeOut: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'df88c143-237d-4dc6-be64-0f3c6c72ff8a',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Cléa',
    room: '404',
    reservedBy: 'sd',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'HW',
    bbIn: 'WA',
    timeOut: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87b1ca55-e86d-46fb-bf0a-b53cc910f5e4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '186',
    reservedBy: 'ss',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'MS',
    bbIn: 'XC',
    timeOut: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5e8b66e-08f2-4ad1-9933-7a821f96ced1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Yénora',
    room: '994',
    reservedBy: 'wr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'XU',
    bbIn: 'EY',
    timeOut: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2105427-a084-4b5a-a1d9-16e0f918890d',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '405',
    reservedBy: 'uf',
    bikeFormCompleted: null,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KZ',
    bbIn: 'SK',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '039884d6-f232-4b1b-b062-cdb6db20cdb2',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marylène',
    room: '960',
    reservedBy: 'ql',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PM',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b94d05e7-96f2-44a2-bd12-0f5f1bc82fe0',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Görel',
    room: '059',
    reservedBy: 'ps',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JO',
    bbIn: 'IE',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17e91bf0-3212-4876-91b5-b802d81cc85f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '225',
    reservedBy: 'ln',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WQ',
    bbIn: 'YN',
    timeOut: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e259662d-8025-47de-889f-ae580f7a25c7',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Ruì',
    room: '387',
    reservedBy: 'us',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FH',
    bbIn: 'XC',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2fbb6b9-7c48-4564-bb2d-fa4bfba94a65',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '308',
    reservedBy: 'no',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YK',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7cee8773-3fad-4fdd-a6a3-5211451cfca5',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Yénora',
    room: '868',
    reservedBy: 'be',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZB',
    bbIn: 'JA',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1c32bb26-e7c8-4430-b78e-70238c5266ea',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélys',
    room: '508',
    reservedBy: 'jn',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'DP',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '495e89be-a055-40b2-b70c-b6e371b56eac',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '297',
    reservedBy: 'lf',
    bikeFormCompleted: false,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SA',
    bbIn: 'SD',
    timeOut: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da24b48d-6e8c-49c8-8389-7672cecf9239',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélie',
    room: '724',
    reservedBy: 'gk',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BA',
    bbIn: 'ZR',
    timeOut: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0d9d2a2b-1e6f-4de5-8838-98dc3da19832',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '421',
    reservedBy: 'mi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KG',
    bbIn: 'YK',
    timeOut: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'acb3572f-bbdf-410c-ae13-c571be10dd67',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '188',
    reservedBy: 'gm',
    bikeFormCompleted: true,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZV',
    bbIn: 'SD',
    timeOut: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '16fb097a-b053-4c50-a53b-e2b0ee5c25e2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laïla',
    room: '312',
    reservedBy: 'dn',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: null,
    bbOut: 'DQ',
    bbIn: 'HA',
    timeOut: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1e6d8807-330f-4f81-a24a-02d24f23c85a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '461',
    reservedBy: 'xx',
    bikeFormCompleted: false,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: null,
    bbOut: 'BK',
    bbIn: 'AP',
    timeOut: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5c978909-8fb0-46dd-9ce5-6e11e4db1e3f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlann',
    room: '588',
    reservedBy: 'wp',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: null,
    bbOut: 'OY',
    bbIn: 'NC',
    timeOut: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea38759f-eed3-4166-9de4-7b7fdb8bc9a0',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Lèi',
    room: '169',
    reservedBy: 'ak',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: null,
    bbOut: 'QR',
    bbIn: 'UZ',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25920e9d-eaf7-4fdd-a4f8-a14591e5ec2e',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Lyséa',
    room: '591',
    reservedBy: 'cf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'WM',
    bbIn: 'NI',
    timeOut: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca5a4bc8-86d4-4a27-9513-aa23db4ac05e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méghane',
    room: '805',
    reservedBy: 'gt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GA',
    bbIn: 'SB',
    timeOut: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88a0bb03-9a29-4c85-a513-21ce8b93506f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '418',
    reservedBy: 'xv',
    bikeFormCompleted: null,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
    bbOut: 'XG',
    bbIn: 'TU',
    timeOut: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7bace00f-c67f-4c55-9f7c-405385c7ef56',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Liè',
    room: '040',
    reservedBy: 'ug',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PN',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd212885-9a8d-4b2c-aea0-ba29ece8ee87',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '477',
    reservedBy: 'ns',
    bikeFormCompleted: false,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AF',
    bbIn: 'XE',
    timeOut: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3dcaa698-edb9-4e1f-b6a5-016288756db4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Danièle',
    room: '890',
    reservedBy: 'zb',
    bikeFormCompleted: false,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CZ',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4ce094b9-e55f-4007-b78e-438e0b07415d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Cléa',
    room: '859',
    reservedBy: 'kd',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PI',
    bbIn: 'VY',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb75c6f3-57d5-4fe4-baf7-6a9d491b29e7',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Almérinda',
    room: '678',
    reservedBy: 'cp',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YF',
    bbIn: 'IM',
    timeOut: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '665a7862-99e9-4834-a589-c2c1106192ec',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '770',
    reservedBy: 'or',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XD',
    bbIn: 'OJ',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4da58a00-9802-4da2-99cb-c144a9228faa',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Pål',
    room: '627',
    reservedBy: 'cd',
    bikeFormCompleted: false,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GC',
    bbIn: 'SC',
    timeOut: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9efdb893-b903-4f12-aee0-8906935b75a8',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maëlann',
    room: '857',
    reservedBy: 'qc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'QK',
    timeOut: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31ed137a-475c-4369-ad38-5a9141b6d576',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Almérinda',
    room: '479',
    reservedBy: 'co',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: null,
    bbOut: 'KS',
    bbIn: 'CG',
    timeOut: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2efe52a0-0c53-43d5-9615-0d28491ef6c8',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Célia',
    room: '559',
    reservedBy: 'ud',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'LC',
    bbIn: 'XK',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3521d5c4-efe4-46f1-a2f5-9d209cd41262',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Lóng',
    room: '814',
    reservedBy: 'yi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'RO',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3ff57a48-31cf-43da-b399-bfde289bc9f3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '883',
    reservedBy: 'uf',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: null,
    bbOut: 'DF',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6baa36f2-c412-47ae-b7a8-28a2a6319fb3',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Léa',
    room: '889',
    reservedBy: 'yt',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: null,
    bbOut: 'BZ',
    bbIn: 'TT',
    timeOut: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8f2e989-910d-48ab-a4b9-ff473470dced',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '622',
    reservedBy: 'er',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CI',
    bbIn: 'ZG',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '497ab5e0-bd57-444b-9a9a-40177af2a859',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '041',
    reservedBy: 'st',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EY',
    bbIn: 'EG',
    timeOut: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c93388da-5240-4e7f-b4d3-5be5ab0c585d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Séréna',
    room: '876',
    reservedBy: 'up',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OZ',
    bbIn: 'UC',
    timeOut: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8ecdf27c-a31e-4186-8202-623ab602b17b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '490',
    reservedBy: 'yt',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XC',
    bbIn: 'JF',
    timeOut: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e39632b-b306-4812-a1a2-fb81e2cd7fca',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Magdalène',
    room: '337',
    reservedBy: 'gw',
    bikeFormCompleted: null,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SB',
    bbIn: 'HX',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '23194479-8502-4911-b817-b05b332b32ce',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maïlys',
    room: '091',
    reservedBy: 'mw',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'BE',
    timeOut: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4b8b71d0-568b-448c-830b-b289da21c7c8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '514',
    reservedBy: 'yx',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QD',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '52aa2ad1-84bb-488f-96ba-61adf13d832d',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '856',
    reservedBy: 'yp',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BO',
    bbIn: 'RX',
    timeOut: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c221ae98-5328-4cd4-abfc-fdc4d0c6b9a5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérénice',
    room: '100',
    reservedBy: 'zl',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'WE',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '811359da-1f61-4a9b-86ca-0a2bcb6f260b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '988',
    reservedBy: 'bn',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'FH',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc470e95-88d9-41a8-8a06-a7312d42d35c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '940',
    reservedBy: 'tg',
    bikeFormCompleted: false,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YW',
    bbIn: 'UR',
    timeOut: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c1b01fb0-a8ec-4bb2-ac78-f5f45e3801b1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '899',
    reservedBy: 'rj',
    bikeFormCompleted: null,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YD',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4648f823-1dc7-41c0-91fe-610066d732b4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '788',
    reservedBy: 'gt',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CW',
    bbIn: 'UV',
    timeOut: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47e18441-a1bc-4853-a467-9d157bb67cca',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëline',
    room: '950',
    reservedBy: 'vn',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DV',
    bbIn: 'DP',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '61d0090a-8e9d-4660-b0c0-511db9199e27',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '256',
    reservedBy: 'uc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OE',
    bbIn: 'DC',
    timeOut: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1255532b-cd35-432d-b7b9-773076aba229',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Adèle',
    room: '852',
    reservedBy: 'xh',
    bikeFormCompleted: false,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HD',
    bbIn: 'WC',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e715f00-9332-455f-998d-e0da96d8be28',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Camélia',
    room: '506',
    reservedBy: 'zo',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VI',
    bbIn: 'YU',
    timeOut: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8fd822cf-9852-4977-8eed-af44142c2f63',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Anaël',
    room: '398',
    reservedBy: 'aa',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FP',
    bbIn: 'BG',
    timeOut: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0075d5c2-d051-4caa-b4e1-e0c956d50483',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '753',
    reservedBy: 'fb',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HM',
    bbIn: 'XF',
    timeOut: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '509446b3-c891-4de6-b462-fd72555dc3ff',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Cloé',
    room: '426',
    reservedBy: 'yh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PA',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd99af2e8-1aed-4b1f-acee-b1d89e6f2dda',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maïlys',
    room: '695',
    reservedBy: 'rj',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EJ',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54dd46f3-afa3-4c52-8a2b-86cb71000659',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Erwéi',
    room: '541',
    reservedBy: 'bi',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UH',
    bbIn: 'ED',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e15988ba-8890-4659-86e8-ffbde81ad8bd',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Östen',
    room: '338',
    reservedBy: 'wc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'WQ',
    bbIn: 'ZR',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8e79cf8d-e7ce-4ba9-94a1-0af3a97ae9b6',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Léane',
    room: '994',
    reservedBy: 'cs',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YX',
    bbIn: 'UN',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25cef349-ffb6-4221-b92a-4445bdeda531',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Nuó',
    room: '120',
    reservedBy: 'yx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'MZ',
    bbIn: 'ER',
    timeOut: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'df900f32-0059-46b5-a278-51a5a0d978ad',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dà',
    room: '853',
    reservedBy: 'wu',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JM',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5dc5e58-34ce-4047-8b85-c5a03bd90641',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maéna',
    room: '269',
    reservedBy: 'oz',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: null,
    bbOut: 'VF',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd6cbbe2-10ad-4529-9fc6-848cb2ab5b2c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '233',
    reservedBy: 'lz',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BO',
    bbIn: 'UU',
    timeOut: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c00e6f7c-46c8-4119-b7cc-4f8f61785de4',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Dù',
    room: '974',
    reservedBy: 'bx',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BN',
    bbIn: 'VO',
    timeOut: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '015695b0-9087-4618-ba2e-440a77dccf2d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Gaétane',
    room: '098',
    reservedBy: 'bh',
    bikeFormCompleted: null,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'YH',
    bbIn: 'VW',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0dd09b9-25e6-493b-935c-82754b227e70',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '040',
    reservedBy: 'ut',
    bikeFormCompleted: false,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EI',
    bbIn: 'ZE',
    timeOut: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '054fabf3-8d9d-4279-9b02-f217ac8ffc25',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Angèle',
    room: '275',
    reservedBy: 'dk',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IE',
    bbIn: 'FN',
    timeOut: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd859fb1-0230-4582-9ae4-6cfd783acf13',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Valérie',
    room: '975',
    reservedBy: 'kj',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: null,
    bbOut: 'XL',
    bbIn: 'WZ',
    timeOut: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec8e4bc8-298f-48cb-873e-509841972550',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '478',
    reservedBy: 'lf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DP',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '047aa318-4bea-4f7f-9f11-659104d3a321',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Aimée',
    room: '499',
    reservedBy: 'zd',
    bikeFormCompleted: false,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
    bbOut: 'PP',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18154ecd-1884-4204-a424-9f10bd4a7ef8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '735',
    reservedBy: 'gl',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UR',
    bbIn: 'TZ',
    timeOut: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf3fbc96-6321-4f26-b81c-226207552609',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Håkan',
    room: '798',
    reservedBy: 'vc',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BS',
    bbIn: 'MR',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '692e2c43-0566-4ace-b1d7-be39646ad890',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '138',
    reservedBy: 'vt',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: null,
    bbOut: 'QE',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '45e377cc-d7bd-482e-a305-61af39bddbee',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '468',
    reservedBy: 'su',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: null,
    bbOut: 'ME',
    bbIn: 'YT',
    timeOut: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae745337-6608-4b15-a0a0-0baf69503271',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '918',
    reservedBy: 'ms',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'RV',
    bbIn: 'AG',
    timeOut: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4e313606-bae8-45b1-9e37-5a76e01689b8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '168',
    reservedBy: 'rd',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PI',
    bbIn: 'ZW',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0c78eed4-783a-44c5-bc1a-d016ab8c991b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '942',
    reservedBy: 'ib',
    bikeFormCompleted: null,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
    bbOut: 'MY',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4b0de3f2-a813-4dc7-8072-169911b7bdf5',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '201',
    reservedBy: 'gf',
    bikeFormCompleted: false,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FV',
    bbIn: 'CW',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83614d31-a010-47f1-b11d-e0dec922e5e1',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '128',
    reservedBy: 'ls',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NK',
    bbIn: 'JJ',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc968800-6eb3-4ff4-a322-dc484973bc0b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '908',
    reservedBy: 'ub',
    bikeFormCompleted: null,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WP',
    bbIn: 'SP',
    timeOut: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3f56c8a-abb7-48d5-a18d-f6456937c900',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '072',
    reservedBy: 'id',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'LU',
    timeOut: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2fdc3d4-ade1-4165-b978-468c5c3969c2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '602',
    reservedBy: 'ru',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: null,
    bbOut: 'MD',
    bbIn: 'AN',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e7a2bbb-b58f-45c1-a625-c9787fbec048',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Annotés',
    room: '478',
    reservedBy: 'aj',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IT',
    bbIn: 'FS',
    timeOut: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'deaa1246-b8b5-4e93-8af5-6064ba7bd845',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '415',
    reservedBy: 'ry',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: null,
    bbOut: 'PW',
    bbIn: 'DW',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9925476-f770-42f5-94b0-55f206837531',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '370',
    reservedBy: 'sp',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BR',
    bbIn: 'EE',
    timeOut: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1145e816-60e5-479d-969a-f95e95d84765',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Håkan',
    room: '216',
    reservedBy: 'sf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GH',
    bbIn: 'UZ',
    timeOut: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2dc9250-e437-4942-a163-fe1e1bfc6cd0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dù',
    room: '656',
    reservedBy: 'nx',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'BL',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '089bbbca-a7a5-4b83-815f-ec497177c487',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '901',
    reservedBy: 'fa',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: null,
    bbOut: 'MX',
    bbIn: 'LE',
    timeOut: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ed7821a-995f-4670-98f6-663456854c0e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '407',
    reservedBy: 'im',
    bikeFormCompleted: true,
    comments: 'Nunc purus.',
    completedAt: null,
    bbOut: 'DG',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7875faa1-2628-4dad-9734-037f4f3064b3',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëline',
    room: '035',
    reservedBy: 'hu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GJ',
    bbIn: 'UY',
    timeOut: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c2242646-bacf-410b-bcb3-b2315643fa9b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '464',
    reservedBy: 'eh',
    bikeFormCompleted: null,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WU',
    bbIn: 'NK',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0d8abe2-431a-448a-9d14-7430d23b1a7a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '624',
    reservedBy: 'ky',
    bikeFormCompleted: true,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LC',
    bbIn: 'WE',
    timeOut: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3fa21b3-fba0-4409-8cdd-a905dd008085',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '143',
    reservedBy: 'oe',
    bikeFormCompleted: null,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'RC',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29f65603-724b-4c94-809f-9e8d204a8108',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Salomé',
    room: '448',
    reservedBy: 'zl',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KR',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '033bc892-f7f6-47ee-9eae-c770d3f25ea6',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Eloïse',
    room: '090',
    reservedBy: 'kn',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SE',
    bbIn: 'RA',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8f7465de-3bf4-4628-9185-3de8c72712a5',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '893',
    reservedBy: 'fb',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: null,
    bbOut: 'JC',
    bbIn: 'CA',
    timeOut: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56735f28-c85b-45ef-8a46-81d195a23d77',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '968',
    reservedBy: 'qo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'BS',
    bbIn: 'EQ',
    timeOut: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd7814c53-5cb9-49f9-8d2b-637c36219543',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '094',
    reservedBy: 'sc',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KN',
    bbIn: 'TH',
    timeOut: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9bfda6fb-97bb-4016-8c1a-a629c8c6cdff',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '922',
    reservedBy: 'di',
    bikeFormCompleted: true,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LG',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dbefc65c-e797-4733-bb58-d9bef5d569e4',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '888',
    reservedBy: 'oq',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RY',
    bbIn: 'XH',
    timeOut: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4c57d5b-3efc-46a8-bbfb-cab906e86160',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dù',
    room: '596',
    reservedBy: 'pc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OT',
    bbIn: 'XG',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed68a04e-8968-4e58-9f7b-f234ac97bfd3',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '670',
    reservedBy: 'nr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XQ',
    bbIn: 'RO',
    timeOut: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3bed756-6680-4ce9-b00f-088a4e839b3f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '863',
    reservedBy: 'vm',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZG',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec98029c-f8d3-422c-8d79-68c272435a61',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '971',
    reservedBy: 'er',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: null,
    bbOut: 'CO',
    bbIn: 'QY',
    timeOut: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '13d849b3-8399-4726-9800-a3f0be0ea53d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '669',
    reservedBy: 'xl',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: null,
    bbOut: 'ZF',
    bbIn: 'HN',
    timeOut: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc213e66-62a4-496d-8218-121306bd37f6',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lén',
    room: '794',
    reservedBy: 've',
    bikeFormCompleted: null,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BP',
    bbIn: 'SL',
    timeOut: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7f12781-1b4d-40ae-b1fd-2eac44441100',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '762',
    reservedBy: 'he',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OZ',
    bbIn: 'OS',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79264724-ce6b-494d-96b3-dcbf7a8c564c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '302',
    reservedBy: 'pl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AN',
    bbIn: 'RH',
    timeOut: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0536d112-451c-41e6-87db-6a059caca313',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '558',
    reservedBy: 'lb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RI',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31d87dbc-0f55-48db-b263-bb876bb0920c',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '769',
    reservedBy: 'ud',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QM',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ead75134-a081-4b15-90dd-ab893383b762',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Audréanne',
    room: '572',
    reservedBy: 'mp',
    bikeFormCompleted: null,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: null,
    bbOut: 'NH',
    bbIn: 'IO',
    timeOut: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f9d145c-93bc-4409-a39f-2f6a5458e487',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '002',
    reservedBy: 'fp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HN',
    bbIn: 'WP',
    timeOut: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05ac1b8b-fef5-4c5a-b7e9-ff8f09b83674',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '193',
    reservedBy: 'wf',
    bikeFormCompleted: null,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'IB',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8191e9f-5940-4a96-81fb-e93bac81f162',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '722',
    reservedBy: 'ca',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LM',
    bbIn: 'VJ',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6699626d-c16d-45c2-83bc-21d5044bc3ce',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océanne',
    room: '844',
    reservedBy: 'ip',
    bikeFormCompleted: null,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'WP',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76e2060c-0d4b-4fd8-8203-0a48683ef92e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Lài',
    room: '665',
    reservedBy: 'bt',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: null,
    bbOut: 'OA',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b42a4251-524b-4092-a25d-2d5a528337ff',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '365',
    reservedBy: 'zq',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OX',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3cca6753-252f-43aa-8f3d-17cb931af3cc',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Fèi',
    room: '193',
    reservedBy: 'rv',
    bikeFormCompleted: null,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KN',
    bbIn: 'QL',
    timeOut: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8fa88bf7-f24d-491b-a8ba-4b3de4f5c268',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('13/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '010',
    reservedBy: 'ws',
    bikeFormCompleted: null,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BP',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8d7fc34-f73b-45f5-b3fe-0aeaa84f03ac',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '577',
    reservedBy: 'wr',
    bikeFormCompleted: true,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BN',
    bbIn: 'SQ',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9d3b5250-a5aa-4949-86c4-9df783851a7d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '706',
    reservedBy: 'fu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'KN',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ddb9960-9a93-48b8-94ec-181efad46807',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Yáo',
    room: '129',
    reservedBy: 'eh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JZ',
    bbIn: 'GF',
    timeOut: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b929213e-3893-41c8-a803-19026187e32d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kuí',
    room: '897',
    reservedBy: 'kt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'AM',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2e6130b-65b4-40ae-9e43-3cab74cb17f2',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Yáo',
    room: '670',
    reservedBy: 'bc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UE',
    bbIn: 'UE',
    timeOut: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '101b476f-fe50-4dc7-aa90-3b7fac07e3d1',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Audréanne',
    room: '578',
    reservedBy: 'gr',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DX',
    bbIn: 'JI',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3751ecc-3226-4515-beaf-bcb27c30ebad',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '881',
    reservedBy: 'bp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'SY',
    timeOut: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3aaae0ba-04f6-4d6a-935b-4356f772665b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '415',
    reservedBy: 'bj',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OU',
    bbIn: 'YC',
    timeOut: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c212d34-639b-4ade-a9ca-eff73021f06c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '748',
    reservedBy: 'xs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'GI',
    bbIn: 'CZ',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c15cc76-e4bf-43e5-9347-71578d0519bc',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Méline',
    room: '383',
    reservedBy: 'db',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PP',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '701ad476-a18f-43d9-8364-f028fd19e5b3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '999',
    reservedBy: 'bn',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ST',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8eddc63d-ccf8-4c7a-854a-71dbb37ca512',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '915',
    reservedBy: 'ny',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XG',
    bbIn: 'YK',
    timeOut: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46078291-7ddc-480c-828b-8ec11ec77797',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '660',
    reservedBy: 'yp',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7caee6fa-61ae-4a20-9bc0-772497abe98e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '190',
    reservedBy: 'om',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MM',
    bbIn: 'VH',
    timeOut: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88443229-6dc5-45fd-af89-1001499b0424',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '603',
    reservedBy: 'xw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BG',
    bbIn: 'CO',
    timeOut: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea242176-924b-4ac8-abfe-0558c1a0876b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '309',
    reservedBy: 'hf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CM',
    bbIn: 'YX',
    timeOut: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18ff7e00-824e-4759-a3f1-97f05e224382',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '704',
    reservedBy: 'wy',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: null,
    bbOut: 'XR',
    bbIn: 'PO',
    timeOut: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '671b093f-0846-429b-bc8c-367f66d75676',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Annotée',
    room: '038',
    reservedBy: 'tk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PW',
    bbIn: 'QU',
    timeOut: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36b75a45-746c-4c96-80a7-59d2e659bef4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '214',
    reservedBy: 'di',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RU',
    bbIn: 'KY',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0fcbbab1-66f7-4d78-9df9-c99ed1d6f51d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '340',
    reservedBy: 'gr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RD',
    bbIn: 'HR',
    timeOut: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3bd97d0c-2b30-4adb-b4da-e929faf6c161',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estève',
    room: '851',
    reservedBy: 'zt',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RC',
    bbIn: 'VS',
    timeOut: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f59f8fef-cf89-40f1-98ae-2b5d041f1cc8',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '403',
    reservedBy: 'qu',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WK',
    bbIn: 'GA',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca58467e-8750-4afe-85fb-8172c3bfcffa',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '365',
    reservedBy: 'vn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WK',
    bbIn: 'QQ',
    timeOut: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8aa31c73-a663-4b98-b7e6-5f58b51262cb',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '364',
    reservedBy: 'du',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
    bbOut: 'WU',
    bbIn: 'WF',
    timeOut: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '92d30ca4-2b69-454d-a044-69b96d9157ed',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '164',
    reservedBy: 'qb',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HC',
    bbIn: 'WY',
    timeOut: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6dcb3137-c37d-4ee7-885c-689d70821cee',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '195',
    reservedBy: 'vf',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KZ',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96bf476d-39a2-40b0-afb8-b0cb4c24961c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '773',
    reservedBy: 'bo',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NE',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bda9173-5c2e-41a2-a80e-792509ed87cc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '128',
    reservedBy: 'wm',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LA',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9985f40-cf73-41c8-9d46-3c6dddb181f4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '084',
    reservedBy: 'ab',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TZ',
    bbIn: 'UT',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '68f380f9-1e4d-4b4f-8d58-deb633e17d9a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '984',
    reservedBy: 'jb',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CH',
    bbIn: 'JF',
    timeOut: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08f7b51d-a389-4b1d-9da9-92da89a7690c',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adèle',
    room: '989',
    reservedBy: 'hk',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: null,
    bbOut: 'GX',
    bbIn: 'JT',
    timeOut: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c499c26a-0261-4b7a-90ed-57703fcf83b5',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léone',
    room: '213',
    reservedBy: 'oq',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CJ',
    bbIn: 'PK',
    timeOut: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4983adcd-fbfd-46bd-9896-0056dd061b96',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '866',
    reservedBy: 'ew',
    bikeFormCompleted: null,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SK',
    bbIn: 'LH',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed8d6702-830c-42cc-a759-9ad4d5e5d3d2',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Thérèse',
    room: '094',
    reservedBy: 'en',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KS',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0b0781c-a080-4fd8-aea8-c5aef4d288c3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Publicité',
    room: '655',
    reservedBy: 'js',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UI',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'efabe6b1-7629-4c8f-8f0c-5055a490029c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '471',
    reservedBy: 'pr',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'RH',
    timeOut: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de646200-f38a-471f-87da-4eb65355610b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maëlann',
    room: '106',
    reservedBy: 'cf',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JA',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6525ae22-c8c7-4b9a-9870-5a773c8e432b',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Miléna',
    room: '922',
    reservedBy: 'sb',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AM',
    bbIn: 'TF',
    timeOut: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '279ff4af-370c-4ffa-b614-9a9ed95b114e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '475',
    reservedBy: 'ac',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SE',
    bbIn: 'YE',
    timeOut: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3c3fedc-dc99-4389-b9b6-21629531887c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '044',
    reservedBy: 'ey',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RJ',
    bbIn: 'QY',
    timeOut: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3af875e-475a-47f9-bb70-1fd9aabe769d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '412',
    reservedBy: 'vh',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VT',
    bbIn: 'RZ',
    timeOut: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2d020cfb-be02-49eb-bb61-8db36e9f6472',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Audréanne',
    room: '718',
    reservedBy: 'jq',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XZ',
    bbIn: 'DU',
    timeOut: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5c12be92-c1ec-45c4-ad56-aa2bee9e8aca',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Naéva',
    room: '169',
    reservedBy: 'om',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XP',
    bbIn: 'TP',
    timeOut: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b417f386-b4b6-4760-8c8e-dc2245aebf84',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '299',
    reservedBy: 'mn',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PU',
    bbIn: 'QZ',
    timeOut: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5b322b1-36ef-46d6-87e2-03d8ff7484bb',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Félicie',
    room: '115',
    reservedBy: 'jv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NH',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6cc8c789-52ac-4a59-aeee-7d5fee103cf4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '375',
    reservedBy: 'ns',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TX',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '598136c8-381a-4f96-bb76-b070f43bec2a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Edmée',
    room: '677',
    reservedBy: 'py',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OI',
    bbIn: 'BN',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'af80ac28-448d-4355-a14c-0f9d66fe6506',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Faîtes',
    room: '354',
    reservedBy: 'yl',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'ZI',
    timeOut: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a9d310b-38ed-4a47-b2e0-3e9a178e1249',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Göran',
    room: '826',
    reservedBy: 'aq',
    bikeFormCompleted: true,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WF',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f39f9fd-83c5-4ae5-ae3e-2b48901eb445',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Naëlle',
    room: '500',
    reservedBy: 'qe',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QP',
    bbIn: 'IE',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bd88d7f8-40e2-4376-9333-ed208ab944c0',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Eloïse',
    room: '109',
    reservedBy: 'py',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UU',
    bbIn: 'BG',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f214987e-88d1-4647-ad88-664ac40a5a05',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'André',
    room: '780',
    reservedBy: 'lw',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZE',
    bbIn: 'XO',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5e492b2-d338-4f3e-9d87-4b70f97f7eab',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '042',
    reservedBy: 'yx',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5e59606-5f4b-4060-88a8-a32ac7ab779e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léone',
    room: '236',
    reservedBy: 'jh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WW',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bbbc5425-44ac-433a-8409-f7b919dc5f3b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '111',
    reservedBy: 'ei',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: null,
    bbOut: 'II',
    bbIn: 'GZ',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36509db5-d6a2-43c3-ab23-61db623b7ac7',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cécile',
    room: '702',
    reservedBy: 'yk',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'FC',
    timeOut: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd508f505-b79d-4375-9cb5-ad7f7a8b7f95',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ráo',
    room: '997',
    reservedBy: 'yv',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '60a06021-4a76-47bb-ae74-ea7ab27ee498',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Cloé',
    room: '362',
    reservedBy: 'at',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: null,
    bbOut: 'TB',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b74132c5-90c9-42d8-9ed2-41c25fd070df',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '385',
    reservedBy: 'kq',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GK',
    bbIn: 'EV',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '666bf880-ecba-47b8-a05b-6869d12a247e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Illustrée',
    room: '292',
    reservedBy: 'jr',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LA',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '351dfa32-377f-4cf7-8819-532fa6a22f31',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Océane',
    room: '192',
    reservedBy: 'ou',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PJ',
    bbIn: 'RP',
    timeOut: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '03a1debe-0dc1-4bce-85ed-53c07e1cef02',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Yénora',
    room: '316',
    reservedBy: 'nk',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SJ',
    bbIn: 'FC',
    timeOut: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90a91317-70b3-474c-80dd-f8038c6d3ed2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '100',
    reservedBy: 'dt',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XS',
    bbIn: 'RV',
    timeOut: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c503dfd9-71c3-40d5-babf-0dcc35dffd52',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lèi',
    room: '957',
    reservedBy: 'yk',
    bikeFormCompleted: false,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BI',
    bbIn: 'BZ',
    timeOut: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c0d0ca9-df27-4de8-9ed9-7153ee5d4a57',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '391',
    reservedBy: 'qs',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '61e85361-cf19-4812-be62-1bf5a4168ac3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '385',
    reservedBy: 'ny',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: null,
    bbOut: 'OK',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e74df840-6c05-40d8-8d2d-20e86fa9c5d7',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Uò',
    room: '318',
    reservedBy: 'dq',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NR',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '344294ea-fe36-4f66-b428-653cfa04d27d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Rachèle',
    room: '372',
    reservedBy: 'ud',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'UR',
    timeOut: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ba66f4a6-88a9-4e23-b767-195f01b19e8f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '940',
    reservedBy: 'qo',
    bikeFormCompleted: true,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BQ',
    bbIn: 'WX',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a77d33e0-2fa0-49b3-86b3-60e829226b64',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '063',
    reservedBy: 'dk',
    bikeFormCompleted: false,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
    bbOut: 'BZ',
    bbIn: 'GG',
    timeOut: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '178b04c7-d748-41de-ba06-013520feec96',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '323',
    reservedBy: 'rb',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: null,
    bbOut: 'MZ',
    bbIn: 'LQ',
    timeOut: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f770152e-3670-4de1-9fe5-4fc2d9f1a697',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Clélia',
    room: '393',
    reservedBy: 'li',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IA',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6df24d37-d981-4404-b163-2b7af00efdc3',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léane',
    room: '702',
    reservedBy: 'gb',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: null,
    bbOut: 'RJ',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e33e397-1533-4d2c-8a41-9eff6e8d3bf0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '314',
    reservedBy: 'eq',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KH',
    bbIn: 'BD',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9b2bee3-67ea-435b-83e5-36d64a223412',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Eloïse',
    room: '542',
    reservedBy: 'at',
    bikeFormCompleted: null,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CD',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0660fa7e-774f-4247-983c-90cfc80b52d9',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '370',
    reservedBy: 'lg',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WL',
    bbIn: 'ZT',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f7f14231-17a2-4dda-90b0-e161da8bc72b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '577',
    reservedBy: 'ab',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'OO',
    timeOut: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07bde80e-508a-45d4-a830-20ef789ffd93',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léonore',
    room: '928',
    reservedBy: 'it',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MH',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e898f1c8-5853-4def-a96a-f2df21f208eb',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Aimée',
    room: '016',
    reservedBy: 'mk',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'QU',
    timeOut: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54ca5d6d-0052-481e-84f0-a5a549e19b2d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '535',
    reservedBy: 'mp',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LO',
    bbIn: 'XQ',
    timeOut: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7e5aa801-77eb-490a-974a-b62df1ae84f5',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Faîtes',
    room: '828',
    reservedBy: 'xr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AS',
    bbIn: 'UE',
    timeOut: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '116aee03-6e0b-4843-9c9b-3665b20590b3',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Yóu',
    room: '601',
    reservedBy: 'fh',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EF',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0adebbe-6063-42b2-bd84-d1051f22ddd6',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Garçon',
    room: '999',
    reservedBy: 'po',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PT',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5f87d25-a0f0-4745-a514-b6301902ad11',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maïlis',
    room: '878',
    reservedBy: 'jo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KA',
    bbIn: 'NB',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '893693e2-71ec-4f5d-986f-984912481245',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Françoise',
    room: '295',
    reservedBy: 'zr',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SN',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '91aa9e71-0432-4c24-813c-24f624733cfb',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Cléopatre',
    room: '353',
    reservedBy: 'mj',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KA',
    bbIn: 'LX',
    timeOut: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1fd24cbc-ae21-4942-9a75-838a2bcdb2e6',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Océane',
    room: '145',
    reservedBy: 'yy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TM',
    bbIn: 'XS',
    timeOut: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a5ce7ba6-c990-4f50-b91f-414f3f4c3090',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '030',
    reservedBy: 'wq',
    bikeFormCompleted: null,
    comments: 'Nam dui.',
    completedAt: null,
    bbOut: 'WO',
    bbIn: 'BY',
    timeOut: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8bd88829-b069-48eb-8e68-e996a5e179f2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('17/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '017',
    reservedBy: 'wf',
    bikeFormCompleted: null,
    comments: 'Donec vitae nisi.',
    completedAt: null,
    bbOut: 'KQ',
    bbIn: 'IX',
    timeOut: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3dc43aa8-87ef-4596-83e0-5915fc7d46d6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '951',
    reservedBy: 'za',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CG',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '98627cac-17c5-4000-b816-939658be0730',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Jú',
    room: '636',
    reservedBy: 'qe',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: null,
    bbOut: 'CK',
    bbIn: 'SY',
    timeOut: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54d35de1-1af5-4425-a2c9-a582acd3dee4',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Léonie',
    room: '157',
    reservedBy: 'qa',
    bikeFormCompleted: true,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MS',
    bbIn: 'IP',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a17e121-d4dc-42b0-a615-3f98e46d977f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '272',
    reservedBy: 'ul',
    bikeFormCompleted: null,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XG',
    bbIn: 'ZZ',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89fe094d-7d3e-46f6-9e9a-8268a1303ce9',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léana',
    room: '646',
    reservedBy: 'lz',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FT',
    bbIn: 'HT',
    timeOut: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4abfcd5a-7b08-4aec-9ced-7ef5e5e72a1a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '491',
    reservedBy: 'oo',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RI',
    bbIn: 'NX',
    timeOut: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2b264489-f426-4b63-a199-2ed1fe55c0c8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gwenaëlle',
    room: '824',
    reservedBy: 'xf',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'WE',
    timeOut: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05d61a38-042b-4f9e-aecd-d7da18b379a7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '304',
    reservedBy: 'sw',
    bikeFormCompleted: true,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LK',
    bbIn: 'ZL',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '576dec5a-8469-459d-9195-6d101c95ff4e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '722',
    reservedBy: 'op',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IY',
    bbIn: 'HB',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2310075-d85a-421c-bccc-d221e2e05945',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '606',
    reservedBy: 'jd',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: null,
    bbOut: 'ZD',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc4753ff-8908-4e45-94ff-8fd8ac6b2101',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Cléopatre',
    room: '981',
    reservedBy: 'ar',
    bikeFormCompleted: true,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: null,
    bbOut: 'JL',
    bbIn: 'DD',
    timeOut: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '572d46a4-0761-4e5c-ab12-9f0ae60bb115',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '281',
    reservedBy: 'fn',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AK',
    bbIn: 'SP',
    timeOut: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd0ea2ad5-7162-438e-aee1-fc4cf1c6dacc',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Océanne',
    room: '821',
    reservedBy: 'dc',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YQ',
    bbIn: 'YT',
    timeOut: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '44413a33-f69e-460d-993b-0ef8c76c5a7a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '592',
    reservedBy: 'ih',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '404c3491-8fc7-4407-8f9d-d41a3588cbf8',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Görel',
    room: '242',
    reservedBy: 'us',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QU',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b95cf603-635a-4e14-83e4-7095b845f435',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '027',
    reservedBy: 'kr',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: null,
    bbOut: 'NE',
    bbIn: 'YF',
    timeOut: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89876452-1fee-48fa-890c-dc523a9bba7e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cléopatre',
    room: '622',
    reservedBy: 'ob',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'PY',
    bbIn: 'RC',
    timeOut: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d241e1a-3e1e-461a-8d65-3adf0b9aef91',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '774',
    reservedBy: 'ec',
    bikeFormCompleted: null,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SW',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a512cf33-0c65-4790-b800-67372df249ee',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '330',
    reservedBy: 'os',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'XX',
    bbIn: 'MQ',
    timeOut: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4aba14c-896d-458b-81e1-3296cb62c484',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Salomé',
    room: '175',
    reservedBy: 'ym',
    bikeFormCompleted: true,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IO',
    bbIn: 'WI',
    timeOut: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09fc0fbf-fd2c-4cae-9a3e-9875a33a1581',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '769',
    reservedBy: 'wu',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'EG',
    timeOut: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de96410f-f9a1-4334-a86e-075a7829dd26',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '401',
    reservedBy: 'jb',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XE',
    bbIn: 'EN',
    timeOut: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bf85a09d-193d-420d-9919-f280922d3df0',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mélina',
    room: '521',
    reservedBy: 'py',
    bikeFormCompleted: null,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TD',
    bbIn: 'LZ',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83218036-12ac-473e-b7d8-0462546cf8f4',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '803',
    reservedBy: 'cn',
    bikeFormCompleted: null,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GX',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd1df8614-3925-4b30-8cfb-c66e07facbb4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '031',
    reservedBy: 'xu',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'HJ',
    timeOut: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '26ce0b74-27dd-4a97-b36e-bb9880589c62',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëlla',
    room: '753',
    reservedBy: 'lj',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EE',
    bbIn: 'RW',
    timeOut: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '690c9890-ae65-4a2b-8bb6-dce891a90424',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Måns',
    room: '740',
    reservedBy: 'cy',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EO',
    bbIn: 'WP',
    timeOut: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8ee1f23-bb0b-44f5-b1f4-12c1f13d3e8b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Régine',
    room: '388',
    reservedBy: 'dz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MK',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4ad6c411-1dae-4ad7-8473-0b3ecf342cf4',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Léa',
    room: '098',
    reservedBy: 'mp',
    bikeFormCompleted: false,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'AC',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90b9a6f5-3ff1-4dec-b26b-4dd009baff11',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Solène',
    room: '061',
    reservedBy: 'km',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LT',
    bbIn: 'OT',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'beb955b6-35d3-48b2-ba5d-bd4f97eb2b8d',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '414',
    reservedBy: 'dd',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: null,
    bbOut: 'CE',
    bbIn: 'II',
    timeOut: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '431cbe7e-5283-4149-a066-3b261a19c3ce',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Stévina',
    room: '466',
    reservedBy: 'fi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NN',
    bbIn: 'JX',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5a42610a-9ebe-474e-9547-b3b1babd77f0',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '829',
    reservedBy: 'of',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NM',
    bbIn: 'CP',
    timeOut: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0302259f-12c9-4532-8893-8b1fdc055cbb',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Bérénice',
    room: '273',
    reservedBy: 'yh',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EH',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac97e944-2b68-4288-9620-950f50da5e68',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '075',
    reservedBy: 'lu',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'BQ',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4a38fe37-5450-4f3d-92d1-bb5ef8d4c01b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Adélie',
    room: '015',
    reservedBy: 'yf',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
    bbOut: 'LW',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b21f92a1-abfa-46c4-af2e-8cbe52fc9605',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '320',
    reservedBy: 'bw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'WE',
    bbIn: 'GF',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6cd7fcd6-d30d-4d17-8b12-795ca7db98a5',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '579',
    reservedBy: 'pv',
    bikeFormCompleted: false,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WD',
    bbIn: 'UJ',
    timeOut: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88a77395-a194-417c-9211-145372ec2726',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Annotée',
    room: '858',
    reservedBy: 'wm',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VC',
    bbIn: 'GW',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '519365d0-55df-41eb-b9a6-13cc894ea778',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '038',
    reservedBy: 'so',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NU',
    bbIn: 'PG',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cbb44d8d-dfac-4ea9-ac6a-e15473b96252',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Pénélope',
    room: '429',
    reservedBy: 'bo',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EJ',
    bbIn: 'QO',
    timeOut: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dbda29f6-d74e-448b-a780-4debe7997bff',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '928',
    reservedBy: 'jx',
    bikeFormCompleted: null,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '434339fd-9fa7-4abd-8319-a95e74c10f2c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pénélope',
    room: '139',
    reservedBy: 'cm',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'JV',
    bbIn: 'TP',
    timeOut: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec2f1a5e-b309-4267-b433-8d7d6f4e56c9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '851',
    reservedBy: 'dn',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: null,
    bbOut: 'JY',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '69e71fed-9af1-4915-9001-e295be5fa25b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '124',
    reservedBy: 'yy',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CF',
    bbIn: 'OB',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '516ab599-a7ea-46a0-bd5b-4d2b29bad926',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '569',
    reservedBy: 'ri',
    bikeFormCompleted: true,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QN',
    bbIn: 'SO',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0bd6cb45-402f-4898-9998-03c0274c5d9d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adèle',
    room: '307',
    reservedBy: 'as',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'KN',
    timeOut: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90eba13a-f27d-4bf2-9043-c4cfcc8fa654',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Lèi',
    room: '909',
    reservedBy: 'li',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PR',
    bbIn: 'PY',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f594ee8f-433e-42f7-8581-0479c682a77f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Néhémie',
    room: '005',
    reservedBy: 'sq',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'OE',
    timeOut: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4ae00ab-690a-4bbf-af39-7ae87068317d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '602',
    reservedBy: 'py',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: null,
    bbOut: 'HT',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5501cd8-9f94-494b-80a4-4890c575f7c1',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Dorothée',
    room: '328',
    reservedBy: 'gk',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'EZ',
    bbIn: 'LY',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f88c57c-3254-4475-9e7e-7730424e7d3c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Almérinda',
    room: '779',
    reservedBy: 'hy',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QH',
    bbIn: 'TY',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a0b1998-35f7-49d9-8152-2b6b4da10f09',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '749',
    reservedBy: 'dq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RN',
    bbIn: 'NP',
    timeOut: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a63a689-c4c3-46e1-a21c-2e721714b349',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Geneviève',
    room: '474',
    reservedBy: 'gc',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DR',
    bbIn: 'QA',
    timeOut: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7563c3df-318f-470f-875e-86ce3128eebd',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Anaïs',
    room: '677',
    reservedBy: 'vb',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IT',
    bbIn: 'NQ',
    timeOut: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '11daa71e-e1ce-417b-8cf7-d6a1a7d301af',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '787',
    reservedBy: 'du',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8527a2d2-6a76-4086-8158-977a73639bed',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '634',
    reservedBy: 'xm',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LR',
    bbIn: 'PS',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76de78fc-4705-4c18-bc30-b7747bd20f51',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '107',
    reservedBy: 'ji',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PM',
    bbIn: 'OA',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b374d1a7-738d-419c-80dc-094ececf7bf2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kallisté',
    room: '722',
    reservedBy: 'qj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UM',
    bbIn: 'WX',
    timeOut: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c43383b-6af9-4fab-9003-74d7f5efd7fc',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maï',
    room: '190',
    reservedBy: 'tv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'JP',
    bbIn: 'YU',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22f8d894-01bc-4cbd-8a84-d7ddea573f08',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '823',
    reservedBy: 'rg',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
    bbOut: 'VS',
    bbIn: 'AB',
    timeOut: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f733ff64-d1c3-46aa-8d2b-29e390f5f966',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mylène',
    room: '564',
    reservedBy: 'bf',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'DJ',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f6d30df0-2ad0-418f-bccc-3fc8269ea31c',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lorène',
    room: '056',
    reservedBy: 'es',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FW',
    bbIn: 'CV',
    timeOut: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '472b2444-8188-45d2-a1e6-c1a5e83dc6bc',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '601',
    reservedBy: 'gs',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HR',
    bbIn: 'WP',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f88345eb-6434-4f48-9818-f3187cef17ab',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Athéna',
    room: '559',
    reservedBy: 'dl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ba5d6128-5c89-46a9-9d5e-c79c66d6f7a6',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '279',
    reservedBy: 'ah',
    bikeFormCompleted: null,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'KY',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f93f70f4-0a0d-4230-99d7-257db1039feb',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '921',
    reservedBy: 'qa',
    bikeFormCompleted: true,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'LL',
    timeOut: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e4d48b7e-6b8b-4655-bd89-1bd56bf07869',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Táng',
    room: '621',
    reservedBy: 'ku',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TG',
    bbIn: 'SZ',
    timeOut: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f171d8e7-859e-4770-af93-3cea9646dabc',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Yénora',
    room: '154',
    reservedBy: 'zg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FW',
    bbIn: 'XA',
    timeOut: new Date(
      new Date('02/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '880c02e8-fd0a-418d-a975-42dc42bb6216',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '743',
    reservedBy: 'zg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'CG',
    timeOut: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee4bb18a-6921-4a45-8a55-8b20dba65056',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '784',
    reservedBy: 'ur',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: null,
    bbOut: 'HI',
    bbIn: 'DS',
    timeOut: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '455f062a-dde1-4ffb-acfb-6a273274efb7',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Loïs',
    room: '730',
    reservedBy: 'en',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TT',
    bbIn: 'AG',
    timeOut: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '51f07365-82e5-4fb4-ac7c-6807620e51ca',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Simplifiés',
    room: '105',
    reservedBy: 'ig',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GR',
    bbIn: 'SX',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b07ee3d-3746-4fc5-a1ee-ca32a3a47609',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '409',
    reservedBy: 'mb',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GG',
    bbIn: 'US',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '11ea8071-a797-4c93-b8d3-fa5a0b040a99',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '420',
    reservedBy: 'pu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'BY',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd154b878-546c-4bd7-91b1-365fe2affbbd',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Erwéi',
    room: '587',
    reservedBy: 'kr',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: null,
    bbOut: 'UE',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c854872-35d9-4aba-8678-aa5440a52088',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mà',
    room: '604',
    reservedBy: 'bv',
    bikeFormCompleted: null,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VJ',
    bbIn: 'RF',
    timeOut: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f7e2f8f2-f348-4387-b000-b4b58fa58fc3',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '483',
    reservedBy: 'bn',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'TO',
    timeOut: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '363407c0-6058-4f1b-84b3-97409536bc33',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aimée',
    room: '926',
    reservedBy: 'qj',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: null,
    bbOut: 'IS',
    bbIn: 'GI',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fa56af20-e4c1-4b2e-b512-d3d6e2000364',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Dà',
    room: '144',
    reservedBy: 'mg',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EP',
    bbIn: 'YT',
    timeOut: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b9a6004-8063-4dee-a032-a76ba80c6935',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Pål',
    room: '864',
    reservedBy: 'do',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'OL',
    timeOut: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fbe86262-a6b8-4087-9080-b1995a22510f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maïlis',
    room: '915',
    reservedBy: 'jl',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'KW',
    bbIn: 'VJ',
    timeOut: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c948c0fb-e4cb-450f-b00f-5ff158c86199',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mylène',
    room: '628',
    reservedBy: 'jj',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MF',
    bbIn: 'UT',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '573e0d39-6b62-413d-b4f2-4a5d5936ff57',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '060',
    reservedBy: 'bg',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OI',
    bbIn: 'RX',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '941fb408-7fe8-4307-b026-a0f2623ef443',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '346',
    reservedBy: 'uy',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HU',
    bbIn: 'JS',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2eae99ea-3d3a-49d7-9cdb-cf7db5594c71',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '886',
    reservedBy: 'ju',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
    bbOut: 'VM',
    bbIn: 'BN',
    timeOut: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42998bd5-c2b0-4343-9e11-ce16f437b0b3',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Océane',
    room: '255',
    reservedBy: 'it',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'SF',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c585be1d-6580-4f98-8a91-3fee2b18018a',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Adélie',
    room: '820',
    reservedBy: 'mb',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SK',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '43824ff6-76bc-4976-b2b0-7e9e66feec44',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Athéna',
    room: '113',
    reservedBy: 'aj',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: null,
    bbOut: 'CC',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f257e17f-400f-4605-80cc-b91a1cfd1417',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '416',
    reservedBy: 'pe',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DG',
    bbIn: 'EZ',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1f59b5f7-1653-470b-a718-505c03d88d9c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '077',
    reservedBy: 'ps',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'II',
    bbIn: 'AF',
    timeOut: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fd2dc592-e808-4184-aa78-38641518694f',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Laurélie',
    room: '282',
    reservedBy: 'fi',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LF',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9c56f06-222c-4fe3-aebc-b6d28d527abc',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mårten',
    room: '953',
    reservedBy: 'lt',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'BV',
    timeOut: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b6c79a2c-dd6d-458b-8f58-9a716d2f1819',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '097',
    reservedBy: 'mf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KO',
    bbIn: 'DE',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7fd6bafa-f1d2-46ed-a79c-4e4d45f17390',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '456',
    reservedBy: 'sd',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JX',
    bbIn: 'JB',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ab84ee0-f31f-4d6f-ad34-f47ca97dd1f9',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Miléna',
    room: '237',
    reservedBy: 'sg',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PA',
    bbIn: 'EK',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3fe07a80-ea85-4172-ad6d-0777f8a311bb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '747',
    reservedBy: 'uo',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OZ',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf639b9b-63c8-4710-bf8c-7b24440aa7ad',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Ruò',
    room: '644',
    reservedBy: 'os',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: null,
    bbOut: 'LP',
    bbIn: 'TJ',
    timeOut: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '086e3f10-ebc8-4a81-bf85-67164c12551e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '915',
    reservedBy: 'bo',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VO',
    bbIn: 'HT',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39a7eb26-5543-4daf-9f0e-cc3b5a54b8f3',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '680',
    reservedBy: 'ib',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c2f3e6f3-77c6-41ee-86a3-cf8e4a8f4f75',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Amélie',
    room: '949',
    reservedBy: 'pm',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'QV',
    timeOut: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0c46823-d741-472e-9398-481d95bc6205',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '695',
    reservedBy: 'vp',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
    bbOut: 'UD',
    bbIn: 'OO',
    timeOut: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70aab4d1-ccc2-4bfb-8169-6f925447e188',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Wá',
    room: '995',
    reservedBy: 'vj',
    bikeFormCompleted: true,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'OH',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0878174d-fdb2-49e9-973a-6f7f2f72c58f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Eléonore',
    room: '533',
    reservedBy: 'tg',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OF',
    bbIn: 'KN',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5ec962c-f4b0-4312-97cc-4bce7eaddf4b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '516',
    reservedBy: 'qe',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'HP',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '77500d74-146b-44e2-ac9e-29403a429276',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '206',
    reservedBy: 'gn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HM',
    bbIn: 'WH',
    timeOut: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22e9b595-1a2f-4e73-8265-9d0fec905605',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lèi',
    room: '535',
    reservedBy: 'mf',
    bikeFormCompleted: false,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'JP',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8dfe24f5-3e45-481c-9345-c457bf0224ec',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèsa',
    room: '463',
    reservedBy: 'gr',
    bikeFormCompleted: null,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CO',
    bbIn: 'PQ',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89aac7b6-0267-4424-a5dd-be5ecf41638c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïwenn',
    room: '650',
    reservedBy: 'll',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KC',
    bbIn: 'AU',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f72762a-1fd3-4b79-b0f5-cdb159e2bb63',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '516',
    reservedBy: 'yq',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'LQ',
    timeOut: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '77a3eaa6-dfcf-430b-97f6-f6f81e43e290',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Torbjörn',
    room: '623',
    reservedBy: 'gv',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IB',
    bbIn: 'GC',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf57f2e1-2cb7-4e38-ac96-09e3e80a9d75',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léone',
    room: '890',
    reservedBy: 'ln',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HR',
    bbIn: 'TY',
    timeOut: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bfd8643-44da-4f1a-b3ba-f03f3e0a64c8',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Kallisté',
    room: '893',
    reservedBy: 'hd',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XT',
    bbIn: 'VM',
    timeOut: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '66fbf2ad-55af-4672-b50b-c7ec16545dd6',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '801',
    reservedBy: 'ry',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'OS',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3a44286-bb6a-4212-a512-39ef912b78c9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Athéna',
    room: '698',
    reservedBy: 'cs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PS',
    bbIn: 'JA',
    timeOut: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '66704754-49eb-4527-8374-5a8d7ceeb857',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '101',
    reservedBy: 'bi',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZY',
    bbIn: 'DJ',
    timeOut: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f5875467-c15f-4a7c-8e2b-df4ce50a2f24',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '987',
    reservedBy: 'jp',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PB',
    bbIn: 'RJ',
    timeOut: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87f9db41-7e03-45fb-a605-a05ea685f673',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '102',
    reservedBy: 'vq',
    bikeFormCompleted: false,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c7b27d8c-8186-4a20-bf68-2260dc49f144',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Ophélie',
    room: '817',
    reservedBy: 'xa',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ME',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0c73610-ebf3-466c-a6f9-1f6eafd3a8a3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '848',
    reservedBy: 'wz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'AH',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa0af3f9-82de-400a-94cf-8345a733d260',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '568',
    reservedBy: 'dn',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KO',
    bbIn: 'DC',
    timeOut: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9914e97a-5f87-45f9-9f78-3b942d11a8bd',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèsa',
    room: '196',
    reservedBy: 'vx',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'NX',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b6156ae2-73fa-44ca-87a2-e1162a0825d3',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Estève',
    room: '607',
    reservedBy: 'ya',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZE',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2d4be35a-c277-469a-a514-8eeb1a34442f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '787',
    reservedBy: 'bj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TI',
    bbIn: 'QQ',
    timeOut: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '63fc84fc-d9bd-400e-bbec-44d09e7ca8c3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Audréanne',
    room: '231',
    reservedBy: 'yo',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FD',
    bbIn: 'KM',
    timeOut: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'caa0db72-0ac8-4e89-b61e-d1fb475b8d28',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Jú',
    room: '534',
    reservedBy: 'pf',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DM',
    bbIn: 'LQ',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0ee19de-57c6-408b-84e5-cb549d285976',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '556',
    reservedBy: 'gq',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RT',
    bbIn: 'CZ',
    timeOut: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2d5a734c-990e-41fb-bbb4-33ebefb2ac82',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaëlle',
    room: '393',
    reservedBy: 'fu',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'FT',
    bbIn: 'YJ',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4cb958e8-cd3d-4757-b4fd-d0b0fc151c87',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '402',
    reservedBy: 'uj',
    bikeFormCompleted: null,
    comments: 'Donec semper sapien a libero.',
    completedAt: null,
    bbOut: 'FX',
    bbIn: 'SA',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4cc468c-8271-4edc-b063-41e7327b7740',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Véronique',
    room: '349',
    reservedBy: 'jz',
    bikeFormCompleted: true,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: null,
    bbOut: 'QH',
    bbIn: 'ZH',
    timeOut: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7977b083-e377-43e1-8edd-190200742e1c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '309',
    reservedBy: 'le',
    bikeFormCompleted: false,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CX',
    bbIn: 'SX',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '301928e0-1c12-4d32-9dba-fd478c54f461',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '365',
    reservedBy: 'do',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PP',
    bbIn: 'WY',
    timeOut: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '147edf50-4da1-4183-8ae1-a79735000cea',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Irène',
    room: '785',
    reservedBy: 'rr',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: null,
    bbOut: 'JV',
    bbIn: 'EL',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f38d1840-17f6-45bb-b15d-e28546429843',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Wá',
    room: '082',
    reservedBy: 'jj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QW',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd34a28b-a116-4dfd-9dee-c9e807392984',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '656',
    reservedBy: 'xf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MR',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a72f6fd3-f1c2-4a99-923a-7baf2b18e98a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Intéressant',
    room: '847',
    reservedBy: 'jj',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VN',
    bbIn: 'BL',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3fe48f23-321b-4323-a369-d9bc9dc5f9d1',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Andrée',
    room: '165',
    reservedBy: 'yz',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AG',
    bbIn: 'BJ',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e35bb0c-bdd6-4c32-8dd4-ececf30731ff',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Estève',
    room: '147',
    reservedBy: 'hg',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QP',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '778f9f3a-6b85-49d3-af39-fbbedd5bad46',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '717',
    reservedBy: 'qe',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TB',
    bbIn: 'JC',
    timeOut: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '78d055de-7899-4950-9f97-d3bf97cf72b3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '934',
    reservedBy: 'kk',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PE',
    bbIn: 'AU',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '69a01d8f-86f5-4ad3-a846-519edef26692',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Bécassine',
    room: '029',
    reservedBy: 'mx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AK',
    bbIn: 'LD',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c3b763c-1574-4b94-be72-6a1e31e674ec',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Wá',
    room: '952',
    reservedBy: 'du',
    bikeFormCompleted: null,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'YJ',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ea2d9cb-4662-42c9-a5e4-111fa033bfdd',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '207',
    reservedBy: 'wk',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NC',
    bbIn: 'NX',
    timeOut: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f54091e-a914-4b64-98ec-2cefa329a316',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '282',
    reservedBy: 'sw',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: null,
    bbOut: 'VG',
    bbIn: 'VJ',
    timeOut: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '57aceb32-998f-4765-904a-ad5eca6b396f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '109',
    reservedBy: 'sk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'RR',
    timeOut: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eeb04ba8-ef35-48c3-be02-96c18c9a9fb2',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '678',
    reservedBy: 'rx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IZ',
    bbIn: 'KJ',
    timeOut: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e17a1db7-c212-4daf-8673-5f221a3cae7b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '186',
    reservedBy: 'ox',
    bikeFormCompleted: null,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XG',
    bbIn: 'GQ',
    timeOut: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5ff33ff-d6fa-4703-9960-33f4890091e0',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '365',
    reservedBy: 'kj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'LA',
    timeOut: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a74c2a2-d7eb-4c50-9555-a199ca399aaf',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '438',
    reservedBy: 'jl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HD',
    bbIn: 'GS',
    timeOut: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '346b69e4-33bd-4cb7-945c-1b15464ecd07',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '353',
    reservedBy: 'yu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EP',
    bbIn: 'WR',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce9b28d4-cdc1-400e-91b6-a4c6f507792d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Bérénice',
    room: '391',
    reservedBy: 'gq',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
    bbOut: 'DG',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '32e1389a-89a7-4bed-8aed-c56f033b4190',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Salomé',
    room: '862',
    reservedBy: 'zn',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JJ',
    bbIn: 'MG',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9ea5b05f-bb39-4b0a-91ed-05cd55770f00',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '387',
    reservedBy: 'qv',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UH',
    bbIn: 'KB',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '32bf9e52-2c86-4a47-b1cd-9762ff628a97',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '311',
    reservedBy: 'xf',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UB',
    bbIn: 'IP',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '44422290-a936-4421-be48-3f58d4586d47',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Ruò',
    room: '578',
    reservedBy: 'mx',
    bikeFormCompleted: false,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EI',
    bbIn: 'MP',
    timeOut: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '421caaf2-8b22-4139-8cb4-95a8594169c1',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maï',
    room: '686',
    reservedBy: 'ok',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VV',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90514a11-97c2-4ff1-a25f-3ef432ecd132',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Dafnée',
    room: '396',
    reservedBy: 'is',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UU',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a11c903a-c898-459d-92ed-4d16cc5d9f67',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Laïla',
    room: '901',
    reservedBy: 'ka',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UK',
    bbIn: 'ON',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '28a66236-5a92-47ae-a8c8-d60234af5440',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dafnée',
    room: '288',
    reservedBy: 'jk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VS',
    bbIn: 'UQ',
    timeOut: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95cfde25-eecf-4e22-ad07-03cb2ca5c8f6',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '476',
    reservedBy: 'rm',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CQ',
    bbIn: 'ZA',
    timeOut: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9a55597-c85f-44d4-88a2-45583fc169ad',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '750',
    reservedBy: 'sk',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RN',
    bbIn: 'BM',
    timeOut: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '077247d8-ad61-428b-9e37-b602f773a2d2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '519',
    reservedBy: 'yu',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WG',
    bbIn: 'UD',
    timeOut: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '13f0bb7c-a5c1-4865-8776-a7371e3a9a1a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '399',
    reservedBy: 'fh',
    bikeFormCompleted: null,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JC',
    bbIn: 'VW',
    timeOut: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5285d52-5987-4164-bef7-465029bbd43d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Magdalène',
    room: '879',
    reservedBy: 'mf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PL',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3dca0b1-be53-4cf8-b828-54d6dabfdae6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëline',
    room: '208',
    reservedBy: 'ys',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'DD',
    timeOut: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a2184a5f-6e17-435f-8c62-a62b7f36bc6a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gwenaëlle',
    room: '801',
    reservedBy: 'xu',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ST',
    bbIn: 'MR',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce884e8b-39cb-4343-b0c3-8c3c89561a06',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mahélie',
    room: '537',
    reservedBy: 'hr',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FW',
    bbIn: 'QB',
    timeOut: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '35dd6908-61da-4706-9c5c-e3e1527d597d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Kuí',
    room: '185',
    reservedBy: 'ix',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'HM',
    bbIn: 'CH',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fb6e2a49-6593-4689-8bba-1e585b52c3d4',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Annotés',
    room: '071',
    reservedBy: 'ei',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HR',
    bbIn: 'XX',
    timeOut: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70509e7f-838b-4530-96a8-b99c7102a0bf',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '931',
    reservedBy: 'ot',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'RQ',
    bbIn: 'XC',
    timeOut: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b6f4b880-eb3a-4759-8d74-11f51e5d489a',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Mélanie',
    room: '678',
    reservedBy: 'ey',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PD',
    bbIn: 'GL',
    timeOut: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bbe2b2ad-7ee9-4b6b-916a-d6b4bc4a8811',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méryl',
    room: '783',
    reservedBy: 'de',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JP',
    bbIn: 'ZA',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8d54996a-52a9-46db-97a0-72d78b8df350',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Simplifiés',
    room: '916',
    reservedBy: 'yf',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: null,
    bbOut: 'CW',
    bbIn: 'CW',
    timeOut: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2200b1ce-6cf7-4df0-9ce3-389dee2982cf',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '564',
    reservedBy: 'cc',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BJ',
    bbIn: 'MJ',
    timeOut: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0cec6076-2aa7-4846-af9a-b893568ca659',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '682',
    reservedBy: 'am',
    bikeFormCompleted: null,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FX',
    bbIn: 'SE',
    timeOut: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8564f506-9323-4a27-87be-7e0971b1f465',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '803',
    reservedBy: 'zw',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PO',
    bbIn: 'TZ',
    timeOut: new Date(
      new Date('22/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8b12e41-541d-43a0-9f47-100bc6054892',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '708',
    reservedBy: 'iy',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'GE',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad73da61-dfd1-489e-9563-a07e0ab415b8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '434',
    reservedBy: 'qy',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WR',
    bbIn: 'XM',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '235e3f7a-80ef-4408-ba83-45524814dd37',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '260',
    reservedBy: 'vo',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OU',
    bbIn: 'PA',
    timeOut: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3068a74b-4334-4fc7-a965-59b6a5ce988b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Alizée',
    room: '573',
    reservedBy: 'hj',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a339187-1c19-4fa6-bb46-a9d6c6b826b0',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '376',
    reservedBy: 'xj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'HN',
    timeOut: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47fef45d-1559-4f24-ae31-991d32ea634d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '855',
    reservedBy: 'oh',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UE',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5c402254-10d2-41e8-b965-274797db70f7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célestine',
    room: '809',
    reservedBy: 'mm',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QI',
    bbIn: 'RI',
    timeOut: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac4396c9-bc7a-4f54-bb3f-fff53c9af896',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lóng',
    room: '693',
    reservedBy: 'tq',
    bikeFormCompleted: true,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OF',
    bbIn: 'DJ',
    timeOut: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0888e944-a47d-44b0-90cd-386d70a7d3fb',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '573',
    reservedBy: 'vw',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: null,
    bbOut: 'GN',
    bbIn: 'LE',
    timeOut: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e66ea328-99eb-49d8-8ced-86eedffc58e7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '149',
    reservedBy: 'ks',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'JR',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9e7f71b-148a-4f89-a3f2-229852df8043',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Réjane',
    room: '289',
    reservedBy: 'fn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WV',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7ff76b45-7861-48e8-83a1-39c749102251',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '664',
    reservedBy: 'jq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SA',
    bbIn: 'JT',
    timeOut: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cdd04dde-51e8-40fd-a722-b5c69c0d0743',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '609',
    reservedBy: 'el',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LM',
    bbIn: 'MZ',
    timeOut: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14f78582-0f66-49a6-b0c5-9ba3470ea3c7',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Rachèle',
    room: '186',
    reservedBy: 'cc',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: null,
    bbOut: 'TY',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef188613-4815-4aaf-a8cc-3fa75771ca77',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '462',
    reservedBy: 'ue',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XJ',
    bbIn: 'IG',
    timeOut: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd193b469-2017-47c2-aa98-b8ad81d31f83',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaëlle',
    room: '463',
    reservedBy: 'kj',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('29/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SQ',
    bbIn: 'AB',
    timeOut: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6b93bb10-ce03-447e-99c4-86f7ccfb7811',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Judicaël',
    room: '693',
    reservedBy: 'ym',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IZ',
    bbIn: 'GQ',
    timeOut: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'feb6eca0-79b2-42ff-a67d-8ed1365f727a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Josée',
    room: '615',
    reservedBy: 'vh',
    bikeFormCompleted: false,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: null,
    bbOut: 'RF',
    bbIn: 'PH',
    timeOut: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '68cc6828-bd3b-46a2-b3de-f310d64fac17',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '280',
    reservedBy: 'ci',
    bikeFormCompleted: false,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FC',
    bbIn: 'FU',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9cf16af-58c6-48c0-8b4c-d6ccf9edba98',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Thérèse',
    room: '217',
    reservedBy: 'mz',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
    bbOut: 'KC',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4a40cd92-5379-4925-9f7c-c5005ebfd17d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '034',
    reservedBy: 'gm',
    bikeFormCompleted: true,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MG',
    bbIn: 'EK',
    timeOut: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0845a4a7-9647-401b-9245-122c6eda7936',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '611',
    reservedBy: 'pu',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SD',
    bbIn: 'XJ',
    timeOut: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f9630a2-2b7f-40d8-94e5-bcea45d05edf',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '926',
    reservedBy: 'mh',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CA',
    bbIn: 'UF',
    timeOut: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64affb04-924c-4fbb-8501-dd34ad74bc5a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '925',
    reservedBy: 'ws',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TR',
    bbIn: 'RE',
    timeOut: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ca2a2e3-f3e5-4c67-8967-526991308819',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maïté',
    room: '672',
    reservedBy: 'kl',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SN',
    bbIn: 'PP',
    timeOut: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56361c39-5bd9-4a17-83d8-95981935d172',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Estève',
    room: '223',
    reservedBy: 'ad',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'KX',
    bbIn: 'DW',
    timeOut: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e18e929d-e24c-41c4-a392-e91b4274d3f6',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Tán',
    room: '440',
    reservedBy: 'ne',
    bikeFormCompleted: true,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BZ',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bdfdbf3d-6a19-4c2e-ae46-e7ed658751a5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '983',
    reservedBy: 'oc',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SB',
    bbIn: 'LZ',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6cb07c2a-f080-491e-ba1c-38f6840da678',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Kuí',
    room: '971',
    reservedBy: 'rs',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: null,
    bbOut: 'HG',
    bbIn: 'DF',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5ab717ac-ab62-4456-ab12-f726b760a378',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '541',
    reservedBy: 'jc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'WX',
    bbIn: 'YK',
    timeOut: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90c57636-6e7d-439e-b9bb-f519c770e11a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '717',
    reservedBy: 'kx',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FI',
    bbIn: 'WN',
    timeOut: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e213543-de6d-47d9-99a6-d0c83e4b4f09',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '469',
    reservedBy: 'lg',
    bikeFormCompleted: false,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: null,
    bbOut: 'MQ',
    bbIn: 'MQ',
    timeOut: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76b3ca0f-e672-4823-9b78-26ce4f1e3308',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Aimée',
    room: '813',
    reservedBy: 'vn',
    bikeFormCompleted: false,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '227405c8-fd7b-43c9-a346-1701fc1a2c09',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maïlys',
    room: '029',
    reservedBy: 'uz',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PW',
    bbIn: 'DI',
    timeOut: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c0af210-04cb-48cf-9edf-c1fa9974938b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '176',
    reservedBy: 'uv',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CQ',
    bbIn: 'VR',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e1dbd9c-dfd9-4ee3-837e-b823b8c4eba3',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Åke',
    room: '882',
    reservedBy: 'xn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'SA',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0eb70c34-d61c-4b5b-9452-e834555f559a',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Naëlle',
    room: '956',
    reservedBy: 'uo',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GG',
    bbIn: 'TF',
    timeOut: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7adb854e-7f7b-44e7-955f-b2e7850cc2c0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '927',
    reservedBy: 'dc',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LI',
    bbIn: 'UV',
    timeOut: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fda1fe01-5039-49f3-9ffd-b76df58e9744',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Håkan',
    room: '815',
    reservedBy: 'nx',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: null,
    bbOut: 'CZ',
    bbIn: 'QK',
    timeOut: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09355ad7-b743-44cf-926a-7fb5eaee6c82',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Dafnée',
    room: '559',
    reservedBy: 'hs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'AF',
    bbIn: 'EE',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '266c1230-bc28-4ed0-845d-2a8e259c8c18',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Lorène',
    room: '205',
    reservedBy: 'cs',
    bikeFormCompleted: null,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'JR',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f1815771-3ca0-48bb-8865-19fcdfd0ae88',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('16/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Torbjörn',
    room: '892',
    reservedBy: 'na',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IP',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('30/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c788c8cc-7f38-45bd-850f-fbbb5f6eb43e',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '001',
    reservedBy: 'xh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'SV',
    bbIn: 'HH',
    timeOut: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c695621e-b66a-40c5-8886-b527bcb43492',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '142',
    reservedBy: 'dh',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '422795e8-7f9a-490b-8531-1be539b151af',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '490',
    reservedBy: 'vt',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NT',
    bbIn: 'LX',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8627decc-ebef-404c-a5bb-444038254d7e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '042',
    reservedBy: 'uf',
    bikeFormCompleted: null,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'XK',
    timeOut: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0bcad4f1-ef04-40d9-880f-7eacab48f837',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Océane',
    room: '886',
    reservedBy: 'ax',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SE',
    bbIn: 'TW',
    timeOut: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3388df76-8ef9-4b9c-a449-f41134b9f8f9',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Séverine',
    room: '137',
    reservedBy: 'av',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MF',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b74f098c-3866-4269-b7ff-44bc7a9da736',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pål',
    room: '997',
    reservedBy: 'bz',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'PH',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bba5eb68-471e-456b-8046-44a0b585b39b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '886',
    reservedBy: 'sm',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZH',
    bbIn: 'ZT',
    timeOut: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f830cd1-431d-40a4-95c8-13c645e35de0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '032',
    reservedBy: 'cz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GZ',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec90bcad-9621-4aaa-bfe6-304fa76c7a21',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Yáo',
    room: '193',
    reservedBy: 'wu',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KA',
    bbIn: 'KM',
    timeOut: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e516ac6-f364-4697-b5eb-6b8486762d87',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '463',
    reservedBy: 'zr',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IZ',
    bbIn: 'GJ',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00201912-30f8-46c8-8730-916efb8224d4',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åslög',
    room: '377',
    reservedBy: 'qc',
    bikeFormCompleted: null,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PS',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02626b46-dc7a-4500-a7bc-c5a32d982f8d',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Audréanne',
    room: '164',
    reservedBy: 'mc',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QY',
    bbIn: 'LI',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bf25f265-3c9e-4cd5-bd57-b1fe44c96cb2',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '787',
    reservedBy: 'jr',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SF',
    bbIn: 'AC',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3354b019-fcd9-4f98-8f66-b362ec49c9b5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '639',
    reservedBy: 'am',
    bikeFormCompleted: false,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MS',
    bbIn: 'LA',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88afb585-98d8-432d-8176-44297716ad89',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '540',
    reservedBy: 'sp',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JQ',
    bbIn: 'TF',
    timeOut: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2cdce393-3b76-4ad3-92a2-32d761d6fcb8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '482',
    reservedBy: 'nk',
    bikeFormCompleted: null,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('25/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HL',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be3ea267-056a-4005-a671-d6aaf50c3bd1',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Zhì',
    room: '312',
    reservedBy: 'ub',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: null,
    bbOut: 'GI',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40e36307-5f76-45c3-9366-8288c68f1e06',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('16/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '361',
    reservedBy: 'qq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'IE',
    timeOut: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29f8864a-c9fd-4c44-920f-f837af7c9da4',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Måns',
    room: '517',
    reservedBy: 'jc',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: null,
    bbOut: 'UO',
    bbIn: 'CM',
    timeOut: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d9501cb-93f4-4e80-90e0-90960b30b50b',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lèi',
    room: '785',
    reservedBy: 'jr',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'CW',
    timeOut: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '12c72391-a9b9-4308-ae7b-80eeb46de203',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Loïs',
    room: '464',
    reservedBy: 'qc',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TM',
    bbIn: 'WK',
    timeOut: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64903171-475c-4590-96e2-8577e83f0003',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '826',
    reservedBy: 'qr',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DH',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '62378513-7456-4d47-937c-89cab43c2ab1',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '460',
    reservedBy: 'ml',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'WJ',
    timeOut: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7ba95baa-8a42-4990-bdf7-a9ac23c347c9',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '308',
    reservedBy: 'ct',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: null,
    bbOut: 'JW',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa71099a-9929-4f55-8f6a-d08168664f90',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Görel',
    room: '446',
    reservedBy: 'fk',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CG',
    bbIn: 'JA',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0b596552-3526-4bcf-b5db-c6b0255f086f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '244',
    reservedBy: 'nn',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eec0ee8d-3707-4994-b309-46d127cde724',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '133',
    reservedBy: 'tr',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'PK',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f7fc62e-9dd9-40af-8855-5b3fe37ec7ac',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '989',
    reservedBy: 'pf',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZH',
    bbIn: 'MC',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1020adcf-8bb0-4d52-849d-dcc6500154c8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '857',
    reservedBy: 'vh',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'AR',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2dace0c-0aab-4070-8932-57a6edcc41a8',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Inès',
    room: '653',
    reservedBy: 'ut',
    bikeFormCompleted: true,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KN',
    bbIn: 'CZ',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '859b4639-fda1-4b99-acaf-ac6b7eb0f2f9',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Béatrice',
    room: '901',
    reservedBy: 'xa',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: null,
    bbOut: 'MN',
    bbIn: 'MG',
    timeOut: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3694a36-d513-4364-b7b1-64bf7826428b',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Loïs',
    room: '866',
    reservedBy: 'es',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'MT',
    timeOut: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '438e4395-8f39-494f-895f-fcf7a10b2515',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Åke',
    room: '589',
    reservedBy: 'il',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ET',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4363f85-bcec-4e86-b7ab-2b7fbfda4162',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Judicaël',
    room: '641',
    reservedBy: 'qq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WF',
    bbIn: 'TQ',
    timeOut: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a132a43d-3215-4e14-88a8-3fddd1ed6b52',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mén',
    room: '118',
    reservedBy: 'nj',
    bikeFormCompleted: true,
    comments: 'Integer non velit.',
    completedAt: null,
    bbOut: 'ML',
    bbIn: 'TD',
    timeOut: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8c6bbdc-3970-42df-a572-44b6ae170efe',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Cléopatre',
    room: '162',
    reservedBy: 'tj',
    bikeFormCompleted: null,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HA',
    bbIn: 'SY',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a00dc800-2ac4-4ca2-95b5-98a59f72bcee',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '696',
    reservedBy: 'zk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WU',
    bbIn: 'II',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4796c58f-7f52-4c05-aaf0-31bf9fd0d1d7',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '043',
    reservedBy: 'id',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1e0ff9b5-9868-4b76-a5ee-515f29fd6465',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Alizée',
    room: '018',
    reservedBy: 'cx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QZ',
    bbIn: 'OA',
    timeOut: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '819bbcef-af11-4d1a-adec-4add3d74ead4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '921',
    reservedBy: 'ra',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '26400abe-4bb0-4a71-9541-b14f73475e49',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '601',
    reservedBy: 'tb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CD',
    bbIn: 'IW',
    timeOut: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '770f0726-9c9f-4c38-aeb6-d32c644ad012',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Thérèse',
    room: '676',
    reservedBy: 'ty',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LP',
    bbIn: 'RA',
    timeOut: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eff5dbec-f33f-49c5-8f76-757756fe3d42',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '705',
    reservedBy: 'hv',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AC',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('20/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd27a4abf-f20a-4a76-babf-80c6948624ba',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Naéva',
    room: '740',
    reservedBy: 'xx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'HC',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f11460c8-0074-4baa-885e-1970a2fa5383',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Adélie',
    room: '015',
    reservedBy: 'yf',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
    bbOut: 'EM',
    bbIn: 'GO',
    timeOut: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8e2453ac-7eda-4e23-993b-c4b56e21d146',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Josée',
    room: '156',
    reservedBy: 'ir',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'ZD',
    timeOut: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e614ef3d-f183-4960-a5a2-cf6786cab414',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '720',
    reservedBy: 'uj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AM',
    bbIn: 'QO',
    timeOut: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4618138e-dbea-4e1d-8083-45b73ab34c90',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '202',
    reservedBy: 'kf',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YX',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4b80014-9838-4ae3-9b80-0945cf4b49ef',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Börje',
    room: '769',
    reservedBy: 'tj',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: null,
    bbOut: 'UI',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed81f4c9-21d6-418a-b816-579a9d0b2d15',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Josée',
    room: '997',
    reservedBy: 'og',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KT',
    bbIn: 'QQ',
    timeOut: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4443375d-f4c0-4032-907a-b04b3cf13330',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '592',
    reservedBy: 'ff',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: null,
    bbOut: 'DN',
    bbIn: 'QW',
    timeOut: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22e0a444-e0fa-46db-a484-db981baaf105',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '412',
    reservedBy: 'gf',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PX',
    bbIn: 'GB',
    timeOut: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '528fba30-a6b3-4d9a-8aa6-9cb51c34c8b5',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '642',
    reservedBy: 'dj',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RP',
    bbIn: 'BL',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '155b307f-6460-4898-bab2-e5f8ccfdf597',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Clémence',
    room: '944',
    reservedBy: 'ae',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'FX',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '433bc65b-7678-4c9e-b9f8-e08354e5c5ca',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Célestine',
    room: '792',
    reservedBy: 'rp',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RA',
    bbIn: 'IT',
    timeOut: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd98df214-5784-492e-9f6b-c0d142aa05cb',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Frédérique',
    room: '586',
    reservedBy: 'df',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6b8e28c9-dcb1-4a3d-8bae-6383d2018858',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '121',
    reservedBy: 'gx',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd71da758-ceac-4b40-8f81-abe457bd0554',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Åke',
    room: '575',
    reservedBy: 'pj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'XN',
    timeOut: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cefd6cde-dd74-4424-9471-da6011f2ec8b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '667',
    reservedBy: 'ls',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: null,
    bbOut: 'JZ',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e51f200-fc69-483d-85d7-7ee4f56996a9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '498',
    reservedBy: 'kq',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BI',
    bbIn: 'RI',
    timeOut: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90563777-fff2-446f-9b01-984fe7811572',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('14/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Simplifiés',
    room: '855',
    reservedBy: 'pi',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WW',
    bbIn: 'RR',
    timeOut: new Date(
      new Date('28/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5401c4f9-04a3-4df3-b1fc-72301745fd39',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '647',
    reservedBy: 'co',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BV',
    bbIn: 'JB',
    timeOut: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96061726-5c9a-4a26-ab11-e027b3b81ac6',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mahélie',
    room: '111',
    reservedBy: 'ce',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AT',
    bbIn: 'UT',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '441e1899-3d95-4fa7-85c9-a820cc8059ad',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('27/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '730',
    reservedBy: 'jn',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JA',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('10/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '449b4da1-581b-41e5-afed-17f783658f96',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '543',
    reservedBy: 'zb',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QI',
    bbIn: 'EU',
    timeOut: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4cd253bd-7236-4184-9ca5-2528c5d3fff7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '106',
    reservedBy: 'ua',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KY',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db56b40f-ce00-4baa-9eea-b66a495a9810',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '483',
    reservedBy: 'nr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'RM',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9cfa30b3-fd04-4572-8214-c7fccad66251',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Françoise',
    room: '534',
    reservedBy: 'no',
    bikeFormCompleted: false,
    comments: 'Integer ac leo.',
    completedAt: null,
    bbOut: 'LF',
    bbIn: 'SK',
    timeOut: new Date(
      new Date('22/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6610e555-2295-40a8-b498-fd015ff7fa11',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Lorène',
    room: '391',
    reservedBy: 'og',
    bikeFormCompleted: null,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CS',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '11de8d80-be7d-4a5c-8950-3ebcce3af601',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Almérinda',
    room: '364',
    reservedBy: 'xp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('18/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RK',
    bbIn: 'BR',
    timeOut: new Date(
      new Date('12/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47aeb10d-8ff9-49f8-992b-7a788e128ed3',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '992',
    reservedBy: 'lr',
    bikeFormCompleted: false,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VI',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2129ffb6-4ee3-4b28-8c28-25a73d18c96e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marylène',
    room: '541',
    reservedBy: 'wu',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KJ',
    bbIn: 'WH',
    timeOut: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '72aef9fb-c12f-46b7-b5e1-5105679105ea',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Dafnée',
    room: '511',
    reservedBy: 'mf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'MN',
    timeOut: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c648eba-01d3-4365-a299-ba7c4cd12892',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Marylène',
    room: '390',
    reservedBy: 'mg',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZS',
    bbIn: 'EM',
    timeOut: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f480f49-72c8-4a42-bff4-afe1719bcc2e',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Aí',
    room: '721',
    reservedBy: 'lk',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: null,
    bbOut: 'FC',
    bbIn: 'LM',
    timeOut: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e44edfac-2915-43e0-bdef-04fce2259392',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Tán',
    room: '779',
    reservedBy: 'wy',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('31/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QZ',
    bbIn: 'BE',
    timeOut: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f4ec4d7c-b49b-401c-ac84-56ee43c99a17',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Salomé',
    room: '727',
    reservedBy: 'ja',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HF',
    bbIn: 'IK',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7003a532-ec99-46c4-9db9-43bc85f987a9',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Anaël',
    room: '833',
    reservedBy: 'sw',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'XD',
    bbIn: 'QD',
    timeOut: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02a856df-48c4-43d8-87fc-56c306db25db',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïwenn',
    room: '998',
    reservedBy: 'zx',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TK',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02e6b742-624e-4d13-a74f-cf007f8c6c68',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Crééz',
    room: '766',
    reservedBy: 'uw',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'NU',
    timeOut: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db7ee463-0e93-4ef1-8d03-2502d0aa1ea0',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Örjan',
    room: '455',
    reservedBy: 'lv',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZF',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '77741ff4-d701-49d2-8a97-a7d785c3491d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '560',
    reservedBy: 'fv',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: null,
    bbOut: 'SM',
    bbIn: 'VV',
    timeOut: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53001057-8f2e-472b-87e8-0346f5c8bd66',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '404',
    reservedBy: 'yb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'XN',
    bbIn: 'RH',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9d9d2ea4-fe7a-4423-871a-6d77fdfbd6e8',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '766',
    reservedBy: 'rs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('21/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PK',
    bbIn: 'KL',
    timeOut: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '55025259-fa7a-44fc-968a-886e10fbe3ed',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('15/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '948',
    reservedBy: 'vw',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YQ',
    bbIn: 'LG',
    timeOut: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e4dd0f1d-3b9f-409f-b210-cdc997f396f2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maï',
    room: '129',
    reservedBy: 'jy',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: null,
    bbOut: 'LD',
    bbIn: 'CB',
    timeOut: new Date(
      new Date('21/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7faea34e-2f96-4da6-b797-4ef6038b3fe7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '118',
    reservedBy: 'tk',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HZ',
    bbIn: 'RE',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '38c0ae60-0a74-4cbd-8225-84db118fde22',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Laïla',
    room: '882',
    reservedBy: 'tf',
    bikeFormCompleted: null,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CC',
    bbIn: 'MV',
    timeOut: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b971af48-c29e-4897-b446-4f74332314be',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '278',
    reservedBy: 'xh',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NG',
    bbIn: 'OK',
    timeOut: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b9144f7-46f6-4d80-ac6f-7c2217b8259c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '283',
    reservedBy: 'kh',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6b7e2eb8-d17f-45bd-9dfa-ffa8998edb6c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Aimée',
    room: '699',
    reservedBy: 'rh',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TH',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1c82636d-f3ae-418e-a7fb-9ab9e658eee6',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Dù',
    room: '222',
    reservedBy: 'th',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SA',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0121672f-8026-4c6a-b4ca-70d7cdafe9b4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '463',
    reservedBy: 'vh',
    bikeFormCompleted: null,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OP',
    bbIn: 'ZL',
    timeOut: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b77918a-b3e3-4668-a1c9-8119a834bb36',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Alizée',
    room: '798',
    reservedBy: 'cz',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NW',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '73469505-7ef9-4f50-8640-53834903be93',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '829',
    reservedBy: 'bp',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XQ',
    bbIn: 'SQ',
    timeOut: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3d1c088f-4e3b-46a4-9c29-7684553c4b3c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kuí',
    room: '001',
    reservedBy: 'ss',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('14/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EW',
    bbIn: 'IL',
    timeOut: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '826041aa-4b52-406b-b17b-f561ee56f39f',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Kévina',
    room: '186',
    reservedBy: 'sm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QL',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed58f7ee-8008-45ed-af55-a67a43bba4c6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('09/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '836',
    reservedBy: 'oq',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KW',
    bbIn: 'YE',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b54752e8-d2d6-4d9a-8627-0bac22a0431d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Méghane',
    room: '397',
    reservedBy: 'bi',
    bikeFormCompleted: true,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: null,
    bbOut: 'QB',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf641989-7ef8-4bb9-9234-fcadff9b84a7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '738',
    reservedBy: 'qf',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'ZL',
    timeOut: new Date(
      new Date('31/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'deb2b86c-cb14-4e67-8bd2-ff8379a61461',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '603',
    reservedBy: 'ay',
    bikeFormCompleted: false,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: null,
    bbOut: 'MJ',
    bbIn: 'GS',
    timeOut: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f7c9f16e-b125-42b8-8c2c-ebe80343b1c5',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '056',
    reservedBy: 'bt',
    bikeFormCompleted: false,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZE',
    bbIn: 'PZ',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '81b2d2d6-8241-4911-9687-fc6c24a3971a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('24/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '695',
    reservedBy: 'hw',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('13/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EM',
    bbIn: 'AY',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2d6a760e-c949-45e4-9607-186ca1993f96',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Félicie',
    room: '251',
    reservedBy: 'uy',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NQ',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd26f56ee-060b-424b-b6b6-f740f883365e',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '647',
    reservedBy: 'at',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XA',
    bbIn: 'KH',
    timeOut: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '193a94b0-26f4-40b3-9ffd-86c04aefae59',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Eliès',
    room: '158',
    reservedBy: 'oa',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: null,
    bbOut: 'SF',
    bbIn: 'AW',
    timeOut: new Date(
      new Date('28/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '447e1f20-2ea8-450d-8149-11f2b87cd103',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '364',
    reservedBy: 'zl',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WR',
    bbIn: 'GQ',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e18c50d4-9570-4f7e-8240-9876c345ef4f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '339',
    reservedBy: 'vu',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XE',
    bbIn: 'SL',
    timeOut: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac2960eb-7fc1-4314-b284-17971efee5ea',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marie-noël',
    room: '790',
    reservedBy: 'hn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'LY',
    timeOut: new Date(
      new Date('11/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8a28f7c-5bc9-4e4a-9d4f-6ce0e8cc14b5',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '127',
    reservedBy: 'gm',
    bikeFormCompleted: null,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JN',
    bbIn: 'JP',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fdee1e1b-1529-47dc-b5a5-25c2ac48c17b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('25/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '533',
    reservedBy: 'dv',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'GC',
    timeOut: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd6ca3a2c-597d-44fc-a36f-89890b1232b3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '540',
    reservedBy: 'zm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NU',
    bbIn: 'QX',
    timeOut: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29b48051-4532-4ec1-a99f-d265424fc730',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '755',
    reservedBy: 'ie',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UX',
    bbIn: 'UQ',
    timeOut: new Date(
      new Date('19/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6506f174-5951-4b78-a39c-177635d075bb',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '578',
    reservedBy: 'nt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZE',
    bbIn: 'OD',
    timeOut: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7304475f-b14a-49db-be06-2584507082ec',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '399',
    reservedBy: 'eq',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MB',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '907d30d5-3553-4891-859f-85e52879ad2c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlann',
    room: '722',
    reservedBy: 'jn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'JL',
    bbIn: 'YH',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f6020819-c83d-4b37-838f-6e6805e1ba43',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Françoise',
    room: '025',
    reservedBy: 'yg',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RU',
    bbIn: 'GJ',
    timeOut: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b5f30e97-1b7b-4f51-beed-cc8f7f66d18c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Nadège',
    room: '781',
    reservedBy: 'jj',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('28/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FP',
    bbIn: 'QC',
    timeOut: new Date(
      new Date('22/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b7709496-afa2-4c5e-ade6-2590c0cf9174',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Léana',
    room: '173',
    reservedBy: 'wx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FM',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9365f301-fbbb-41bf-9bbe-8acd700b08d7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '248',
    reservedBy: 'ot',
    bikeFormCompleted: false,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'NI',
    timeOut: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'edabad5d-4ce9-4385-8af4-1ab6489423c7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('19/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naéva',
    room: '556',
    reservedBy: 'ul',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'CJ',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '57f3cd3b-0753-473f-9ee9-d2878d98c8b3',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '633',
    reservedBy: 'zl',
    bikeFormCompleted: null,
    comments: 'Curabitur convallis.',
    completedAt: null,
    bbOut: 'CE',
    bbIn: 'AP',
    timeOut: new Date(
      new Date('15/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ea24dbd-7af2-498f-a02a-c8c4e92a7059',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('13/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lorène',
    room: '357',
    reservedBy: 'hw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'HB',
    bbIn: 'SM',
    timeOut: new Date(
      new Date('26/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6161cc3-ff98-423e-a89e-53967e69fa4d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Miléna',
    room: '181',
    reservedBy: 'zw',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KU',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '724a4f49-fa17-4151-b145-c5920a89a4ed',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '341',
    reservedBy: 'fn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'UR',
    timeOut: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c5167bc-2600-45cd-a35b-c92aa3be60d0',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Hélèna',
    room: '499',
    reservedBy: 'ai',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JD',
    bbIn: 'VU',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2f3ff394-a068-4af8-936f-e0210327872e',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Åslög',
    room: '126',
    reservedBy: 'oj',
    bikeFormCompleted: true,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: null,
    bbOut: 'KZ',
    bbIn: 'XR',
    timeOut: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1eef97f9-5e64-41eb-adf9-656e1e856110',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('25/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '398',
    reservedBy: 'zr',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('14/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GG',
    bbIn: 'MX',
    timeOut: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e6adf4d-25cf-4959-9390-3500a957ff77',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Göran',
    room: '266',
    reservedBy: 'cz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BX',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f6d9ccbb-52c9-41f0-950f-e846e433ad95',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaël',
    room: '195',
    reservedBy: 'iu',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VX',
    bbIn: 'BU',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '10f3fff0-bb83-4969-89ce-b5d3af35bb90',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '426',
    reservedBy: 'od',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'AI',
    bbIn: 'SI',
    timeOut: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cbb8465f-e91a-47f9-9ad2-02880862a063',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '269',
    reservedBy: 'bj',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'IB',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9f362eb-17a0-488b-ac05-7703619e4a57',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '507',
    reservedBy: 'rv',
    bikeFormCompleted: null,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WG',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e82d1d2-e607-4e93-9077-d768995421c2',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '151',
    reservedBy: 'lt',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EF',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('26/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7fce202-4835-437f-83fa-0b79d6759537',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('27/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '183',
    reservedBy: 'mc',
    bikeFormCompleted: false,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'CW',
    timeOut: new Date(
      new Date('10/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('11/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '99d58778-cc3d-4867-a427-a4d6b565e714',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '142',
    reservedBy: 'fw',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YW',
    bbIn: 'NV',
    timeOut: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05264ca9-5423-4565-9c4d-4e262f53de4b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mégane',
    room: '460',
    reservedBy: 'ls',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'EI',
    bbIn: 'XF',
    timeOut: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e07fc3c1-b5cd-4040-b680-e6c11e71bcb5',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('09/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '567',
    reservedBy: 'uu',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GY',
    bbIn: 'IV',
    timeOut: new Date(
      new Date('23/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e1b11515-d470-4609-8ffc-f306b95cd7b6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '534',
    reservedBy: 'im',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RS',
    bbIn: 'CM',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1028b4a0-2966-490d-a099-ce835bfd56ff',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Naéva',
    room: '182',
    reservedBy: 'mr',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IY',
    bbIn: 'CN',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd9e22696-733c-484f-8820-4be5d8f30d02',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélie',
    room: '309',
    reservedBy: 'gs',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KM',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4b91db77-8cc8-406f-8582-9747674f621e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lyséa',
    room: '902',
    reservedBy: 'bt',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'BK',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3768489-f694-492f-b26b-618199f97cb9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('19/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '555',
    reservedBy: 'mp',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: null,
    bbOut: 'RA',
    bbIn: 'LS',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e574eaba-f90e-4b15-a387-05e1719483e8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '264',
    reservedBy: 'kn',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AG',
    bbIn: 'HU',
    timeOut: new Date(
      new Date('22/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f6a10016-0aad-4300-a41f-c62505fd36ea',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Gwenaëlle',
    room: '146',
    reservedBy: 'dy',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('23/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AN',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('17/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac372136-4dbd-4178-9bd3-94eb3bb218a5',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '225',
    reservedBy: 'rw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'OG',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4e040a17-bce3-4aaa-beed-d14e51ef73c0',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '995',
    reservedBy: 'gd',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('09/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PQ',
    bbIn: 'VZ',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd6d686d9-2c12-4fd1-9716-5a34c3734a4c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '839',
    reservedBy: 'oy',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TU',
    bbIn: 'SZ',
    timeOut: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34b58ea0-e9fb-452a-a359-6a5df8738bf9',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Naéva',
    room: '040',
    reservedBy: 'ad',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OP',
    bbIn: 'IE',
    timeOut: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('27/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cbf971d5-dac3-43f5-b1c0-8dcf9811b856',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léonie',
    room: '135',
    reservedBy: 'tt',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('09/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HT',
    bbIn: 'LV',
    timeOut: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '49fb2e58-4581-414a-b794-e24b8fb4dad8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('09/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '193',
    reservedBy: 'xz',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('29/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FB',
    bbIn: 'QK',
    timeOut: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('24/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c645a83-976e-459f-96de-b01e6db8b6cc',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '755',
    reservedBy: 'cr',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('11/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IY',
    bbIn: 'SA',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '04355c69-bdbf-44d9-85f6-14e950539314',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '898',
    reservedBy: 'wc',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BV',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a965f742-c3b6-4a73-a407-09add3fb1193',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Cécilia',
    room: '596',
    reservedBy: 'qm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'DI',
    bbIn: 'IR',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07e6568d-75b7-4e00-84fb-80bae774a60c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('26/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '227',
    reservedBy: 'tg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'LH',
    bbIn: 'EE',
    timeOut: new Date(
      new Date('09/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '472e0777-8ffa-4fd2-bbf8-626a1c77005c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('28/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Magdalène',
    room: '791',
    reservedBy: 'ee',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('17/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CX',
    bbIn: 'LV',
    timeOut: new Date(
      new Date('11/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14973e05-5f2b-47f9-a9b4-d4c83f888d67',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '924',
    reservedBy: 'my',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d554e9f-d9a8-46ab-a2a9-d6294a5308f0',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léonie',
    room: '560',
    reservedBy: 'oe',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('26/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TU',
    bbIn: 'IS',
    timeOut: new Date(
      new Date('20/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '72ea3f57-49af-4185-b33a-d78ac355d001',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Joséphine',
    room: '005',
    reservedBy: 'ww',
    bikeFormCompleted: false,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AZ',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('22/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8065bbb6-8f44-4b1b-aa7c-d5202b52fa93',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Solène',
    room: '085',
    reservedBy: 'xv',
    bikeFormCompleted: false,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: null,
    bbOut: 'FR',
    bbIn: 'IX',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5faeefd4-72cd-44bb-a085-01a7034f9599',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '175',
    reservedBy: 'lf',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NT',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83055499-4d2e-4c4c-87b7-5fc13e715c86',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '916',
    reservedBy: 'fx',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('25/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('19/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '48ab57d6-5eab-422d-9d56-72092cf74429',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Håkan',
    room: '558',
    reservedBy: 'dx',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MK',
    bbIn: 'GB',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('21/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bab8c5a7-10eb-48c6-b87f-10d2c90a0a09',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '782',
    reservedBy: 'yp',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: null,
    bbOut: 'FE',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('22/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '984dafac-e18b-4427-9384-3747154ef5d1',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Michèle',
    room: '671',
    reservedBy: 'xd',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('10/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MF',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94071d7d-b5d6-4278-ba21-751fee3a29ee',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('25/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '800',
    reservedBy: 'xa',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'QC',
    bbIn: 'XL',
    timeOut: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9ded2cad-790a-43e8-a5e2-a9691bca41c9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Sòng',
    room: '351',
    reservedBy: 'zi',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('23/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VW',
    bbIn: 'HD',
    timeOut: new Date(
      new Date('17/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90ef2fe7-cca2-4fd9-8231-b2f496d13d78',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laïla',
    room: '185',
    reservedBy: 'md',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('25/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SB',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '016ba9a7-9a4a-49ca-9d2c-3d2fae8c51ac',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('14/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '433',
    reservedBy: 'sl',
    bikeFormCompleted: null,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RI',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('28/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('13/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3af6fea3-bfc4-4390-ac36-5cd1da591a15',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '589',
    reservedBy: 'rj',
    bikeFormCompleted: null,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NE',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('14/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '212cba21-1c8e-4080-b8e6-133fadf5661d',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Anaël',
    room: '855',
    reservedBy: 'ay',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: null,
    bbOut: 'TO',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8c38020-8083-46d0-9014-1e77e6c07cb3',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Börje',
    room: '354',
    reservedBy: 'xo',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('13/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5390db4-b614-4e6f-aed3-117fe1c4ffd8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åslög',
    room: '562',
    reservedBy: 'qt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'CK',
    bbIn: 'GS',
    timeOut: new Date(
      new Date('20/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('16/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '03ca2bfd-952f-4da8-b865-4eb4a570797b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gaétane',
    room: '240',
    reservedBy: 'pt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('23/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HS',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('17/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b70aa7fb-2ed4-4daa-84fd-a56b96f34aa0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '164',
    reservedBy: 'fw',
    bikeFormCompleted: false,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FK',
    bbIn: 'XS',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0575e35c-e73c-49b3-bce3-4ba66259071d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('23/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëline',
    room: '046',
    reservedBy: 'ut',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'UT',
    bbIn: 'QY',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29c8ace4-fe9d-43e3-a7a0-bfb2a0478c14',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Faîtes',
    room: '778',
    reservedBy: 'cy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('22/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VV',
    bbIn: 'SQ',
    timeOut: new Date(
      new Date('16/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ed47e4a-7999-4866-a626-d2ed4ba34941',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('24/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Esbjörn',
    room: '558',
    reservedBy: 'mz',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('13/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OL',
    bbIn: 'WQ',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '970d1373-0278-4f21-bba4-b30a414329f7',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Intéressant',
    room: '502',
    reservedBy: 'ov',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DE',
    bbIn: 'CU',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bec7ad01-133c-46b1-8686-1edf21ffb6f2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('14/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '150',
    reservedBy: 'gi',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'TD',
    timeOut: new Date(
      new Date('27/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5082d62b-5f55-45d0-9c33-d2cd12299ce5',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Cléopatre',
    room: '175',
    reservedBy: 'vk',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZS',
    bbIn: 'QC',
    timeOut: new Date(
      new Date('30/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e83c1af9-7c15-4ca3-8cbe-2738db5f1ef7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('24/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '415',
    reservedBy: 'fa',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('13/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'UN',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b0d87927-1bd1-439d-a5c9-23b717442766',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('18/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '001',
    reservedBy: 'lf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'YC',
    bbIn: 'TG',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30ccfb97-b6d1-41a0-967c-c6f403673999',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Jú',
    room: '146',
    reservedBy: 'pq',
    bikeFormCompleted: false,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KL',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('06/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b27c1731-dda8-4c60-8547-570b4c03a341',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '281',
    reservedBy: 'fj',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('26/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'TV',
    timeOut: new Date(
      new Date('20/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('19/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd1a4551f-bfaa-4f74-9eca-45cf0d6c5a7c',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Célia',
    room: '109',
    reservedBy: 'jn',
    bikeFormCompleted: true,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EB',
    bbIn: 'QQ',
    timeOut: new Date(
      new Date('20/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('21/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('15/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82db594c-dd6c-4e1f-901e-bcfd63a8388b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '059',
    reservedBy: 'eo',
    bikeFormCompleted: false,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: null,
    bbOut: 'IL',
    bbIn: 'SB',
    timeOut: new Date(
      new Date('16/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('17/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('10/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a37232a-f43f-4b76-b20c-d0672a37eea9',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Josée',
    room: '312',
    reservedBy: 'dr',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('17/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JM',
    bbIn: 'CS',
    timeOut: new Date(
      new Date('11/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ab5fae0-2f07-474e-b0d2-1d885770ca6d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('26/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '456',
    reservedBy: 'zz',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: null,
    bbOut: 'OA',
    bbIn: 'HN',
    timeOut: new Date(
      new Date('09/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('10/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2853cbb1-9cf5-4024-a79d-4cc3f9a46e53',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('17/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '325',
    reservedBy: 'nt',
    bikeFormCompleted: null,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LK',
    bbIn: 'HW',
    timeOut: new Date(
      new Date('30/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd30a37e2-3f19-4797-8531-54cce10171be',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('16/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '360',
    reservedBy: 'kc',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BG',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('30/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('29/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8097214-d37a-48ab-a0f2-e0470add00d1',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Cunégonde',
    room: '560',
    reservedBy: 'pf',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UK',
    bbIn: 'LY',
    timeOut: new Date(
      new Date('30/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('31/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '20a524b3-109a-424b-b365-d7f01e71cf29',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mélinda',
    room: '536',
    reservedBy: 'de',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
    bbOut: 'HP',
    bbIn: 'JY',
    timeOut: new Date(
      new Date('13/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('14/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('31/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f94a1f91-7a62-47e0-b6b1-d72e38efcdaf',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '119',
    reservedBy: 'bd',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'EZ',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('30/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e7f34c9-d664-4007-ae8b-67a622c16a34',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('18/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '341',
    reservedBy: 'zr',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IN',
    bbIn: 'TE',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '474fb72f-9428-4985-8267-ebe405dd8649',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('25/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '801',
    reservedBy: 'mi',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: null,
    bbOut: 'FL',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('09/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('27/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c30f61f0-6e76-4829-b0a1-2545b4c9c7ea',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('14/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '363',
    reservedBy: 'ku',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JI',
    bbIn: 'EV',
    timeOut: new Date(
      new Date('28/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('29/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('26/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fec72731-d029-44d5-be12-2255d60914b5',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Loïc',
    room: '514',
    reservedBy: 'nf',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
    bbOut: 'TD',
    bbIn: 'GI',
    timeOut: new Date(
      new Date('27/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('28/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
];
