import { IBike } from '@omnihost/interfaces';

export const bikes: IBike[] = [
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ad6ab72-c976-4ed5-8798-7e8794dd33a6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Almérinda',
    room: '911',
    reservedBy: 'ejp',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZN',
    bbIn: 'BG',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b58e455f-ff91-4bab-99b7-391395f9143c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Béatrice',
    room: '030',
    reservedBy: 'hbj',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GN',
    bbIn: 'RG',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08d45500-949a-4f9c-9cbd-29a02b3cc3ba',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Eloïse',
    room: '501',
    reservedBy: 'xuv',
    bikeFormCompleted: null,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JJ',
    bbIn: 'FP',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89601484-23b0-4837-99f8-245889a709bf',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Laurélie',
    room: '642',
    reservedBy: 'fez',
    bikeFormCompleted: null,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JR',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '650ed402-7a74-49de-8d68-9d5af28b3811',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lài',
    room: '931',
    reservedBy: 'zyj',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96269cfb-0f3a-434d-81c5-f0b0ddefabe2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '439',
    reservedBy: 'lwz',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'BN',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7ff311ac-612a-4eb3-a4a9-5c36c05d4438',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Camélia',
    room: '032',
    reservedBy: 'rgj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OT',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '210f4f4c-61b8-4312-bd79-2a026ae76da9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '612',
    reservedBy: 'ssv',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KI',
    bbIn: 'QL',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd39dd902-eeec-4c86-a960-a09abacb0ea3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '425',
    reservedBy: 'ted',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AX',
    bbIn: 'PL',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f636dd5-ce92-4e29-8322-ba88c42db09a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '870',
    reservedBy: 'gbs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'CY',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '12310692-8f00-4000-8c6a-a43ac62e1c65',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '984',
    reservedBy: 'bsq',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SU',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '366917d3-a3ce-41db-8e47-85b5414a263d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '764',
    reservedBy: 'wgv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GQ',
    bbIn: 'HH',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '26a6acd5-7f90-45ab-b281-92964051e24c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Noémie',
    room: '577',
    reservedBy: 'hwo',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KL',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '822d76cd-85a6-4ca6-a203-3f06ce615381',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mégane',
    room: '023',
    reservedBy: 'wqr',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QD',
    bbIn: 'ML',
    timeOut: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a58e64b-00d0-481b-a606-10c14ebee34b',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Göran',
    room: '085',
    reservedBy: 'xhg',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RO',
    bbIn: 'XM',
    timeOut: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80bc45c9-9469-4dd9-8b21-91e2f3f4d2a6',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '291',
    reservedBy: 'ptr',
    bikeFormCompleted: false,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'RN',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'af9d740b-086b-4e97-ae84-d22201f2d8c3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '058',
    reservedBy: 'tgb',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'XL',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80161fd7-178f-4d37-8f5c-0929961416f9',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Aimée',
    room: '429',
    reservedBy: 'nly',
    bikeFormCompleted: null,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CK',
    bbIn: 'OQ',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '77cd746a-971a-428d-8d60-a0b7c31efbbd',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Céline',
    room: '443',
    reservedBy: 'iie',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GT',
    bbIn: 'HR',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd70cdb03-7d15-4caf-ab85-33de8d48e0f4',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Dù',
    room: '755',
    reservedBy: 'itn',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'EZ',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c12c0631-efcb-417d-a484-836eea6eadfe',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Réjane',
    room: '031',
    reservedBy: 'zce',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FF',
    bbIn: 'LZ',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c2950fea-8b7d-4427-b64f-b6e99df715eb',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '172',
    reservedBy: 'xpk',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GN',
    bbIn: 'ND',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3dee3d0a-9711-4929-b93f-4d56b8a5d792',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Noémie',
    room: '334',
    reservedBy: 'bdx',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SR',
    bbIn: 'SS',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d88916b-df8e-4117-9c88-514bedf96aa0',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '333',
    reservedBy: 'qsw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DT',
    bbIn: 'BI',
    timeOut: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3b930fe-daea-4d2a-bb13-c2bde59a6384',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '769',
    reservedBy: 'sbl',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RI',
    bbIn: 'WW',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89bed0e9-411e-461c-b886-9d765068c99c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '011',
    reservedBy: 'cwu',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XS',
    bbIn: 'FZ',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70663732-e5d0-4f60-a870-55b1859be518',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '684',
    reservedBy: 'wpz',
    bikeFormCompleted: null,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KO',
    bbIn: 'YG',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2dfc1b4d-9932-4f06-872a-9a538a7e076a',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maëlle',
    room: '603',
    reservedBy: 'akz',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GD',
    bbIn: 'WR',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f81e308-8f52-4690-8330-d6bda5a8b222',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mégane',
    room: '609',
    reservedBy: 'xjs',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YW',
    bbIn: 'CB',
    timeOut: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '52c9afbf-18e9-47e6-b84f-d3f3d2912aaf',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Ráo',
    room: '954',
    reservedBy: 'nzw',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VW',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0947cea6-efd0-40bc-9280-a361cb1ed86f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '346',
    reservedBy: 'vei',
    bikeFormCompleted: true,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NU',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b38516cf-5b9c-4c67-9f55-9f91d270af0d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '834',
    reservedBy: 'jcn',
    bikeFormCompleted: null,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'FS',
    timeOut: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5ea4460f-7723-498b-b065-3671d9131a2d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '559',
    reservedBy: 'zqe',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JZ',
    bbIn: 'CU',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd6ffb761-81ad-4ef6-b89a-9228589d4337',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '204',
    reservedBy: 'zvy',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GH',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3000365a-6b82-47ca-8ac4-ecf304787737',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Åslög',
    room: '275',
    reservedBy: 'sfq',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FC',
    bbIn: 'EY',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07b94333-3f5c-41dc-b187-2cf1c2572c54',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Réjane',
    room: '832',
    reservedBy: 'ayf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RD',
    bbIn: 'JP',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01904128-2826-4376-98a0-0ce46462a93a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '618',
    reservedBy: 'xmt',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VY',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '32ae953e-8b84-4243-ad1a-7faa6d55933e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '776',
    reservedBy: 'xiz',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TR',
    bbIn: 'KM',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fd9b2a47-6ecd-4bbd-9c8d-f6133c89917f',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Gaétane',
    room: '552',
    reservedBy: 'jdr',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NN',
    bbIn: 'MD',
    timeOut: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31769c7b-59f3-4931-9ffb-e8ff91a3a808',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Méng',
    room: '315',
    reservedBy: 'dvq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QN',
    bbIn: 'QP',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2aab1fa2-746a-47f5-872f-03727a798d5a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Hélène',
    room: '857',
    reservedBy: 'bvp',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WK',
    bbIn: 'ZY',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9247e5d8-57d9-421d-8d98-8a2b41f09f91',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Crééz',
    room: '711',
    reservedBy: 'fwm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SD',
    bbIn: 'TP',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95c97c8c-ae61-401b-bcad-0b5b1de8e6eb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '403',
    reservedBy: 'njm',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IO',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a6163e5-b29e-4a22-8160-406f788140d5',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Rébecca',
    room: '574',
    reservedBy: 'qbe',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XL',
    bbIn: 'QU',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5c09e27-1ba3-42f5-bbdc-462a49f8484d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Eliès',
    room: '517',
    reservedBy: 'zyf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '923e4b98-d23c-49b1-aa63-66539cfab6e0',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '891',
    reservedBy: 'dbu',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LB',
    bbIn: 'QT',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '465e5647-27ec-465c-a122-0783db544196',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '524',
    reservedBy: 'awt',
    bikeFormCompleted: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XD',
    bbIn: 'YE',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56a203ee-4e7e-4e50-98b3-22b6bddbddff',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kuí',
    room: '845',
    reservedBy: 'esi',
    bikeFormCompleted: null,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '881c52dc-6c35-4dca-9837-40ad258126d1',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '378',
    reservedBy: 'hsw',
    bikeFormCompleted: null,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DD',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9c99a0d-2782-4927-97a3-c849185c043f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Andrée',
    room: '665',
    reservedBy: 'bcd',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CM',
    bbIn: 'WV',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b1ca946f-5dd1-4cb7-a885-74d9983a02d6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '515',
    reservedBy: 'cui',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UM',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab361609-047d-4c28-81b9-aa14badb7dcf',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '013',
    reservedBy: 'krh',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VR',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd142478-c101-4d21-9a53-395cb664597b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '405',
    reservedBy: 'jma',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DN',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09f27793-d38c-43fc-85b8-21679db3a073',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '128',
    reservedBy: 'ali',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0972827f-af1a-47aa-8504-6bb1746af8b7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '926',
    reservedBy: 'eks',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KT',
    bbIn: 'YA',
    timeOut: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc0f0c8c-b845-49b5-862b-19d8731b3b81',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Célestine',
    room: '521',
    reservedBy: 'drx',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NN',
    bbIn: 'MS',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '57d1cb50-c5a8-423f-83fe-d867b6d10eba',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëline',
    room: '354',
    reservedBy: 'mer',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VK',
    bbIn: 'UN',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc25f81e-f945-45f9-9de5-6f253e2030f8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Magdalène',
    room: '869',
    reservedBy: 'doi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PP',
    bbIn: 'HE',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05a1155a-e1f8-4c01-8f8b-fc1a42194812',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gwenaëlle',
    room: '987',
    reservedBy: 'sbk',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GC',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9506f55-83db-4f19-b243-890a036d9a14',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Fèi',
    room: '127',
    reservedBy: 'luu',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UW',
    bbIn: 'EZ',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9fcf7f0-e620-46a5-af88-95b903045cff',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méryl',
    room: '825',
    reservedBy: 'lvp',
    bikeFormCompleted: null,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QQ',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e762ab80-85b5-415f-9516-bf6f4ccb4261',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '478',
    reservedBy: 'hep',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'YR',
    timeOut: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9edfc114-ace0-4326-9b04-0e3c737b7fe8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '251',
    reservedBy: 'vwk',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HT',
    bbIn: 'XZ',
    timeOut: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'defe16f9-2ad1-4936-8676-5419adbb9dd1',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '321',
    reservedBy: 'hll',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QT',
    bbIn: 'XZ',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '13ce617f-2525-4396-a9c9-ff3bf8ea3fa8',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Cléa',
    room: '678',
    reservedBy: 'tsc',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AE',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '45650984-2073-43c8-879c-356a693d1e1b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '615',
    reservedBy: 'xrw',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IN',
    bbIn: 'SS',
    timeOut: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96cb12b1-7743-4f29-834a-9e9b8cec64b0',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '003',
    reservedBy: 'jju',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AB',
    bbIn: 'RG',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '566f3dc3-c19d-4d8d-8039-3ccf132512da',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '270',
    reservedBy: 'ght',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KU',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7dbca458-4403-4628-85ad-3ee3dc719663',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Pål',
    room: '308',
    reservedBy: 'yug',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IQ',
    bbIn: 'JZ',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96bdc61a-75d9-44ad-bf07-4bdbc603fd6c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Görel',
    room: '321',
    reservedBy: 'qyj',
    bikeFormCompleted: true,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VB',
    bbIn: 'CT',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ef2e753-d620-4b8b-9100-022bb1ef4ddb',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélina',
    room: '677',
    reservedBy: 'ugx',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XW',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53c664fd-696f-4e39-9e32-d53cc7b54b5b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '084',
    reservedBy: 'fek',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RT',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '104592b6-ab20-4ac2-adc2-9aa5d6e4ce08',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Andrée',
    room: '128',
    reservedBy: 'bro',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56151b56-5d8e-493e-aba9-e0eff2a24a85',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélia',
    room: '302',
    reservedBy: 'goy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VK',
    bbIn: 'ON',
    timeOut: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a036351-15d8-43f4-b79c-a3d1ae604e4f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Görel',
    room: '383',
    reservedBy: 'jqv',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QI',
    bbIn: 'UO',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3967c4d-a77e-4ee2-a121-4389fc8a53ea',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '978',
    reservedBy: 'pmt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EH',
    bbIn: 'QW',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '286c7116-4b6b-4219-a5cd-64acaa977591',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '259',
    reservedBy: 'kus',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DI',
    bbIn: 'OL',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6018480-ca7a-4f20-8e3f-0526ab57d37f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '499',
    reservedBy: 'llx',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'GC',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b1ec47c1-4d54-4789-9afd-041cb1303640',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '324',
    reservedBy: 'vro',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RA',
    bbIn: 'XV',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f67cc902-4691-4d4d-9420-3fa40077d123',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Estée',
    room: '634',
    reservedBy: 'pwe',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QC',
    bbIn: 'RS',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5e7a858c-fdce-4aeb-9e63-6086eba15b2d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '817',
    reservedBy: 'yfo',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XY',
    bbIn: 'RY',
    timeOut: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '23cd9ef3-58c8-433d-a3a9-36613241019c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '763',
    reservedBy: 'bks',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RF',
    bbIn: 'VX',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '570164d2-7b1d-4d86-916b-592aa4a757e8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '739',
    reservedBy: 'baq',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QI',
    bbIn: 'KK',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2f31000-7d34-4c2a-ba7f-739063af44d2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '254',
    reservedBy: 'ogd',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'IR',
    timeOut: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88b2f8c9-8176-47da-983d-b9cd8b8ceb8e',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Björn',
    room: '568',
    reservedBy: 'clk',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BP',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc9aba1b-bc3e-4591-97d8-fa9c51cff655',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mà',
    room: '169',
    reservedBy: 'uay',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KR',
    bbIn: 'BI',
    timeOut: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e87af3a5-7624-4b75-8324-c9ca8a24aa28',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Illustrée',
    room: '890',
    reservedBy: 'vsu',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TZ',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '119fdab1-83e1-49f2-a4e9-940c44e25d69',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '723',
    reservedBy: 'oni',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EQ',
    bbIn: 'VQ',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '20033dbf-fce3-4975-a3a9-e1e5efefde99',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Sélène',
    room: '879',
    reservedBy: 'qdx',
    bikeFormCompleted: null,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '52947de3-9673-40b8-b9af-b9df514ae549',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Pò',
    room: '973',
    reservedBy: 'ejq',
    bikeFormCompleted: false,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TT',
    bbIn: 'SI',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a47cd16c-19a0-4c06-8b0b-9d5da6b4c3b5',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Vénus',
    room: '985',
    reservedBy: 'uld',
    bikeFormCompleted: false,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AD',
    bbIn: 'AU',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d06e08f-d9d1-4a05-bdd9-d01f72ff7d21',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '617',
    reservedBy: 'bje',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EA',
    bbIn: 'XC',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc465ef1-5611-4075-8301-89064ad0e774',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Fèi',
    room: '867',
    reservedBy: 'pye',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'FN',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aad95024-f6d2-4460-870c-5b88cc033c45',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '531',
    reservedBy: 'vdz',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UY',
    bbIn: 'KT',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a23ed6b-f5f0-4d5d-9a24-960832ab8cff',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Anaé',
    room: '680',
    reservedBy: 'luf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ST',
    bbIn: 'OA',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5c275b8b-2299-4cf8-9ea5-a1a2c6cc712b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '776',
    reservedBy: 'ytn',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'DG',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '769806fd-87a1-4035-a06c-b00be153c550',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '212',
    reservedBy: 'qwm',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'ED',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f416ed1-5995-49b0-91e7-c21243b6b65e',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Björn',
    room: '678',
    reservedBy: 'gid',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'IT',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7bbc777b-82bf-4aeb-b781-731f80a0d17a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '539',
    reservedBy: 'kdr',
    bikeFormCompleted: null,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'GJ',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b801fc42-3152-4e91-91c0-d10e584d171a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '285',
    reservedBy: 'lhq',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XB',
    bbIn: 'WO',
    timeOut: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01fb44eb-2bc6-4ce3-9068-fef36af5a6b7',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Salomé',
    room: '801',
    reservedBy: 'zdz',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HQ',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '564cae9c-10bd-4b81-b8a2-78c87a220dec',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '573',
    reservedBy: 'ejo',
    bikeFormCompleted: false,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HE',
    bbIn: 'QU',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'edd8fab8-72a1-4dc2-b4d5-f2d648b58381',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Dorothée',
    room: '489',
    reservedBy: 'nyy',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f72555f9-53f5-49c8-b68c-3083146dab22',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '766',
    reservedBy: 'cak',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YP',
    bbIn: 'DK',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '10f62f8a-21fd-4c70-a94a-4907be32fde0',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '361',
    reservedBy: 'zuh',
    bikeFormCompleted: false,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BW',
    bbIn: 'CE',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '21e0716e-95c3-4a8a-b593-c97a7899204b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Kallisté',
    room: '862',
    reservedBy: 'xmi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CR',
    bbIn: 'KK',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fbd4bece-bbd9-4f05-b78a-69da3ba673fd',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Laurélie',
    room: '428',
    reservedBy: 'oaq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LU',
    bbIn: 'FW',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e857844c-21ff-46df-ae45-7134fe7e214d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélys',
    room: '474',
    reservedBy: 'zqi',
    bikeFormCompleted: false,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EK',
    bbIn: 'CT',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '819fbf46-e3fd-4324-96be-e18d2fa531a6',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '168',
    reservedBy: 'ihk',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KF',
    bbIn: 'QU',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b40ee6a-75a7-48f0-a52b-3e3e9df3d4a8',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Athéna',
    room: '243',
    reservedBy: 'fwc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'OR',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f7d3c90-f3c2-412d-99d5-55a5a41f86df',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '121',
    reservedBy: 'pkp',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QY',
    bbIn: 'TG',
    timeOut: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '55e4225a-2c4f-44b8-a7de-ee2aa132462a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '977',
    reservedBy: 'hmw',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AD',
    bbIn: 'DM',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95162c9a-9c78-430a-a3ac-35dd17091bc7',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '583',
    reservedBy: 'phh',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JY',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd673f33-3ee1-4845-8768-264cfac74391',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Judicaël',
    room: '630',
    reservedBy: 'tgq',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SL',
    bbIn: 'XX',
    timeOut: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '671ad964-616a-4cce-aac3-699b1a181597',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '459',
    reservedBy: 'xdi',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PP',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5aa7b007-6a8d-4fd9-8bad-73f7bb83df4c',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '833',
    reservedBy: 'vdp',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SP',
    bbIn: 'WN',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '16357c4a-4c6d-4970-abcd-5360fbe75609',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '567',
    reservedBy: 'cdx',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OT',
    bbIn: 'JW',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0af99c12-8afb-488d-a2d5-bb4070553902',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Aloïs',
    room: '244',
    reservedBy: 'vmr',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'BE',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eca12adf-4c01-43c5-8ed6-7fb361e4033d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '298',
    reservedBy: 'vfu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QU',
    bbIn: 'ZJ',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b5418b38-8458-45f5-bb6d-b2d0de6a3689',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méryl',
    room: '470',
    reservedBy: 'ocb',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HP',
    bbIn: 'KS',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2aca41b2-f8da-4634-a86e-7413e078b731',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '472',
    reservedBy: 'wkc',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CR',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa8def1e-06fc-42f1-8eef-7a4a13ea7abf',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Gwenaëlle',
    room: '341',
    reservedBy: 'pot',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VS',
    bbIn: 'GI',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18d94336-0e55-4750-b04e-1ef535503cb9',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '660',
    reservedBy: 'sqo',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HB',
    bbIn: 'GJ',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6755011c-1b63-49e0-b92d-2e44eab21a3a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '512',
    reservedBy: 'ahq',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FM',
    bbIn: 'BR',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd7349032-727d-4e6f-86ff-8de95aeaef48',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '256',
    reservedBy: 'edm',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UA',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4539d13-e95c-41b0-a4f6-be2167f42cd9',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '944',
    reservedBy: 'iti',
    bikeFormCompleted: false,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EF',
    bbIn: 'FR',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '97499b5b-b524-405d-bef4-4b55e8215c66',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '603',
    reservedBy: 'nxx',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'ST',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b8fbff1-953f-4a96-a468-f1657d071061',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '536',
    reservedBy: 'bkl',
    bikeFormCompleted: null,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XC',
    bbIn: 'NR',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc5e7989-2168-434c-bf04-a8596dcb023d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Méng',
    room: '400',
    reservedBy: 'fur',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'NE',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5084d9d6-36af-4bde-b02f-baf469a2b44d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '691',
    reservedBy: 'ibw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'KE',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '799d4d03-26eb-47b9-9983-699f1400a204',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '520',
    reservedBy: 'gbx',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'UT',
    timeOut: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8ed12542-9e85-4f3e-9acf-c4c7c6b7d28d',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '465',
    reservedBy: 'zwf',
    bikeFormCompleted: false,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FY',
    bbIn: 'WU',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0752e3cb-f67b-45df-979b-3dfcbefa6a16',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '831',
    reservedBy: 'lzf',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'OT',
    timeOut: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5a566a5-b363-4e2f-8b8b-d81fc22b92d7',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maéna',
    room: '550',
    reservedBy: 'rwx',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UT',
    bbIn: 'JP',
    timeOut: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e287cb06-c2ec-4e77-91be-b03068be7982',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '956',
    reservedBy: 'koc',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'US',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b060bde5-4f64-4fec-9f56-ded741a25742',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pål',
    room: '829',
    reservedBy: 'noj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ME',
    bbIn: 'PR',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9755bd08-d036-49b6-917c-c3b4987a7e80',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèsa',
    room: '581',
    reservedBy: 'sph',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ND',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14002fbf-0b9f-4d2a-8f53-516fd1b83876',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léana',
    room: '283',
    reservedBy: 'ogi',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AG',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6db5ab33-3994-40e5-963c-cb7fdd9ebaf8',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åslög',
    room: '631',
    reservedBy: 'ojb',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DE',
    bbIn: 'MQ',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a6ed4bf-e93f-42fa-a8f5-05697e5abe05',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '170',
    reservedBy: 'grn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NR',
    bbIn: 'NW',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '443a9b8b-b101-4683-8e99-dae60f71e459',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '871',
    reservedBy: 'ehb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CK',
    bbIn: 'LY',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34d9e834-e834-4532-8ed3-2eb28425961d',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '455',
    reservedBy: 'nst',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OW',
    bbIn: 'RF',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6350923d-9514-4707-a206-854724a3d28d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Cécilia',
    room: '655',
    reservedBy: 'sfv',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WP',
    bbIn: 'OT',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '114e4083-029c-4176-a14b-ba5c9f0cf49c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séréna',
    room: '568',
    reservedBy: 'ksl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YD',
    bbIn: 'BD',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f0e41bcb-7e00-4634-b31d-9780f3d1a290',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Méryl',
    room: '130',
    reservedBy: 'waw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PE',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd65d032a-a86d-4344-b26e-b3b21b63c484',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '887',
    reservedBy: 'lwe',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'ZP',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce5ebc68-4dd6-4b1e-97b2-08faeb9f981c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '075',
    reservedBy: 'prl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SY',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c86134ba-bcb5-4d06-8510-929f9bdd3e52',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Simplifiés',
    room: '453',
    reservedBy: 'vxv',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '820590cb-6fb0-4b0c-930b-1aee5f2513a0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Océanne',
    room: '837',
    reservedBy: 'jit',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BQ',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '45662e6f-f422-4282-a404-f3f1af62bd41',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '628',
    reservedBy: 'zgd',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SV',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7077eb4b-a98f-450f-b70d-c0b25db61149',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérénice',
    room: '040',
    reservedBy: 'bzb',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WX',
    bbIn: 'MG',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e83eb309-969e-4cf3-ac7a-cbe33c09c860',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '488',
    reservedBy: 'ipj',
    bikeFormCompleted: true,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JQ',
    bbIn: 'YE',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ff48899a-d58e-4d0e-a291-4e63728206a7',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Méng',
    room: '195',
    reservedBy: 'fhn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HA',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '791f41bf-4864-4f78-8768-4522ff111c81',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maëlys',
    room: '774',
    reservedBy: 'lph',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'OT',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4a47bb43-1bc0-4589-abb4-73915fc5658d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Renée',
    room: '855',
    reservedBy: 'jmf',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EL',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5ed990bc-f079-456b-b997-b33d57efd12b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mén',
    room: '078',
    reservedBy: 'azo',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TH',
    bbIn: 'CA',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '33c1db6c-6a1b-4664-af60-685f4b6f5d82',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Méline',
    room: '531',
    reservedBy: 'lgi',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GG',
    bbIn: 'FU',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9ea6c7d-6b2f-4653-b05f-21d56f20a4a6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '945',
    reservedBy: 'nhk',
    bikeFormCompleted: null,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'BJ',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0ad724e-be98-4814-967b-b198e4cbe608',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Örjan',
    room: '627',
    reservedBy: 'fto',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XY',
    bbIn: 'HA',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05dab20b-39c8-4da0-92b0-fc49309cd1e4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '834',
    reservedBy: 'lcy',
    bikeFormCompleted: null,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OV',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '75cee6ad-303e-471f-a9ec-f68347e9ebff',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '926',
    reservedBy: 'bxf',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HB',
    bbIn: 'HH',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '52899f8f-1ff1-42ed-8bf4-b5175c9bb8ff',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '558',
    reservedBy: 'gbe',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YV',
    bbIn: 'JM',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '048c81fb-ceb5-40b1-9aee-fc58ae18f840',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vérane',
    room: '692',
    reservedBy: 'nvh',
    bikeFormCompleted: true,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'CA',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a91c0a3-ad44-4e99-8f49-9d63324ba02e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '913',
    reservedBy: 'rja',
    bikeFormCompleted: true,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BU',
    bbIn: 'GK',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d08fab9-1655-4f5c-bcb4-6470a3f2b5b7',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Joséphine',
    room: '666',
    reservedBy: 'hvr',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SV',
    bbIn: 'ZN',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd668c92a-3c61-4e5d-983c-2719085992df',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '545',
    reservedBy: 'vox',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZX',
    bbIn: 'JH',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee2a7d28-624b-4029-80e0-0609b084d988',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '738',
    reservedBy: 'qjb',
    bikeFormCompleted: true,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FR',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1dc44b0d-8ccb-4041-b726-34e86195319c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '598',
    reservedBy: 'ban',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'IN',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01f4c35e-2671-4510-b6b1-21a350d0be38',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '671',
    reservedBy: 'bjn',
    bikeFormCompleted: false,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RO',
    bbIn: 'HJ',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29e0e516-fa40-44ac-8d67-c83d0e821a95',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '182',
    reservedBy: 'qjk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OY',
    bbIn: 'QL',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '703f3eae-170f-47b1-aa09-e704a62f1032',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '130',
    reservedBy: 'roz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MI',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5093d5c7-e5d4-450c-84fa-edbafcad4a98',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åsa',
    room: '784',
    reservedBy: 'rdz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CX',
    bbIn: 'CJ',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '884882ff-bc88-4d3b-899e-ede27f1923b4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '264',
    reservedBy: 'zvd',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GR',
    bbIn: 'XQ',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d364da5-5d40-4489-9a19-ae31bfba0f62',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélinda',
    room: '060',
    reservedBy: 'myp',
    bikeFormCompleted: null,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZQ',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1fe406a2-651d-4376-b5ab-fcc9604d0533',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maëlla',
    room: '817',
    reservedBy: 'arl',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QF',
    bbIn: 'GB',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f0214c8-1746-4c0d-85b1-bdb2b37c2bdb',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '735',
    reservedBy: 'hui',
    bikeFormCompleted: null,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RQ',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64b423ec-b1a5-49b3-8626-c82f5f4cd1d0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '009',
    reservedBy: 'zcf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'UO',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70718fef-f0c8-419d-9fb7-80c1d6420451',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '758',
    reservedBy: 'ucb',
    bikeFormCompleted: null,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GB',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8cadb18a-d821-4ae5-af67-7a072a51fa7a',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Görel',
    room: '176',
    reservedBy: 'zmz',
    bikeFormCompleted: false,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GX',
    bbIn: 'MN',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '03c5577b-4da8-4e46-82f1-e60731a4355c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '589',
    reservedBy: 'bev',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QN',
    bbIn: 'LH',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0ff863f-faba-4e34-99b4-d26ac9249a5a',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Pò',
    room: '120',
    reservedBy: 'ubd',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HU',
    bbIn: 'AT',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '499f886a-f5a8-4ba9-9189-21c5345ca1cd',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '336',
    reservedBy: 'icv',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GY',
    bbIn: 'YR',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '807a750b-0e1d-4317-9482-f4334f031dad',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '597',
    reservedBy: 'jni',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LV',
    bbIn: 'BA',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c01ebe40-7524-4768-ad86-ee5c5b4f885e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '918',
    reservedBy: 'gpe',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'TK',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '84f1b447-d10e-48f1-bc50-74f2a8113853',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '359',
    reservedBy: 'vcc',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YF',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca0a9802-382f-491c-956c-7d0411412f66',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Estève',
    room: '219',
    reservedBy: 'vts',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GT',
    bbIn: 'AU',
    timeOut: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '210ea248-cd20-4027-ad7d-01e14334085f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cécilia',
    room: '511',
    reservedBy: 'hdn',
    bikeFormCompleted: null,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZT',
    bbIn: 'YA',
    timeOut: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5fc23682-c336-475b-8ca7-3595e6f10d0f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '306',
    reservedBy: 'upq',
    bikeFormCompleted: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MD',
    bbIn: 'TB',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b39516e3-bd57-4c47-8808-0fe5d43c917e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '567',
    reservedBy: 'wdv',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QZ',
    bbIn: 'SD',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9e11dec-289f-4ded-9f40-440cc9c9d1b7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '225',
    reservedBy: 'rwi',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RH',
    bbIn: 'ZJ',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '713383e1-311f-404a-98a1-079eb61ab670',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '476',
    reservedBy: 'kpx',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YL',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2d92f79-90f8-459b-b074-bc2fe2a4b9fd',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '525',
    reservedBy: 'cpb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'DE',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cbc11ebd-68be-4dab-b8da-7bff956db0e6',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Illustrée',
    room: '553',
    reservedBy: 'pmw',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MD',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9579e344-0c81-4040-a601-419dcc87ae60',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '695',
    reservedBy: 'mcr',
    bikeFormCompleted: false,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZY',
    bbIn: 'QH',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2964b05f-e712-40b9-818d-d176cd1cad47',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Dà',
    room: '214',
    reservedBy: 'huu',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GX',
    bbIn: 'IW',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e47fc7c1-620c-4c68-b39d-441dd2d5d982',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mélys',
    room: '772',
    reservedBy: 'tpw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CV',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a258dffc-6f14-46b7-a609-aa1159aadb6d',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Bénédicte',
    room: '821',
    reservedBy: 'ntn',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QQ',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46a1d3c3-0f47-4544-8ecc-868d74344b45',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '562',
    reservedBy: 'hvr',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MI',
    bbIn: 'OF',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '058688be-ba27-44be-b319-dd940b0ee291',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '632',
    reservedBy: 'bkb',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YN',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7954adc4-f4bf-4693-b78f-efe372c76452',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '474',
    reservedBy: 'sbl',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'HZ',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '61953ae5-03d4-4a8d-9c9b-f71de5c87cb2',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Célestine',
    room: '173',
    reservedBy: 'eys',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'GQ',
    timeOut: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36510938-0eed-4630-a7ba-381e2e1e7680',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèsa',
    room: '178',
    reservedBy: 'icp',
    bikeFormCompleted: false,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HZ',
    bbIn: 'QC',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '26f0abb8-60af-4813-8a16-4c01d8d4eb07',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '417',
    reservedBy: 'joj',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GW',
    bbIn: 'JK',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f1e4d86-0540-4ba0-a691-d4eb8020596d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '512',
    reservedBy: 'wja',
    bikeFormCompleted: true,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3f42270-ba57-4e06-bd2d-52fa4d4db7b5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '514',
    reservedBy: 'ria',
    bikeFormCompleted: true,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TW',
    bbIn: 'OT',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca89a0a7-020e-4b2a-909e-48dfa69f6967',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Magdalène',
    room: '118',
    reservedBy: 'atc',
    bikeFormCompleted: false,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EN',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a679484-e766-4ec4-898f-5bc8fa0ff39e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '906',
    reservedBy: 'xha',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VH',
    bbIn: 'BK',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56c06060-dede-4b59-bc22-e6fe01795527',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '174',
    reservedBy: 'lob',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OR',
    bbIn: 'GL',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9ed90e98-3674-4735-be4b-4c4327ba654a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Vérane',
    room: '427',
    reservedBy: 'qam',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZF',
    bbIn: 'FQ',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dcbc003a-d102-4a5b-bb53-76149d06407b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '868',
    reservedBy: 'ppq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IP',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00bcb040-c7dd-4b92-ae9f-f53636e4d96c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '590',
    reservedBy: 'tdk',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VM',
    bbIn: 'UC',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '011a19d8-545d-41a4-845e-12a03b725182',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-thérèse',
    room: '445',
    reservedBy: 'jeo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SE',
    bbIn: 'FO',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f5d3650-895e-46ae-b7f3-7e24a41a6e1b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Simplifiés',
    room: '908',
    reservedBy: 'jzi',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XN',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f6141bf-555f-4161-b4fd-63bc18691097',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurène',
    room: '689',
    reservedBy: 'jqo',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JR',
    bbIn: 'GY',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '98f2a597-8519-49b5-b391-509bc13f3329',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adèle',
    room: '517',
    reservedBy: 'axf',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'VL',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f5b496ce-2010-44a6-89e6-92dbc551091a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '352',
    reservedBy: 'mux',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'AM',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a027295a-0e77-483c-b339-6b738b14f38f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '711',
    reservedBy: 'enk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LS',
    bbIn: 'AB',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'efbd5c59-b60d-46e3-a662-e7593c7afe06',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léane',
    room: '645',
    reservedBy: 'frn',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GX',
    bbIn: 'QZ',
    timeOut: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eadd504a-db02-474e-812c-1271a71a1ae7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '943',
    reservedBy: 'kkv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LF',
    bbIn: 'II',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea0cc7ed-985d-4a67-8d84-dc7e171fc8a7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '963',
    reservedBy: 'oik',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TI',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f416eb7-2f1f-450e-8b30-b933e6d53462',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '931',
    reservedBy: 'llb',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'JK',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4bf9421-a722-443f-b71d-e0fe8ae11e83',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Cécilia',
    room: '896',
    reservedBy: 'rsp',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CQ',
    bbIn: 'MW',
    timeOut: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4177db6a-9a54-4539-a7e4-58b15fa3fea2',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Eléa',
    room: '098',
    reservedBy: 'mml',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RA',
    bbIn: 'CL',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6668af08-0e1f-4b3e-9b5b-9b09815085d8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '960',
    reservedBy: 'ole',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HY',
    bbIn: 'PW',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1fa8c7a5-4d6c-4bb2-841d-ed22b34374f7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '064',
    reservedBy: 'pjz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'EM',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'daa6eb74-343b-4467-9097-680fa7bae27c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '049',
    reservedBy: 'kqp',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'HA',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a8ac6fe-e8b1-4c43-a097-51b1d23f0013',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '103',
    reservedBy: 'wbw',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XP',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd574c2bb-9112-4459-b9be-b573747fa0a1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '355',
    reservedBy: 'ljb',
    bikeFormCompleted: true,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BG',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be599a04-31c6-44fe-9d08-d64cb6de319b',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Léa',
    room: '937',
    reservedBy: 'apb',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NJ',
    bbIn: 'YQ',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '851f9504-28d5-415a-b2c7-7915ec03e251',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëlys',
    room: '865',
    reservedBy: 'gqy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RK',
    bbIn: 'IF',
    timeOut: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eb36941b-a25b-4274-9fbb-e40b557286dc',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dafnée',
    room: '208',
    reservedBy: 'tqd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PN',
    bbIn: 'AP',
    timeOut: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '911c0b01-1732-4c3f-b641-1df605558412',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Håkan',
    room: '468',
    reservedBy: 'hlk',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RQ',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8f109a73-c5ea-4815-a218-04b1c644c57f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méng',
    room: '695',
    reservedBy: 'bdr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GC',
    bbIn: 'KN',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7268f51-19f3-49d2-aad1-e1b0de0ffdf7',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '237',
    reservedBy: 'pfu',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'QP',
    timeOut: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce9b797e-5540-4d31-aeb6-6ac3097bad78',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '180',
    reservedBy: 'phh',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'BE',
    timeOut: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '935748cb-302a-42b4-bff6-5d77d7b398d0',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Ruò',
    room: '848',
    reservedBy: 'kvo',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MS',
    bbIn: 'YX',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a01987ce-33e7-41af-9b60-e8db5153f32e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '049',
    reservedBy: 'bmq',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UJ',
    bbIn: 'DU',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2619238-fb30-45c2-a150-40591f0233d8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '667',
    reservedBy: 'xzf',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AR',
    bbIn: 'LH',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '883b253e-dff5-4ca2-84dd-fc068432b5f4',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '040',
    reservedBy: 'xng',
    bikeFormCompleted: false,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LD',
    bbIn: 'NL',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f71357ce-c285-4ea6-b011-ea99a59a5ebf',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Gwenaëlle',
    room: '042',
    reservedBy: 'xze',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DY',
    bbIn: 'RV',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f9504f7-9510-4bef-8e47-b2822f7d72b1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '609',
    reservedBy: 'wul',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RD',
    bbIn: 'UQ',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '57ce7ca3-5989-4a77-bbb3-aaa672bdcfb5',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mélinda',
    room: '268',
    reservedBy: 'zqm',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZF',
    bbIn: 'XX',
    timeOut: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ef4f3d4-439e-4562-9df0-51fd9dd5311d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '332',
    reservedBy: 'drk',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZI',
    bbIn: 'WW',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9bff72f9-c132-4489-b08e-69178825dcbe',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Lóng',
    room: '075',
    reservedBy: 'okn',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EK',
    bbIn: 'CN',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9bea8445-2b5d-4750-92da-3408fbc8a761',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '293',
    reservedBy: 'eaj',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UP',
    bbIn: 'LZ',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82425cf2-1c5b-4770-9ec7-517665babe2f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '121',
    reservedBy: 'kdy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KW',
    bbIn: 'TG',
    timeOut: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '63334d71-cb37-4544-a89a-6572d8d0e13b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Laurène',
    room: '710',
    reservedBy: 'xhp',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZB',
    bbIn: 'DW',
    timeOut: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c2eb798e-c472-480c-ad0a-eb0e0185cc58',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Sòng',
    room: '814',
    reservedBy: 'wwk',
    bikeFormCompleted: null,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IU',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd33a092-6db6-48c7-b486-a7538f39aa5d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '434',
    reservedBy: 'kib',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FE',
    bbIn: 'UQ',
    timeOut: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25e57807-f6c1-4196-92c0-75bc54169b59',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Tán',
    room: '067',
    reservedBy: 'cnt',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'SY',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3ef4ec79-3908-41a8-bb98-38ce9f8c8b92',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-thérèse',
    room: '146',
    reservedBy: 'uxs',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IB',
    bbIn: 'TX',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07eddf1c-85e6-4bab-bffc-ad6e7e81b159',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aurélie',
    room: '728',
    reservedBy: 'dyh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TM',
    bbIn: 'BQ',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e4044df8-c09c-48e7-a12a-d62d89421e07',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Médiamass',
    room: '915',
    reservedBy: 'wpy',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AE',
    bbIn: 'LB',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4aec1a0a-5f0a-4239-b270-0fc6ab9f9156',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Thérèse',
    room: '659',
    reservedBy: 'ptc',
    bikeFormCompleted: false,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'BO',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '176fcf62-9c39-4fcc-b54e-c9a29678de5d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '028',
    reservedBy: 'evi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BG',
    bbIn: 'MW',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e4a3cdd6-fc30-4891-b61c-ef22928234db',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Gaïa',
    room: '524',
    reservedBy: 'eqd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WB',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e36c09e6-a496-49b2-821b-f6ebf2457384',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Aimée',
    room: '660',
    reservedBy: 'oir',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'KT',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '502debd1-4d52-4044-bb90-0be591ae572f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maëlann',
    room: '595',
    reservedBy: 'hfh',
    bikeFormCompleted: null,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CZ',
    bbIn: 'ZU',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46cfe3d9-8750-4f88-9014-d24dcbf4715b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Åslög',
    room: '137',
    reservedBy: 'tru',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FX',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29ee9ce2-4b9f-4c38-a769-f6883e7d2dec',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '973',
    reservedBy: 'yuz',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SP',
    bbIn: 'GJ',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab1248fd-388f-477e-8b4e-4a5b8caf69b0',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Naëlle',
    room: '679',
    reservedBy: 'zec',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UY',
    bbIn: 'LZ',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '376c3620-51c5-4fae-a55a-5f33be9ac329',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '436',
    reservedBy: 'eeu',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2bdf33d8-756c-4075-935d-eb26c839afd1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '701',
    reservedBy: 'esw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WJ',
    bbIn: 'VV',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36025148-b593-4f2c-88e2-df5dc5e36b31',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '358',
    reservedBy: 'umi',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WP',
    bbIn: 'RL',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f141919-c30d-47aa-b047-1f2ba6e0c8e8',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Dorothée',
    room: '399',
    reservedBy: 'bod',
    bikeFormCompleted: null,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VO',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9aad11a-4ebd-420c-b40e-04f303542625',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Rébecca',
    room: '334',
    reservedBy: 'cnu',
    bikeFormCompleted: false,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9eaac9ae-0812-4b51-85de-233d9dd8c82d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '637',
    reservedBy: 'oru',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HY',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e747f554-8eca-4694-8bb1-a5ff0cae2507',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Östen',
    room: '262',
    reservedBy: 'glj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MM',
    bbIn: 'MB',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '780e2a5d-ab77-4fbc-8a82-4323a36b5db9',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Joséphine',
    room: '404',
    reservedBy: 'dxz',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FJ',
    bbIn: 'AA',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '62e93b3c-227c-4094-9f29-26068aa6f73d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '520',
    reservedBy: 'qvi',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'SI',
    timeOut: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '016cf2fb-3803-40d5-ba28-79b5878b689c',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '826',
    reservedBy: 'mud',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FO',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bab20885-1b90-4fed-b8ce-14ead0fc3c8b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '573',
    reservedBy: 'mfj',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MV',
    bbIn: 'HE',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '71555031-4338-4d0b-8296-1f33610f741c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Salomé',
    room: '692',
    reservedBy: 'oqf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QY',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f5e69e09-8af5-49a5-9bda-94ebe49e8e84',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Alizée',
    room: '327',
    reservedBy: 'hfg',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ET',
    bbIn: 'XG',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cad031ad-3822-491a-bb81-d215a23ea36f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '886',
    reservedBy: 'plo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QE',
    bbIn: 'YX',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d842318-6ae2-4a6d-965f-3137df17a852',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '829',
    reservedBy: 'vhf',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GW',
    bbIn: 'CJ',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c21a21fa-99fe-4989-8b4f-63c25b3fb63b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '073',
    reservedBy: 'hse',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OP',
    bbIn: 'VO',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1cdf3964-5831-46df-b2ea-24ba894691b2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '515',
    reservedBy: 'ijq',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'XO',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8032f38-ebc2-4e2b-8d16-1431173a1413',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '223',
    reservedBy: 'xuy',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GQ',
    bbIn: 'DH',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3ba972af-4334-48b3-ae4a-71d477c70306',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '449',
    reservedBy: 'ape',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BT',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4ed870eb-685d-47df-9e7b-373be46cffd4',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Pénélope',
    room: '384',
    reservedBy: 'esp',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KH',
    bbIn: 'CN',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a3b1185-6478-4a40-90c6-150cf4412b84',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Garçon',
    room: '459',
    reservedBy: 'vru',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EB',
    bbIn: 'BA',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa015330-0e65-4b46-b0e8-4168af78f50e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '279',
    reservedBy: 'xcn',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'MT',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96a972a5-3768-4cf9-9338-86b23210a1e5',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '034',
    reservedBy: 'ehc',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OS',
    bbIn: 'TQ',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3d77e137-88e6-4e17-a957-f3da94d2c59e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '203',
    reservedBy: 'xza',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EC',
    bbIn: 'OR',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '997e52ed-4358-4311-81a3-e1b88249c366',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Dorothée',
    room: '777',
    reservedBy: 'wlv',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BV',
    bbIn: 'ZK',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a88e6158-f958-42bf-bc7e-8c657a21e41b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurène',
    room: '901',
    reservedBy: 'fgi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YD',
    bbIn: 'BV',
    timeOut: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82307c55-754d-4dcc-ae4d-826a1c5e8c31',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Faîtes',
    room: '765',
    reservedBy: 'zlj',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TQ',
    bbIn: 'RN',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '868ca708-acab-4e5c-b784-437c32a7a824',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '616',
    reservedBy: 'idq',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DY',
    bbIn: 'AF',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42b724a0-a4f8-4b11-983f-e3c250034f63',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '222',
    reservedBy: 'inh',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VL',
    bbIn: 'SL',
    timeOut: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '71ed8d2b-5824-4352-a070-ade3df36e3bb',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Alizée',
    room: '014',
    reservedBy: 'pgs',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'NM',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ddba8498-fc1d-43a8-9ef3-87f4e80e8e93',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '093',
    reservedBy: 'ogo',
    bikeFormCompleted: null,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VA',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5fe5826a-b3c5-4ff9-85b9-293b32f58ea3',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léone',
    room: '564',
    reservedBy: 'vnf',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NM',
    bbIn: 'LG',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a81ae12-da57-4b6c-b89b-0af709701e7a',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Lén',
    room: '171',
    reservedBy: 'igb',
    bikeFormCompleted: null,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RI',
    bbIn: 'DH',
    timeOut: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bd4fc3c-57ed-4513-b745-23e81fadc050',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Vénus',
    room: '033',
    reservedBy: 'srt',
    bikeFormCompleted: false,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KG',
    bbIn: 'NY',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '660149cc-fd7f-4042-b61c-c1195c79a3f2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '485',
    reservedBy: 'xsm',
    bikeFormCompleted: null,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WL',
    bbIn: 'EA',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fcc472f2-d8ca-403b-9311-f4a72461c001',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '075',
    reservedBy: 'fdf',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'IF',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2118cf7-bffa-41a7-bbc6-0df8b0ae792e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séréna',
    room: '662',
    reservedBy: 'acj',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'WD',
    timeOut: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd92cd709-293f-4f0c-a96a-9b9d1c222872',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Judicaël',
    room: '162',
    reservedBy: 'gzo',
    bikeFormCompleted: true,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LE',
    bbIn: 'IK',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22673ef2-53ee-4ac4-8051-4cab3fae9ef1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '803',
    reservedBy: 'kvj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MM',
    bbIn: 'JH',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80171746-7626-48b2-a702-dd0147199ad8',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '307',
    reservedBy: 'fvt',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6b9b212-3d05-4045-b4fd-22d5e4d2c92a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '159',
    reservedBy: 'hok',
    bikeFormCompleted: false,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '15dc3710-cb5d-479d-9a7e-8b6591818c14',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gwenaëlle',
    room: '319',
    reservedBy: 'rvr',
    bikeFormCompleted: null,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OM',
    bbIn: 'GM',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4adbeae3-6b32-4093-893f-5660d1396ab1',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '320',
    reservedBy: 'ptz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'NX',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee596b85-905c-478b-a87c-635a2f91dcfc',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Béatrice',
    room: '258',
    reservedBy: 'uyw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'SV',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0c6e976-1a80-401e-80cd-83d324828275',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '206',
    reservedBy: 'ksj',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QD',
    bbIn: 'RS',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0f8e7f9-e962-4bf7-8a4f-c5ff20f9f4b5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '047',
    reservedBy: 'kbi',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'NR',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8be029f-96f6-4c2e-92bd-80cc98033ff4',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Åslög',
    room: '245',
    reservedBy: 'jlc',
    bikeFormCompleted: null,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QN',
    bbIn: 'LB',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '188050e6-ab79-4ecd-960e-691b3f669a92',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Uò',
    room: '075',
    reservedBy: 'ski',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XK',
    bbIn: 'YS',
    timeOut: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '772fce18-5e4c-4c29-b342-91a31ac5646f',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mén',
    room: '670',
    reservedBy: 'tgg',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'US',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c92ea247-1c74-4f09-b325-be09c93e43ec',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '398',
    reservedBy: 'ixi',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3bc6ba59-3d04-4f28-8d0a-df370edd8224',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Réservés',
    room: '881',
    reservedBy: 'rtl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'KA',
    timeOut: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47a4070c-3d56-45a0-84b2-ab7d5b5722c7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '690',
    reservedBy: 'zzq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TH',
    bbIn: 'HV',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1272e18b-a024-403e-bade-81cecdd586cf',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '877',
    reservedBy: 'kwy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WG',
    bbIn: 'US',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '38df2375-4506-4214-9d10-de6a65617bf7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '787',
    reservedBy: 'nbi',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NF',
    bbIn: 'MJ',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f83c0164-29a7-414d-9a2c-4c452e83f3c2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '427',
    reservedBy: 'cjb',
    bikeFormCompleted: null,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CA',
    bbIn: 'OP',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c733f07a-5077-4683-be6f-b011642b318d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Josée',
    room: '147',
    reservedBy: 'ugd',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JQ',
    bbIn: 'YI',
    timeOut: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bb3d52c0-7062-43c7-8b13-9baa0b0b497b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Dafnée',
    room: '414',
    reservedBy: 'ftj',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'VZ',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd894d742-0ce1-4d81-ad6f-48af1e236ac9',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '007',
    reservedBy: 'opq',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VD',
    bbIn: 'XE',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f1f70f74-89f4-436f-9372-eae96e3f67fa',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '355',
    reservedBy: 'uom',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OR',
    bbIn: 'CC',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c18aaec9-5b3e-4810-b71c-c3aab1861fd6',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Nuó',
    room: '843',
    reservedBy: 'jym',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'CS',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bfdde18-2719-4731-8d9f-4e1c055f7fc7',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pål',
    room: '861',
    reservedBy: 'blx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FI',
    bbIn: 'KH',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7c14d48a-8834-47cf-9414-cb7bb69c1f9d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérénice',
    room: '434',
    reservedBy: 'tov',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PK',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0117a5da-85b2-4dd0-b088-6ceb25fa3ff4',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '691',
    reservedBy: 'kqo',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TS',
    bbIn: 'SF',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a2df6e3-7327-4ef6-abf4-040f34afe2da',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '455',
    reservedBy: 'xjf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'DJ',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9045c67d-5aac-4cd2-a9d0-fb4576c56421',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '695',
    reservedBy: 'rxx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MM',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '72c305f8-457b-4c2b-bb09-7b8553530d2c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Ruì',
    room: '503',
    reservedBy: 'ldx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PZ',
    bbIn: 'DS',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fa944fea-e644-4953-b2d8-36a7e2850480',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maïlis',
    room: '124',
    reservedBy: 'kfi',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YM',
    bbIn: 'XT',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f1ed047c-deda-47c0-9f3c-ec1b204a0b07',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Irène',
    room: '819',
    reservedBy: 'wrm',
    bikeFormCompleted: null,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XM',
    bbIn: 'DG',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b473625b-80b8-4f41-b7de-d808ba2a1b85',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Aí',
    room: '814',
    reservedBy: 'ujm',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GL',
    bbIn: 'CF',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8a3cedd-28bf-4ce7-852d-3ed3e720bb6d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '564',
    reservedBy: 'spu',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XH',
    bbIn: 'WI',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c1a36ea2-2f91-4185-b1e2-7638aec66940',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Magdalène',
    room: '906',
    reservedBy: 'ffe',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'ZO',
    timeOut: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd118f90e-8194-4395-9002-3ca9870c2dac',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pénélope',
    room: '635',
    reservedBy: 'uvo',
    bikeFormCompleted: null,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RX',
    bbIn: 'KX',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f6c85eff-5177-49ba-8a84-2b8e383a9a79',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '048',
    reservedBy: 'gfh',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AH',
    bbIn: 'HV',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b60dec4b-fa7e-4ec8-8ce0-f329b7d89234',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '906',
    reservedBy: 'bnx',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QH',
    bbIn: 'JQ',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd364454a-7fb8-492c-9ba6-dd20df80b8d5',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Lài',
    room: '083',
    reservedBy: 'pna',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SE',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fe599566-bb7d-4f6f-947b-8f2beb4eebf4',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maëline',
    room: '633',
    reservedBy: 'egt',
    bikeFormCompleted: null,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'adc5aa77-ce83-40c5-93ce-bb944c56b7d2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '408',
    reservedBy: 'zui',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JF',
    bbIn: 'KK',
    timeOut: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4c05bc8-db7b-4ead-abc1-af1f35b7d882',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gérald',
    room: '705',
    reservedBy: 'psy',
    bikeFormCompleted: false,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YV',
    bbIn: 'JX',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '737b5e85-dfe0-4754-9608-870c5906aa4e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Ophélie',
    room: '739',
    reservedBy: 'aik',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BD',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '15461d3a-a444-4975-87d1-b11957d529c3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '962',
    reservedBy: 'tod',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VM',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '41fa826a-28c1-4edf-abe4-2c5ad8736303',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Desirée',
    room: '708',
    reservedBy: 'jix',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1ddd4fe1-3ec3-4b3d-9895-58013d81c2b2',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '862',
    reservedBy: 'pyj',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OV',
    bbIn: 'AG',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '575c6cc2-c18c-4c7e-a464-5b3d30dc42e1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '000',
    reservedBy: 'jzd',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DI',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70e6ac6d-67a0-4dd7-bdb6-b1d404a874eb',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '725',
    reservedBy: 'ypp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CZ',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1dcc6b72-f3aa-4d80-adeb-3533ad6a6e35',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léa',
    room: '223',
    reservedBy: 'iym',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DO',
    bbIn: 'ZG',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc8bb5bc-dc51-4b44-97d9-22d727b1410a',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Stéphanie',
    room: '774',
    reservedBy: 'umz',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YR',
    bbIn: 'MK',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40902a7c-1c61-49a7-a553-9a12385b4ac1',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '447',
    reservedBy: 'npa',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DF',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f76ff015-96e7-4fa7-a89d-de95ebb7b2b8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léana',
    room: '284',
    reservedBy: 'soo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QD',
    bbIn: 'MF',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f1dbdb93-3e8b-45a3-a960-6364a38bb2dd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '384',
    reservedBy: 'sir',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ER',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a1949298-e9b9-40e8-893f-d212961411bf',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '576',
    reservedBy: 'asf',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GZ',
    bbIn: 'DO',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6774e97-2451-4f54-82dc-4141af282c02',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëline',
    room: '891',
    reservedBy: 'jdu',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BX',
    bbIn: 'CY',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2bef8f09-f5d6-4cb3-84c4-ca7129b307ee',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélia',
    room: '186',
    reservedBy: 'tcm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SU',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0514c14-f183-480c-874c-bf8ec6f7f7aa',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Dafnée',
    room: '107',
    reservedBy: 'lwa',
    bikeFormCompleted: true,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AR',
    bbIn: 'UJ',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ceba5bb2-3e49-4547-98b0-f7d4c08e75bb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '347',
    reservedBy: 'sxi',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AA',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac8b0450-059f-4ab5-b364-f1ffae0b738e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Vénus',
    room: '207',
    reservedBy: 'qie',
    bikeFormCompleted: null,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2f6b7296-537c-4d82-9813-c84c1aae1538',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '034',
    reservedBy: 'bpn',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KO',
    bbIn: 'YK',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c75b67c-3db8-432c-a8b5-d86d553de5bb',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dà',
    room: '425',
    reservedBy: 'vxb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QW',
    bbIn: 'NT',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c035af68-ac2f-4cc5-8f66-9e9b4c579aa8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célestine',
    room: '962',
    reservedBy: 'noc',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XQ',
    bbIn: 'HZ',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b56b0acc-39be-418f-817b-ff5ef88cee0a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Aurélie',
    room: '900',
    reservedBy: 'ykc',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MQ',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7e8c8309-b4b2-4d13-8724-51fe09579924',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mégane',
    room: '106',
    reservedBy: 'nkx',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KD',
    bbIn: 'CE',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cec3ae99-536e-45ff-96c2-b5fc03b53175',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gérald',
    room: '579',
    reservedBy: 'frs',
    bikeFormCompleted: null,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZB',
    bbIn: 'JQ',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '635cc06b-1eca-4cc2-acac-b86bd7bdf596',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Noémie',
    room: '812',
    reservedBy: 'htl',
    bikeFormCompleted: true,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NV',
    bbIn: 'ZW',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '43343482-9015-4902-b01f-0e0cd1bbc85e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aimée',
    room: '176',
    reservedBy: 'bzc',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ME',
    bbIn: 'AB',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aebd65a2-1c55-4c27-b0f5-f2769b0f8e79',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Nélie',
    room: '675',
    reservedBy: 'ezr',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9f83a98-cfad-4d67-947d-07d1901812c0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '186',
    reservedBy: 'bri',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WM',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54b3d6da-6687-45ba-b735-7481703c6ec5',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélie',
    room: '662',
    reservedBy: 'ucd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ER',
    bbIn: 'CM',
    timeOut: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7faed872-6061-4eda-8eec-15ebf95c5229',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yè',
    room: '763',
    reservedBy: 'tcy',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HS',
    bbIn: 'UK',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea2744fb-8b4a-4a01-a5da-c8cc9bb23801',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aimée',
    room: '219',
    reservedBy: 'mkn',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MG',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08913890-9dc6-44bf-a350-d2afeb7acf15',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '925',
    reservedBy: 'xig',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WV',
    bbIn: 'MK',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fdb564a0-d63b-490d-88fa-5faa91a510bb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kuí',
    room: '764',
    reservedBy: 'uxt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FP',
    bbIn: 'PR',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4e33e1f-4248-43fa-af49-1c139f0ec8c5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '414',
    reservedBy: 'hrk',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HY',
    bbIn: 'GR',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f065e417-f104-4e59-8bb7-3343ee04d819',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Gérald',
    room: '471',
    reservedBy: 'aea',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OT',
    bbIn: 'NB',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4778f13e-2607-49b8-9a5b-2dd9bc072a7a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Magdalène',
    room: '180',
    reservedBy: 'ugr',
    bikeFormCompleted: null,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FD',
    bbIn: 'JC',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '16e60a44-40db-449a-8ee3-ccfec68af9ab',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Noémie',
    room: '238',
    reservedBy: 'vep',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QW',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f8937aa-3008-46fe-81be-627c12c5c641',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '383',
    reservedBy: 'hlu',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EP',
    bbIn: 'XE',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1f3f7702-fd39-466a-9821-ff30fde71952',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Eléonore',
    room: '233',
    reservedBy: 'mmn',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HM',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79d5ca12-d062-4b3b-825b-59b7cd1b2aab',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méryl',
    room: '264',
    reservedBy: 'knk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UP',
    bbIn: 'IB',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '072c28d2-0067-488c-87cc-39f5e084038b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '161',
    reservedBy: 'len',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SO',
    bbIn: 'HS',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '039c9cb0-da23-44a4-b6c2-63bea563b228',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '354',
    reservedBy: 'uzb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UL',
    bbIn: 'GA',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b8c8546-afcc-4f80-be2c-f00472e4d1d2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '435',
    reservedBy: 'iea',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HH',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2d8b053-8bbc-4d68-b88b-8de8e2d45923',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '968',
    reservedBy: 'wwf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LM',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '581ec7b2-100a-4d13-a920-b57fe319cfdd',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '613',
    reservedBy: 'ffh',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'PR',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '440f0a53-2a74-477a-aabd-ffddb5c30f12',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Annotés',
    room: '615',
    reservedBy: 'jkb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UJ',
    bbIn: 'CI',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e921c02c-a636-4dd5-8d98-76a40fd1723e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dù',
    room: '986',
    reservedBy: 'ttz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GP',
    bbIn: 'MX',
    timeOut: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4213e49-570a-4eae-8f54-9bd35d904a4c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '059',
    reservedBy: 'opg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LZ',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '701784b6-bde9-48e6-b0df-93e5b2de9ae9',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïté',
    room: '181',
    reservedBy: 'jkw',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WW',
    bbIn: 'MR',
    timeOut: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca0db2b1-fbe9-4d26-ba49-191e7326cdc1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '850',
    reservedBy: 'huz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WY',
    bbIn: 'AZ',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb5be48f-c42e-493f-a23a-6eba2382368a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '917',
    reservedBy: 'vsy',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IZ',
    bbIn: 'UU',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '73f551e7-6cec-4875-b89e-f1ac491df8f1',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Danièle',
    room: '777',
    reservedBy: 'ttp',
    bikeFormCompleted: null,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SL',
    bbIn: 'CW',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c23b5af-9acd-437c-9e46-f5bd02abbf12',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '993',
    reservedBy: 'eks',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CP',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b37d189-e719-46a0-af0b-b481df278b3a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '924',
    reservedBy: 'ewn',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'UR',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3730ed1-3856-4eb2-8b16-91d715e2f71e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mårten',
    room: '380',
    reservedBy: 'eos',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XL',
    bbIn: 'ES',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f041eb0-9dcc-4603-b6b9-e2fa33fabedb',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '539',
    reservedBy: 'eta',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WB',
    bbIn: 'QO',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5bc48027-c893-4d69-8015-a9e18dd68035',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '493',
    reservedBy: 'xos',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DP',
    bbIn: 'QE',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ad43786-1ebc-449c-a349-29e4a26c7f47',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '608',
    reservedBy: 'qov',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RV',
    bbIn: 'GO',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b209044-0830-4f42-b532-2457df38ffbd',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '326',
    reservedBy: 'jxq',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CA',
    bbIn: 'TE',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad37fc5b-5921-4cc2-960e-4134f427d1da',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maëlle',
    room: '426',
    reservedBy: 'qae',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b0dee138-5fe9-42ce-8e3c-ba64914e5451',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Dafnée',
    room: '872',
    reservedBy: 'jel',
    bikeFormCompleted: null,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XS',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7900b47c-d4b5-4f67-a152-63850fe9a39e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mylène',
    room: '708',
    reservedBy: 'lcj',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HZ',
    bbIn: 'KF',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ee2e7bf-fc99-4582-bd6d-231cb44600d4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tú',
    room: '603',
    reservedBy: 'rdr',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BW',
    bbIn: 'BG',
    timeOut: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fe75f894-bda2-40ea-8a79-577aff542728',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maï',
    room: '612',
    reservedBy: 'bjr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OA',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '847892e4-0c58-41cb-83aa-0136c2eb13f7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '811',
    reservedBy: 'chb',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NW',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96f7852d-8509-4dd5-95df-75f607a81584',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Océanne',
    room: '715',
    reservedBy: 'zrb',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RS',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b3024d0-49d7-4a6d-96e0-a44f7b9ea5f3',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-noël',
    room: '902',
    reservedBy: 'cgk',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QA',
    bbIn: 'SY',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a99cb86a-c547-40c0-88e8-0877d310dd1f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '823',
    reservedBy: 'xnd',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NK',
    bbIn: 'BO',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '72ea169a-4b84-4f63-8e5f-32fbdd8e39c2',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Yáo',
    room: '371',
    reservedBy: 'zvb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JS',
    bbIn: 'LW',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0c2bfe50-d0d5-4ae2-ab33-dff3b5eb7692',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '457',
    reservedBy: 'zfr',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZL',
    bbIn: 'OW',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4364ab36-b0b2-455a-9da9-5f7b5ad9837e',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '774',
    reservedBy: 'bxw',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SX',
    bbIn: 'RL',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6f1a90c-de40-40b6-8455-957c7a068a52',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '789',
    reservedBy: 'xyx',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CX',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9284f9f4-52b0-4949-8758-626e6dcbecbb',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mahélie',
    room: '224',
    reservedBy: 'goi',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UP',
    bbIn: 'SH',
    timeOut: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '044e17bf-c319-4eac-8ddd-831d01676a0e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '789',
    reservedBy: 'idf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5149a382-083d-4faa-9453-a0f12cfaf4eb',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Aí',
    room: '323',
    reservedBy: 'wjn',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LG',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'faccce8f-557e-4c6b-a373-f3ab52e02b6a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '549',
    reservedBy: 'etj',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CG',
    bbIn: 'SV',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '021d8890-a4b4-4730-a389-fbe5a7929229',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '940',
    reservedBy: 'aaf',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IA',
    bbIn: 'OO',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc870fdb-c3de-4a23-9d40-b6345545c1dc',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '391',
    reservedBy: 'uuk',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WQ',
    bbIn: 'IV',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '45e1d069-32f8-4a2f-a586-bcf5f608d643',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '318',
    reservedBy: 'jmn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UH',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3bb4449-2bc1-4f39-a1f1-42591474d0d3',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Aí',
    room: '741',
    reservedBy: 'ryn',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WJ',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88120de6-1dbf-4645-92d1-b36414a18ee0',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '868',
    reservedBy: 'hea',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'afd8f49d-e1fa-4565-a305-e0b56bf4d67b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '173',
    reservedBy: 'rkj',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NZ',
    bbIn: 'GW',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1573acf8-33ef-4012-b15e-7ec9e4ff4ce2',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '832',
    reservedBy: 'cej',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AT',
    bbIn: 'LJ',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1ea6a21e-7371-4f17-850d-ac9dd567f291',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Ruò',
    room: '265',
    reservedBy: 'fxw',
    bikeFormCompleted: null,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WD',
    bbIn: 'JM',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '33f5244c-cc00-4154-8a7d-ce66c1347a4f',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Jú',
    room: '674',
    reservedBy: 'jsd',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZX',
    bbIn: 'JH',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1e840eb0-38d3-408a-a05b-5e2e2c59c238',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '656',
    reservedBy: 'uof',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SB',
    bbIn: 'FY',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0105d98-3b2d-4758-a16a-9a992eab5990',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aí',
    room: '470',
    reservedBy: 'hao',
    bikeFormCompleted: true,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'AU',
    timeOut: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd562265a-9b9f-4d3e-994a-6aebf66614af',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '396',
    reservedBy: 'iuc',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UM',
    bbIn: 'AW',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '13f7a9eb-1124-4d83-bb8b-da936d0a31f4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '728',
    reservedBy: 'nga',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GD',
    bbIn: 'XQ',
    timeOut: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a1a3e18-e817-437c-8f90-aeff41d4f41a',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Pål',
    room: '251',
    reservedBy: 'uch',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IN',
    bbIn: 'GG',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90c8dc07-3d29-4f40-b92a-dd29574c59f3',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Åke',
    room: '857',
    reservedBy: 'gsn',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VE',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1be64dfc-fa0a-44d9-9149-305c01360fc9',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Céline',
    room: '895',
    reservedBy: 'emx',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZN',
    bbIn: 'CG',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '659f311f-739d-4964-8d9c-20476d77822b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séréna',
    room: '579',
    reservedBy: 'zby',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NO',
    bbIn: 'IY',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '03ef9cf6-c9a6-46f9-ba3f-7eaf1fbe811d',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '149',
    reservedBy: 'vag',
    bikeFormCompleted: true,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UW',
    bbIn: 'WA',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd9b29be3-5047-42ca-9e2e-f521acf326cd',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '812',
    reservedBy: 'fqx',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SF',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79ff1078-29ff-432d-a9e7-73df41a161c3',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Danièle',
    room: '641',
    reservedBy: 'ccd',
    bikeFormCompleted: true,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NW',
    bbIn: 'TH',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d106bf3-a23d-41e6-a22d-dcfb07164412',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Yénora',
    room: '626',
    reservedBy: 'qjy',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UA',
    bbIn: 'GZ',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd377f4b4-d54d-48af-88e6-a35b01a810f6',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Annotée',
    room: '522',
    reservedBy: 'ate',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'SH',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f5d4fc17-d7bc-4c94-9d09-da82c8f6114b',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Daphnée',
    room: '819',
    reservedBy: 'eie',
    bikeFormCompleted: null,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AF',
    bbIn: 'HN',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '554c8cf1-771f-4533-9ac4-445b706d8190',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '889',
    reservedBy: 'gzs',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SU',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '49f88bb3-f52f-4165-8693-2de1e63c06a7',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '056',
    reservedBy: 'ggq',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QI',
    bbIn: 'IL',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e124d38-65bd-4a9c-82d2-84aec9fbd126',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'André',
    room: '852',
    reservedBy: 'nzv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f43a6606-bf31-48a3-9c6a-416a0811499a',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Intéressant',
    room: '684',
    reservedBy: 'bhi',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'NM',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '407837a2-26b5-4e21-9d4f-066f5963c2d9',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Thérèse',
    room: '283',
    reservedBy: 'flw',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PI',
    bbIn: 'RI',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3d0e765-ba62-45d8-bee2-8584ed94dd2c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '816',
    reservedBy: 'yzr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'TK',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f20c58c-994b-4ebe-b0ec-80ed96e2a4aa',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '618',
    reservedBy: 'xdj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MZ',
    bbIn: 'ZM',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ff177460-45ca-4202-b0f9-e9277e50dd1c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '166',
    reservedBy: 'iur',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LB',
    bbIn: 'FK',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '565fb9ea-3081-42df-8b3a-cc46374cb645',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '672',
    reservedBy: 'ddm',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DH',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '998e6731-21fc-4ef3-9764-f69953e21046',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '853',
    reservedBy: 'bxm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '902779e4-0b45-4300-a5a9-cbb0a4b53107',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '590',
    reservedBy: 'kml',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HB',
    bbIn: 'BU',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc3e2acf-5029-49ab-b15e-5210c9e18d2a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '033',
    reservedBy: 'rek',
    bikeFormCompleted: false,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CM',
    bbIn: 'HS',
    timeOut: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39f7b4f4-a088-4cdd-9e3f-1c87ae7b3440',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélanie',
    room: '749',
    reservedBy: 'frs',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ME',
    bbIn: 'GA',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6a0c143-9ced-453b-964c-cfec64640aec',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '116',
    reservedBy: 'hrk',
    bikeFormCompleted: null,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BY',
    bbIn: 'LQ',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'af7fd05b-5f28-4f2c-8c1c-9aa0b1692988',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '445',
    reservedBy: 'afe',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IW',
    bbIn: 'TZ',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a636847f-1743-4901-9beb-bcb828971cb8',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yè',
    room: '595',
    reservedBy: 'lfq',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JD',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94f003b2-66ed-4264-9407-6920b60cbccc',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '882',
    reservedBy: 'njh',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'VW',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '51c0d006-6f3c-45cf-aa86-de2ace63186f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïté',
    room: '725',
    reservedBy: 'tcx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JP',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fea897b1-7371-437e-af06-6d59ef7b0e1e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Anaé',
    room: '676',
    reservedBy: 'srq',
    bikeFormCompleted: true,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a14a53d2-59e4-4bf4-a0eb-eb4752cc29d4',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Eloïse',
    room: '783',
    reservedBy: 'gfz',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RN',
    bbIn: 'CJ',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc8e682f-bb26-46a5-82cf-9f605c7060fe',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Börje',
    room: '475',
    reservedBy: 'iqy',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GG',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d27c302-a14b-4837-a017-c7d3a29c6658',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '879',
    reservedBy: 'trz',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YW',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '854bf413-32da-4741-bdd9-28207ff76f9a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '179',
    reservedBy: 'vse',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JN',
    bbIn: 'AA',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94e9460b-9023-4a23-8c06-87bfd06567fa',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '088',
    reservedBy: 'urx',
    bikeFormCompleted: null,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SA',
    bbIn: 'KK',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6f4e2a3-613f-4509-9248-6c127a79c38f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '451',
    reservedBy: 'hls',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a73a3f4e-dfb3-4b83-b0c3-4b70003fa7dd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aimée',
    room: '759',
    reservedBy: 'zzu',
    bikeFormCompleted: false,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RK',
    bbIn: 'UF',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce9fc169-3064-4066-987f-566ce78590c6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '905',
    reservedBy: 'iqf',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HT',
    bbIn: 'OS',
    timeOut: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f792a5d4-8297-41e2-9d03-a706d70dffe5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '635',
    reservedBy: 'ziz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OV',
    bbIn: 'YD',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa64c475-964e-44f0-bd71-c745b5cd819e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lèi',
    room: '705',
    reservedBy: 'pqh',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EQ',
    bbIn: 'YS',
    timeOut: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ff77ccc9-f413-4051-a37a-e75b9383bda2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélissandre',
    room: '716',
    reservedBy: 'ycm',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BQ',
    bbIn: 'FL',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '91c9309d-1d42-4e00-b8f0-4e8d11236a9b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '996',
    reservedBy: 'nvj',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PM',
    bbIn: 'UE',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b1231852-15f4-465b-be67-86b7f72cc1ab',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '158',
    reservedBy: 'svd',
    bikeFormCompleted: false,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LY',
    bbIn: 'RL',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3bec03b8-76cf-4dd9-b182-3fef13592593',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '529',
    reservedBy: 'ela',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JE',
    bbIn: 'PH',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '881d09d0-d975-4153-817b-1a971dcc9600',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '580',
    reservedBy: 'eyf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CF',
    bbIn: 'HL',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2db087e-cf92-4855-a91f-e35df0d00e2a',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Hélène',
    room: '252',
    reservedBy: 'fbg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WA',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2082b815-659d-4ce3-b27d-1c2838464f01',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Mélys',
    room: '022',
    reservedBy: 'ljh',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'UN',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '50e27ce3-1c3e-4cc5-bc94-4289d72fcacb',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '651',
    reservedBy: 'rdh',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PY',
    bbIn: 'LK',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eeef8d8c-ae1a-4e67-a554-ecc6c78eb011',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '049',
    reservedBy: 'gqi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OI',
    bbIn: 'DY',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ffacf35-8a73-4400-b3b0-cb7cdb8a8b53',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léandre',
    room: '767',
    reservedBy: 'zhi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZI',
    bbIn: 'EU',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30bb8278-f9aa-42f9-829b-6e82a01fd090',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léa',
    room: '632',
    reservedBy: 'wpv',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'NA',
    timeOut: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c954886b-7670-47f0-b880-720c0d1959d5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '827',
    reservedBy: 'fel',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BT',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd5b8d8b-1c37-44bb-9a85-ae86282a53f9',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Méghane',
    room: '840',
    reservedBy: 'gzv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LW',
    bbIn: 'SV',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad56e792-3b1b-4635-9df9-e84002a0d368',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '139',
    reservedBy: 'amq',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YG',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4ee690d3-2c2a-40a6-99bd-0073dfd9f857',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '532',
    reservedBy: 'ahe',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MO',
    bbIn: 'CG',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2bf3ca7-d4ee-4a7b-9309-da1452c49abd',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '819',
    reservedBy: 'qcr',
    bikeFormCompleted: false,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JK',
    bbIn: 'YH',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8cdb6454-be32-4977-acaa-ddde7d0e4b13',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '221',
    reservedBy: 'lij',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BX',
    bbIn: 'RL',
    timeOut: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '621ebaca-aecc-41f3-b025-47155cf592cd',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Néhémie',
    room: '356',
    reservedBy: 'rzw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZQ',
    bbIn: 'MC',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae142338-40f6-44ff-9551-c97a8bae0875',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Maéna',
    room: '225',
    reservedBy: 'tez',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LW',
    bbIn: 'BD',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0fe5d982-18eb-498e-812a-b308be057782',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '361',
    reservedBy: 'nkn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SU',
    bbIn: 'JZ',
    timeOut: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dddb7a78-41cb-4ee7-b135-36a8800ffacc',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Garçon',
    room: '347',
    reservedBy: 'fqh',
    bikeFormCompleted: false,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JL',
    bbIn: 'DB',
    timeOut: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b5a05b5b-c670-4fe6-84bd-bfeb22814897',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Simplifiés',
    room: '421',
    reservedBy: 'bto',
    bikeFormCompleted: true,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QW',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1b40a443-9889-4c7c-9a65-55a919dcb1ae',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '038',
    reservedBy: 'mno',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RI',
    bbIn: 'BN',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bd6e9b99-0f7e-42d1-8180-ccd4460e1724',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '270',
    reservedBy: 'hof',
    bikeFormCompleted: null,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QF',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27c54f34-587b-4765-a765-c2d0e1cd049e',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '805',
    reservedBy: 'vfa',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OB',
    bbIn: 'IV',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '694c0867-a13d-4925-9f4e-ad406737e506',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '480',
    reservedBy: 'pha',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'MG',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3628e61-ba48-4eaf-b1de-00dd6d4320f0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '466',
    reservedBy: 'lxv',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JN',
    bbIn: 'IK',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2415c22c-3bfc-47ac-b8ca-fc55c9f74164',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '606',
    reservedBy: 'hyh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GC',
    bbIn: 'UG',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3031d82c-37da-409c-8298-ace1c4b0a43e',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '194',
    reservedBy: 'gjj',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'NN',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2a9dd68-1b96-4421-8438-7d8a0e228978',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '706',
    reservedBy: 'tzi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PE',
    bbIn: 'KL',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1777e008-304c-4c79-aee5-81efc310c958',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Tán',
    room: '438',
    reservedBy: 'dro',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AX',
    bbIn: 'YP',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '545962bf-971c-4419-9c93-237c550590a1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Görel',
    room: '814',
    reservedBy: 'bum',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HQ',
    bbIn: 'SS',
    timeOut: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f261cd5f-9193-4b1f-ab78-4ea3afc5023c',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mélinda',
    room: '132',
    reservedBy: 'fmy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SW',
    bbIn: 'SI',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5724126-7c9e-4374-96a8-823c0421bfcb',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maï',
    room: '156',
    reservedBy: 'gud',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WH',
    bbIn: 'KW',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70ac356c-7af5-4bca-bce3-91a6b58cf2ec',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '411',
    reservedBy: 'dnm',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QH',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '67fc9bc0-7de5-4a5f-8988-02260b50c95d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '238',
    reservedBy: 'ijs',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZZ',
    bbIn: 'CE',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4fd23f69-8164-4935-858a-2a7f4a5df6a9',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '720',
    reservedBy: 'pvy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VO',
    bbIn: 'PV',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bbd1f9d0-8bcd-496e-862d-8d1f018bdad2',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Cinéma',
    room: '960',
    reservedBy: 'mgk',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QB',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f945e66d-e0bb-42a8-ba7c-f65ccbefb710',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '574',
    reservedBy: 'mqf',
    bikeFormCompleted: null,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IJ',
    bbIn: 'WC',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6ec12ed-5ea3-409f-95d5-9048efb6887e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '751',
    reservedBy: 'jon',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YZ',
    bbIn: 'JT',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b946e4c3-9367-45aa-b7e0-a959851eb329',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célestine',
    room: '264',
    reservedBy: 'nba',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FQ',
    bbIn: 'SN',
    timeOut: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '74749f14-f1a7-4ca8-93e7-82cb26288c39',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'André',
    room: '449',
    reservedBy: 'zrj',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'GY',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd27dc42b-60d6-48a5-a8f1-463eff1a88a8',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maï',
    room: '075',
    reservedBy: 'wzo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JD',
    bbIn: 'WR',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9464f02-8a3c-4a96-8f09-4ca87a688ea7',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Réservés',
    room: '173',
    reservedBy: 'rds',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QX',
    bbIn: 'LW',
    timeOut: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '60338cba-3649-49c8-acfa-b5dcdbc5548c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Alizée',
    room: '243',
    reservedBy: 'gvd',
    bikeFormCompleted: false,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VX',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14ba0f27-bd85-4e52-b3af-2118eec811c6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méng',
    room: '738',
    reservedBy: 'mlt',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'LU',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e51b6b7-d163-43e2-aa46-7c79212b8016',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '601',
    reservedBy: 'ahz',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '58135146-e9f2-4702-b476-0abfc32a7c4c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Clélia',
    room: '473',
    reservedBy: 'gpd',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WN',
    bbIn: 'RY',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd61b9465-a1ea-4865-83da-67d5522ad846',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '539',
    reservedBy: 'bzj',
    bikeFormCompleted: true,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DF',
    bbIn: 'OF',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8e947461-ad55-4fb6-a47d-28db2d73626f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Publicité',
    room: '445',
    reservedBy: 'rve',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HN',
    bbIn: 'ZQ',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17a4dd98-7250-47f0-8f5f-b4df79989334',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '761',
    reservedBy: 'iaj',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VU',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8a5b1d7-8f86-4650-a289-36721ad993c6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '822',
    reservedBy: 'qen',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OL',
    bbIn: 'OW',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05bef0e8-4184-4454-a182-50cfd4a1ae50',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Laurène',
    room: '139',
    reservedBy: 'udb',
    bikeFormCompleted: false,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EW',
    bbIn: 'IY',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '73fe37a6-276e-4433-bb49-b9df9290795e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '286',
    reservedBy: 'pmz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UO',
    bbIn: 'NW',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0862c1a-bc76-47d6-a35a-9c8b48fc116e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '185',
    reservedBy: 'wmz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BE',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '32b728e4-a1cd-49e1-9fa3-d8c865283405',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '496',
    reservedBy: 'plb',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UO',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b5e220f4-ebc6-4725-aa82-973b86e4971c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mélia',
    room: '590',
    reservedBy: 'jii',
    bikeFormCompleted: false,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MS',
    bbIn: 'EW',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5dd65a5e-8587-47a1-9b91-bc8263cb6847',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '330',
    reservedBy: 'frv',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RS',
    bbIn: 'WA',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d1d6288-d300-4ae1-94ff-9389e63be245',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '710',
    reservedBy: 'dyi',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TE',
    bbIn: 'JQ',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d17a467-0878-4524-8c0f-e4fda7eb29f5',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '603',
    reservedBy: 'ihs',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'UP',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb0fc8c0-0b3d-430a-97a5-b252a7c4a716',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïwenn',
    room: '185',
    reservedBy: 'bgw',
    bikeFormCompleted: true,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EY',
    bbIn: 'HA',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76704659-dbe1-4a91-b502-e2cdb6f71dbe',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Léonie',
    room: '711',
    reservedBy: 'uvw',
    bikeFormCompleted: null,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XZ',
    bbIn: 'BZ',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac44b8bb-09aa-4af7-b8aa-6ecf5c90d501',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Cloé',
    room: '734',
    reservedBy: 'mto',
    bikeFormCompleted: null,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KT',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '414c2116-1811-47ab-a2ad-f2947fb6d25c',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Cécilia',
    room: '730',
    reservedBy: 'nnx',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FU',
    bbIn: 'SS',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4885fa68-0894-4d09-8ee9-3a241c31d4f9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '094',
    reservedBy: 'pef',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FI',
    bbIn: 'HV',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd06f271-702c-4904-b26d-46256d84531b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Dà',
    room: '270',
    reservedBy: 'zwv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TV',
    bbIn: 'NX',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53058241-2932-4f7b-8ee7-5a5012ab1fe1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '384',
    reservedBy: 'uss',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FI',
    bbIn: 'OQ',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aecf1786-f5a8-488b-98bc-95adc128ddb7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '848',
    reservedBy: 'qjm',
    bikeFormCompleted: true,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QL',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '49d5bde3-af13-4ace-9f91-6ada753818de',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Jú',
    room: '477',
    reservedBy: 'pwf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'QO',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4764409a-62e4-4cc2-a540-3dae57f15812',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '057',
    reservedBy: 'dii',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SX',
    bbIn: 'AX',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '28392dbd-ec75-4677-9ab6-448e8f005cb8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Néhémie',
    room: '925',
    reservedBy: 'qnl',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f188f06f-8ec9-4dd2-9d02-5556d346af0c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '718',
    reservedBy: 'iwx',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DG',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '863fbfab-1ccb-4a21-9db5-fb9f5408ab87',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Göran',
    room: '838',
    reservedBy: 'jok',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'PO',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56e35392-8f30-48bd-875b-da87ea5bfd60',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Noëlla',
    room: '125',
    reservedBy: 'fnf',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EQ',
    bbIn: 'TS',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c2c2318-370a-40fd-af93-b80c99678e2d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Personnalisée',
    room: '835',
    reservedBy: 'lsf',
    bikeFormCompleted: true,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YM',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3d6bfe6-70be-4a75-8dbb-d9fdaed23fec',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '015',
    reservedBy: 'xbq',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AQ',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '403c783c-c7c5-40f4-84d2-482c7c0f4999',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '511',
    reservedBy: 'auw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GX',
    bbIn: 'HT',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c04c57fd-85d7-4736-90ae-9901d9b0dee6',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méryl',
    room: '916',
    reservedBy: 'sij',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OV',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9b98a85-e62e-4b3b-8400-3ccd5170ef86',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laïla',
    room: '828',
    reservedBy: 'okg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YO',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd393a8a9-1770-4c9f-8dc7-4e61781184a4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aí',
    room: '495',
    reservedBy: 'xje',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JE',
    bbIn: 'RN',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0146a2a1-77bc-482e-8798-c77b7c7cd81c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '226',
    reservedBy: 'gkr',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VC',
    bbIn: 'TH',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '058ddf3a-1456-4bfa-b2cc-82efa439876d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '353',
    reservedBy: 'lss',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JF',
    bbIn: 'WW',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7dd2c35a-de7e-4cad-a48c-bd0a0554c369',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Örjan',
    room: '892',
    reservedBy: 'vjl',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MZ',
    bbIn: 'XV',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f71e027-5c7b-4e87-aa4a-bcf18d5c6d64',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëline',
    room: '689',
    reservedBy: 'brl',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KG',
    bbIn: 'LJ',
    timeOut: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f637f9e1-d6f9-4ed9-93b9-b94138fc3699',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Anaé',
    room: '494',
    reservedBy: 'kdl',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YY',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2f0fa17-9140-4d1f-80e3-ebfcafb7041b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Bérangère',
    room: '190',
    reservedBy: 'toq',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BC',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0745f436-02fd-46e7-905e-921724583e2b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Wá',
    room: '451',
    reservedBy: 'qos',
    bikeFormCompleted: false,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QY',
    bbIn: 'SY',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9973dd44-cff8-4ab9-8405-b1c206ab2568',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '101',
    reservedBy: 'oox',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VN',
    bbIn: 'GE',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '387b9657-448c-41dc-858e-224631a4224b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maëline',
    room: '209',
    reservedBy: 'ymz',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MW',
    bbIn: 'DB',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02c9f5d7-d04d-43d7-aefb-cdd234ebcee6',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Alizée',
    room: '164',
    reservedBy: 'qej',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'TB',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'af73abb8-8c96-4bbe-99c0-3cb809e7d66c',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célestine',
    room: '819',
    reservedBy: 'sgc',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RV',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31fdf5e1-c1ad-4935-9f62-54979960de86',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Frédérique',
    room: '175',
    reservedBy: 'pqx',
    bikeFormCompleted: null,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de69309f-be14-4209-ada4-4103c1eede06',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åsa',
    room: '763',
    reservedBy: 'yon',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ES',
    bbIn: 'FW',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ecd67594-2050-4df2-b258-f0764bc4276c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Dù',
    room: '056',
    reservedBy: 'mfv',
    bikeFormCompleted: null,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AE',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94b922e9-5bc5-4e13-977f-baa76e869397',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '158',
    reservedBy: 'yen',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NI',
    bbIn: 'IV',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76b16b10-f373-4fbb-a24e-7e213453f844',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '593',
    reservedBy: 'itv',
    bikeFormCompleted: true,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'TG',
    timeOut: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0039b753-ea67-48d0-9194-f45ab6e59dd8',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '075',
    reservedBy: 'suc',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'YV',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ccc9e36b-0ff6-4661-bfb3-c0b05a26b86a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gwenaëlle',
    room: '143',
    reservedBy: 'wco',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LP',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '85891658-c0c7-4164-9aec-15a94e092da7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '879',
    reservedBy: 'cuj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MJ',
    bbIn: 'YV',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a6e475e8-59c2-4aba-9bcd-51003bb12b20',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '072',
    reservedBy: 'mog',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CM',
    bbIn: 'RM',
    timeOut: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c933038-116d-4338-8526-4f1f3dd4d9bb',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Loïc',
    room: '845',
    reservedBy: 'fpr',
    bikeFormCompleted: false,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'CU',
    timeOut: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9e6e4e4-f67a-46e2-93c5-9ab3aab50728',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Eliès',
    room: '339',
    reservedBy: 'iyb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZY',
    bbIn: 'RC',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18a9be1f-717c-43c6-93cc-5b1965fd89b5',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Esbjörn',
    room: '335',
    reservedBy: 'xah',
    bikeFormCompleted: false,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GF',
    bbIn: 'AP',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90a18569-a652-4893-8b97-45ce29930349',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '931',
    reservedBy: 'peg',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SO',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fbded523-3de6-4766-be05-24c352a7e84b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Märta',
    room: '683',
    reservedBy: 'rhx',
    bikeFormCompleted: null,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AD',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de884ba9-aef8-4e7f-b2e9-153d16260c87',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maéna',
    room: '679',
    reservedBy: 'kwl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JE',
    bbIn: 'OL',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c128073f-6878-42db-9528-1e23f4159d7e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '304',
    reservedBy: 'hzl',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IX',
    bbIn: 'OR',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4be4c8da-47db-467c-8807-5f2131fb0706',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Naëlle',
    room: '828',
    reservedBy: 'ked',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UI',
    bbIn: 'DC',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2d97391-968c-46c9-a425-1c5c43ee198a',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Dafnée',
    room: '634',
    reservedBy: 'iqj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JE',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0fff219-cec5-46f4-a6c8-8b938f91354c',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '147',
    reservedBy: 'ylt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BA',
    bbIn: 'YX',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8f849f24-f94b-476a-8161-c53acdbdbb6a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '834',
    reservedBy: 'czp',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '67853ded-7414-48d0-941a-4c5a400a221d',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Vérane',
    room: '474',
    reservedBy: 'fix',
    bikeFormCompleted: null,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HT',
    bbIn: 'DI',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '804bd5ee-ebae-4173-bf39-0a4ad609a493',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '912',
    reservedBy: 'bwz',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZF',
    bbIn: 'ER',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b8022926-9376-44c5-856a-5ced38b4fa3c',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Céline',
    room: '283',
    reservedBy: 'tpf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BY',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '48412fe5-4f84-40bb-8716-4b8f34a8b3e4',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '124',
    reservedBy: 'mun',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EX',
    bbIn: 'ZU',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '459ea063-d4e6-4af9-8251-c88428b0d0da',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Wá',
    room: '145',
    reservedBy: 'imi',
    bikeFormCompleted: true,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AM',
    bbIn: 'KT',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a0743ea-c6de-4bb4-b0da-b30d8848a363',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Vérane',
    room: '037',
    reservedBy: 'nxj',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CV',
    bbIn: 'EM',
    timeOut: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a5fa890-e4c4-4e0b-ada4-5abf49c3a066',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '462',
    reservedBy: 'eph',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ID',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d5efc98-2266-4633-8fdd-61ddb5df4508',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Estève',
    room: '390',
    reservedBy: 'piv',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BB',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd866f18-f2af-4053-87a3-393b9e803d78',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '827',
    reservedBy: 'nga',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OI',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fb9ff2fd-03b3-428e-bad6-2bfba7b97a1c',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Håkan',
    room: '469',
    reservedBy: 'mow',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AG',
    bbIn: 'JQ',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e597661-ffee-4a00-ae7d-0d03877b6c10',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '224',
    reservedBy: 'brg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SL',
    bbIn: 'WF',
    timeOut: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e19045ea-2113-4f46-899c-c77b40b59c79',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dafnée',
    room: '857',
    reservedBy: 'mvd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OX',
    bbIn: 'ZR',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90507c0b-3227-4520-a48a-7706e90eba52',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '141',
    reservedBy: 'zka',
    bikeFormCompleted: false,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZL',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf702400-7b2e-4b86-9e35-2d7fb24affee',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '112',
    reservedBy: 'dnu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AC',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '036521aa-419f-4c68-834b-739955055a1a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Maïlis',
    room: '552',
    reservedBy: 'oru',
    bikeFormCompleted: null,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad033a3d-05f1-4af1-bc7f-515767631fde',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '095',
    reservedBy: 'bwv',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZH',
    bbIn: 'GO',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef12ccbc-c0c2-42ea-b3c3-5718653fd973',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '320',
    reservedBy: 'cpx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DK',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a2d2b515-8f0e-4b00-b0af-c090dc0d479b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pénélope',
    room: '632',
    reservedBy: 'xme',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WG',
    bbIn: 'AY',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '571580b9-bd93-4237-9bc7-c6d7ad54f949',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Loïc',
    room: '334',
    reservedBy: 'kdq',
    bikeFormCompleted: null,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IX',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bd457801-cebf-4b96-8c92-6da3b0748318',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '713',
    reservedBy: 'abv',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IC',
    bbIn: 'CS',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb2cf5c4-3d71-43d9-8c77-227b1673a347',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Sélène',
    room: '907',
    reservedBy: 'hmp',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EY',
    bbIn: 'CD',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1812cccf-3609-47f5-8405-58c0fd03e4a4',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Eloïse',
    room: '532',
    reservedBy: 'xmj',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FR',
    bbIn: 'RV',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec025da4-ac9f-499c-af77-e7e57fe364bf',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Naéva',
    room: '502',
    reservedBy: 'lwn',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QC',
    bbIn: 'SF',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3b5c382a-634c-423a-9d98-a9ce54dbb5b2',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Irène',
    room: '815',
    reservedBy: 'jjv',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LE',
    bbIn: 'XE',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8cc9664-aad5-48db-866d-8d9fc18e12a5',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '321',
    reservedBy: 'xho',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1513b185-2d47-4c53-8ada-71ba58ed188e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '616',
    reservedBy: 'umz',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WD',
    bbIn: 'QV',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a6aa542-450c-40a3-8032-60075ff144e1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '484',
    reservedBy: 'trj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VS',
    bbIn: 'GA',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1685c4b0-dad9-48d5-9a58-4b1ae1a4d572',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Anaé',
    room: '746',
    reservedBy: 'jpz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'VD',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f4fa533-e061-4e07-94c3-1f9deef57026',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Märta',
    room: '092',
    reservedBy: 'agi',
    bikeFormCompleted: false,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PB',
    bbIn: 'ZR',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07924a6e-e7d7-4bf4-970f-83e41935b63c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '382',
    reservedBy: 'hal',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'JQ',
    timeOut: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '556d2913-2124-4e6a-ad15-945568465352',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Garçon',
    room: '997',
    reservedBy: 'rxh',
    bikeFormCompleted: null,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FA',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5e0a9d00-eb23-41de-86c0-a7c8cd44894e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '734',
    reservedBy: 'jni',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'ZQ',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e75cd6f1-0cb8-4ae3-b444-e1a0a37c4c5f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Céline',
    room: '235',
    reservedBy: 'qro',
    bikeFormCompleted: true,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'SZ',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b51b5d5-cef8-4954-8026-95000298988a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '049',
    reservedBy: 'asa',
    bikeFormCompleted: null,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RB',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79e47070-8344-4234-b68d-8d6c4805a639',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '792',
    reservedBy: 'lrq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KQ',
    bbIn: 'GO',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '215e9c3d-2601-438d-ae19-16ca680b76ee',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Kallisté',
    room: '619',
    reservedBy: 'fse',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XY',
    bbIn: 'MV',
    timeOut: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '029874b5-dd2c-4b29-84a1-f8826cacc021',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '306',
    reservedBy: 'woj',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'MZ',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c53fcfdd-997d-41f6-aec3-5652a3efc2db',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mégane',
    room: '287',
    reservedBy: 'klz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EJ',
    bbIn: 'CD',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cceb0702-d7bd-49ad-9f9a-6890497c8282',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Torbjörn',
    room: '993',
    reservedBy: 'lwb',
    bikeFormCompleted: null,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EZ',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e23457a6-d127-45ab-be33-358d7d2cbcb1',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Joséphine',
    room: '877',
    reservedBy: 'qtf',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DV',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40641306-1c85-442c-b034-186eda148bde',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Gérald',
    room: '395',
    reservedBy: 'npo',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UO',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c744dd0-680d-4385-8ac3-2d681b7c1ca7',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Méghane',
    room: '816',
    reservedBy: 'psb',
    bikeFormCompleted: true,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VB',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b09b6113-c49c-4b81-8b13-4e476345e45c',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Åsa',
    room: '902',
    reservedBy: 'uyk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UK',
    bbIn: 'FJ',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1613d9ab-c08a-42b7-9ba6-21cc1377a07f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '988',
    reservedBy: 'ztr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YE',
    bbIn: 'FA',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bf4d7125-83ba-4fcc-89de-c243cfced626',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Geneviève',
    room: '331',
    reservedBy: 'sql',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d08c29d-c734-4c1c-890a-54de17ab8936',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Geneviève',
    room: '793',
    reservedBy: 'uxq',
    bikeFormCompleted: true,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'WH',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9aa5f3c6-0a21-49fe-87c6-2be196407fac',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '453',
    reservedBy: 'xmq',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NZ',
    bbIn: 'EC',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1dae9856-abff-41d9-89d6-f10e1aa4ec78',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '144',
    reservedBy: 'moi',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'QT',
    timeOut: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '16ed8e5b-dfc7-4281-b5a0-b59bf7f2b392',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yè',
    room: '111',
    reservedBy: 'byu',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TC',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5aa422cb-94b2-4c8f-a50b-7490a5817b53',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Märta',
    room: '211',
    reservedBy: 'bqi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MZ',
    bbIn: 'XW',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4d62a95-654e-4d63-929f-955868dd8a29',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '490',
    reservedBy: 'pug',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TS',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2d4ed2c9-b0ae-46f6-98bf-9d52bc99f798',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '226',
    reservedBy: 'ggm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QX',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '500b20d8-d507-4ae2-8632-43d290c1854b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Loïc',
    room: '358',
    reservedBy: 'yvn',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GJ',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0a5cbb7-7a30-4f26-b373-dfb984e3c0c0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '365',
    reservedBy: 'phk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MF',
    bbIn: 'LI',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be652a4b-f1ca-4b0d-9951-eda20fc66daa',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '413',
    reservedBy: 'rpi',
    bikeFormCompleted: null,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PO',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8eb6d59d-1d77-4a13-842d-b60e472c2577',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '302',
    reservedBy: 'mcu',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JL',
    bbIn: 'DM',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2804a7a2-03b8-4dd1-b466-1962877bde1f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '611',
    reservedBy: 'dzm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UD',
    bbIn: 'FU',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da9f16f2-5d86-47e1-8860-c5b9f12bc43d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélie',
    room: '404',
    reservedBy: 'ybd',
    bikeFormCompleted: null,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IX',
    bbIn: 'OC',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94dc2594-ff14-4d53-8037-58491df0963f',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaé',
    room: '769',
    reservedBy: 'xyb',
    bikeFormCompleted: true,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'MA',
    timeOut: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8adf6ac5-2d11-410a-b874-4c539face43e',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Lài',
    room: '246',
    reservedBy: 'rmn',
    bikeFormCompleted: null,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QM',
    bbIn: 'DG',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a60fa640-bb0d-4547-af10-b4a47245090f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Renée',
    room: '816',
    reservedBy: 'zgo',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UV',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dfcada29-fc99-4501-a47b-23d6d02b854f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '865',
    reservedBy: 'hwu',
    bikeFormCompleted: false,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NJ',
    bbIn: 'WA',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '350a0e00-537c-4b6a-99e7-8e6dca3d02c1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andrée',
    room: '610',
    reservedBy: 'qro',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RC',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6d9163b-2af7-4645-9564-bc9e48c0d57c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '934',
    reservedBy: 'ajz',
    bikeFormCompleted: false,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EX',
    bbIn: 'MK',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab19e436-c0a0-4014-8b4c-0fc280f83939',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Ruò',
    room: '916',
    reservedBy: 'mtb',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZC',
    bbIn: 'WW',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3074f7c-7443-4bab-86c2-4dab8a054fdd',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '436',
    reservedBy: 'tys',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1559c31c-1fdc-4f12-9b81-c1ed8d9f16fc',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méghane',
    room: '841',
    reservedBy: 'mpw',
    bikeFormCompleted: null,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UV',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca5f520e-d632-42d8-82e8-6a149bdd65a1',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '462',
    reservedBy: 'khw',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NV',
    bbIn: 'EN',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a45ed1b-8529-414a-bf5c-a4dacd424636',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '686',
    reservedBy: 'auf',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MF',
    bbIn: 'LJ',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '542f7895-f27f-439e-949d-6048c9ebdbc8',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '604',
    reservedBy: 'umy',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ML',
    bbIn: 'RK',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d777a5f-ccd0-410b-8498-5760b44984a0',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '664',
    reservedBy: 'ndq',
    bikeFormCompleted: null,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EH',
    bbIn: 'IO',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '733e7fcd-94a3-42bc-8846-2cf0568e23d0',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '130',
    reservedBy: 'pef',
    bikeFormCompleted: null,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MM',
    bbIn: 'OH',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c406960-eea9-41d5-8ad2-d07678f12875',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Sòng',
    room: '459',
    reservedBy: 'trh',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CZ',
    bbIn: 'EM',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76634b58-163b-41d9-b6c7-0e6bd16b15bc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '479',
    reservedBy: 'iol',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'WM',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c159b001-7652-48b5-99bc-73e170188716',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léandre',
    room: '947',
    reservedBy: 'bwy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HM',
    bbIn: 'MS',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '716c0ddd-7544-4c66-a8c5-10f1e7038dca',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Illustrée',
    room: '705',
    reservedBy: 'xco',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KJ',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e021bb5-9362-4604-8f8a-3c2618b3b258',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '192',
    reservedBy: 'vsn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'VR',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd47cab1c-4f82-4b5b-ac12-cda49681a5ea',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Adélie',
    room: '155',
    reservedBy: 'ttt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QU',
    bbIn: 'AB',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aabf5c35-3b3a-4d86-959a-6a6e7c14ec56',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '551',
    reservedBy: 'wdl',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LS',
    bbIn: 'QP',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0d88c4ee-1e56-4a71-900e-0bbc0d176fee',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maëlann',
    room: '028',
    reservedBy: 'ghd',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WO',
    bbIn: 'NN',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2955220b-4700-4151-b835-5adc744eaa1c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lorène',
    room: '084',
    reservedBy: 'byu',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AI',
    bbIn: 'NU',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83e3ddad-6c2e-4cc0-8b9a-682503506878',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Alizée',
    room: '741',
    reservedBy: 'kgo',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UD',
    bbIn: 'EP',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f49a74ca-4141-4228-b1f9-94046720be8e',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Lyséa',
    room: '466',
    reservedBy: 'ffs',
    bikeFormCompleted: null,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'UE',
    timeOut: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9f59587-2f95-425b-9727-e24fbb2b5435',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Laurène',
    room: '099',
    reservedBy: 'ips',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UU',
    bbIn: 'ID',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3783eed5-9310-4204-b086-2fd8b7abeb21',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '636',
    reservedBy: 'ksd',
    bikeFormCompleted: null,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KW',
    bbIn: 'YL',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8db03dcc-a79f-4bf0-9ba2-2e35a95269bf',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëlla',
    room: '651',
    reservedBy: 'kzn',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RT',
    bbIn: 'VJ',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ef66e96-60cf-47a8-81a6-6c376530677a',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Erwéi',
    room: '641',
    reservedBy: 'yzm',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'TS',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f24a11e-90a0-4319-ac81-021af8b5b36d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Athéna',
    room: '811',
    reservedBy: 'foy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'TQ',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b72c6fc0-990e-480d-b82b-a6a50cfa0f81',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '705',
    reservedBy: 'etg',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CS',
    bbIn: 'IN',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '848374e6-0953-4270-a1e6-7ca0cd38f688',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'André',
    room: '248',
    reservedBy: 'uih',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BS',
    bbIn: 'BX',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00faa3eb-8e36-4177-afb5-5d28f156369a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlann',
    room: '513',
    reservedBy: 'fnv',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GQ',
    bbIn: 'RK',
    timeOut: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2d1635e-1851-4f67-8b92-5bde016b8eba',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Camélia',
    room: '054',
    reservedBy: 'olu',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MA',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7d04fa7e-d5ec-450d-a194-d6ee49d60cab',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '561',
    reservedBy: 'jvl',
    bikeFormCompleted: false,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XV',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c3880c5-aee2-45a1-abda-3fe6959acedc',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Simplifiés',
    room: '574',
    reservedBy: 'msa',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'LQ',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd1a6315d-c911-434f-be1d-d5e3642eb7e6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '434',
    reservedBy: 'stp',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EC',
    bbIn: 'EQ',
    timeOut: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53353d48-aaf8-435b-946f-167079794b4f',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '630',
    reservedBy: 'ofv',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YK',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd036bcf5-e9c3-468c-96da-87c5b69f143a',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Océanne',
    room: '811',
    reservedBy: 'vio',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KJ',
    bbIn: 'HZ',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '21add937-aa64-4b8e-ad91-6738484e8769',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Cloé',
    room: '023',
    reservedBy: 'wnn',
    bikeFormCompleted: false,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CR',
    bbIn: 'XO',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dd39fce5-3cac-4f23-94a4-45f5644dc0ab',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '117',
    reservedBy: 'prs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AV',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '199dc0ee-e946-476f-ad23-c7baa564fc25',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '605',
    reservedBy: 'atn',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KJ',
    bbIn: 'BZ',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b0475cf-c330-4de6-80f6-8ee6fdff19e8',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '397',
    reservedBy: 'dbf',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YC',
    bbIn: 'CI',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8fa96132-e053-4fc8-82ad-526e74ce7af0',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Håkan',
    room: '717',
    reservedBy: 'ogj',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IU',
    bbIn: 'FD',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'abdfb7fb-774a-4bdf-b98b-66f931a5afbb',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '289',
    reservedBy: 'oar',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'TU',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '635409cd-84c2-463f-b71d-e99f0c0e95c1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '568',
    reservedBy: 'ubp',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IZ',
    bbIn: 'BR',
    timeOut: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8d311692-7ea0-43a1-ac4d-ce45d61ec00b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Liè',
    room: '717',
    reservedBy: 'mpj',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RA',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b17c3441-8ec1-42d6-89a7-a96b7b8645b6',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Björn',
    room: '502',
    reservedBy: 'wua',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LJ',
    bbIn: 'MA',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47cbd623-a2ca-4c27-8ba7-4532f86cce32',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '490',
    reservedBy: 'flv',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'XK',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0d82ace-db70-4a76-a123-1da6dbb4328a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Clémentine',
    room: '495',
    reservedBy: 'uln',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SD',
    bbIn: 'DL',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3856ff9-e251-44e3-9999-92bd52443ac6',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Lén',
    room: '337',
    reservedBy: 'vgn',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XT',
    bbIn: 'TL',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89d997c4-5f52-4a20-8d91-54b2098c2efb',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '036',
    reservedBy: 'jfm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZO',
    bbIn: 'OJ',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f21c77b-642d-49d3-8e6d-049c6706f402',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '756',
    reservedBy: 'kza',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RN',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd7e90912-647b-470e-94f5-0c2256ea4533',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '362',
    reservedBy: 'aux',
    bikeFormCompleted: null,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EU',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da885044-23fb-4c6d-b5ed-f8fd25a8f326',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '040',
    reservedBy: 'ryb',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NF',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '11bb5600-b74b-49a7-821e-ca74b97ec1df',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Vérane',
    room: '050',
    reservedBy: 'boz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'WR',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34649f3d-ebf7-4c13-8139-4867daf896bb',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '866',
    reservedBy: 'duc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'CP',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00f2ca09-e90c-4821-baab-cb84f32f0c86',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vérane',
    room: '467',
    reservedBy: 'kzv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AU',
    bbIn: 'OL',
    timeOut: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9763bf9-9d07-46b8-8ca4-08952a1dccbc',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '613',
    reservedBy: 'fvs',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AI',
    bbIn: 'MD',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f7642710-b0c1-4f8a-b1a5-c7d6971be496',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '025',
    reservedBy: 'pws',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b23a1d40-3c77-4d5a-9325-acaccf6763aa',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '183',
    reservedBy: 'hfm',
    bikeFormCompleted: true,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MD',
    bbIn: 'TK',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ea58936-0cc1-4b73-88a0-4a5d0729a20c',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mélina',
    room: '517',
    reservedBy: 'gpt',
    bikeFormCompleted: null,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NY',
    bbIn: 'TW',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e943635f-4496-473d-a33e-3c88086be5d9',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '139',
    reservedBy: 'zit',
    bikeFormCompleted: false,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ND',
    bbIn: 'LR',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5e3d40ff-3d1e-47fd-9172-0cfe68793c9f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '972',
    reservedBy: 'tvc',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IB',
    bbIn: 'JH',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bb64dd85-540a-4a10-9e1f-e50c7348716f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '531',
    reservedBy: 'asa',
    bikeFormCompleted: false,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JL',
    bbIn: 'LL',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc7b3fae-5131-4892-a544-7a8b52737931',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Anaïs',
    room: '850',
    reservedBy: 'atn',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GW',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bcfef14b-8f79-45e4-9aa2-c6ba1f819584',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Andrée',
    room: '730',
    reservedBy: 'opv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'UN',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd82f86a6-0edc-405f-a423-2ddc56777535',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Séréna',
    room: '381',
    reservedBy: 'pis',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OW',
    bbIn: 'CO',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3baf70e-bac4-4bc5-9945-338ca3815ecf',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '962',
    reservedBy: 'flq',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IE',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ea7e620-5fd2-4611-9cee-cb70004a30ff',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '553',
    reservedBy: 'cah',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KY',
    bbIn: 'SF',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2d88907-1861-46e9-964c-5fdeda977eb6',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '854',
    reservedBy: 'ddj',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UV',
    bbIn: 'UY',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e8dec7b3-ced0-4f37-a9c4-ed225e1a7f80',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Léa',
    room: '654',
    reservedBy: 'dne',
    bikeFormCompleted: false,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PY',
    bbIn: 'TT',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '498bfdc6-7417-4858-b0c0-3915033b8075',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '626',
    reservedBy: 'etr',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'VY',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5a9e7501-f253-45d7-9b84-bfff5fb6e5e8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '651',
    reservedBy: 'quq',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PJ',
    bbIn: 'JA',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3a778273-ae2c-4207-9807-226f978f909e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '569',
    reservedBy: 'eai',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UU',
    bbIn: 'YJ',
    timeOut: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c9b8840-a3a1-4f69-bf35-f5c3fd7b2a6d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Åslög',
    room: '758',
    reservedBy: 'dka',
    bikeFormCompleted: null,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QD',
    bbIn: 'OB',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3db46ecc-a64e-496c-ab15-ee7bf143d19e',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Rachèle',
    room: '259',
    reservedBy: 'ctl',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FE',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b240d3b4-c271-4aee-992e-0f927b7d895c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '736',
    reservedBy: 'tox',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WG',
    bbIn: 'ZG',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'adbbb5a5-fe0f-4591-aa75-6765fbeb52fe',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '189',
    reservedBy: 'kps',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YZ',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '193ce33a-7883-4953-b700-92e732f4969c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '618',
    reservedBy: 'vhn',
    bikeFormCompleted: false,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AR',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '97ea8be1-0dc1-444d-949e-059b3e32d472',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '967',
    reservedBy: 'yyu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CG',
    bbIn: 'VF',
    timeOut: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5e8ab886-1059-476a-994c-5fa15b932b47',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '334',
    reservedBy: 'dmo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LU',
    bbIn: 'UO',
    timeOut: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '19d1971f-8492-46e2-928d-3614864e4fc3',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Géraldine',
    room: '347',
    reservedBy: 'rhd',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XJ',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dbf2cc12-cca5-4654-96a2-e740331866f4',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Almérinda',
    room: '220',
    reservedBy: 'dxi',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QA',
    bbIn: 'SQ',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18f369cf-9f23-4cd3-b3aa-270182421088',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '320',
    reservedBy: 'uiw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IH',
    bbIn: 'IL',
    timeOut: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '112d36f1-2bec-4225-871a-cd189b8f2e03',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '717',
    reservedBy: 'cxo',
    bikeFormCompleted: null,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'RK',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5dc77e92-c3ef-4075-8cb0-7945add0e198',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '707',
    reservedBy: 'xsx',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5cb0499b-ff64-4fa0-8d2e-8d38f54e40f1',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Kuí',
    room: '684',
    reservedBy: 'yvd',
    bikeFormCompleted: null,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UI',
    bbIn: 'JU',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a81de9a7-ff6e-4ffc-9cfc-c16d88989550',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Noëlla',
    room: '778',
    reservedBy: 'slz',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MQ',
    bbIn: 'KL',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a2ac418c-f1cd-44dd-b3cd-48e45e14d098',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Valérie',
    room: '145',
    reservedBy: 'znz',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DG',
    bbIn: 'EE',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17d87464-5cd4-4031-bd0f-d941a2682646',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Bécassine',
    room: '717',
    reservedBy: 'fqp',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ID',
    bbIn: 'RY',
    timeOut: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc9a37de-007c-4ed1-9f29-d87f3dd488e3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '071',
    reservedBy: 'lwf',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AF',
    bbIn: 'JD',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a16537b7-debe-4ae6-8706-5670cb96bc0b',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mélinda',
    room: '500',
    reservedBy: 'glb',
    bikeFormCompleted: false,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PH',
    bbIn: 'VR',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1978a9e6-e8e1-4014-b0c4-32c7f437c2a1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '355',
    reservedBy: 'pno',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QT',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc616527-d09a-455c-99e6-932519d11928',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laïla',
    room: '478',
    reservedBy: 'wdm',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UR',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c2f6ef48-bc1f-4f1b-8884-8ef2f187848e',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '000',
    reservedBy: 'ddo',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VM',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7907a2ad-44ab-40ad-989c-8a6280d4603b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Yénora',
    room: '535',
    reservedBy: 'hpl',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VP',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d28b813-7b96-4f9a-9f0c-f5202224bdd1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Amélie',
    room: '718',
    reservedBy: 'luv',
    bikeFormCompleted: null,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OU',
    bbIn: 'YG',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '55b9581d-f82a-4dc7-9a65-f3915bfde4fb',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '975',
    reservedBy: 'uga',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SQ',
    bbIn: 'FQ',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c896eec3-a9b0-4dd4-b943-f1f713dca6ad',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aurélie',
    room: '870',
    reservedBy: 'wlo',
    bikeFormCompleted: null,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KY',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '217dce09-a9c3-4672-b50f-28fb9db573d0',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '401',
    reservedBy: 'xtp',
    bikeFormCompleted: false,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'RU',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82c0c802-e106-4e77-9615-461f0eec2076',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Hélène',
    room: '669',
    reservedBy: 'dlu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FG',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3cdddb4-0685-4ad3-a0ac-c9651750af6f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '895',
    reservedBy: 'ulh',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DR',
    bbIn: 'HH',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad4a6c4e-4e96-4665-aa67-6acc6c9209e8',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '111',
    reservedBy: 'agg',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PV',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c22e618-eedf-4383-847e-22bdcca4d74e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andrée',
    room: '235',
    reservedBy: 'gtl',
    bikeFormCompleted: null,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XY',
    bbIn: 'LW',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8aa62aa6-208f-4d72-9bfc-989054cfffe3',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Séverine',
    room: '869',
    reservedBy: 'trd',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FO',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '692867df-d6a5-4590-add5-e38fadc67101',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '648',
    reservedBy: 'ylm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BX',
    bbIn: 'ZO',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0d989fb-ddfd-43b1-9d61-17569db38a3d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '641',
    reservedBy: 'ass',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RO',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '13d408a7-362c-4524-93cf-3bcea5642919',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '613',
    reservedBy: 'alm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FN',
    bbIn: 'BI',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee7ec859-eb8f-4b5f-9452-dcec8e9d6ebd',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '255',
    reservedBy: 'nxl',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OT',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6757b6ad-2859-4531-a9e1-09aae20a705f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '312',
    reservedBy: 'mrq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JL',
    bbIn: 'VH',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c1ee5ea0-5fd1-4868-ba19-a508aa170ba1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '223',
    reservedBy: 'got',
    bikeFormCompleted: true,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bf3a7602-ac1d-4dc0-85e5-ab7d22e8fef2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '390',
    reservedBy: 'dar',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OD',
    bbIn: 'TQ',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87acd4a5-26b3-42d5-802e-6fc68cec737e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Adélie',
    room: '478',
    reservedBy: 'dcj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BW',
    bbIn: 'BY',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fad1eba3-a817-46c5-87cd-629a75215589',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '282',
    reservedBy: 'dul',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZC',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e31e80e2-e052-4b58-9017-8d1aaab25f8e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Méghane',
    room: '912',
    reservedBy: 'bqa',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NH',
    bbIn: 'RC',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aced9e8b-63dd-427d-9fd0-f234311403bc',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '177',
    reservedBy: 'irm',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HF',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e95ebcc5-420f-4a50-9752-b210495ddb23',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '105',
    reservedBy: 'ypd',
    bikeFormCompleted: null,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PZ',
    bbIn: 'MX',
    timeOut: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3088f4f9-ae10-4ee8-a444-580edfaf8027',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kuí',
    room: '475',
    reservedBy: 'arb',
    bikeFormCompleted: false,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed52ceff-f978-4d9c-b43e-d35b2fccc537',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '555',
    reservedBy: 'yki',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PC',
    bbIn: 'XS',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8daa5b96-edcf-4c56-ab6f-d343967c0549',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lài',
    room: '181',
    reservedBy: 'das',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'JM',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a32115c-ff81-4278-8145-e3886f327dca',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '714',
    reservedBy: 'aga',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DI',
    bbIn: 'IW',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3014ab4-221c-4884-8eb4-2ad9f36016c8',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '449',
    reservedBy: 'msv',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NG',
    bbIn: 'ZE',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db7923f7-b9e4-469f-a1f5-47a02b998dd1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '534',
    reservedBy: 'xme',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IH',
    bbIn: 'KC',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3df00ac-92c0-4376-9332-d56d646b27ca',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '465',
    reservedBy: 'vgf',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UI',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f50ffd88-178f-4ab0-aa0b-39a9d41f515b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Eliès',
    room: '979',
    reservedBy: 'lzb',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WI',
    bbIn: 'EG',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '19a9aeb9-5430-478b-bc20-4376c1fbf3db',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '759',
    reservedBy: 'uiv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BC',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0526122a-5c58-45c5-b487-88def6486349',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '371',
    reservedBy: 'tjp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QQ',
    bbIn: 'AW',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6590d1d1-6113-4df8-9598-75bf81027d96',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïté',
    room: '218',
    reservedBy: 'qui',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HZ',
    bbIn: 'NN',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8e3c4797-4b79-4e6c-8214-632108ecd20e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '261',
    reservedBy: 'wcw',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HV',
    bbIn: 'FS',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '484ba0fb-6976-4f83-b57b-e3df4204e398',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '047',
    reservedBy: 'jbx',
    bikeFormCompleted: true,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SJ',
    bbIn: 'YY',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f17a810-9c3d-411e-bf67-c3486b172a50',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Torbjörn',
    room: '657',
    reservedBy: 'ezl',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LC',
    bbIn: 'TG',
    timeOut: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f355825-0f47-4496-adb2-d8fdaa6e0f2c',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Anaé',
    room: '774',
    reservedBy: 'pkz',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DM',
    bbIn: 'VO',
    timeOut: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e17c3eba-a2f3-4e24-a125-51ccc66b3d4c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Wá',
    room: '811',
    reservedBy: 'pmn',
    bikeFormCompleted: false,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QX',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b1f56a67-d104-43ec-89c7-53819fad11d2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '756',
    reservedBy: 'jol',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NU',
    bbIn: 'TZ',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e58332d4-2389-4daf-8215-d3512ed6ccf0',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '949',
    reservedBy: 'qzx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IE',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc109669-b90d-4045-97fb-fdd4f51a4aa9',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bénédicte',
    room: '038',
    reservedBy: 'nox',
    bikeFormCompleted: null,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VD',
    bbIn: 'AN',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94b6b2b2-852e-476c-abd5-34fdf0588b47',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '767',
    reservedBy: 'lor',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CF',
    bbIn: 'VH',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9baa3375-1e42-405a-b537-b6522aa6e6a4',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Annotés',
    room: '476',
    reservedBy: 'hjn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RX',
    bbIn: 'HE',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef6f1242-e0e1-4891-8ed1-3889d9c3eb9d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '571',
    reservedBy: 'gui',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WO',
    bbIn: 'ZG',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5136556e-67b9-43ba-a005-998b362ef53b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '048',
    reservedBy: 'ctk',
    bikeFormCompleted: null,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IJ',
    bbIn: 'RW',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95d149a4-7f24-457d-b93e-e3865f5b061d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '738',
    reservedBy: 'icm',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DB',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '279a18ab-cea3-4d6d-bbfd-e30767d97209',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Annotée',
    room: '517',
    reservedBy: 'swp',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DA',
    bbIn: 'AB',
    timeOut: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f746802-31b2-445e-b6d6-635ce45a37c7',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Yóu',
    room: '199',
    reservedBy: 'fab',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OK',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f7f2404-2214-4c98-8aa0-0e156ec72976',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '256',
    reservedBy: 'qin',
    bikeFormCompleted: null,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ER',
    bbIn: 'GW',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a539c12-aa7d-467b-9975-d7f723ffbc26',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Clélia',
    room: '533',
    reservedBy: 'sxg',
    bikeFormCompleted: false,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZG',
    bbIn: 'PL',
    timeOut: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4c832af-9fba-4bbf-a37d-f61cded87c0f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '782',
    reservedBy: 'efd',
    bikeFormCompleted: false,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LX',
    bbIn: 'GK',
    timeOut: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b68d2b1-1722-456c-80d0-e4e6bb3cc2da',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maéna',
    room: '165',
    reservedBy: 'gwg',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'BS',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '037276b2-2dcf-4ff1-9821-040f890b3fa2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '257',
    reservedBy: 'xef',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TV',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b0f660ee-7f49-4637-82f1-2088d336f0b7',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '859',
    reservedBy: 'vxw',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QS',
    bbIn: 'NV',
    timeOut: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46f38e5f-2413-465e-bf72-c0c34cd25275',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '029',
    reservedBy: 'izd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XW',
    bbIn: 'GF',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '52a058ca-c849-4427-ae5d-319928fcdb84',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '524',
    reservedBy: 'uvy',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OS',
    bbIn: 'AD',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '35a08ec9-b940-418d-ae56-f3dec7a8d6d1',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Erwéi',
    room: '380',
    reservedBy: 'uuq',
    bikeFormCompleted: null,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CC',
    bbIn: 'VZ',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2bcce0be-e38b-49a3-8129-dcc0351584de',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Clémence',
    room: '034',
    reservedBy: 'gig',
    bikeFormCompleted: true,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QX',
    bbIn: 'BZ',
    timeOut: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '45641705-e48d-4caa-8549-0fe1e6c2c6e2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '037',
    reservedBy: 'twl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OL',
    bbIn: 'VP',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ddbbf2a8-35cd-4433-9e6a-081360c29512',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '683',
    reservedBy: 'bis',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QA',
    bbIn: 'UL',
    timeOut: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88c24e4f-3cc8-42d1-b2dc-569a171f7fc8',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kallisté',
    room: '899',
    reservedBy: 'uyu',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KC',
    bbIn: 'YX',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b60f3945-2299-4b7d-8869-b08048214761',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mén',
    room: '422',
    reservedBy: 'xzg',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZW',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c76b8ba5-906f-44c9-b212-03a442fff85c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '148',
    reservedBy: 'yea',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DM',
    bbIn: 'RA',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '569cf399-90fe-4ce8-90fe-036b3fe0c875',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Tú',
    room: '626',
    reservedBy: 'owg',
    bikeFormCompleted: null,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VE',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3b43c69-a0f2-47c1-b2b2-e3c87bbab827',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '509',
    reservedBy: 'qzm',
    bikeFormCompleted: false,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YC',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83aaf5af-2bff-4146-bf3a-508a32f58046',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '062',
    reservedBy: 'jkd',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JV',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '769bc7f6-9d79-44d8-8803-877a2ffb2edb',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '958',
    reservedBy: 'het',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'TL',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'acd873fe-c827-4cfe-ab38-43e481e21c53',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '802',
    reservedBy: 'shg',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LL',
    bbIn: 'XE',
    timeOut: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94b93648-dce1-4c55-b8ab-e3b18a037cdc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '391',
    reservedBy: 'tql',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KH',
    bbIn: 'YP',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f9a1ad0-a685-4f8d-8e0e-e0229af27808',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '697',
    reservedBy: 'mqw',
    bikeFormCompleted: null,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HL',
    bbIn: 'WT',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '60081920-5f22-4e73-9d98-e4fffccf58bb',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëlle',
    room: '136',
    reservedBy: 'rgp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MP',
    bbIn: 'CA',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f444bbf3-fcbd-4ed8-b7cd-b9205900db36',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Simplifiés',
    room: '555',
    reservedBy: 'krt',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AV',
    bbIn: 'DX',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00222221-1210-4cf2-94b0-0ded72124102',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léane',
    room: '228',
    reservedBy: 'lct',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OS',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb1ce780-5b8f-4e3b-9a98-1d2884a19db0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '899',
    reservedBy: 'scm',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'CG',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4120fd3d-1491-4214-aaca-fffa67fb6ab5',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marie-ève',
    room: '760',
    reservedBy: 'qpb',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WW',
    bbIn: 'NG',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c522dfe2-69a3-4ffc-8f0d-c4dde98f4ecf',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '781',
    reservedBy: 'zyb',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YX',
    bbIn: 'AX',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5997ffd2-967d-4f7f-916d-b2158f3487cd',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '628',
    reservedBy: 'eel',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YW',
    bbIn: 'IB',
    timeOut: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8c6f77b-7e01-4655-9d9b-084b97cd1d04',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '388',
    reservedBy: 'mrb',
    bikeFormCompleted: null,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WA',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05046cdf-dab9-4b9d-aee7-6317977bc4cb',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Eliès',
    room: '702',
    reservedBy: 'hbc',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LS',
    bbIn: 'SR',
    timeOut: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17345473-ef9e-42d3-99ca-84ec4a41fc5e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dorothée',
    room: '922',
    reservedBy: 'pfy',
    bikeFormCompleted: null,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XW',
    bbIn: 'OG',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '99041283-e05a-4876-bf99-12b290c00836',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '050',
    reservedBy: 'qnx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GL',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '11f26ede-cf24-4d4b-9718-3dc97d156c53',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '583',
    reservedBy: 'giv',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TG',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '493e67db-f317-4a64-8c08-a7cafe5c4600',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séréna',
    room: '280',
    reservedBy: 'sff',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BF',
    bbIn: 'BA',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7db7d4c8-8ad1-4d60-ab73-f763ce329f45',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méghane',
    room: '194',
    reservedBy: 'oxc',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'NR',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46621da9-2cbc-4244-aed8-760a06ae3b8b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïté',
    room: '951',
    reservedBy: 'uiq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TR',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25306ff9-bd06-4dbb-97de-43d46ca19274',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Bérengère',
    room: '129',
    reservedBy: 'xkt',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YI',
    bbIn: 'CM',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4d0c524-2086-4159-88d3-cc8f9590fca6',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '643',
    reservedBy: 'qek',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JC',
    bbIn: 'PC',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6254157b-5125-4120-85f8-1e56c4f4d5bf',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '022',
    reservedBy: 'ork',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OT',
    bbIn: 'HZ',
    timeOut: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18ce0bd1-d266-467d-81c6-cbf07f5f7491',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '353',
    reservedBy: 'bls',
    bikeFormCompleted: true,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KD',
    bbIn: 'CC',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad8ff963-47b3-4031-823b-f74f349bbb4b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gérald',
    room: '721',
    reservedBy: 'lvg',
    bikeFormCompleted: null,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WC',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2b873f50-cd24-494c-90cc-fd3cf6fdfb6c',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Angélique',
    room: '090',
    reservedBy: 'okf',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WF',
    bbIn: 'EF',
    timeOut: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0faca574-716f-45c4-8f88-28ba0f1e9657',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '628',
    reservedBy: 'hln',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'NC',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0043f53b-4a11-497d-9e14-41bd7c08ef5d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Pò',
    room: '900',
    reservedBy: 'drv',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BD',
    bbIn: 'WO',
    timeOut: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '32f84398-4f81-4df6-80b1-140fb9da15c8',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '672',
    reservedBy: 'qny',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GZ',
    bbIn: 'XV',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd5715986-29d3-48cd-9a6b-480deb59d82c',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '948',
    reservedBy: 'kzs',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DR',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '60cd6e3e-27b6-41a6-8456-888fcdf99663',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Séréna',
    room: '865',
    reservedBy: 'qvg',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OE',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a162fccd-d62c-495c-9e27-fd16475eca09',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '810',
    reservedBy: 'run',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EH',
    bbIn: 'QM',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '581f06e0-e87f-40a7-8fda-5ddde21e17d4',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '093',
    reservedBy: 'obb',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QD',
    bbIn: 'KX',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e480d88-d6d6-46fc-bade-2467a5daeaaf',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '446',
    reservedBy: 'nvh',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'XV',
    timeOut: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '954ac1c2-cb97-441f-a67c-55869fb85c64',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Joséphine',
    room: '377',
    reservedBy: 'dca',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XQ',
    bbIn: 'CK',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8cec113-823e-49df-abe9-9acf1acdb0e6',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '681',
    reservedBy: 'mug',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NZ',
    bbIn: 'CV',
    timeOut: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a080d18-53a7-46c9-b3ed-a22578300761',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '829',
    reservedBy: 'icm',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KI',
    bbIn: 'GG',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee27b86f-ab12-4468-85cc-ea8d642393f1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '196',
    reservedBy: 'tpu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'BN',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b444fe44-17ba-42dc-9c5d-642caf8da8e1',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pénélope',
    room: '867',
    reservedBy: 'qmv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'NR',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '66e0c360-d0ca-4674-8c1e-31096fd952c4',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Loïca',
    room: '795',
    reservedBy: 'gjv',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b8be7a2c-7ebd-472d-b493-9aebb524ba32',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '598',
    reservedBy: 'dam',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BF',
    bbIn: 'BV',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34486af0-a42b-4461-903b-fd002f1d970d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '329',
    reservedBy: 'qut',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OE',
    bbIn: 'DD',
    timeOut: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b62ce9d7-1a52-42fc-9f7a-dd5f62a3cbc2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '740',
    reservedBy: 'eii',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EY',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd2178d7b-c31d-49ce-b3a9-a20694a09b89',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lèi',
    room: '294',
    reservedBy: 'rxi',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SK',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '15f2d671-7094-4c9c-80c4-5f63586370d1',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '898',
    reservedBy: 'hhl',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QL',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f437391-8a79-4d2c-b152-15da21d120fd',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '314',
    reservedBy: 'ovx',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SI',
    bbIn: 'JR',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a02f9ec-b64e-46d1-bfe8-df8d98e301ff',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '938',
    reservedBy: 'hzi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LQ',
    bbIn: 'LK',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa807010-9b72-49b7-80f7-d0a379d7a9e5',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '459',
    reservedBy: 'owd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25a6077c-5b9b-4f78-bb57-001e4d5a3b6f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Pò',
    room: '761',
    reservedBy: 'bck',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KZ',
    bbIn: 'MK',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b70dc8a6-939c-4a84-a4ee-8a8189d6a5ca',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '195',
    reservedBy: 'fdn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YL',
    bbIn: 'TH',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b67e37af-9d32-4440-8eb3-bb2237a92403',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '173',
    reservedBy: 'jgj',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WD',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f4b989f-e12c-4588-9df8-101d0054c995',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '115',
    reservedBy: 'shz',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BU',
    bbIn: 'GJ',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9de88e42-584e-48e6-81f4-ce21ecf6819a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Salomé',
    room: '320',
    reservedBy: 'lpo',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LR',
    bbIn: 'VU',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07e50d72-3bc3-4e1e-be48-5b26773adda8',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léane',
    room: '192',
    reservedBy: 'csa',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HA',
    bbIn: 'YI',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4a8f86c-d375-4099-8708-500d7b40aa61',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '756',
    reservedBy: 'cre',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HQ',
    bbIn: 'XJ',
    timeOut: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc44fba7-5869-46e4-a13e-c2b8d065159c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '544',
    reservedBy: 'ymd',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZV',
    bbIn: 'LW',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd504ac35-9056-4cc3-8039-375e3b245547',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '950',
    reservedBy: 'nky',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FT',
    bbIn: 'RX',
    timeOut: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e688c9b7-1428-464f-b9e0-05ef81f0e118',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '889',
    reservedBy: 'usg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MM',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b59c32b3-4507-4c22-891e-2a7a82e4a8b1',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Almérinda',
    room: '392',
    reservedBy: 'nfj',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GQ',
    bbIn: 'AJ',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8307c1ed-6e20-4475-a25c-0b26fb47aa7f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Adèle',
    room: '991',
    reservedBy: 'imv',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XG',
    bbIn: 'SW',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd1ff09b3-950e-435d-b409-909ae4ddb512',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '791',
    reservedBy: 'uhh',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OW',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6259ccfd-15c2-424d-a608-e17c3c07713a',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Naëlle',
    room: '974',
    reservedBy: 'lce',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a57b7175-8aae-43a4-8ed5-f912059873c9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '597',
    reservedBy: 'fme',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FF',
    bbIn: 'OS',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c44e3b24-2c5b-4732-ab2e-9b583be12dcf',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '641',
    reservedBy: 'sje',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '326bd827-a7dd-41b0-9a4e-ba703fb5da8b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '769',
    reservedBy: 'bqz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZV',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '24a72fd7-441b-4ac6-9a45-61d9daec08a0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Östen',
    room: '279',
    reservedBy: 'huy',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IA',
    bbIn: 'RE',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94af16ad-396a-4811-a083-eceb4d6356a2',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '409',
    reservedBy: 'iyf',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'MD',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '93332d69-fb63-4998-b133-a236a5f7e572',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dorothée',
    room: '352',
    reservedBy: 'ecv',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NW',
    bbIn: 'AS',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9043217-bc45-4e34-be4e-d027d25fd2c1',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Cécile',
    room: '371',
    reservedBy: 'esd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JY',
    bbIn: 'QE',
    timeOut: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9754d80-e97f-47c7-bfa2-e371de1d8a24',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-thérèse',
    room: '864',
    reservedBy: 'mqf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PQ',
    bbIn: 'ON',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f6e9b9d-7eda-46a1-ae0a-cc280bf796b3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '504',
    reservedBy: 'yrx',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FL',
    bbIn: 'WM',
    timeOut: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4797b717-a7cf-4203-917d-e7b70ded6faa',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '010',
    reservedBy: 'nxz',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BY',
    bbIn: 'EV',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c84514b-415c-4e80-bade-29565bf81f4e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Ophélie',
    room: '567',
    reservedBy: 'aew',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IQ',
    bbIn: 'ON',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b803e99-0bf4-4008-9464-e9fbf068b1d5',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '058',
    reservedBy: 'qsn',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IL',
    bbIn: 'WB',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e7d2308c-800e-4c7c-9431-496b3f61bf19',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '457',
    reservedBy: 'tau',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'RR',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89dab8ab-f2d4-4106-91aa-617c093666eb',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '305',
    reservedBy: 'row',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd845f1d1-026c-4c4a-97ac-ea734ca30005',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '746',
    reservedBy: 'qwf',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OZ',
    bbIn: 'RE',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b45b3bd4-d640-4134-9d4a-71ffec9308ed',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '241',
    reservedBy: 'urt',
    bikeFormCompleted: null,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WI',
    bbIn: 'FJ',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'feec4f90-b99e-41a4-a2f5-d3919c2328c6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '615',
    reservedBy: 'euo',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'LK',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4724384d-4d3c-46f6-aad1-b1ea621100b3',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '029',
    reservedBy: 'zqj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LF',
    bbIn: 'FQ',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3d4dfe3-21f4-487b-93df-fa9dc533ec64',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '754',
    reservedBy: 'vkk',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QZ',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9dc00f33-5b66-4f93-b039-727aa0a63123',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Nuó',
    room: '085',
    reservedBy: 'sfy',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VC',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c635d105-49d0-4123-8f16-ba6226ab2d7d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mén',
    room: '208',
    reservedBy: 'ash',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TK',
    bbIn: 'OH',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83092975-9d38-42eb-b3b7-0d90eee718b3',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Béatrice',
    room: '117',
    reservedBy: 'wqi',
    bikeFormCompleted: true,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FQ',
    bbIn: 'LZ',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1aefc5a8-c172-4f17-99b8-25e0b27dc872',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '207',
    reservedBy: 'vvq',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LP',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6f8275b-fc76-496d-9dc5-5c74680727df',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åsa',
    room: '032',
    reservedBy: 'tcq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'ET',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'baf4f08b-42af-4f99-bf0f-8f67952e2288',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Sòng',
    room: '380',
    reservedBy: 'xyd',
    bikeFormCompleted: false,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YL',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f7d18c31-1e1c-4c60-a738-8245edc07134',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Agnès',
    room: '105',
    reservedBy: 'ryk',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'QG',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '963de06e-9f51-4f26-b764-cb92824e01c4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Salomé',
    room: '670',
    reservedBy: 'wcj',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PF',
    bbIn: 'EK',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3dc2bdc8-9249-4d6d-9c72-107fe01d8900',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Laurène',
    room: '943',
    reservedBy: 'dyy',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'BK',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c473a01b-9e5d-496a-bc37-8d92f7f2dedb',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '814',
    reservedBy: 'rpl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GD',
    bbIn: 'HN',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8141b33a-2fda-45a2-8d4e-bee87cfdd618',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Stévina',
    room: '112',
    reservedBy: 'gcr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'RH',
    timeOut: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '714fe9cb-6273-4849-950a-e4ea61bf619b',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Håkan',
    room: '287',
    reservedBy: 'vww',
    bikeFormCompleted: null,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'LX',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '081ca835-c184-4559-b01f-49c4be3ccca4',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Tú',
    room: '198',
    reservedBy: 'dlf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PI',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea5095f6-302a-40a8-9160-10e0629258c5',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '880',
    reservedBy: 'nsc',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YP',
    bbIn: 'UL',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c2f19b6-5b50-45ce-accc-21caba83b07b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '660',
    reservedBy: 'bga',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BB',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3446f522-870e-4b64-8259-f0fcc8512db9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Faîtes',
    room: '467',
    reservedBy: 'efa',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JL',
    bbIn: 'CM',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f87d68b5-52bc-495d-bfd2-602b2f288cc3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '330',
    reservedBy: 'rwh',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NE',
    bbIn: 'YR',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e649a42-b36e-4bc1-92f2-469f5f5f962a',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Amélie',
    room: '195',
    reservedBy: 'fdg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8f979930-7cfa-48c7-9571-2755a3c19e20',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '863',
    reservedBy: 'nco',
    bikeFormCompleted: null,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HO',
    bbIn: 'KF',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '24c85cb5-cd45-430f-8e98-b955642cd47f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '756',
    reservedBy: 'xyq',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'LS',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b35af9ae-69d7-4d19-a7e5-2096fa74d0d1',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '421',
    reservedBy: 'lai',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AS',
    bbIn: 'TL',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30351632-d85c-4d61-93e9-f6e6dd93f4d0',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '888',
    reservedBy: 'wed',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RR',
    bbIn: 'TC',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '740c0f22-5d7f-4296-a067-7cdaba37abeb',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '303',
    reservedBy: 'xgf',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SY',
    bbIn: 'AR',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '85c8ca53-cd26-47f4-80cc-f30a934cd22a',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Léandre',
    room: '465',
    reservedBy: 'dbm',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FW',
    bbIn: 'OJ',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e17823fc-53c2-4306-9462-549b315e7672',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Cunégonde',
    room: '989',
    reservedBy: 'jvp',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SV',
    bbIn: 'ZV',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46b3d81f-a8e0-46f2-9e44-a74610dacdb7',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '791',
    reservedBy: 'ttj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'YR',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '153f65dd-c260-471e-a470-28a9f129eceb',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Naëlle',
    room: '459',
    reservedBy: 'ses',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80697dc7-58de-444f-b7a3-53bc0b8f09ef',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Zoé',
    room: '914',
    reservedBy: 'pep',
    bikeFormCompleted: null,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LJ',
    bbIn: 'KK',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9b9f48d-e30e-4477-ac95-2861f6a6fe3d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Eliès',
    room: '650',
    reservedBy: 'yru',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AH',
    bbIn: 'XJ',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ddf268b0-3c88-4f1f-8f70-7b78d8a41a84',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léandre',
    room: '759',
    reservedBy: 'uhy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LW',
    bbIn: 'DY',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f4874cf-ad76-442d-9b88-313957b8b0af',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '211',
    reservedBy: 'cbz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZC',
    bbIn: 'QD',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '455ae4a3-81ec-44a0-a621-4b0c6f18b0c8',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Kallisté',
    room: '808',
    reservedBy: 'qin',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'DL',
    timeOut: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '49b191a3-1643-48ed-8ea6-bc70113c6f17',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Jú',
    room: '942',
    reservedBy: 'ibk',
    bikeFormCompleted: null,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OH',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '550f8aaa-e174-4cd4-8ef1-f0bd86fc2142',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mélinda',
    room: '133',
    reservedBy: 'hva',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YK',
    bbIn: 'SW',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a35cdf47-1eef-460d-949e-891c16355eb7',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '054',
    reservedBy: 'aii',
    bikeFormCompleted: null,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CT',
    bbIn: 'KF',
    timeOut: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc7d8af6-65ee-44ec-94d6-dc870813a1b1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '222',
    reservedBy: 'rsj',
    bikeFormCompleted: true,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QT',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a5163051-4631-4310-80a8-6bac43fb0009',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëlla',
    room: '890',
    reservedBy: 'fmc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MH',
    bbIn: 'FF',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '63bfae7b-1b4d-4af4-937a-043c8098476b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlis',
    room: '812',
    reservedBy: 'plc',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RR',
    bbIn: 'HX',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9a43dd7-6516-435d-a690-7ee69c6c2090',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '355',
    reservedBy: 'bmp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UJ',
    bbIn: 'YY',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6dd887df-b333-4836-abe0-9d0d5285e468',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Garçon',
    room: '560',
    reservedBy: 'kqo',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TI',
    bbIn: 'ZV',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd6295e9f-2362-43bc-a53d-1a66be6c1ec4',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '704',
    reservedBy: 'ywk',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KB',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '499888f2-145d-4649-926f-571bb9f00935',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '218',
    reservedBy: 'pes',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CA',
    bbIn: 'XY',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '37ef19de-989f-4ac4-9dd0-43353a427bee',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Håkan',
    room: '404',
    reservedBy: 'paq',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EF',
    bbIn: 'VU',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '450b58ab-3fc6-490c-af6c-af0443ce260b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åsa',
    room: '690',
    reservedBy: 'jyj',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MF',
    bbIn: 'TO',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'df7ea6f4-30e1-417f-a191-fea0eed6f73e',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Sélène',
    room: '555',
    reservedBy: 'vyj',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'AS',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17b029ea-b451-41e2-b724-096433154aac',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '381',
    reservedBy: 'ryd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KN',
    bbIn: 'KF',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42d67c1e-8418-49a1-bdb5-3f022d435ca0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Kallisté',
    room: '490',
    reservedBy: 'rww',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GU',
    bbIn: 'SP',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '68ea4814-cf24-4e21-b0a2-f32a25d2a4a0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Séverine',
    room: '708',
    reservedBy: 'sgs',
    bikeFormCompleted: true,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UX',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25ab70a7-16c1-4fce-84f7-5b789676fbe2',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Dorothée',
    room: '154',
    reservedBy: 'gas',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FO',
    bbIn: 'XJ',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5a4a04c2-d291-464a-bba5-7bd6c7818f92',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '130',
    reservedBy: 'faf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VH',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fca66b68-df62-422f-8566-ae5862c8cfc3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '052',
    reservedBy: 'mmc',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DO',
    bbIn: 'QB',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5c7d2647-774b-4dbd-af3f-fd33987dd999',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '130',
    reservedBy: 'aoo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QG',
    bbIn: 'QW',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '578157e2-8f46-42c3-886e-3e640d6871b2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Alizée',
    room: '691',
    reservedBy: 'hgg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZQ',
    bbIn: 'WI',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e750a61-2c8f-4155-b920-51a15570fc32',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Cloé',
    room: '415',
    reservedBy: 'hql',
    bikeFormCompleted: false,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IX',
    bbIn: 'BQ',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '527e7598-ebc6-452b-9cd8-3819558df94c',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Véronique',
    room: '216',
    reservedBy: 'uoy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YZ',
    bbIn: 'BF',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'abd3df2a-bbdc-4822-9734-418e0867458a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '758',
    reservedBy: 'ahg',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JH',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1825f8c9-2a30-4678-8614-090793bc3a7c',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélinda',
    room: '187',
    reservedBy: 'syv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EN',
    bbIn: 'MT',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9b0b96a-305f-45de-82d5-ac84b48b2f70',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '621',
    reservedBy: 'ovo',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KH',
    bbIn: 'KS',
    timeOut: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '144a2f9a-aa72-4a31-b6ff-1351192e0e3d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Nuó',
    room: '019',
    reservedBy: 'rut',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '501f5870-fd8e-4c8a-8aa1-48e04bf8858c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '847',
    reservedBy: 'mcs',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'QD',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b8bde59-3ad6-40be-b0fb-aeb3f6bcd406',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Bénédicte',
    room: '116',
    reservedBy: 'gbw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '268db85d-1b57-41cf-bb7d-cc1d2acb9c51',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '414',
    reservedBy: 'juo',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'IX',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f0faa1a4-3afd-4b83-a14a-dd1a54ea1f1f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Nélie',
    room: '710',
    reservedBy: 'hpz',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FM',
    bbIn: 'JI',
    timeOut: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '75d8ff48-959a-47aa-be5f-3b66ea12d667',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '295',
    reservedBy: 'hyk',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EP',
    bbIn: 'LC',
    timeOut: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7fc787ea-5c94-4efd-9b81-ff6639c0179d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '513',
    reservedBy: 'mog',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'AO',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5620179f-b176-403c-919d-b13575ada532',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Laurène',
    room: '873',
    reservedBy: 'tpp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NH',
    bbIn: 'MK',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ae247fd-345b-440b-a956-ee8f5cb0f15b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '906',
    reservedBy: 'nyh',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WD',
    bbIn: 'AK',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c120fea-a611-449e-94d5-edfcb43a413e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Adèle',
    room: '596',
    reservedBy: 'tlb',
    bikeFormCompleted: null,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YC',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aa07b336-1f76-4cc6-a137-b4ef87b3e3ea',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '783',
    reservedBy: 'pok',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IT',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4ea1e861-fb38-4cd8-85f1-e149967f5c2c',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Laurène',
    room: '521',
    reservedBy: 'oyk',
    bikeFormCompleted: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FB',
    bbIn: 'CX',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cced1ff1-1829-4ffa-9dff-f09a60cf495c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Océane',
    room: '799',
    reservedBy: 'ytf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'II',
    bbIn: 'VT',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee696329-6ad1-4606-8929-d79601f927c4',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '945',
    reservedBy: 'yia',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WE',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a86d404e-f99a-4c63-860f-d78f42aa0078',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Naéva',
    room: '251',
    reservedBy: 'abb',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'RZ',
    timeOut: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bac21a52-7c0c-4aa0-883f-fc38a56fb718',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '588',
    reservedBy: 'lkk',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'WB',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '84d2b7b4-a7a2-4cb0-b2e6-0bd78238b8c4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '443',
    reservedBy: 'eqo',
    bikeFormCompleted: false,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AB',
    bbIn: 'TA',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2121289-6ddf-4bdc-b92d-c312b83298bd',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méline',
    room: '096',
    reservedBy: 'uyo',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GU',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6d2dd6f-dc8a-4aaa-b9c4-9fdec6c19184',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Séréna',
    room: '084',
    reservedBy: 'rve',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FC',
    bbIn: 'PK',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b7a41e4-5184-4810-9b53-33a3724f57f1',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '650',
    reservedBy: 'yrj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'IN',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae8618ae-0bec-49e5-b240-2c7f9e6185a3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '291',
    reservedBy: 'xyo',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NC',
    bbIn: 'PB',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34a61c71-5e65-4b73-ba79-2bfa193a051e',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Örjan',
    room: '727',
    reservedBy: 'prt',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OL',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '12a6fb41-bf52-462f-b167-4ad7870c8e11',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '906',
    reservedBy: 'yqv',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UB',
    bbIn: 'WM',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '659153eb-ed9d-4508-81ba-b3e6eff99cd8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '438',
    reservedBy: 'ren',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JM',
    bbIn: 'TA',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5fb48650-f056-4c8d-b3ae-80b022bb7c92',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '161',
    reservedBy: 'aqi',
    bikeFormCompleted: false,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CP',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '293edb09-2e7d-42e6-b841-429a51ae4a0b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Irène',
    room: '559',
    reservedBy: 'glm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YO',
    bbIn: 'PO',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0ddb3207-4aea-426a-9673-ac63c1613f5f',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Yénora',
    room: '859',
    reservedBy: 'tgr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DG',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '085436d4-eb89-4935-8dc0-1fadc8f61c18',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurène',
    room: '066',
    reservedBy: 'nkf',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SH',
    bbIn: 'BJ',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3c82d89-55ed-4400-8070-8fd4b031fe70',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '966',
    reservedBy: 'ssn',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JJ',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '670c046d-a4ca-476e-8c44-032964eed743',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '794',
    reservedBy: 'nhc',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BP',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c96696b-ff8c-44d1-9ecd-8dbbd78fb51e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océanne',
    room: '361',
    reservedBy: 'ipg',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JF',
    bbIn: 'XC',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc271867-d8c1-4014-bd83-4d6ec5f50fb0',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëlle',
    room: '949',
    reservedBy: 'xxs',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HN',
    bbIn: 'LS',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e7c78fa3-f7e0-4bf2-905c-4c136fce7d78',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méng',
    room: '942',
    reservedBy: 'mrn',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UT',
    bbIn: 'GD',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '41653f1c-08b4-4cc9-9855-9f881fb106a1',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Sélène',
    room: '618',
    reservedBy: 'jui',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'PB',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2dbb26c-2aac-4489-b9f7-1fc42bf3042c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '421',
    reservedBy: 'bpl',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LH',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c267a002-9e23-4b47-b09a-a4613983af25',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '230',
    reservedBy: 'aoi',
    bikeFormCompleted: null,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NV',
    bbIn: 'ZD',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '437cd5e4-c3e2-4b4e-8f1e-8c9c89650a8a',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Chloé',
    room: '795',
    reservedBy: 'wch',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZS',
    bbIn: 'CA',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7ca65997-7f0a-4833-b73c-1ddfa4377c3d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélia',
    room: '021',
    reservedBy: 'aat',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HZ',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fb94c347-ade7-4219-a930-16b86737bd7c',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estève',
    room: '334',
    reservedBy: 'ksf',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab8e2809-76cd-4327-9817-36df7a4856b2',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '729',
    reservedBy: 'unp',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MK',
    bbIn: 'VC',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a589d54d-b282-4572-aaff-ce643b2ea8a9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Cécile',
    room: '302',
    reservedBy: 'edf',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BY',
    bbIn: 'DZ',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '620d9538-c3b3-42a9-8286-6bf17f40222d',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëly',
    room: '380',
    reservedBy: 'voa',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZI',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8504fef-e836-4ce1-9d64-f324e022a49f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '488',
    reservedBy: 'oiv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'PA',
    timeOut: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3630780-072d-46af-b7d2-131956a555a9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '569',
    reservedBy: 'xok',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HQ',
    bbIn: 'CV',
    timeOut: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '61672d7a-17b3-45c5-9467-69ceeeedd616',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '209',
    reservedBy: 'coe',
    bikeFormCompleted: false,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TS',
    bbIn: 'TQ',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '61784be5-b2bb-4ce8-a2c5-7bc3910f22e8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '363',
    reservedBy: 'pau',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VU',
    bbIn: 'TX',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f13f7f3a-9ff4-49c6-9f77-c1402245f38c',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Personnalisée',
    room: '161',
    reservedBy: 'zbu',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ST',
    bbIn: 'GU',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b1a3b18c-652c-45c9-97f1-d26e8a6fef8f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Hélèna',
    room: '030',
    reservedBy: 'psd',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OC',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5649d276-b383-4e33-9ef4-10facef2faf8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Annotés',
    room: '380',
    reservedBy: 'pxi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BA',
    bbIn: 'KY',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4132a303-34a9-4324-9c4b-b310fe69320b',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Naëlle',
    room: '299',
    reservedBy: 'hwv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DK',
    bbIn: 'YN',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8e441467-5a62-4a8d-b1a7-1f9633ec461e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Salomé',
    room: '486',
    reservedBy: 'wiy',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AX',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ecb6d398-ae67-4554-855e-0821266e5b10',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '404',
    reservedBy: 'qde',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OE',
    bbIn: 'OW',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8d0ccd13-79c6-4660-a7cf-0d278b7a8604',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Joséphine',
    room: '721',
    reservedBy: 'twi',
    bikeFormCompleted: null,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IO',
    bbIn: 'MM',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fea82847-1bd7-4853-863c-2574819e8067',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '517',
    reservedBy: 'nbm',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'LV',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5582287d-0c49-4ee6-8aa0-bdab61623bbf',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Lorène',
    room: '171',
    reservedBy: 'hxk',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'FZ',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2f8d7c6-5b24-4a6d-a330-a09a3c374ba0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '407',
    reservedBy: 'jts',
    bikeFormCompleted: false,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CQ',
    bbIn: 'SZ',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '24b2bb5f-aee1-40ff-a5b6-b5e925bab88d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Noémie',
    room: '192',
    reservedBy: 'jpx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RR',
    bbIn: 'KC',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3ef611b8-cfee-4802-8a57-7945b7c4f25d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '904',
    reservedBy: 'ibs',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NG',
    bbIn: 'SE',
    timeOut: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9dfa8a32-44ea-47b6-944b-e9b8f772d09b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '484',
    reservedBy: 'gst',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RW',
    bbIn: 'FF',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b4a510e-c376-400e-8390-5cb9d1db1c12',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Cécilia',
    room: '264',
    reservedBy: 'kbl',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RY',
    bbIn: 'FY',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7d1f3f63-4d28-43ab-bbec-40679102d44b',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lóng',
    room: '650',
    reservedBy: 'cbl',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OD',
    bbIn: 'FL',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c38dc68-f161-40de-b6b3-d985ecbccfe9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '416',
    reservedBy: 'fka',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GT',
    bbIn: 'DG',
    timeOut: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '12df8d25-962a-4e83-98ff-1d34d312bdb9',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '182',
    reservedBy: 'pex',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XR',
    bbIn: 'OW',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd786030d-6a0d-4389-af51-111474a5bfcb',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '109',
    reservedBy: 'orm',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WR',
    bbIn: 'DP',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '558449fa-cb1f-4c69-8ca4-cc6e8d480dcf',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Miléna',
    room: '251',
    reservedBy: 'yih',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QC',
    bbIn: 'YY',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
];
