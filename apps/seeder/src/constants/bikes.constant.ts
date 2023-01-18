import { IBike } from '@omnihost/interfaces';

export const bikes: IBike[] = [
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39f7e1da-2f1a-4795-b039-da253a3b19ec',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '661',
    reservedBy: 'mgm',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XB',
    bbIn: 'EP',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87fd5bb0-5583-4fe8-9b46-4b0211d890f0',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Yóu',
    room: '944',
    reservedBy: 'brp',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DY',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1e8f276b-4809-4212-8679-2868c9758fbd',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mélia',
    room: '825',
    reservedBy: 'scj',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZS',
    bbIn: 'OO',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e86ed837-efc3-4d86-a89a-ebc21bd542f9',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '254',
    reservedBy: 'qso',
    bikeFormCompleted: null,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EU',
    bbIn: 'NL',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b7f1b41-8b1f-428b-b604-77db851476cc',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '565',
    reservedBy: 'ugu',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'TV',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1a97078b-fc5b-4d1a-a216-e4b6a83c934a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '348',
    reservedBy: 'oup',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EK',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70edef26-20c2-4e8e-a77f-1b75e8f3fcd1',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Pò',
    room: '768',
    reservedBy: 'gmc',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'RS',
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
    bikeId: 'a39144b2-3279-40f1-b2ad-7e6c1e1eba65',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '279',
    reservedBy: 'oaa',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WG',
    bbIn: 'PQ',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '691ba60c-ec0a-4a85-ae43-5401737f00d6',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Judicaël',
    room: '056',
    reservedBy: 'fuz',
    bikeFormCompleted: false,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LB',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '019565e2-51af-44b5-8760-d015e94dc92e',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '513',
    reservedBy: 'nbc',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JH',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '97b0d097-a7ae-4d6f-b6ec-ff2fdfc4170e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mégane',
    room: '712',
    reservedBy: 'bnp',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WO',
    bbIn: 'HX',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94e50708-80d5-444b-9af9-fb33cdadab9b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Zoé',
    room: '158',
    reservedBy: 'rhq',
    bikeFormCompleted: null,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'IB',
    bbIn: 'TZ',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88b50d16-4fbc-44a3-9cc3-bde8ea1837ba',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Ráo',
    room: '541',
    reservedBy: 'mdh',
    bikeFormCompleted: true,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SY',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b25bc9b0-925a-4113-b4ca-5313184d8461',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '324',
    reservedBy: 'few',
    bikeFormCompleted: false,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LT',
    bbIn: 'EV',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac54d2bf-f728-4d4e-80da-c2ebc9267c75',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '369',
    reservedBy: 'fvj',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HC',
    bbIn: 'TL',
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
    bikeId: 'e9de904d-f36a-4104-a671-4be4ad283c4a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '556',
    reservedBy: 'azh',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KC',
    bbIn: 'QA',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83aff1c9-e483-4554-bbc3-873612c4c67b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '531',
    reservedBy: 'smr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'KQ',
    bbIn: 'LJ',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc155101-e838-48f7-836f-0d25d1b5a697',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '691',
    reservedBy: 'mjh',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: null,
    bbOut: 'TO',
    bbIn: 'GU',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ffa69ee-4b52-4271-ba6b-661246e2eebc',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '385',
    reservedBy: 'lzl',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KA',
    bbIn: 'KB',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb213433-4cba-4c6d-b5ee-7e420dcb2429',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '083',
    reservedBy: 'pql',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BQ',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '246a1df4-c178-4a78-97bc-25e59a2b0887',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '229',
    reservedBy: 'vue',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MB',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c869801b-5603-4953-acfa-a6aaae82d392',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Valérie',
    room: '744',
    reservedBy: 'puq',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BL',
    bbIn: 'HX',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3cde78b6-aec9-42e4-8101-0f950d107853',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '554',
    reservedBy: 'ess',
    bikeFormCompleted: null,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'AJ',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c1752c6f-2d20-4b1a-8e04-2c49c7022b56',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Erwéi',
    room: '077',
    reservedBy: 'hcc',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NY',
    bbIn: 'JY',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2f071928-321b-41e9-886a-5dd302c48234',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '365',
    reservedBy: 'fgh',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HA',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1bbe947f-a0e7-4879-b309-dde3e8c55abe',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '209',
    reservedBy: 'hfd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'AJ',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39d75373-48dd-47a6-a3eb-471e70750047',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pénélope',
    room: '685',
    reservedBy: 'blm',
    bikeFormCompleted: true,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: null,
    bbOut: 'BD',
    bbIn: 'KA',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bbff968d-0223-4733-b780-b0bfd8ca1371',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '332',
    reservedBy: 'oni',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'PY',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22c27452-ca55-46b0-b256-6e52b9ba6939',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Régine',
    room: '542',
    reservedBy: 'uty',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VF',
    bbIn: 'EC',
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
    bikeId: '06528bdd-38d2-4e7e-96ba-02631b7fd501',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '720',
    reservedBy: 'fbu',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DF',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f939a30-c5f3-49c3-8aca-1899dd54bc16',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '270',
    reservedBy: 'agd',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UV',
    bbIn: 'XS',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ffa7e50e-67b8-4213-8360-d4d0f9b0c795',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '596',
    reservedBy: 'gmz',
    bikeFormCompleted: null,
    comments: 'Duis bibendum.',
    completedAt: null,
    bbOut: 'FM',
    bbIn: 'JJ',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8cfe7456-b223-4938-9e46-20bdb25fb535',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '342',
    reservedBy: 'dfe',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NB',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c70ad071-cb26-4118-9b3c-64d9ac7d87b1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '062',
    reservedBy: 'prx',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QZ',
    bbIn: 'XB',
    timeOut: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '71ebf7ee-4bb7-45be-9efa-db0d1b0246d2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '041',
    reservedBy: 'dqd',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FM',
    bbIn: 'ZV',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '801929ec-ec02-4bf6-a68c-4bf1db7d6d76',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Sòng',
    room: '622',
    reservedBy: 'zhg',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PP',
    bbIn: 'AP',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b4e06a2-55b8-4a02-91b8-d05c9443fb89',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '338',
    reservedBy: 'sme',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SP',
    bbIn: 'CO',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4672d697-c1d4-412a-83c7-d224046154d8',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Eugénie',
    room: '981',
    reservedBy: 'swj',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HO',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed1d107b-6ea4-42d8-89ec-eeedd4aa554d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '418',
    reservedBy: 'gsg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'XL',
    bbIn: 'NF',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27d45006-f81b-4ee2-81f7-07821bcd7d8d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '104',
    reservedBy: 'nes',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HH',
    bbIn: 'JZ',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8250555-1b7f-4c9f-a131-cb13401a3024',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '490',
    reservedBy: 'hsh',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZD',
    bbIn: 'XS',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc5060c6-3e76-4b83-be3f-c64b2a86027c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lèi',
    room: '820',
    reservedBy: 'teq',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NR',
    bbIn: 'LG',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0c4d22c-93c4-4dc4-bcce-0dafecf69daf',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Océane',
    room: '918',
    reservedBy: 'djn',
    bikeFormCompleted: true,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DA',
    bbIn: 'FW',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd893414-6063-4e5a-a5fe-d05aa06a11fe',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaé',
    room: '700',
    reservedBy: 'akq',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'XB',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36f54e32-960d-4910-afa2-239cbcb04a30',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Pål',
    room: '648',
    reservedBy: 'imr',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TM',
    bbIn: 'AT',
    timeOut: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e15cf9c9-f880-4a84-b9ee-b60c70ad23c3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Geneviève',
    room: '530',
    reservedBy: 'pcr',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JC',
    bbIn: 'KJ',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2f665c43-10ca-4744-b183-04565fd1526c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '155',
    reservedBy: 'zpx',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1ddaa89b-8ddb-4ff5-aa37-56011620736c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '225',
    reservedBy: 'ujg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SJ',
    bbIn: 'TQ',
    timeOut: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c78f5efc-e367-4c02-9b0e-7a8f827dcd8d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '199',
    reservedBy: 'onf',
    bikeFormCompleted: true,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TU',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e45aff63-f93c-4891-a00f-f97ffe74638d',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Almérinda',
    room: '346',
    reservedBy: 'cdp',
    bikeFormCompleted: false,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DU',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ed33b9b4-b802-4ae6-91be-0a7e0696731c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dà',
    room: '766',
    reservedBy: 'ydu',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CP',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7bde78bf-384b-402d-950a-60b682964510',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '705',
    reservedBy: 'zmc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OH',
    bbIn: 'VE',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '11b07aac-f8e9-4fdc-a534-3e64fca2b35b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '312',
    reservedBy: 'wam',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: null,
    bbOut: 'WT',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d450628-2cdd-46ec-bd0c-3faf6aba6164',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Célestine',
    room: '497',
    reservedBy: 'xxs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NW',
    bbIn: 'CR',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2777e21d-8326-446c-b70a-befcce9be3bd',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réjane',
    room: '176',
    reservedBy: 'kbq',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: null,
    bbOut: 'HR',
    bbIn: 'JF',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c1f74baa-4e47-4152-81e8-1dbd3c7d957e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dorothée',
    room: '486',
    reservedBy: 'fzx',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SD',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be5e4217-fce6-4f2c-89df-3a7a18cd570d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '300',
    reservedBy: 'etb',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: null,
    bbOut: 'ZE',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e740f2f-5c03-4a03-acea-fb14bc075edb',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '057',
    reservedBy: 'ext',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SX',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '045debe9-3ec5-4392-89b7-139fee96522b',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Eléa',
    room: '643',
    reservedBy: 'uja',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
    bbOut: 'WJ',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1e9bb7fd-bf4e-4007-914b-ed9d510a606d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Cloé',
    room: '991',
    reservedBy: 'rzx',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
    bbOut: 'CM',
    bbIn: 'ED',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a81cd93f-880b-4a29-9d5c-189f72127de6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '838',
    reservedBy: 'lzh',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SF',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e276939-0d4a-487a-9a4b-4fae536a3426',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Bérangère',
    room: '206',
    reservedBy: 'rxr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FB',
    bbIn: 'EC',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd6ab6177-7a3e-41da-a9b0-1afa39ec9d5b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '007',
    reservedBy: 'psy',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NO',
    bbIn: 'CJ',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd7f2fb96-314e-47a0-857e-d1ceaa6dc645',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '493',
    reservedBy: 'qiz',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'OP',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '923be6a2-7a89-44b2-bdca-220f4244be39',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '144',
    reservedBy: 'lxu',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UJ',
    bbIn: 'YP',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '28c2a1f5-5e67-43a4-be7e-9b697369fbfc',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '247',
    reservedBy: 'uus',
    bikeFormCompleted: true,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WB',
    bbIn: 'HM',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'adcb1088-00f4-4d73-8ae2-983d466aa7a6',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélys',
    room: '797',
    reservedBy: 'csy',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OC',
    bbIn: 'EP',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b464b50-b7ee-47ab-9b99-6298527e04c3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '611',
    reservedBy: 'ldi',
    bikeFormCompleted: null,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: null,
    bbOut: 'IT',
    bbIn: 'RG',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46f56ce9-f57a-436e-8bef-79b5169ad9e0',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Judicaël',
    room: '848',
    reservedBy: 'rmm',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ES',
    bbIn: 'JR',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dfb9ef23-4903-418f-862d-d6515d7cc82a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '217',
    reservedBy: 'xuq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XL',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22b2d1a9-8a02-4e08-9ce4-6f54be7c7351',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Faîtes',
    room: '674',
    reservedBy: 'imx',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: null,
    bbOut: 'RH',
    bbIn: 'KO',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cfebddb3-bfce-4a65-a59d-7d4dd4b7ae3f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '149',
    reservedBy: 'tlx',
    bikeFormCompleted: true,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DJ',
    bbIn: 'OA',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1fda415d-5a28-4280-9d4e-009b8b847c1e',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Océane',
    room: '503',
    reservedBy: 'bxo',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'IV',
    bbIn: 'OB',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '400976fc-b732-4b23-bc90-894be24d937a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '083',
    reservedBy: 'cxe',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KM',
    bbIn: 'LM',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '055b10c3-f3fc-4b9a-a9f6-66a91788b0c0',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Athéna',
    room: '244',
    reservedBy: 'kpr',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: null,
    bbOut: 'VM',
    bbIn: 'VB',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a33e8bc-e816-42c7-8969-1bd25bb41007',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Josée',
    room: '547',
    reservedBy: 'vdi',
    bikeFormCompleted: null,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: null,
    bbOut: 'AL',
    bbIn: 'CK',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c8745ae-80f1-4b9e-a7ed-7654d900a14b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '495',
    reservedBy: 'ffn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'DP',
    timeOut: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1b79d606-40cd-4d33-ac4c-4c1a2ccbb158',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '006',
    reservedBy: 'txj',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SB',
    bbIn: 'XS',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0217fa93-0e83-4bcb-8180-6af511108f22',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léandre',
    room: '020',
    reservedBy: 'cor',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UK',
    bbIn: 'MO',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e78daefc-a6e7-411e-9f36-62e04892f7fb',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Nuó',
    room: '445',
    reservedBy: 'btl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'NU',
    bbIn: 'GY',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b7f3ecc-52ab-4293-a765-ddf5aecd3df4',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '972',
    reservedBy: 'itt',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
    bbOut: 'ZD',
    bbIn: 'FY',
    timeOut: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90f202ba-3d35-4e62-a1f5-6df4a344fcb8',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Adèle',
    room: '242',
    reservedBy: 'omp',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KM',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0be1287c-49fe-4c78-b296-f83359879c38',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '536',
    reservedBy: 'qfv',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: null,
    bbOut: 'EK',
    bbIn: 'PN',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9fb7a42b-0de5-4bd0-bbbb-5d70bb77f0bf',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Lauréna',
    room: '944',
    reservedBy: 'qaw',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'EC',
    timeOut: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8136b89e-5c58-4d13-9fe7-a6e2cf1f85cb',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '785',
    reservedBy: 'ylv',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AV',
    bbIn: 'MB',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5c9368af-001e-4800-abf7-0a944308ac38',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '874',
    reservedBy: 'olv',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EC',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '28f85f2d-99b0-4912-a488-c66f0798e48b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Annotés',
    room: '227',
    reservedBy: 'nbe',
    bikeFormCompleted: true,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: null,
    bbOut: 'DP',
    bbIn: 'RS',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '623b9ed8-6e6b-47fd-beeb-12017a932b64',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Tán',
    room: '659',
    reservedBy: 'ymo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XX',
    bbIn: 'LX',
    timeOut: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e795de2-9010-48fd-bc72-97b2e2ed191e',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Zhì',
    room: '377',
    reservedBy: 'xww',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GZ',
    bbIn: 'HH',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f629c093-b131-4cf5-9895-991050ac6585',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '367',
    reservedBy: 'jss',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OM',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '836aefe1-bb14-4128-8324-125b765ae528',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '771',
    reservedBy: 'zeo',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
    bbOut: 'CN',
    bbIn: 'JW',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f282ed8-74c8-4adc-a4a4-07882d7a576a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Yú',
    room: '035',
    reservedBy: 'iqz',
    bikeFormCompleted: false,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'RB',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd35ed5b3-46b7-4a9f-8bec-e5ed33082fe3',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '336',
    reservedBy: 'qqn',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
    bbOut: 'QS',
    bbIn: 'YV',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c77bfde-f0b7-4405-964b-8d2e86eadb2f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Magdalène',
    room: '169',
    reservedBy: 'nav',
    bikeFormCompleted: true,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VR',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47ac9361-e581-4cab-9adf-ff4008d368f2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léone',
    room: '527',
    reservedBy: 'rtu',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AE',
    bbIn: 'KC',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aefdd867-8396-4008-94e1-89996aa69ad8',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Laurène',
    room: '465',
    reservedBy: 'abb',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'JA',
    bbIn: 'TC',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a683849-a4f6-4cf9-bd07-eb5fb0f2b7e4',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '420',
    reservedBy: 'akv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IT',
    bbIn: 'EP',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4e947e9-df2a-4cd5-9d31-f6fd0451c130',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Chloé',
    room: '902',
    reservedBy: 'xnd',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'DI',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b629aa26-4509-48cc-8ce0-6aeb926a782e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '804',
    reservedBy: 'sup',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'ZE',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '24639058-67b6-4a89-a9ce-1cb02af2b7a1',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séréna',
    room: '087',
    reservedBy: 'ayu',
    bikeFormCompleted: false,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HO',
    bbIn: 'OK',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '985f1695-875d-40fe-9e48-a0e146883bb2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '990',
    reservedBy: 'cpi',
    bikeFormCompleted: null,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: null,
    bbOut: 'MT',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'efb9c922-43ba-4de2-971a-47ab42170c23',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '305',
    reservedBy: 'izu',
    bikeFormCompleted: true,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VZ',
    bbIn: 'UP',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1003dc7e-466b-4064-a5f4-d6a220286d20',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Pélagie',
    room: '810',
    reservedBy: 'vsl',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'KM',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e421e96-bd29-4db0-acfe-733b89856475',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '133',
    reservedBy: 'pos',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'OX',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2d34d74-928d-48a3-8307-60a019b2678e',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '069',
    reservedBy: 'ekv',
    bikeFormCompleted: true,
    comments: 'Etiam justo.',
    completedAt: null,
    bbOut: 'HJ',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09d60510-b34d-47ec-8304-8d9e057b68bf',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '664',
    reservedBy: 'oay',
    bikeFormCompleted: null,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SI',
    bbIn: 'GM',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef41b3a2-2f4a-4452-a78d-821a34c3eb3f',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Amélie',
    room: '584',
    reservedBy: 'lom',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: null,
    bbOut: 'EF',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8a1884d-a3e0-4f1c-9745-ad70949c518e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '115',
    reservedBy: 'fkh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UH',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3d825317-3edf-4141-98b9-b56f91199115',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méng',
    room: '768',
    reservedBy: 'fds',
    bikeFormCompleted: true,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea741216-5f63-4f45-977f-a149c6e598eb',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Hélène',
    room: '145',
    reservedBy: 'jsl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'NE',
    bbIn: 'XQ',
    timeOut: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ad97183-6160-4358-b654-7ad34a44a541',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pò',
    room: '806',
    reservedBy: 'bau',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MU',
    bbIn: 'FD',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bed04bef-a6da-4460-81ea-a88591761835',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Erwéi',
    room: '307',
    reservedBy: 'vvj',
    bikeFormCompleted: null,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FR',
    bbIn: 'VU',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14155619-64f6-4b28-bb9c-6c0c6755e957',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '939',
    reservedBy: 'ukg',
    bikeFormCompleted: null,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: null,
    bbOut: 'WQ',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '652ba349-6b4d-4489-af20-61bdfc3dbc08',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Bérengère',
    room: '134',
    reservedBy: 'mza',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: null,
    bbOut: 'QB',
    bbIn: 'FI',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '271346ea-c8a2-4d67-a254-4d80e68cb5c1',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Yóu',
    room: '421',
    reservedBy: 'mky',
    bikeFormCompleted: true,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'BU',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9cce94a0-1dc2-4420-b2bc-613939dcb890',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '316',
    reservedBy: 'mus',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'JS',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1b1818d6-0e99-4c58-886c-8deb4651b749',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Mà',
    room: '777',
    reservedBy: 'huh',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DD',
    bbIn: 'LK',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22abd0f3-ad98-44e3-b37a-e40d49b8663d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '210',
    reservedBy: 'amk',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RO',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1a11b769-94e8-4f36-9a2d-879e3bfb031a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '523',
    reservedBy: 'jhu',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'EC',
    bbIn: 'SS',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00560895-21bf-46f6-a8b4-13bd37d70039',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Bérénice',
    room: '226',
    reservedBy: 'aad',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NI',
    bbIn: 'SK',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e530b1c6-23a2-478c-9bf4-1b88aa17a3a3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '229',
    reservedBy: 'upm',
    bikeFormCompleted: false,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: null,
    bbOut: 'JX',
    bbIn: 'VB',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '580dd20a-dcb2-4342-8b89-848215a0c1d4',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ráo',
    room: '597',
    reservedBy: 'wzm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CB',
    bbIn: 'JX',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9288a9b7-85ab-4ad2-b671-785b6735c0b7',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Miléna',
    room: '836',
    reservedBy: 'val',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VT',
    bbIn: 'NT',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1891e007-7acc-4ad4-b25b-8a7ac6c3390f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '513',
    reservedBy: 'qux',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: null,
    bbOut: 'GA',
    bbIn: 'FO',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4935aaee-f15c-417d-99f3-28aad06c525e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '405',
    reservedBy: 'two',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QU',
    bbIn: 'QW',
    timeOut: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bd586462-1c1c-48dd-80a5-68437b29e8dc',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '924',
    reservedBy: 'pov',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AU',
    bbIn: 'HE',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db76710a-d7d7-4ded-92aa-014035d99868',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '408',
    reservedBy: 'mpa',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FD',
    bbIn: 'GF',
    timeOut: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd9e9b975-fe00-44c3-8c87-bfe8c9c33722',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Angèle',
    room: '577',
    reservedBy: 'cys',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HQ',
    bbIn: 'DH',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5aaf5d70-3740-4ea9-92fb-9e4effeb38c1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '259',
    reservedBy: 'egy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'GD',
    bbIn: 'YE',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7c4136d9-98c1-44ab-94d6-263d30cfd031',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '168',
    reservedBy: 'zra',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'NX',
    bbIn: 'WN',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6216a97-7448-4738-bd1d-3c00fe65973f',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dù',
    room: '533',
    reservedBy: 'phz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XC',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '188fe29f-78fd-4303-810e-7bfc98f9c356',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '273',
    reservedBy: 'oca',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IW',
    bbIn: 'VJ',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4340fbfd-51a2-4479-a654-de52e3bd3fa2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dà',
    room: '668',
    reservedBy: 'ntj',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GW',
    bbIn: 'HV',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '73e1da80-ee75-4c2e-98b4-36eeb7cc7823',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Régine',
    room: '881',
    reservedBy: 'gwx',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
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
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e32ca0d-2667-45b9-81ad-f11553b15fbf',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '086',
    reservedBy: 'ile',
    bikeFormCompleted: null,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'SQ',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '95759ba3-7e40-4083-abac-7d59eb776d46',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Kévina',
    room: '755',
    reservedBy: 'uwo',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: null,
    bbOut: 'XX',
    bbIn: 'DH',
    timeOut: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30d9eeae-c874-4446-aea2-23a89c47a6ce',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Alizée',
    room: '507',
    reservedBy: 'bes',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: null,
    bbOut: 'FF',
    bbIn: 'GR',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9ab5d517-82cd-4e31-826b-62ba17a3a97b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '186',
    reservedBy: 'ish',
    bikeFormCompleted: true,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UT',
    bbIn: 'QT',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bdd63f37-a095-425d-b181-fd6d8f3c3921',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '250',
    reservedBy: 'ufi',
    bikeFormCompleted: true,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KF',
    bbIn: 'EW',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e282d870-054d-4041-9929-4bf0d063d17a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurène',
    room: '391',
    reservedBy: 'efv',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QA',
    bbIn: 'XB',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c409784e-4332-49a9-8745-1e8fce0eda91',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Chloé',
    room: '929',
    reservedBy: 'cox',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KD',
    bbIn: 'QG',
    timeOut: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9da1ea56-aab3-4145-9917-a9e1bcd80500',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Clémence',
    room: '048',
    reservedBy: 'zoj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XB',
    bbIn: 'XT',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0499a8b8-d86c-4979-b424-c8b4b602fe52',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '493',
    reservedBy: 'ahj',
    bikeFormCompleted: false,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'DX',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '931f427a-6a43-4a65-9102-c31e4a86ceed',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maëlle',
    room: '864',
    reservedBy: 'ffk',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BI',
    bbIn: 'KC',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '04c1148f-ed6c-465e-83b1-ac3340c7c3fd',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Chloé',
    room: '226',
    reservedBy: 'fws',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: null,
    bbOut: 'QD',
    bbIn: 'WA',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc513b72-bbdb-4d69-a7e7-32d31a633180',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ráo',
    room: '621',
    reservedBy: 'bxc',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JK',
    bbIn: 'WY',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5e3d393e-17d6-4f3b-ad5d-ca9d676702f3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '183',
    reservedBy: 'djl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QH',
    bbIn: 'HW',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f1d9857-b5ac-45b5-972d-b1dd4510e409',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '807',
    reservedBy: 'jel',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'RH',
    bbIn: 'GZ',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8e716d6f-4fed-465c-ae24-71ef5ae3e49b',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '745',
    reservedBy: 'xiu',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UT',
    bbIn: 'NI',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5229aff4-d5a2-4ffd-bee4-3550d90bde9e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '999',
    reservedBy: 'mzr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SI',
    bbIn: 'BA',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9842a671-c6a4-464f-a62e-9b2a0ed0d4a5',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '812',
    reservedBy: 'kyr',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UZ',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7e5bc100-56a4-436f-937f-dfc13fdc90f3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maéna',
    room: '884',
    reservedBy: 'iyq',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: null,
    bbOut: 'GT',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '319d442d-2f48-4f7e-8e2a-969026ee5a1f',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '436',
    reservedBy: 'qrb',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XU',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96e44160-5de0-440d-8af7-c27f5edf32aa',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '845',
    reservedBy: 'pye',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZA',
    bbIn: 'SO',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2704787d-da12-4997-8e39-151125f2c248',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '730',
    reservedBy: 'bnj',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EO',
    bbIn: 'MB',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9ffeb4ba-6e58-4995-83ae-e55843d60fbb',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Desirée',
    room: '644',
    reservedBy: 'wth',
    bikeFormCompleted: null,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CD',
    bbIn: 'YF',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '04d7654e-99c3-4ca2-9412-2c716e73d2db',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '835',
    reservedBy: 'yhh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UL',
    bbIn: 'YS',
    timeOut: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b65bf39-371b-4967-81b7-f8578e5d5ca2',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Björn',
    room: '159',
    reservedBy: 'nxv',
    bikeFormCompleted: true,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: null,
    bbOut: 'AN',
    bbIn: 'VC',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9bc591cb-cde4-4901-9c97-6c296f2c379d',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '587',
    reservedBy: 'mwd',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'DP',
    bbIn: 'QY',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ff6b09f1-7661-4aeb-aa40-6b59aa3a39c7',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léana',
    room: '590',
    reservedBy: 'gxb',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QY',
    bbIn: 'WR',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3b06d9c-733b-43f2-8a49-dc160e10eb51',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '625',
    reservedBy: 'qrn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'QJ',
    bbIn: 'UM',
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
    bikeId: 'a2c2ab09-9215-41d8-8113-924074fe6977',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '585',
    reservedBy: 'mnh',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UE',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '965e57bd-8192-46a1-bf22-1cf6ff834399',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '091',
    reservedBy: 'ttf',
    bikeFormCompleted: true,
    comments: 'Aenean lectus.',
    completedAt: null,
    bbOut: 'SC',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da11c20c-516b-4fa9-bc20-30455f2a8ebf',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '938',
    reservedBy: 'eeh',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RS',
    bbIn: 'MV',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b03863ce-19e2-4ddd-9978-0089918e9fb4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '740',
    reservedBy: 'vqq',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GF',
    bbIn: 'RZ',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dbab6203-c567-48d4-8fca-109ebce3e6fe',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Amélie',
    room: '315',
    reservedBy: 'zts',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: null,
    bbOut: 'PS',
    bbIn: 'BY',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a572deb4-d7da-44e4-92d8-9d7dc505e5ec',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '097',
    reservedBy: 'eiw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QH',
    bbIn: 'CZ',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0a02041-186c-436e-89d0-9048a3fe4692',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Magdalène',
    room: '753',
    reservedBy: 'ztc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'VP',
    bbIn: 'VR',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8ba54ad-eb5f-4f30-b0ab-3643f61da2af',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '957',
    reservedBy: 'wiv',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36e39a03-cc2f-4323-930e-5b69be7f6a2f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Rébecca',
    room: '320',
    reservedBy: 'qbj',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QS',
    bbIn: 'QX',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '949ac471-15a0-4fec-b1f2-4eba6d3704ce',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '568',
    reservedBy: 'kpi',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GG',
    bbIn: 'YC',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'beb099d3-b9ce-4f92-a40c-33940ba3d558',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mahélie',
    room: '654',
    reservedBy: 'wns',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JV',
    bbIn: 'YR',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5686b6a5-3acf-48ac-9e11-af694f84cbb6',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '198',
    reservedBy: 'reu',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BC',
    bbIn: 'SS',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87e2b4e1-9fc3-4405-9552-3e46c00d51c4',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Léa',
    room: '076',
    reservedBy: 'xxj',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YX',
    bbIn: 'HJ',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '53b781bc-ab04-4cc6-8cd7-78c367d0be3c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Océanne',
    room: '571',
    reservedBy: 'rod',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'DQ',
    bbIn: 'ZS',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d5c65b6-3eb4-4c08-96a8-f56e02d90998',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Lài',
    room: '816',
    reservedBy: 'xpq',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: null,
    bbOut: 'LV',
    bbIn: 'ON',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9d91f9e5-a0aa-4e58-8f06-25c202bc03a6',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '686',
    reservedBy: 'hoh',
    bikeFormCompleted: false,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QI',
    bbIn: 'YP',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f14a342e-4198-4a09-9249-276adf91508f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Dù',
    room: '026',
    reservedBy: 'sxr',
    bikeFormCompleted: false,
    comments: 'Proin eu mi.',
    completedAt: null,
    bbOut: 'RN',
    bbIn: 'DA',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '62d8c1aa-369a-4b14-9b1d-3697552322c4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Loïca',
    room: '118',
    reservedBy: 'cik',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'AA',
    timeOut: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e200e75c-3a1d-47e3-8d05-c1e9b5672d5b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Nuó',
    room: '996',
    reservedBy: 'img',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: null,
    bbOut: 'GI',
    bbIn: 'RD',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e3183f5-9cbb-48ec-b265-2b38e792d0c6',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Eloïse',
    room: '164',
    reservedBy: 'kzy',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3658af47-c9f5-4563-b4b7-b6538f5819ed',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andrée',
    room: '454',
    reservedBy: 'miu',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WL',
    bbIn: 'HV',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46f5bd33-c7fa-4e1e-93b0-11015b7a0382',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Stévina',
    room: '203',
    reservedBy: 'beo',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'HU',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01a385f5-9bf2-4878-b018-f436a58782dc',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '578',
    reservedBy: 'dmy',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'ED',
    bbIn: 'HQ',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02144130-a3fe-4e90-88ca-d59700ac0aec',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Måns',
    room: '594',
    reservedBy: 'zbn',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LI',
    bbIn: 'RM',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '257087ee-2e4e-4f6e-9a7a-1924a325283e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méline',
    room: '693',
    reservedBy: 'kyq',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RV',
    bbIn: 'DA',
    timeOut: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c4cee93-031a-4fd6-94ae-19ce675cb5ba',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Lyséa',
    room: '836',
    reservedBy: 'buq',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SM',
    bbIn: 'BK',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a12dc1d1-d65b-43f8-8930-7ca409837d18',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '464',
    reservedBy: 'phk',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GL',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a82859b-4627-4647-a849-b365caceb433',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '539',
    reservedBy: 'vec',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NV',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9168680b-918e-4c3a-89c6-8e85f9bf0e98',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '315',
    reservedBy: 'gky',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PN',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b08af70-aa4f-41b9-aed8-700c18baee4e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Angèle',
    room: '385',
    reservedBy: 'qcn',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GM',
    bbIn: 'IW',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9c54855-1d78-4fab-b49d-67b56157c258',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '004',
    reservedBy: 'dxy',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LS',
    bbIn: 'IH',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f17659b-d5cb-43db-b09d-8d3e838619e8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '105',
    reservedBy: 'cca',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PY',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01463593-b134-4623-9889-d1770555b99d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Médiamass',
    room: '021',
    reservedBy: 'ndr',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'EG',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd0b1859a-82ad-4e0d-8cfc-cd724bb70ca7',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Sélène',
    room: '821',
    reservedBy: 'lox',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0dab575f-49f1-4a1e-8ff6-22e18b80af34',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '102',
    reservedBy: 'syj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EQ',
    bbIn: 'WT',
    timeOut: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '58259027-80bb-4bbb-b7e6-30cc22ee3fef',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '047',
    reservedBy: 'mbj',
    bikeFormCompleted: null,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: null,
    bbOut: 'XJ',
    bbIn: 'GQ',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '001b1f68-9a82-4645-b1e2-606f593a7287',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '706',
    reservedBy: 'tfy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'GU',
    bbIn: 'PJ',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '72dfa295-9f81-4aed-a9b9-7121c637d69b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cinéma',
    room: '360',
    reservedBy: 'bxd',
    bikeFormCompleted: null,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NY',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '66d3fc6c-0ee8-460d-8af8-d5825f056f57',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Chloé',
    room: '441',
    reservedBy: 'zvr',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: null,
    bbOut: 'FO',
    bbIn: 'QW',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c12e86a4-ec8b-43b4-a5f5-c9b84b3fc26c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eloïse',
    room: '925',
    reservedBy: 'zvz',
    bikeFormCompleted: null,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CM',
    bbIn: 'RG',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a29bfba-38c5-4043-9ccc-6a9496a697f7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '049',
    reservedBy: 'fbn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'CM',
    bbIn: 'UW',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96e89fc8-df41-45f8-9190-9b245884f13f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '971',
    reservedBy: 'hqc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FN',
    bbIn: 'HI',
    timeOut: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8819aaea-c8cb-4180-9391-f1dbcd6ceb23',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '148',
    reservedBy: 'fod',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: null,
    bbOut: 'KW',
    bbIn: 'XP',
    timeOut: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a635b650-7bae-4374-931b-37cb2102f753',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '163',
    reservedBy: 'bil',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'RT',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de493711-3e59-478c-a191-7c1ab938fdbe',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '599',
    reservedBy: 'akg',
    bikeFormCompleted: false,
    comments: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab129a68-d6f8-4750-a600-e1bf03b4ed4c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Léone',
    room: '814',
    reservedBy: 'vce',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JD',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd542272-f3b5-48c9-bc00-0416c4b198d5',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '417',
    reservedBy: 'jrp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LC',
    bbIn: 'FM',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4e1ce95-0c53-4f94-bcee-39a480b34200',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Clémence',
    room: '280',
    reservedBy: 'fxh',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KG',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'baacd22a-4db3-4c2e-8023-a428feb82a0d',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Cloé',
    room: '220',
    reservedBy: 'mhc',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IP',
    bbIn: 'YU',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0b4823f3-e5bd-47c4-95dd-a8b776d75e93',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '849',
    reservedBy: 'vmx',
    bikeFormCompleted: true,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PQ',
    bbIn: 'RI',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '58d134e2-430a-43ba-b48f-85af627aadb7',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Nadège',
    room: '672',
    reservedBy: 'acf',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'UT',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee0571b7-990a-4221-8f23-e8a223e9dfa1',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Yáo',
    room: '698',
    reservedBy: 'vwx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QA',
    bbIn: 'SW',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bf815ff3-ad85-455b-b5a6-2592f46ba40b',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Stévina',
    room: '753',
    reservedBy: 'hiq',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'FT',
    timeOut: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c35cb931-65d5-43bf-9ba3-7f64ef35c4a6',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naéva',
    room: '664',
    reservedBy: 'vil',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TX',
    bbIn: 'JW',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de35cd2c-a2b3-4049-81ac-851a4ec3bb94',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïca',
    room: '419',
    reservedBy: 'lrc',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QQ',
    bbIn: 'MA',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '33cc7ee7-4a8d-4528-b343-f59ccfdb02c9',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Ophélie',
    room: '243',
    reservedBy: 'mkx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AP',
    bbIn: 'OG',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ced48f67-e4ea-443f-b3e8-04faca3fbdbe',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '218',
    reservedBy: 'ejl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'YI',
    bbIn: 'OL',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '961d4dbd-1738-4a4f-98e9-bd4ed12442e8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Clélia',
    room: '655',
    reservedBy: 'usc',
    bikeFormCompleted: false,
    comments: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZR',
    bbIn: 'SD',
    timeOut: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6f1c331-616c-4e4a-835c-62f4b9e712b9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marlène',
    room: '303',
    reservedBy: 'eud',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UK',
    bbIn: 'VA',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0d98d6f4-0d07-463a-b7c8-0eabf4fbc881',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '920',
    reservedBy: 'qou',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WC',
    bbIn: 'HM',
    timeOut: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '71bc9b66-2e9d-4037-93cc-f6ae55553a4c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '934',
    reservedBy: 'dks',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SW',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd652c9e7-949e-43da-816d-e41f805a006f',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méline',
    room: '296',
    reservedBy: 'hbs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FG',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be03d8b8-4a87-4f46-a14b-77ce17b6373c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Loïc',
    room: '851',
    reservedBy: 'jbk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'WQ',
    bbIn: 'YQ',
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
    bikeId: '45a78875-318c-4ff1-a7d2-6d0c942d5639',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '960',
    reservedBy: 'sku',
    bikeFormCompleted: null,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87f0c03f-d03f-43c8-8138-30070488137f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '665',
    reservedBy: 'utx',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'UO',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '313dd32d-dfd3-44cf-a886-5e236d13fe24',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Garçon',
    room: '768',
    reservedBy: 'rjh',
    bikeFormCompleted: false,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BD',
    bbIn: 'YE',
    timeOut: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89be4595-ea38-42e7-aef4-b70883c68d12',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lyséa',
    room: '929',
    reservedBy: 'lbu',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EL',
    bbIn: 'DM',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4309452f-58b5-451c-b5df-389722436cc9',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Vérane',
    room: '401',
    reservedBy: 'mbo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'ST',
    bbIn: 'EW',
    timeOut: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e59f550b-81e4-4bf1-a65d-fe7c239ecf3d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '466',
    reservedBy: 'agd',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TC',
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
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9af247ab-f4ea-467c-866e-27520604442b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '982',
    reservedBy: 'jxk',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: null,
    bbOut: 'XC',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '86de458c-ed4c-4153-a507-07f4c375ce2d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélia',
    room: '147',
    reservedBy: 'hji',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NF',
    bbIn: 'UJ',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '99b28f2c-0e52-45c4-826d-9e255904ffa3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '495',
    reservedBy: 'vam',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AQ',
    bbIn: 'ZN',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd0898fae-1616-4300-8579-c730e3c56455',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Adèle',
    room: '161',
    reservedBy: 'jlz',
    bikeFormCompleted: true,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GA',
    bbIn: 'LU',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '756fbef8-1758-4100-a3d6-b5ecf3ff4b8d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '793',
    reservedBy: 'bkp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TR',
    bbIn: 'WN',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1ddf75ba-53e4-4b27-b51e-a9de1c0828e5',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lèi',
    room: '078',
    reservedBy: 'svs',
    bikeFormCompleted: true,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VG',
    bbIn: 'OC',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f90e4e9e-22ae-4008-8a2d-d7355850f169',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maëline',
    room: '089',
    reservedBy: 'xmk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'CY',
    bbIn: 'XA',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2a58f38-0980-459d-ac5a-678d56961a97',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '183',
    reservedBy: 'cgi',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'CR',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd38c0e6f-c3a6-4360-a7af-6699207cebf5',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léonore',
    room: '442',
    reservedBy: 'oqr',
    bikeFormCompleted: true,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZQ',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '653a1a50-f5a6-4dbc-9a18-945a0a91d6a8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '853',
    reservedBy: 'qvd',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'MQ',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9721bd1a-d1a0-47ad-a266-f5994e8391b2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Naéva',
    room: '622',
    reservedBy: 'tqj',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'HS',
    bbIn: 'QD',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17ab5d3d-3097-47e3-b858-4a607609e49a',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Valérie',
    room: '641',
    reservedBy: 'fxy',
    bikeFormCompleted: null,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CL',
    bbIn: 'HA',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '900c5bcf-d6f4-400e-8e31-84f7de68ea7f',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Kuí',
    room: '527',
    reservedBy: 'wev',
    bikeFormCompleted: null,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AU',
    bbIn: 'GA',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc86736e-ba02-4bd0-b0ab-fc7e9081ab68',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '596',
    reservedBy: 'jkv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'CY',
    bbIn: 'AA',
    timeOut: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08916a6a-f10d-4b22-823a-1d4aa9073ac0',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Anaël',
    room: '353',
    reservedBy: 'cml',
    bikeFormCompleted: null,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: null,
    bbOut: 'MR',
    bbIn: 'PO',
    timeOut: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8264f153-62e9-4b85-ad95-7960b4010712',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Rébecca',
    room: '279',
    reservedBy: 'izo',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TM',
    bbIn: 'VZ',
    timeOut: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8bf177ec-18fb-4350-afdb-36b7403f0127',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Andréanne',
    room: '327',
    reservedBy: 'cns',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'MD',
    bbIn: 'PO',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '887c17f9-dcd5-4bf7-b49e-95d81f5a3d78',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '245',
    reservedBy: 'ona',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CT',
    bbIn: 'RU',
    timeOut: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2bd56826-6b48-43d2-a92f-1be6142ec53f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Loïca',
    room: '685',
    reservedBy: 'chq',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TO',
    bbIn: 'FD',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '618cdd7a-b729-4026-a122-51ba8394686a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '144',
    reservedBy: 'gpf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KY',
    bbIn: 'UF',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '276138e2-db81-4379-80ab-2921d1efef25',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '742',
    reservedBy: 'azj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'JY',
    bbIn: 'PW',
    timeOut: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01178e3c-ce71-4e59-83b8-3b34d55b83a3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '113',
    reservedBy: 'pea',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AU',
    bbIn: 'EQ',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c24e77da-5573-4f3b-9fe4-98f65e411ea2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Personnalisée',
    room: '118',
    reservedBy: 'inf',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: null,
    bbOut: 'AJ',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b24a502-abe4-44dd-aa80-7d95740e36c7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océane',
    room: '646',
    reservedBy: 'oij',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UM',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80b4494a-1e96-40b1-ba67-a980022841dd',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lorène',
    room: '000',
    reservedBy: 'zvk',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DB',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ca06e33-83ee-4ed5-9290-32a528781cb5',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '137',
    reservedBy: 'uyb',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AD',
    bbIn: 'KI',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '984909db-f075-4404-90b6-e7edaa0e9c82',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '416',
    reservedBy: 'bvq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VG',
    bbIn: 'IM',
    timeOut: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b24ca540-471c-4025-838f-cfa1c2820ec5',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '274',
    reservedBy: 'rjz',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: null,
    bbOut: 'SS',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9dc4d371-a5be-4965-a721-f3c37ea3d8ff',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Andréanne',
    room: '249',
    reservedBy: 'jpc',
    bikeFormCompleted: false,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YF',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ef2127c-b60d-4abc-bcdc-f369946e4c2d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '315',
    reservedBy: 'qtw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PH',
    bbIn: 'LM',
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
    bikeId: '57c39294-ddbc-480b-8535-fccd81346241',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlann',
    room: '543',
    reservedBy: 'veo',
    bikeFormCompleted: null,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CU',
    bbIn: 'BS',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1c84b605-9319-480d-8df5-b5bcf73f707d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sòng',
    room: '980',
    reservedBy: 'obi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JQ',
    bbIn: 'TW',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7094e9fa-e52f-43eb-a19e-ee2b7c64e312',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '381',
    reservedBy: 'rfr',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'EA',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89f097d4-3d01-4967-be9a-86f2f71d2ca8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '603',
    reservedBy: 'gzv',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: null,
    bbOut: 'TG',
    bbIn: 'TC',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f46609fe-9e9d-4c72-b69b-449328ee090c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '509',
    reservedBy: 'toh',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'KX',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '52c12226-4bd8-4290-b16f-03e61dbcfe6b',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Eloïse',
    room: '763',
    reservedBy: 'vhw',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'PY',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '90c805a8-5236-4bec-8843-e49d1259f926',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '832',
    reservedBy: 'ber',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: null,
    bbOut: 'DX',
    bbIn: 'QK',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c184c816-3d14-46cc-afaf-c9ac6c407f4d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '116',
    reservedBy: 'dke',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FA',
    bbIn: 'ZP',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ceea9408-0ff5-4bc1-8650-f3a6122e9c0d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Andrée',
    room: '560',
    reservedBy: 'gxs',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ND',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae8ea846-2265-4425-8846-f95001b1c377',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Björn',
    room: '683',
    reservedBy: 'eeu',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'QN',
    bbIn: 'FC',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd6f8e56f-26f2-4b24-b854-03635b4e79b5',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '412',
    reservedBy: 'glt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'AP',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e2199e5-dac8-4f0e-b5e7-4644d30e2c0f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '230',
    reservedBy: 'bjh',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'KY',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f6a969d-09a3-47a6-915f-30a780ea1956',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '428',
    reservedBy: 'gvx',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FO',
    bbIn: 'KO',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3bbc0496-650e-46e1-b29b-6d4fedf53870',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '367',
    reservedBy: 'xpv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QM',
    bbIn: 'ZO',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2811a08d-b11d-4c04-9114-00364e2a5596',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aloïs',
    room: '218',
    reservedBy: 'dst',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GB',
    bbIn: 'TV',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '484c665e-6124-4f1e-9d19-497d5ebb6615',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Océanne',
    room: '428',
    reservedBy: 'lhb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RZ',
    bbIn: 'VD',
    timeOut: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd209eec9-5067-41e9-90ba-bdf2ed35e2df',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '120',
    reservedBy: 'xqj',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HY',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd71786c2-e61f-4455-b43c-bcdd7f9f9aad',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '751',
    reservedBy: 'vok',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UK',
    bbIn: 'TO',
    timeOut: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac8477cf-625c-4726-b133-dd30ed591c9b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '080',
    reservedBy: 'qyz',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'YZ',
    bbIn: 'FZ',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f46b8eda-d4c5-41bd-be74-3bd667f25af7',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '097',
    reservedBy: 'vob',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: null,
    bbOut: 'GL',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c7331d04-23e0-45f8-8216-2f591ebca913',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '891',
    reservedBy: 'smh',
    bikeFormCompleted: false,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EE',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '92e0ab85-6b12-41cf-8aed-4ab6038b02b6',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Léana',
    room: '791',
    reservedBy: 'vlx',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PI',
    bbIn: 'IR',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce05300d-7c73-4395-b70a-b84657266ece',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '443',
    reservedBy: 'ikb',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SL',
    bbIn: 'RO',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8a1814a-3478-4af2-92bc-b9b78db7d55c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '726',
    reservedBy: 'pge',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SA',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9235a4e-1ea9-45f0-9f79-29128cd52861',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '997',
    reservedBy: 'gdn',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
    bbOut: 'MO',
    bbIn: 'WZ',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96cb2541-2d6d-493c-a541-d6cd0183c18a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '922',
    reservedBy: 'ntb',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JD',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3b8b296c-36cb-46eb-8199-14a6a27e2da6',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '571',
    reservedBy: 'epp',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: null,
    bbOut: 'ZS',
    bbIn: 'HB',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9359041c-e21b-4726-94ef-3a425d786b5a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '819',
    reservedBy: 'qnm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'ZA',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a765604-bb39-4a83-ad08-2234c08bf5f4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '216',
    reservedBy: 'how',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'BE',
    bbIn: 'AI',
    timeOut: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f5495ca1-a2ab-4eca-9d96-3dd78ea4bce9',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '831',
    reservedBy: 'fbo',
    bikeFormCompleted: null,
    comments: 'Duis bibendum.',
    completedAt: null,
    bbOut: 'JH',
    bbIn: 'DI',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '795e8f36-d6e7-4191-b60a-256343a96395',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '993',
    reservedBy: 'zhg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'SR',
    bbIn: 'ZP',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '65515569-b6ed-4e41-b436-13d13e4e4263',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '005',
    reservedBy: 'axm',
    bikeFormCompleted: null,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'WQ',
    bbIn: 'PK',
    timeOut: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fe2f20e7-a920-4fda-b3be-da8d3acca22e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'André',
    room: '384',
    reservedBy: 'jby',
    bikeFormCompleted: null,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IB',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '545b7ada-9466-41ea-8f27-682158a504a4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélia',
    room: '226',
    reservedBy: 'hgi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CJ',
    bbIn: 'TY',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1869de37-2aba-419c-996e-8e9445452596',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '019',
    reservedBy: 'lsw',
    bikeFormCompleted: true,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: null,
    bbOut: 'KL',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fcc85881-28b5-4b75-be1b-3b22378cb1ee',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '210',
    reservedBy: 'scl',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BP',
    bbIn: 'NB',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9169fd3a-89d3-440e-b987-08c96897feb7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '192',
    reservedBy: 'vwe',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KV',
    bbIn: 'NP',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6d285e00-9588-48e5-9f8c-7127b74fd2fa',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ráo',
    room: '400',
    reservedBy: 'ajr',
    bikeFormCompleted: null,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ME',
    bbIn: 'ES',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '99683fc6-e8ea-411f-8cd9-0c478f503c24',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '475',
    reservedBy: 'gpx',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GO',
    bbIn: 'GB',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2685721d-a396-4648-9ad6-d23f84047c8a',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Méghane',
    room: '936',
    reservedBy: 'oul',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AO',
    bbIn: 'KZ',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9add8af3-15c3-49e5-a18e-d260fbba4e88',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '406',
    reservedBy: 'gtl',
    bikeFormCompleted: null,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XG',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eed024a8-2d1d-4ba9-9898-450820777362',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '423',
    reservedBy: 'bfl',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: null,
    bbOut: 'BM',
    bbIn: 'NK',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '326a0c6e-ec3b-41a1-bf05-5da196755b4b',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Simplifiés',
    room: '322',
    reservedBy: 'pps',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IM',
    bbIn: 'HI',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bfd1737d-1c27-4b2f-9d7c-fbd718affb7f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '817',
    reservedBy: 'jpq',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: null,
    bbOut: 'GN',
    bbIn: 'WU',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f9a90b6b-947e-4bda-ac2c-e6fbe6540c63',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Célestine',
    room: '623',
    reservedBy: 'yaw',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'CB',
    bbIn: 'TC',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e19eff0b-35b1-4bf7-bf2d-dc048db6acb2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méline',
    room: '404',
    reservedBy: 'yni',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'ET',
    bbIn: 'QI',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9b40abaa-54c3-4c15-87cf-32ace74a195e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estève',
    room: '894',
    reservedBy: 'cec',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: null,
    bbOut: 'FS',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1001fee6-01fc-4e3b-800e-51ad8578a218',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mén',
    room: '420',
    reservedBy: 'oyi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PQ',
    bbIn: 'ZH',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f2b01c06-87a0-4770-8db4-04175bb5d922',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '983',
    reservedBy: 'wwh',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XQ',
    bbIn: 'SK',
    timeOut: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '229fc217-b6cb-4b5f-a153-80174465b0e6',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Crééz',
    room: '530',
    reservedBy: 'qvu',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TT',
    bbIn: 'IE',
    timeOut: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5d90327-c56d-43dc-b3da-619d499272aa',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '451',
    reservedBy: 'uea',
    bikeFormCompleted: false,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: null,
    bbOut: 'HL',
    bbIn: 'TF',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f6ab9f3-612c-4abb-9bf4-44cabe9ffb23',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélie',
    room: '371',
    reservedBy: 'hlv',
    bikeFormCompleted: false,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: null,
    bbOut: 'FP',
    bbIn: 'WX',
    timeOut: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e188600e-3209-4671-af61-d6b56bb54e35',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Liè',
    room: '320',
    reservedBy: 'kag',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PM',
    bbIn: 'HJ',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b2145b6-2511-4154-9fea-1250b22de1fc',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélissandre',
    room: '971',
    reservedBy: 'byy',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YJ',
    bbIn: 'TS',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '149c719f-2aac-4aea-add2-ffb5537acf57',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Östen',
    room: '526',
    reservedBy: 'gyp',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MK',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '882da668-0b01-424e-86ca-06b253140090',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Françoise',
    room: '473',
    reservedBy: 'lfz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BC',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '078ef0f5-986c-4c5a-8de0-38853af6e2a0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '927',
    reservedBy: 'reu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FN',
    bbIn: 'RX',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a14ca9a2-baa6-45bf-8693-31464e63c7f3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '107',
    reservedBy: 'jtm',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SI',
    bbIn: 'EF',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34d67654-53b2-4fc7-b20d-0b3727f78d24',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '240',
    reservedBy: 'fvg',
    bikeFormCompleted: false,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JK',
    bbIn: 'YH',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f65ef9ca-666b-4218-987b-bc1e1b2afeaa',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Erwéi',
    room: '088',
    reservedBy: 'bpi',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: null,
    bbOut: 'NH',
    bbIn: 'HG',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0fc9cd2f-e28e-477e-8f35-96be5370c9f6',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Torbjörn',
    room: '573',
    reservedBy: 'tyo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GT',
    bbIn: 'LR',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ded90b1e-5811-486e-8f32-6dd29f9e8b84',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Tán',
    room: '578',
    reservedBy: 'ipw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'LB',
    timeOut: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc92c2ca-06b3-4e5f-8ff5-9dc5c9ed1ca3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlys',
    room: '501',
    reservedBy: 'zwh',
    bikeFormCompleted: false,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VX',
    bbIn: 'TH',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b96c85eb-c788-4437-aa8a-58bf49055217',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '052',
    reservedBy: 'nri',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'JU',
    bbIn: 'HE',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eba79cc3-9aa4-4214-a6b1-a890b7cbc642',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célia',
    room: '811',
    reservedBy: 'qsc',
    bikeFormCompleted: null,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TH',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70443d3f-e08a-46dc-94b3-7fdffa911cee',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '750',
    reservedBy: 'fhc',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: null,
    bbOut: 'MM',
    bbIn: 'VH',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '41ee97fc-bc08-4d2f-865e-ceca25a92199',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Dù',
    room: '766',
    reservedBy: 'tkq',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AQ',
    bbIn: 'EC',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1af26ec8-9812-41b7-9307-a4a3fe0146f8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dù',
    room: '591',
    reservedBy: 'pjj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'WJ',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d4e44eb-4587-4ba0-916b-3c282ba3b80c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '359',
    reservedBy: 'rnp',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: null,
    bbOut: 'UX',
    bbIn: 'ZE',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '884d592c-a771-401a-be8a-b60a8d8bb85a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Hélèna',
    room: '775',
    reservedBy: 'mui',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WR',
    bbIn: 'TD',
    timeOut: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3b70267-192a-4a59-80fd-51108680325b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '260',
    reservedBy: 'hij',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'LM',
    bbIn: 'ZE',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4d57e8b-4ffa-4779-9445-3ed686301e78',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '130',
    reservedBy: 'sfx',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'FC',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a35e7a86-61d8-491d-b1d7-ad683b29f371',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Göran',
    room: '062',
    reservedBy: 'vdx',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: null,
    bbOut: 'QG',
    bbIn: 'GO',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e31867c5-5f8c-433e-9ec5-b2154ac6f0d3',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '274',
    reservedBy: 'uyj',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CJ',
    bbIn: 'FZ',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b052c5f7-7850-4b7b-a1a8-97be1876afa8',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '497',
    reservedBy: 'amw',
    bikeFormCompleted: false,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VD',
    bbIn: 'ZP',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e0c0649-b084-4812-b6ae-0d99571f2b8a',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lorène',
    room: '020',
    reservedBy: 'tbo',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
    bbOut: 'UW',
    bbIn: 'BI',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9831ca27-e49a-4494-b04c-5ceea7dc25dc',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '351',
    reservedBy: 'dvc',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VZ',
    bbIn: 'DE',
    timeOut: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b58e5985-3ef9-4383-87a0-69faded7a0c7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '887',
    reservedBy: 'apt',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JC',
    bbIn: 'FX',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e4d3c60-c816-4109-8770-d871ef5f3d85',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '436',
    reservedBy: 'rzl',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EI',
    bbIn: 'UY',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'efac4e50-ba95-4cac-8a07-b19c864d1bfb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '056',
    reservedBy: 'rjd',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'UY',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3da059fe-fc6e-449b-aca1-fe810271a3f0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mylène',
    room: '695',
    reservedBy: 'yot',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FK',
    bbIn: 'SM',
    timeOut: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4b05dd9a-72e4-4a8c-9489-6e3e6abfec40',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '465',
    reservedBy: 'key',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FX',
    bbIn: 'CJ',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '392e96df-1778-420b-a35a-eada0c91f042',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '239',
    reservedBy: 'izh',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UN',
    bbIn: 'IW',
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
    bikeId: '112a141b-399f-4fe1-af9c-3e1c5ba620dd',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '973',
    reservedBy: 'oog',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DY',
    bbIn: 'GR',
    timeOut: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f12a8d9f-1125-4dc7-9f6d-8f7170593ea5',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mégane',
    room: '844',
    reservedBy: 'tiw',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YC',
    bbIn: 'SR',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cc33b1e5-02fc-4c35-b2ca-72428723cf71',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '629',
    reservedBy: 'fzl',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SM',
    bbIn: 'GG',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56e8b680-59f1-41fa-9060-5abd7012aedf',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '838',
    reservedBy: 'neb',
    bikeFormCompleted: true,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JP',
    bbIn: 'KG',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3061264-0a18-422b-aba8-cebd2246fa4d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '831',
    reservedBy: 'ivw',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KT',
    bbIn: 'RK',
    timeOut: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f525a971-4659-4d5f-9388-ffbd97c57403',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Bérénice',
    room: '885',
    reservedBy: 'jwo',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'PH',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ab7b9c7-bfe5-4fd3-a1a7-9d7f64e04137',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dorothée',
    room: '391',
    reservedBy: 'rwb',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NI',
    bbIn: 'AY',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5dd078d0-2faa-4bef-9bbf-e4f606f40b73',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lorène',
    room: '929',
    reservedBy: 'wku',
    bikeFormCompleted: false,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FQ',
    bbIn: 'ZY',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f77fb8ce-98f5-4167-a941-de30cf37a80c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Andrée',
    room: '086',
    reservedBy: 'ryb',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: null,
    bbOut: 'AK',
    bbIn: 'SR',
    timeOut: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '851c9f02-cadc-4525-b3da-14ab628e2567',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Renée',
    room: '075',
    reservedBy: 'jno',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'WI',
    timeOut: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f48bb05-9ca4-47e8-93ff-2c2b5574b91d',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '154',
    reservedBy: 'lmt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PF',
    bbIn: 'BW',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39e7acae-1217-4fab-82d0-6fce08368eb4',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '208',
    reservedBy: 'ztu',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OO',
    bbIn: 'NR',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87571db0-ad9b-4de3-b0f8-ea61038cfda1',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Esbjörn',
    room: '779',
    reservedBy: 'zbc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'DT',
    bbIn: 'SX',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2328951-7605-47af-aae4-9e4551af1db9',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Fèi',
    room: '050',
    reservedBy: 'ryt',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HT',
    bbIn: 'FU',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da2c3029-e1b8-4abf-8dd5-b43e0e9af553',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '536',
    reservedBy: 'cpc',
    bikeFormCompleted: null,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'af48d54d-0b89-475f-a93d-fc2f205a516e',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '951',
    reservedBy: 'spp',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UO',
    bbIn: 'ER',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a4cb308-7f32-48ce-a7ed-21b4c86395cf',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '424',
    reservedBy: 'gzj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VV',
    bbIn: 'QE',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '50a1a576-0307-48ae-a8de-07e0dc5382e7',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '109',
    reservedBy: 'apz',
    bikeFormCompleted: null,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HW',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '04e173d1-620b-4f7f-8d88-f6480ecc9594',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mélinda',
    room: '542',
    reservedBy: 'oxv',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WL',
    bbIn: 'OO',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ade9c092-c79b-4a51-ace4-0ca9148f46e0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Almérinda',
    room: '576',
    reservedBy: 'ayf',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'NW',
    bbIn: 'GH',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3dc58c8-a85d-4b7f-ac6c-8f1247dc914d',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Björn',
    room: '063',
    reservedBy: 'skz',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HX',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf556b6b-17a9-4101-9369-88ffd3b488c2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '815',
    reservedBy: 'cce',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MQ',
    bbIn: 'NG',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e15e8a8-c808-4b6a-a663-5556415bef04',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '972',
    reservedBy: 'sfs',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EC',
    bbIn: 'II',
    timeOut: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '75f8c219-c6f3-4b3a-b78a-5e54bb704dc7',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '875',
    reservedBy: 'fru',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XS',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd457971b-f7b1-4936-ba48-4ac3ea7250d8',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '532',
    reservedBy: 'beo',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YN',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '38b2e07b-40c2-46fd-9e9b-0f9dcc516138',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Josée',
    room: '719',
    reservedBy: 'ukv',
    bikeFormCompleted: false,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'XH',
    bbIn: 'ZR',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '14862216-9beb-4a7e-b3d2-2f6f73d5e98c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Alizée',
    room: '810',
    reservedBy: 'bno',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: null,
    bbOut: 'UC',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3708e50-2cef-468d-af31-301a153b86fa',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '665',
    reservedBy: 'bhc',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'FA',
    timeOut: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0a6c8914-8e8e-4ef1-b3c3-dcc3446469b9',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Audréanne',
    room: '319',
    reservedBy: 'jgc',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: null,
    bbOut: 'IP',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd491377d-8c3a-414c-98e8-300d776966eb',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Gisèle',
    room: '107',
    reservedBy: 'pdz',
    bikeFormCompleted: false,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'QT',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '28c70c53-99d1-4b39-8343-cec0cdda6395',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '984',
    reservedBy: 'wiw',
    bikeFormCompleted: true,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
    bbOut: 'LL',
    bbIn: 'JN',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3ab5db1-0615-429e-871c-3336250e7bf3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '350',
    reservedBy: 'qvs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'HY',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54ce62a9-7254-4038-8cdd-593c2d650b88',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '255',
    reservedBy: 'pqe',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RA',
    bbIn: 'WU',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8ce93da5-d737-4dc0-a15d-d83b26ab3713',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yè',
    room: '745',
    reservedBy: 'wie',
    bikeFormCompleted: true,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FN',
    bbIn: 'OG',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '702c8af8-62c7-46c2-86ba-2df435798c9b',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Nadège',
    room: '524',
    reservedBy: 'wjy',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YL',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40799f97-024c-4f4b-b8c8-7910c0d34de2',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Judicaël',
    room: '308',
    reservedBy: 'jhw',
    bikeFormCompleted: null,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OE',
    bbIn: 'WC',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd854e170-3996-4f1b-adfa-fe7eb4e061b6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèse',
    room: '136',
    reservedBy: 'dyu',
    bikeFormCompleted: true,
    comments: 'Pellentesque eget nunc.',
    completedAt: null,
    bbOut: 'OI',
    bbIn: 'KE',
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
    bikeId: '37aa528f-7f98-4e35-b4bf-74e5fe0a8046',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pénélope',
    room: '372',
    reservedBy: 'cav',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AW',
    bbIn: 'PO',
    timeOut: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0c57b042-1321-4c35-9524-f3ee4b7c7c1e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '670',
    reservedBy: 'dwn',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XR',
    bbIn: 'SM',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '92c46fb9-f808-409d-a3ac-5ef2b7ee2c48',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '904',
    reservedBy: 'end',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZP',
    bbIn: 'VS',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd540360-6f79-451c-b2ac-015b3416ccdc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '433',
    reservedBy: 'axq',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FI',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ba94e53d-970a-4d4e-affc-69b5a8a15f86',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '330',
    reservedBy: 'yzu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SO',
    bbIn: 'AA',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0fa4168d-e395-443f-a31f-95307f18dd54',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Aí',
    room: '673',
    reservedBy: 'zic',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'JZ',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1a3b57eb-cc1f-48b3-bd91-a09535e61e7f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Audréanne',
    room: '949',
    reservedBy: 'hhc',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: null,
    bbOut: 'SH',
    bbIn: 'CC',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8975dbf-280c-44bd-929e-738ef1ef0d15',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '045',
    reservedBy: 'tsk',
    bikeFormCompleted: null,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: null,
    bbOut: 'QO',
    bbIn: 'OQ',
    timeOut: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '725cd3af-1b25-4d14-a54c-547ee63eb26e',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '694',
    reservedBy: 'bgk',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZE',
    bbIn: 'WR',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4597ae4c-ee89-4d28-bd2e-cbd0877b6ed3',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '292',
    reservedBy: 'val',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: null,
    bbOut: 'CI',
    bbIn: 'YQ',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '908b766f-c1cf-4e12-bc86-c6a660a6a984',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '908',
    reservedBy: 'hgw',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EZ',
    bbIn: 'PN',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7a43deb1-8f0c-4a67-b2d9-dbaf5e90634f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Loïca',
    room: '412',
    reservedBy: 'wwp',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DD',
    bbIn: 'YN',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87a42c7f-6af4-4df5-9404-0dcc7922de6d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '791',
    reservedBy: 'ubt',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LN',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2d7472f-b8ad-4005-82e5-3fc520c021cb',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Lóng',
    room: '299',
    reservedBy: 'kxb',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AF',
    bbIn: 'DD',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'daf45f19-b6e9-4303-a135-4069ae7fb995',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '895',
    reservedBy: 'sxq',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: null,
    bbOut: 'HD',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be8ed6c5-9635-4860-bed1-5db9415b1586',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '236',
    reservedBy: 'meg',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
    bbOut: 'HJ',
    bbIn: 'WL',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '410502de-15ec-482b-9e93-51c07aa4fc44',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '117',
    reservedBy: 'bsw',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PH',
    bbIn: 'AF',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '65b25ede-7ebd-4a68-957e-afd3f644662e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Ophélie',
    room: '010',
    reservedBy: 'lxe',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JT',
    bbIn: 'ZQ',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '99743ff9-80de-4870-b304-91816a401951',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '006',
    reservedBy: 'yig',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: null,
    bbOut: 'YQ',
    bbIn: 'MP',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e1e48afd-0358-41e3-99f5-0e15efc64ec8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Illustrée',
    room: '563',
    reservedBy: 'nmk',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XM',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c0afa848-91ed-45d5-99f5-6d542a561615',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '841',
    reservedBy: 'rcv',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: null,
    bbOut: 'XX',
    bbIn: 'IO',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c96c29d8-448a-4e7a-aa29-57dfa13e5390',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '154',
    reservedBy: 'vhm',
    bikeFormCompleted: null,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PQ',
    bbIn: 'ZK',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7d7b96f2-11cd-44dc-a43e-ab0d274799cc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '287',
    reservedBy: 'fih',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RL',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '008a8d48-1e1b-4f6b-a214-5d3ac4050491',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Dà',
    room: '596',
    reservedBy: 'bym',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: null,
    bbOut: 'KW',
    bbIn: 'GX',
    timeOut: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f0ffc5d-66e2-45b5-a99c-85119c20fa6c',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cloé',
    room: '506',
    reservedBy: 'lwh',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VY',
    bbIn: 'KH',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '543ebba9-75f1-47f9-902d-d9d5d52d90a7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yénora',
    room: '098',
    reservedBy: 'ihu',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: null,
    bbOut: 'JG',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9758fccc-3cce-49e8-b94d-78e8171ba83d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '716',
    reservedBy: 'cet',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZD',
    bbIn: 'VB',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dfb83667-3526-4825-8afb-ebc9b1dc9b14',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Amélie',
    room: '164',
    reservedBy: 'znn',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'CF',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a8f1874-557d-4aa7-9136-013093b806dc',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Åslög',
    room: '073',
    reservedBy: 'prj',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BF',
    bbIn: 'US',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '35c72626-d060-4d59-804f-15645ede6ae6',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Annotée',
    room: '633',
    reservedBy: 'esu',
    bikeFormCompleted: true,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RG',
    bbIn: 'TB',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '978b4470-81ad-49fe-adf2-83abd9827e17',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Renée',
    room: '971',
    reservedBy: 'ozi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TW',
    bbIn: 'VG',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c3494e6-db8b-48b8-b181-f59bee81869e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zhì',
    room: '561',
    reservedBy: 'ksz',
    bikeFormCompleted: null,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eb243ba1-00d0-4264-9957-7feb2f37e768',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '423',
    reservedBy: 'oyc',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VE',
    bbIn: 'CJ',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '37ed88aa-4d66-45bd-840a-4b56834da548',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '531',
    reservedBy: 'utv',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VK',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c516ef11-fa1c-4cc4-8465-cc9303234fda',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '648',
    reservedBy: 'qnh',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IB',
    bbIn: 'KO',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8eadfaa5-2367-435b-8b8c-588cdb9e221e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tú',
    room: '328',
    reservedBy: 'srb',
    bikeFormCompleted: true,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YM',
    bbIn: 'FK',
    timeOut: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '323daf95-933e-4d24-8c21-50c479548826',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '226',
    reservedBy: 'dga',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: null,
    bbOut: 'GJ',
    bbIn: 'CV',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '63bebde6-5089-461f-8f9d-86004017040d',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '071',
    reservedBy: 'heb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HD',
    bbIn: 'XZ',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '73d86749-c03d-4427-b249-ff0b4e8f7310',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océanne',
    room: '692',
    reservedBy: 'tub',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: null,
    bbOut: 'QG',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '741558b8-a490-4324-814e-aa6f3cf3b0d4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Stévina',
    room: '584',
    reservedBy: 'skw',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IN',
    bbIn: 'DC',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f60000c3-7454-4478-a968-e9537ef1399c',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Léana',
    room: '962',
    reservedBy: 'dkj',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IT',
    bbIn: 'HF',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5dcc8f2a-9ee4-4308-8f28-02e55bcf41b9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '782',
    reservedBy: 'yib',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'QH',
    bbIn: 'DO',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c5b52b1-6201-45ba-b78c-09fd141fd0c5',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Eliès',
    room: '929',
    reservedBy: 'ndq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FT',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0a9d410-2f43-4301-96e9-39d6f953f2a3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaëlle',
    room: '690',
    reservedBy: 'byr',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LE',
    bbIn: 'EV',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb1631e9-0678-4f6a-95b4-9ce1d53546e4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Örjan',
    room: '368',
    reservedBy: 'kqe',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WS',
    bbIn: 'HA',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf27916e-3b4f-4686-90f8-39a2cb35da3b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '811',
    reservedBy: 'nsw',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LK',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9eb4d3db-bafa-42dd-8f3c-d540039924b2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '749',
    reservedBy: 'etk',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NV',
    bbIn: 'NM',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd40aa862-05fe-4a69-8c56-de0c5c74e7ce',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Daphnée',
    room: '350',
    reservedBy: 'cer',
    bikeFormCompleted: null,
    comments: 'Sed sagittis.',
    completedAt: null,
    bbOut: 'VN',
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
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2dfa2254-d18a-4f7a-a6bf-0421f65826de',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Börje',
    room: '554',
    reservedBy: 'adt',
    bikeFormCompleted: null,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KZ',
    bbIn: 'RX',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d6f7ec6-5332-4ae5-a72e-7990d773be1a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Salomé',
    room: '877',
    reservedBy: 'yid',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CH',
    bbIn: 'BD',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9bbe1046-cc0d-4667-9bbe-e1e3ad135f3e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Måns',
    room: '123',
    reservedBy: 'hox',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RW',
    bbIn: 'LQ',
    timeOut: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '89cda06c-a769-46bb-9ccd-fd8babba71b3',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Intéressant',
    room: '648',
    reservedBy: 'tag',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: null,
    bbOut: 'AS',
    bbIn: 'ZZ',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9f2fba47-4491-4395-b5aa-9ec17f53d8b4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '940',
    reservedBy: 'iwl',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SJ',
    bbIn: 'SW',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e91d9dd8-ae56-4ac1-8433-22b0d7a6093f',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Tán',
    room: '199',
    reservedBy: 'oil',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'WT',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c138882-e5f1-41e3-ae11-56254ab5c70a',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Marie-noël',
    room: '660',
    reservedBy: 'sgc',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: null,
    bbOut: 'EX',
    bbIn: 'LA',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e56ec106-03c8-42c4-bc1e-a6dd064d8a30',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méghane',
    room: '196',
    reservedBy: 'auf',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZD',
    bbIn: 'KW',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9e891f8-e759-4b5e-b56b-cf557d0c2a25',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '653',
    reservedBy: 'hog',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'MN',
    bbIn: 'AD',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '49d470fc-a876-4d41-ad04-eec0b7642258',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '038',
    reservedBy: 'wtl',
    bikeFormCompleted: false,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JY',
    bbIn: 'WV',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6f0061a2-219c-44cd-8710-5eee1c5198d3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Laïla',
    room: '693',
    reservedBy: 'nis',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: null,
    bbOut: 'CD',
    bbIn: 'VL',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a24d741a-8735-4656-a6f5-00bc63878f17',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dorothée',
    room: '004',
    reservedBy: 'dfx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WN',
    bbIn: 'YZ',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1acdff3c-afe8-40c8-940d-4c51866537d9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Ruò',
    room: '855',
    reservedBy: 'kpe',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: null,
    bbOut: 'MA',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab896f9d-40d8-4a5a-923e-6217f1609374',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '435',
    reservedBy: 'nrl',
    bikeFormCompleted: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'SM',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '276a3307-6365-49a1-b560-381aae9405b7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '711',
    reservedBy: 'shx',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TP',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f0fb28b2-21b1-4162-961e-197975919bb1',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '986',
    reservedBy: 'mmv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MU',
    bbIn: 'LO',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bda55348-f12f-4b52-8d5f-9ee52320c572',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '395',
    reservedBy: 'lwa',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VH',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1781869d-42ff-476b-93ed-05f75897fc01',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Joséphine',
    room: '420',
    reservedBy: 'zhi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f6b872b-6c80-4ce3-9ae1-f441135cf2b9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Faîtes',
    room: '914',
    reservedBy: 'azf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'RD',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4004c15-c715-48a3-af05-42c29acc0ecf',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Méline',
    room: '705',
    reservedBy: 'yqk',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CI',
    bbIn: 'PL',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd173f7f-71eb-4df4-b358-7002d2958d30',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '885',
    reservedBy: 'aip',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IO',
    bbIn: 'MM',
    timeOut: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '44a7593e-3741-4b35-b68b-23ade983c8e7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '829',
    reservedBy: 'lpy',
    bikeFormCompleted: null,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GU',
    bbIn: 'JK',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9d9bbc6-2444-41e0-b3b9-4326aba11b04',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maïlys',
    room: '591',
    reservedBy: 'buz',
    bikeFormCompleted: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RT',
    bbIn: 'BM',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7acef216-2072-4fa0-b93d-d5739be4f19a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Almérinda',
    room: '972',
    reservedBy: 'dwh',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FO',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a216fc54-4159-45ba-9618-7c12877ca0c1',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Irène',
    room: '309',
    reservedBy: 'sko',
    bikeFormCompleted: true,
    comments: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ED',
    bbIn: 'TB',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f58dbb77-0b6b-463f-8fac-b85ce9518859',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Edmée',
    room: '596',
    reservedBy: 'odn',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XB',
    bbIn: 'HF',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc0c7331-255e-4b98-b5ae-8eab1bfcd795',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Anaël',
    room: '873',
    reservedBy: 'drk',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: null,
    bbOut: 'AI',
    bbIn: 'NL',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31db958f-94a5-4d46-9e24-099a13297f55',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '647',
    reservedBy: 'bch',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: null,
    bbOut: 'LN',
    bbIn: 'ER',
    timeOut: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1f08cc0d-4e06-405f-b893-54101690bae2',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Erwéi',
    room: '820',
    reservedBy: 'uxv',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'DW',
    bbIn: 'ZF',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '554c5b0d-6dde-48db-983d-a2a8db61da23',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Fèi',
    room: '815',
    reservedBy: 'dti',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: null,
    bbOut: 'LK',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab2685b1-2a52-4dd7-9111-3bbab6097749',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Sòng',
    room: '073',
    reservedBy: 'kqe',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: null,
    bbOut: 'FQ',
    bbIn: 'MN',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46f652e4-b32e-48d5-9e2d-250bf9833155',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '984',
    reservedBy: 'gzx',
    bikeFormCompleted: null,
    comments: 'Duis bibendum.',
    completedAt: null,
    bbOut: 'JY',
    bbIn: 'UD',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2985514e-25ba-405e-92b7-9574cbb5a815',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '537',
    reservedBy: 'oez',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
    bbOut: 'RM',
    bbIn: 'HN',
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
    bikeId: '27c3166e-2181-4c82-8533-5f02c35abb32',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '085',
    reservedBy: 'ila',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RP',
    bbIn: 'DU',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cdb5a9c7-8e08-4de4-9a77-73dcad0ca9c4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Félicie',
    room: '730',
    reservedBy: 'dhf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TP',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '04423fd2-7361-49b4-be4c-198497b447ef',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Méghane',
    room: '160',
    reservedBy: 'bfn',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: null,
    bbOut: 'FN',
    bbIn: 'JX',
    timeOut: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '57286795-2a6e-4369-a5d5-abc1952854a7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '879',
    reservedBy: 'tdi',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OP',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b8afd955-b5cc-4919-b73f-12c1144a3a68',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lauréna',
    room: '362',
    reservedBy: 'zoa',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RS',
    bbIn: 'JJ',
    timeOut: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '68b94da0-e770-4b93-bf00-6e8de0981bdd',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '933',
    reservedBy: 'zan',
    bikeFormCompleted: null,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
    bbOut: 'HZ',
    bbIn: 'RV',
    timeOut: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9592cdf8-d8df-4a31-881f-ae15b0ebf119',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marie-ève',
    room: '081',
    reservedBy: 'yhv',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HJ',
    bbIn: 'TY',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2cf21d4-698c-4035-853d-874214670b33',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '996',
    reservedBy: 'bef',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: null,
    bbOut: 'JR',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29e2afbe-f5ea-4b9d-bf4c-fc7109a1a93e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '684',
    reservedBy: 'ico',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZL',
    bbIn: 'EC',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0108f861-d612-4d61-beef-9b897b033567',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '700',
    reservedBy: 'vng',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
    bbOut: 'JN',
    bbIn: 'IC',
    timeOut: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2507c04c-7041-4696-92af-1b967a07d716',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Frédérique',
    room: '243',
    reservedBy: 'nab',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GU',
    bbIn: 'XU',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c7abaa92-3ea2-4025-a00b-6047fc7fb30b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïwenn',
    room: '514',
    reservedBy: 'axx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'HV',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7716f2df-58a0-425e-8590-70429fb17c53',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '142',
    reservedBy: 'ppv',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GN',
    bbIn: 'IY',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b00b5050-ca44-494a-a689-b5236c99ce0f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Agnès',
    room: '666',
    reservedBy: 'qbs',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NO',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f65bdd8a-ee54-4cd6-bc00-5a39ab65388a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dù',
    room: '597',
    reservedBy: 'oiy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TJ',
    bbIn: 'MZ',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '43b1f755-03aa-46e7-aeb0-e41957acf8bf',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naéva',
    room: '747',
    reservedBy: 'elv',
    bikeFormCompleted: null,
    comments: 'Integer ac neque.',
    completedAt: null,
    bbOut: 'CE',
    bbIn: 'QJ',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4035160f-e30a-4d6f-9347-311988023da6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Naëlle',
    room: '791',
    reservedBy: 'qfx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SJ',
    bbIn: 'DS',
    timeOut: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d73565e-5cab-4a8d-8634-e70a68d79a47',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '934',
    reservedBy: 'oeb',
    bikeFormCompleted: false,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
    bbOut: 'ZU',
    bbIn: 'PW',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4f1f4a0d-285c-4cd8-a232-fe7503de3f2e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléa',
    room: '114',
    reservedBy: 'pij',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZS',
    bbIn: 'BI',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1a10d897-196c-4059-900d-31ede8cccbf2',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Björn',
    room: '905',
    reservedBy: 'rmb',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'MK',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7ae70f3b-16b1-43ed-a1a7-f6e0cf94b69b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '280',
    reservedBy: 'erm',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: null,
    bbOut: 'SL',
    bbIn: 'EQ',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c9cc434-d2bd-4e54-b28b-c2043bde988a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '750',
    reservedBy: 'szt',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
    bbOut: 'LI',
    bbIn: 'HY',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6dadc2d9-0eae-4051-b43a-e975c1c47acf',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Andréa',
    room: '732',
    reservedBy: 'tjj',
    bikeFormCompleted: false,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XD',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f2735c6-305c-4faf-84b8-ebc2d475ea2c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Séréna',
    room: '355',
    reservedBy: 'ddm',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QV',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '13d481c9-5096-4dd5-9c2d-6b8eee156010',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '534',
    reservedBy: 'jwj',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NH',
    bbIn: 'RN',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31836cf0-c02b-423c-be9b-7a93f297453a',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '943',
    reservedBy: 'erw',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'VI',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'df968d53-ee47-4699-b3ab-af21d70cd4e3',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célestine',
    room: '396',
    reservedBy: 'abw',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TR',
    bbIn: 'SC',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3ad1c8c8-a1fa-4f69-abdf-f55f90f4bd63',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '196',
    reservedBy: 'fan',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TT',
    bbIn: 'KS',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ccce698-dc2c-4c3e-8a6f-77fa167cdf02',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotée',
    room: '061',
    reservedBy: 'rxt',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LA',
    bbIn: 'YM',
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
    bikeId: '867b70b2-03e5-4569-a5f9-384fd87a5a48',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Joséphine',
    room: '081',
    reservedBy: 'ozj',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: null,
    bbOut: 'XQ',
    bbIn: 'PQ',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '421a6d19-3203-4714-b583-672d95ce5ff9',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Kuí',
    room: '259',
    reservedBy: 'veu',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DN',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3e5b905-981b-4a41-bf43-9cfea81aeef1',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '045',
    reservedBy: 'yss',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NA',
    bbIn: 'IT',
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
    bikeId: '65c7fc7e-9c9e-441e-bbd5-e2ee64763baa',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '884',
    reservedBy: 'lkm',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WX',
    bbIn: 'CY',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0573d32d-af9f-4d65-9905-966b1385dca0',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '172',
    reservedBy: 'evp',
    bikeFormCompleted: false,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CI',
    bbIn: 'UU',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eb95f6f2-7eaa-494c-abaf-7422ce93f729',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '697',
    reservedBy: 'nlg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NG',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76275972-1a2a-4858-a16e-a7953b61df3a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '324',
    reservedBy: 'dgz',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZW',
    bbIn: 'SH',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '55515324-20af-44d3-978b-dc921a484d9a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noëlla',
    room: '605',
    reservedBy: 'sso',
    bikeFormCompleted: false,
    comments: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QB',
    bbIn: 'BM',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '24705103-9026-4b64-97ee-77f5c26120a9',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Yú',
    room: '784',
    reservedBy: 'eho',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'PK',
    bbIn: 'LU',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bc46d8f7-4020-4210-b6fa-277969f68f2c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Märta',
    room: '844',
    reservedBy: 'xhd',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CN',
    bbIn: 'OW',
    timeOut: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '915bdce2-9e9e-48e3-b21b-af8c1f35d6aa',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aurélie',
    room: '633',
    reservedBy: 'irf',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'SG',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ea8d822d-533a-4458-9001-a83854d5ac12',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '324',
    reservedBy: 'eij',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OK',
    bbIn: 'CB',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2669c8e7-6058-4c7f-9135-064f40234c9a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Maïté',
    room: '153',
    reservedBy: 'vbu',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: null,
    bbOut: 'UR',
    bbIn: 'FD',
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
    bikeId: 'eb9b7be8-b382-4285-9c1f-fb5afa5283ab',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Danièle',
    room: '482',
    reservedBy: 'ite',
    bikeFormCompleted: false,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QQ',
    bbIn: 'BE',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6b0bf25-de0a-4883-90b3-76018eb995b7',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Loïc',
    room: '970',
    reservedBy: 'yji',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'HL',
    bbIn: 'DU',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6aee2512-bfc3-460b-84e3-a7940c562e9d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Audréanne',
    room: '720',
    reservedBy: 'uon',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OX',
    bbIn: 'GB',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b98986db-6362-4425-917c-6b6d73eb0e23',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Françoise',
    room: '534',
    reservedBy: 'ehx',
    bikeFormCompleted: false,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DO',
    bbIn: 'IJ',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e70c288d-fb44-44db-9d3c-498badfb0f35',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nadège',
    room: '111',
    reservedBy: 'pij',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UI',
    bbIn: 'SJ',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e7ae0ca-fa50-474f-b4c9-9d3b1b61e375',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïly',
    room: '683',
    reservedBy: 'saq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JH',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6187d1f5-2f3b-427d-9583-a5de5905c433',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurélie',
    room: '515',
    reservedBy: 'ntp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HV',
    bbIn: 'BW',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '03ca4785-fe1d-4d7c-9dda-c5a51de868f6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Joséphine',
    room: '813',
    reservedBy: 'bpt',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AY',
    bbIn: 'WN',
    timeOut: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8234c075-9802-42c9-9d8c-1e2349e7fa5b',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Simplifiés',
    room: '794',
    reservedBy: 'asg',
    bikeFormCompleted: true,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FH',
    bbIn: 'LA',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b6b68523-3739-4f49-8da0-30b66f32ee27',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '931',
    reservedBy: 'zmo',
    bikeFormCompleted: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KY',
    bbIn: 'NP',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9c1965d-b520-48e0-b263-adf02735a7e6',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '359',
    reservedBy: 'rux',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NH',
    bbIn: 'SC',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '77514823-bac9-4cb3-b0d2-6cf9b7887a80',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Almérinda',
    room: '241',
    reservedBy: 'lpy',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UT',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'df5fc668-c75b-4838-968a-c3a3b62df101',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '100',
    reservedBy: 'ztb',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: null,
    bbOut: 'BZ',
    bbIn: 'YB',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '435ebea4-e739-4ffd-9d64-f99a483b3cf5',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '892',
    reservedBy: 'zyz',
    bikeFormCompleted: false,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'QV',
    timeOut: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e598d90b-db78-422f-8af2-81cdf62e3b61',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Séverine',
    room: '973',
    reservedBy: 'rey',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RN',
    bbIn: 'HB',
    timeOut: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8ab1b358-8785-4e24-9b14-9a12c4c18ff2',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laïla',
    room: '146',
    reservedBy: 'vvu',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MI',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7e1475a8-0ba5-4338-90a7-655f7d4e5f54',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '137',
    reservedBy: 'dhi',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PN',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '15c01036-640b-4ae1-83c4-fc071b60c88c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tú',
    room: '875',
    reservedBy: 'bhe',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: null,
    bbOut: 'JT',
    bbIn: 'WM',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b4e390f-5ea1-4c35-b0ca-05bf9a6cd18c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Lèi',
    room: '512',
    reservedBy: 'waj',
    bikeFormCompleted: false,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UY',
    bbIn: 'IM',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '63acf50d-3529-475c-844b-dc50bc6b3d93',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'André',
    room: '847',
    reservedBy: 'nhe',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RS',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8504ab37-2cc4-4998-8d2b-36ba6d8b596d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mà',
    room: '870',
    reservedBy: 'clf',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HU',
    bbIn: 'ZY',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a56d4344-467a-4d2e-95bc-3b8ab03a185e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '609',
    reservedBy: 'fmk',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XR',
    bbIn: 'FR',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '922ee798-3ad9-428b-8358-8cebbbbce211',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cloé',
    room: '936',
    reservedBy: 'ytt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'CI',
    bbIn: 'ZN',
    timeOut: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de3ffc8b-4cf7-43ea-bd65-807b80164e61',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Tán',
    room: '007',
    reservedBy: 'ngz',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: null,
    bbOut: 'LV',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '56addc86-5b1a-41c3-969c-5df914feb3a8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïc',
    room: '255',
    reservedBy: 'ztc',
    bikeFormCompleted: false,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZL',
    bbIn: 'DY',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '98b95951-01a3-47f5-8962-3aa7c23e7dbd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '515',
    reservedBy: 'xhu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZG',
    bbIn: 'EH',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '487dfa61-380c-4fa5-92e8-73fcbc6c8eda',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Lèi',
    room: '922',
    reservedBy: 'obt',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: null,
    bbOut: 'NO',
    bbIn: 'FI',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '796e9fed-21e1-4374-ad6c-516237013187',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Chloé',
    room: '412',
    reservedBy: 'sss',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GQ',
    bbIn: 'EY',
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
    bikeId: '704694e7-779a-4f6a-9a87-cdd5e2629430',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Garçon',
    room: '857',
    reservedBy: 'jys',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JV',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '44c470a7-013b-4411-be45-86df326a2c28',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '599',
    reservedBy: 'byq',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: null,
    bbOut: 'UN',
    bbIn: 'JS',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b6a0a866-dd54-4e17-a4ba-982ee63fd749',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '912',
    reservedBy: 'xvk',
    bikeFormCompleted: true,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CI',
    bbIn: 'RF',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f345e180-2538-4c7b-b39f-f3b135e118f6',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '807',
    reservedBy: 'czi',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IA',
    bbIn: 'XB',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a723c498-2814-422f-960a-5ed8b50c7ff8',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '550',
    reservedBy: 'fla',
    bikeFormCompleted: null,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CW',
    bbIn: 'PB',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3705bf19-c7aa-4984-8bd8-6a5220d24854',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '832',
    reservedBy: 'fcf',
    bikeFormCompleted: null,
    comments: 'Integer ac leo.',
    completedAt: null,
    bbOut: 'MZ',
    bbIn: 'RB',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6ce37cfb-6bf7-4528-a49f-59265bb54e06',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréa',
    room: '375',
    reservedBy: 'vsr',
    bikeFormCompleted: null,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LK',
    bbIn: 'ZI',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1bdef192-7bc6-4671-bd7d-c08986d314c8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '623',
    reservedBy: 'wjy',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: null,
    bbOut: 'YA',
    bbIn: 'VI',
    timeOut: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e82b1435-d03d-4130-9de5-122270cd1c94',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åslög',
    room: '752',
    reservedBy: 'kft',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XU',
    bbIn: 'II',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b5be560a-3ca7-4225-8996-8d4dc47f0c4a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '665',
    reservedBy: 'cyc',
    bikeFormCompleted: false,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BS',
    bbIn: 'GZ',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30a1493f-b5a8-4a33-8d3d-875218281372',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yú',
    room: '609',
    reservedBy: 'aan',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'XN',
    timeOut: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46a9e70e-967d-487f-9e88-b38d06cfc220',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Märta',
    room: '557',
    reservedBy: 'xxy',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'IY',
    bbIn: 'UJ',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '17ca08ef-5112-4263-a482-e0ddfe2e139d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Pénélope',
    room: '835',
    reservedBy: 'ade',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NM',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '261563d3-4a0c-4625-b9f6-79ea70228709',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léa',
    room: '453',
    reservedBy: 'uzv',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZH',
    bbIn: 'KC',
    timeOut: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2d056e08-0104-4224-9fe3-8430898d122f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Håkan',
    room: '613',
    reservedBy: 'mek',
    bikeFormCompleted: false,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FG',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30811c27-b7e5-4f3d-821b-a7a3ffd4ac48',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Céline',
    room: '426',
    reservedBy: 'efo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XD',
    bbIn: 'WO',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '23ceac91-29a8-4b9b-b13c-6ec49ba3763b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '920',
    reservedBy: 'hqx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LD',
    bbIn: 'XK',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46774e76-c803-47c2-a40e-b7b18eeb79cc',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Amélie',
    room: '654',
    reservedBy: 'vjl',
    bikeFormCompleted: false,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KD',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cde1e61a-05c1-4847-85bd-97a2175a3858',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gisèle',
    room: '476',
    reservedBy: 'ezb',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GV',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2acf356f-17ba-46da-92be-ed63ebe2d914',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nuó',
    room: '862',
    reservedBy: 'jxw',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BZ',
    bbIn: 'RA',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1ebc4588-0e12-4549-888d-1016bb7b3b77',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Bérengère',
    room: '138',
    reservedBy: 'shn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ES',
    bbIn: 'HC',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39a6ac9f-263f-4a7a-902b-f91a6f944011',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruì',
    room: '158',
    reservedBy: 'gqz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TS',
    bbIn: 'SB',
    timeOut: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f5158008-b298-41ab-b80e-80263bb97a03',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Andréa',
    room: '621',
    reservedBy: 'hic',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HK',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd08f33c8-0fa6-4a5a-a6c2-c613e942b805',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '117',
    reservedBy: 'buz',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: null,
    bbOut: 'SL',
    bbIn: 'RS',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40d7b103-b9fe-4a7b-a6b3-f9d79adc72c3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémence',
    room: '747',
    reservedBy: 'tmt',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'AL',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d9062a7-82ab-4df2-bfe2-a23ac59327c9',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marlène',
    room: '547',
    reservedBy: 'lrz',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LU',
    bbIn: 'HF',
    timeOut: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3bb0975-29cc-4125-8a2e-fade6c41bf2b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Inès',
    room: '128',
    reservedBy: 'glp',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PM',
    bbIn: 'BO',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a2b398df-dabb-4553-9f62-28f203f7fc8f',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '489',
    reservedBy: 'doh',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'YB',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2727e567-1243-481c-bf0e-ab37165d408a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '495',
    reservedBy: 'wzn',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IR',
    bbIn: 'HS',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '201783bf-978d-4642-952c-22eb4594f95c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '972',
    reservedBy: 'ofo',
    bikeFormCompleted: false,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1fd39ecc-660c-4f80-be06-5d9c06d448be',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélaïde',
    room: '617',
    reservedBy: 'qko',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'DL',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'acc7e2ee-0883-4331-83e6-725c38b766e5',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Marie-ève',
    room: '686',
    reservedBy: 'bcs',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QG',
    bbIn: 'DU',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f8893dc6-edc8-4353-9bee-9db4e04ee9f2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '653',
    reservedBy: 'jvs',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VO',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07b95965-f8d6-44e1-a30d-ad8f453a6ba9',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '024',
    reservedBy: 'rrx',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: null,
    bbOut: 'DL',
    bbIn: 'TM',
    timeOut: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ec11d765-1958-4f0a-8271-abe26e917fc0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Liè',
    room: '385',
    reservedBy: 'kdt',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46c39f95-8703-467b-b2fb-f7accd7eafd6',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Méng',
    room: '487',
    reservedBy: 'bfy',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OZ',
    bbIn: 'NN',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f126a919-a417-437e-9bb1-84e6a1691b8c',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Léone',
    room: '582',
    reservedBy: 'yfu',
    bikeFormCompleted: true,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HZ',
    bbIn: 'UP',
    timeOut: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'aae1b6fd-1787-4eb1-89f0-7dd199b8ca9f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '538',
    reservedBy: 'iyt',
    bikeFormCompleted: null,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AF',
    bbIn: 'XF',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b2d5bcc3-5edb-404c-8be1-12fe7dd9ac61',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Åsa',
    room: '983',
    reservedBy: 'fyq',
    bikeFormCompleted: null,
    comments: 'Integer ac neque.',
    completedAt: null,
    bbOut: 'AD',
    bbIn: 'PS',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ee1d23ec-3344-4435-97d8-48f92612d4c1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '824',
    reservedBy: 'feh',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KG',
    bbIn: 'GU',
    timeOut: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83046034-c055-4650-9eb5-a46951a65d29',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '549',
    reservedBy: 'puz',
    bikeFormCompleted: null,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PR',
    bbIn: 'NB',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd2475af-9fa0-403b-922c-dba7ece4ef0c',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maïlis',
    room: '855',
    reservedBy: 'sqe',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'AX',
    bbIn: 'PR',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c237a7a5-6a7c-4eb9-818c-7ff8010b9966',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '801',
    reservedBy: 'fgo',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'de715476-9f28-43a2-85a4-254d93f8c9a7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gérald',
    room: '814',
    reservedBy: 'ufq',
    bikeFormCompleted: null,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BX',
    bbIn: 'ES',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42491e40-2c89-467e-98f6-579676c06c37',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '106',
    reservedBy: 'oui',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HI',
    bbIn: 'TV',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b8d39c77-af06-42fe-b4f6-0bc08f175291',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '800',
    reservedBy: 'rfz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LD',
    bbIn: 'DV',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eea9e989-d9fe-4b62-aaba-dfd7b68c2d50',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Publicité',
    room: '551',
    reservedBy: 'ufx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YO',
    bbIn: 'JU',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1bd35f1d-d64b-45a2-83df-b305b2c24f61',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vérane',
    room: '255',
    reservedBy: 'tun',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'EN',
    timeOut: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '35f7dd50-fdf7-40cf-af74-26a9b53cd638',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïté',
    room: '212',
    reservedBy: 'uxw',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: null,
    bbOut: 'QP',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8f4d70ec-e960-42fc-ac06-2cf3da258d29',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Dà',
    room: '293',
    reservedBy: 'rxs',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'RJ',
    bbIn: 'YA',
    timeOut: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f657d657-876a-4917-a0cd-ffd256439f7d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pål',
    room: '765',
    reservedBy: 'uvf',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BJ',
    bbIn: 'CV',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd65470bd-e165-4771-affa-6532b862be79',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laïla',
    room: '253',
    reservedBy: 'gif',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EB',
    bbIn: 'GU',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '29339dbb-5ce4-4354-b32f-1e38b274ed10',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '856',
    reservedBy: 'ruf',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: null,
    bbOut: 'HK',
    bbIn: 'VV',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8ff528eb-9447-43fb-ae28-13d4937cf82f',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marylène',
    room: '234',
    reservedBy: 'anm',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CU',
    bbIn: 'GZ',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '592c3516-9a81-475b-83a2-d3516337bbc6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '804',
    reservedBy: 'njm',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: null,
    bbOut: 'FU',
    bbIn: 'AY',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c1c18d82-d65d-44ab-87ad-c568c02feff4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '069',
    reservedBy: 'xmc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FV',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '163d1c0a-020a-43de-af1c-0faa866d2495',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '359',
    reservedBy: 'wai',
    bikeFormCompleted: false,
    comments: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
    bbOut: 'AS',
    bbIn: 'AH',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '66fddc04-1177-45b7-bbd5-259c7368518f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Félicie',
    room: '497',
    reservedBy: 'qyr',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PT',
    bbIn: 'QN',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36015084-526f-4f6d-8d4f-dda91fd72cfb',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Gérald',
    room: '805',
    reservedBy: 'ayr',
    bikeFormCompleted: true,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HE',
    bbIn: 'UK',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1b7c8fdd-b0c8-4e3d-86d0-25999d921691',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léone',
    room: '928',
    reservedBy: 'lrz',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SY',
    bbIn: 'HZ',
    timeOut: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fd4c23d5-a331-4013-8d86-d280e1fbe570',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Anaël',
    room: '691',
    reservedBy: 'kys',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SX',
    bbIn: 'VL',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'be8b8b62-0987-4c51-9333-b4097e23dbff',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '238',
    reservedBy: 'jgn',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: null,
    bbOut: 'SQ',
    bbIn: 'YF',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e831ff45-1338-4ad7-9368-f45a8dd8366b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '874',
    reservedBy: 'stc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ca021415-6fbe-4374-bbaa-302455e51c75',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Uò',
    room: '301',
    reservedBy: 'eno',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'RD',
    timeOut: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09d44628-6f44-4300-be95-28ae5161a116',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '875',
    reservedBy: 'ogd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KX',
    bbIn: 'CS',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5f077da-4e18-4e37-b419-f27134b10cce',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Chloé',
    room: '025',
    reservedBy: 'rzq',
    bikeFormCompleted: true,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OC',
    bbIn: 'NT',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '96fcf9be-4f45-45f3-a3ec-deb63e3700d3',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '882',
    reservedBy: 'vum',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: null,
    bbOut: 'IF',
    bbIn: 'SL',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ebf8f8db-e563-4217-a405-e23c4410c2d7',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Nélie',
    room: '064',
    reservedBy: 'joe',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OE',
    bbIn: 'EW',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'efe2cc6a-2158-419b-b01c-71408d2b61ec',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-ève',
    room: '722',
    reservedBy: 'gse',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BH',
    bbIn: 'NH',
    timeOut: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd28d7816-7fe3-4edd-9510-c2618522f3fa',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Sòng',
    room: '431',
    reservedBy: 'wiy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'ED',
    timeOut: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b17a4526-b7ae-4d41-a4cd-1c9c4665d286',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '204',
    reservedBy: 'pvw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XZ',
    bbIn: 'TX',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fba72e2c-60a9-49a6-8d97-f522208e23b2',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Daphnée',
    room: '050',
    reservedBy: 'wgz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PU',
    bbIn: 'EP',
    timeOut: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6418df48-4951-437c-a342-794daf6607f8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '566',
    reservedBy: 'dnu',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CY',
    bbIn: 'MV',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dae3978c-668c-469e-aed7-c0ad61d7b574',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '327',
    reservedBy: 'lel',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EO',
    bbIn: 'KT',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad6836d3-7aae-4be6-a85e-e8cab1c08fb8',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Yè',
    room: '795',
    reservedBy: 'lzo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'KN',
    bbIn: 'PY',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a6487d1f-f5b4-491a-8e76-fc7913c4975a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Eléa',
    room: '621',
    reservedBy: 'opa',
    bikeFormCompleted: null,
    comments: 'Proin eu mi.',
    completedAt: null,
    bbOut: 'CN',
    bbIn: 'AS',
    timeOut: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4fcee12-af5c-468e-9b02-ff24ff8618e1',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kallisté',
    room: '772',
    reservedBy: 'ifk',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XB',
    bbIn: 'KW',
    timeOut: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2719695c-0561-43dc-915b-fd77b33d762d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '992',
    reservedBy: 'liq',
    bikeFormCompleted: false,
    comments: 'Aenean lectus.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AM',
    bbIn: 'MF',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '298bdd0f-b8f9-45bc-aa16-cbac10a5a6c3',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '375',
    reservedBy: 'kbx',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AM',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e5f67c6d-98ac-4b87-9b4e-bc213cdce950',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '345',
    reservedBy: 'lan',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZG',
    bbIn: 'ZT',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3f03074a-798c-4c06-a3ef-432a389dcaf2',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '952',
    reservedBy: 'jcd',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NN',
    bbIn: 'YJ',
    timeOut: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '758f7cc5-1d49-45ee-a9c6-cc59f85be9b6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estée',
    room: '885',
    reservedBy: 'ixz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XW',
    bbIn: 'LT',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a04ddda0-e29f-45c0-a560-3907c38782f2',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '070',
    reservedBy: 'usn',
    bikeFormCompleted: true,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: null,
    bbOut: 'NW',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '67ba49a4-8f8d-4f74-8e2b-ba87669d6940',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '642',
    reservedBy: 'pfk',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JD',
    bbIn: 'NZ',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '939c2a54-63e3-47e3-9f1d-ae6240b03a6c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '252',
    reservedBy: 'owv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'FU',
    bbIn: 'ZT',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2146ee79-963c-4b5d-9b85-0e7aa964c909',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Chloé',
    room: '541',
    reservedBy: 'ybl',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GL',
    bbIn: 'ZT',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f131c73-9873-4110-92dc-36e14dd7d29d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léa',
    room: '622',
    reservedBy: 'ocd',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BO',
    bbIn: 'UY',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f1be93b3-d940-4c0e-b64a-3fa5033718fa',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Félicie',
    room: '953',
    reservedBy: 'afl',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FE',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83641925-cc25-4f02-8b38-84532e9a1db7',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Néhémie',
    room: '669',
    reservedBy: 'haj',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BU',
    bbIn: 'YV',
    timeOut: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '334c0e48-1ca5-487a-ba17-c77b6df26edc',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '722',
    reservedBy: 'mqv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KL',
    bbIn: 'UX',
    timeOut: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '12451993-f2c6-419e-9cbd-ffed229e09af',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clélia',
    room: '934',
    reservedBy: 'rbr',
    bikeFormCompleted: null,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UQ',
    bbIn: 'PP',
    timeOut: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4a763142-d442-4266-b3ef-936be52712a8',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '603',
    reservedBy: 'zej',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SQ',
    bbIn: 'CH',
    timeOut: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '656a1cbb-3550-4407-a36a-57171a101cfa',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Béatrice',
    room: '952',
    reservedBy: 'ijd',
    bikeFormCompleted: null,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FR',
    bbIn: 'GS',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '665eec6a-dcdd-41cb-8a16-b4ebb7c6d222',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '622',
    reservedBy: 'plu',
    bikeFormCompleted: true,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BD',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae79522c-4afb-4d44-96e9-2bcd270fe6a4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélina',
    room: '151',
    reservedBy: 'wki',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TT',
    bbIn: 'BW',
    timeOut: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '809bf91f-7828-406d-8766-fde53d015979',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Edmée',
    room: '487',
    reservedBy: 'asr',
    bikeFormCompleted: false,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AB',
    bbIn: 'HJ',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '921fe662-92ef-4fba-b103-522ba2ae4138',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '723',
    reservedBy: 'sag',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DQ',
    bbIn: 'GK',
    timeOut: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '711874d6-a21d-48ec-b9ee-2f1f2cf7bea3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Clémentine',
    room: '966',
    reservedBy: 'clj',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MH',
    bbIn: 'UH',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'baa34c19-80f3-482b-be00-c1f9286dd1fe',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Yè',
    room: '596',
    reservedBy: 'irg',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: null,
    bbOut: 'BS',
    bbIn: 'TG',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '51daf5ea-39db-40c2-8524-845514f66c8a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Naéva',
    room: '556',
    reservedBy: 'mlm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'OR',
    bbIn: 'KV',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ef62acc1-561d-4539-9305-445dd89fc82f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maéna',
    room: '438',
    reservedBy: 'jyv',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DY',
    bbIn: 'YL',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c2629003-3064-4d9d-9b69-198f9a821222',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïwenn',
    room: '740',
    reservedBy: 'jci',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CD',
    bbIn: 'OY',
    timeOut: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79a4ebf5-0639-482a-8289-cb7197e6a5cf',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léandre',
    room: '022',
    reservedBy: 'xkg',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RX',
    bbIn: 'HR',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3b75411-d401-4001-b97b-cf95a82e7b8f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '977',
    reservedBy: 'aev',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'XV',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22282aca-232c-4c3c-b768-5980756686b3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '503',
    reservedBy: 'nnc',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YU',
    bbIn: 'RH',
    timeOut: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e3042e10-ccdf-4d44-83bf-855a175b1a51',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Laurélie',
    room: '391',
    reservedBy: 'mzg',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YM',
    bbIn: 'VO',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '97ef15eb-4b23-49e3-989b-4f144c22d792',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maï',
    room: '757',
    reservedBy: 'igl',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AA',
    bbIn: 'WJ',
    timeOut: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '67734f10-4365-4c17-9f96-4e5b4020b248',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cunégonde',
    room: '756',
    reservedBy: 'sdb',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BN',
    bbIn: 'HY',
    timeOut: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '258b40c2-4c38-461b-95a0-88704a64e7b1',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Edmée',
    room: '971',
    reservedBy: 'zst',
    bikeFormCompleted: null,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
    bbOut: 'DU',
    bbIn: 'LC',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd9578b1-c7f6-4576-9c78-64aef9ec205e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '504',
    reservedBy: 'qhy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VY',
    bbIn: 'YV',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0c6fc8ba-fc98-4216-9639-b81dc23bd6e7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '092',
    reservedBy: 'egf',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: null,
    bbOut: 'KR',
    bbIn: 'FD',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd4af9302-42da-4376-aef6-1bed8a262abf',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '751',
    reservedBy: 'hwf',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WY',
    bbIn: 'DP',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b277f972-cf03-4069-b982-015b3528af08',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Crééz',
    room: '640',
    reservedBy: 'fml',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JU',
    bbIn: 'CW',
    timeOut: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '775e82a2-c1d5-408f-9b66-6ba2c2cacdf1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '140',
    reservedBy: 'dnt',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MC',
    bbIn: 'QS',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1fd46510-d108-4148-836c-1920ee80ea85',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Léandre',
    room: '048',
    reservedBy: 'dkn',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JH',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9a40cf78-6bb4-43ea-b91d-f5ef5a24f1d3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '202',
    reservedBy: 'afh',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: null,
    bbOut: 'UZ',
    bbIn: 'VX',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '84d5057d-2c7d-4e2b-8c66-859ca75244e3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '314',
    reservedBy: 'qwy',
    bikeFormCompleted: true,
    comments: 'Sed ante.',
    completedAt: null,
    bbOut: 'AO',
    bbIn: 'CQ',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a4081e7-982c-4ffa-b9cb-f3f842914b70',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Françoise',
    room: '175',
    reservedBy: 'neb',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VU',
    bbIn: 'WE',
    timeOut: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fbdd2816-650c-45f1-9518-105e9a7de676',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yè',
    room: '251',
    reservedBy: 'wlv',
    bikeFormCompleted: false,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'HD',
    bbIn: 'FI',
    timeOut: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2af9b9fb-a57a-4f50-ab7f-48be873ce96c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Léandre',
    room: '290',
    reservedBy: 'xmw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'FK',
    timeOut: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8a430850-9e78-4d96-8873-78f3e1e94022',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '122',
    reservedBy: 'juv',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HY',
    bbIn: 'WB',
    timeOut: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ffc0a1da-36c5-482b-bbb8-bf48bc214e01',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëlle',
    room: '506',
    reservedBy: 'jum',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TO',
    bbIn: 'VP',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '55422d25-4421-452b-93e4-99390520396d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Aloïs',
    room: '401',
    reservedBy: 'dqs',
    bikeFormCompleted: null,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QT',
    bbIn: 'VB',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eab3bbe5-a5d5-408e-92c9-6b9389e66c3d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léone',
    room: '641',
    reservedBy: 'ufx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JN',
    bbIn: 'AS',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c87e35d3-4861-4114-9072-336800a782a9',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérénice',
    room: '120',
    reservedBy: 'clf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'IE',
    bbIn: 'KX',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a5f15b88-a129-428d-ba07-3a735a8e423b',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Gwenaëlle',
    room: '992',
    reservedBy: 'ukn',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZK',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f069ebc2-4472-4299-8cfc-87e02623b660',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Nélie',
    room: '830',
    reservedBy: 'nhf',
    bikeFormCompleted: null,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DD',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c349cc32-2af7-4736-a29c-82ecc583f9eb',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '487',
    reservedBy: 'jtc',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RD',
    bbIn: 'YN',
    timeOut: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '40a6a821-fb84-42eb-9780-3ec19ab50111',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '288',
    reservedBy: 'tqf',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'QE',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6c68f141-42a5-43b6-a37b-420ba62017d4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mårten',
    room: '580',
    reservedBy: 'jeo',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: null,
    bbOut: 'AE',
    bbIn: 'WQ',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bcf48a49-5784-43ca-8efd-8cb97483193a',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gaïa',
    room: '492',
    reservedBy: 'cvf',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: null,
    bbOut: 'OQ',
    bbIn: 'OB',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05d15041-da14-48f7-be5d-98db8c9f0258',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '265',
    reservedBy: 'kdc',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DM',
    bbIn: 'YW',
    timeOut: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ccb17030-c9b9-41a4-805b-5804e4487037',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Wá',
    room: '755',
    reservedBy: 'ley',
    bikeFormCompleted: false,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JH',
    bbIn: 'FN',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '16bd43db-8f79-4a8e-ab93-523cf0f3cd39',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '608',
    reservedBy: 'mod',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MX',
    bbIn: 'JK',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '401f559f-e109-42aa-bb84-19347a5cee28',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Ruò',
    room: '192',
    reservedBy: 'wif',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SZ',
    bbIn: 'LL',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a99fd7b7-d354-4e15-a657-eb511c69a7b9',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Athéna',
    room: '857',
    reservedBy: 'clv',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TR',
    bbIn: 'XU',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e1a98eef-25c1-4d65-aa77-3b799e454646',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '751',
    reservedBy: 'gqq',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BK',
    bbIn: 'NS',
    timeOut: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2f38856-0ce5-4864-9004-e5cffcc61b29',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Séréna',
    room: '306',
    reservedBy: 'ace',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AQ',
    bbIn: 'VZ',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cf8f1db6-86f1-4276-822e-f95063f4cd36',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pål',
    room: '973',
    reservedBy: 'hxj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EB',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9ec6f84-a023-4612-bac4-cb921fe1f8a0',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lorène',
    room: '918',
    reservedBy: 'qtx',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DK',
    bbIn: 'OT',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5dc2cf78-e067-4f61-b7f5-2190fac45acd',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '913',
    reservedBy: 'hkj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'LO',
    bbIn: 'SF',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f5ad630-1e2b-4a3f-8f28-f55b5abfe704',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Véronique',
    room: '972',
    reservedBy: 'imf',
    bikeFormCompleted: null,
    comments: 'Fusce consequat.',
    completedAt: null,
    bbOut: 'IJ',
    bbIn: 'MQ',
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
    bikeId: 'd7759159-fb11-4a09-b9f0-dc7b5cf59e31',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Loïs',
    room: '673',
    reservedBy: 'zbk',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NQ',
    bbIn: 'KN',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bd0c0a3a-d4d4-47c9-8616-7d5eccaec2dd',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '300',
    reservedBy: 'lfi',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FG',
    bbIn: 'NI',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88dd5e96-06de-462f-8447-0a92492e3773',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mà',
    room: '700',
    reservedBy: 'ilv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JV',
    bbIn: 'EA',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd3bda171-9f44-4494-b2fe-641c94c16340',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Åsa',
    room: '560',
    reservedBy: 'dxo',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: null,
    bbOut: 'IV',
    bbIn: 'XH',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '54d1ed44-69d1-4e5a-97c3-983bded6f8b1',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Stévina',
    room: '563',
    reservedBy: 'nti',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZJ',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6b42f88-759b-46b3-b2e7-2d155018f1c5',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Garçon',
    room: '371',
    reservedBy: 'twt',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MT',
    bbIn: 'WF',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '687ec828-e457-4eae-a628-1f592faa39b0',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lorène',
    room: '287',
    reservedBy: 'jkw',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
    bbOut: 'NW',
    bbIn: 'FR',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '20770f62-8f08-4ffe-afb7-09219c795a96',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '266',
    reservedBy: 'eml',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JJ',
    bbIn: 'LM',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c2f741d-689c-42dd-82ea-2a9900e2a411',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léonore',
    room: '166',
    reservedBy: 'kon',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WH',
    bbIn: 'VL',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '836451fa-e770-498a-ba1c-c02bfd922ff6',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åke',
    room: '441',
    reservedBy: 'han',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QB',
    bbIn: 'IZ',
    timeOut: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9eb3847-faa8-4fb4-93d9-5e4f62ae48ce',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '910',
    reservedBy: 'uib',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KZ',
    bbIn: 'AJ',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '76bff45c-cbba-46a5-8f25-ccb086c6f92b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruò',
    room: '262',
    reservedBy: 'zsz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TY',
    bbIn: 'FJ',
    timeOut: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c8c7c00-1c07-4315-ae05-48bede5d9913',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maïlis',
    room: '325',
    reservedBy: 'ffa',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'SA',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a03481c-7dc4-45e2-b0d7-277befb7ce4d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Sélène',
    room: '134',
    reservedBy: 'iiz',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VA',
    bbIn: 'HZ',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a808377-5ca8-4a3e-8266-170d2526134b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Loïs',
    room: '798',
    reservedBy: 'uio',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'OR',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3c2b20d6-65e4-424e-b09c-178fc6c847c9',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Médiamass',
    room: '834',
    reservedBy: 'qzz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'DE',
    bbIn: 'DF',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3136ef4-45ba-4990-86f9-4cea96f8c19c',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '589',
    reservedBy: 'hke',
    bikeFormCompleted: null,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GR',
    bbIn: 'ZQ',
    timeOut: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b0b7af36-2d85-4b27-ab86-57f9b707f177',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '682',
    reservedBy: 'fwy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UN',
    bbIn: 'GI',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7f0cd8fa-40bd-44a0-b9de-85ebc475a97c',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Åslög',
    room: '355',
    reservedBy: 'jdo',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PY',
    bbIn: 'IY',
    timeOut: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '93b70c3d-8edd-4639-a5c8-f0a0ef70b252',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lèi',
    room: '249',
    reservedBy: 'usd',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FE',
    bbIn: 'DR',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70559ca0-afbf-488a-8f69-348b0464d2ca',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Andréa',
    room: '475',
    reservedBy: 'hzc',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TF',
    bbIn: 'WG',
    timeOut: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b88aa6f-649d-4a73-898b-efeeb91a291b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Edmée',
    room: '707',
    reservedBy: 'kot',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'XF',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8afcf40-7b5f-4f2c-80c9-11429f3f2461',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '577',
    reservedBy: 'xvo',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VS',
    bbIn: 'OX',
    timeOut: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd57de29d-1f7f-4274-ac88-08cc8b80b86e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lyséa',
    room: '152',
    reservedBy: 'bqo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('08/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TE',
    bbIn: 'SC',
    timeOut: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '27ba0589-f603-4e35-b7f5-d6318de74071',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lóng',
    room: '700',
    reservedBy: 'igf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SV',
    bbIn: 'FV',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64aa179e-e564-4981-ae9c-cc87af5c0367',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Adélie',
    room: '340',
    reservedBy: 'wlu',
    bikeFormCompleted: false,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'US',
    bbIn: 'VF',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c29fea68-d423-4aa5-a6c5-7581d40ee9d0',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlle',
    room: '816',
    reservedBy: 'szb',
    bikeFormCompleted: true,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZY',
    bbIn: 'IF',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8b528342-717c-41e8-be1d-82d5f3e3faa8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécilia',
    room: '980',
    reservedBy: 'jhj',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RQ',
    bbIn: 'UE',
    timeOut: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f0d6ef05-afa3-469c-b889-476273fd2b32',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélène',
    room: '842',
    reservedBy: 'app',
    bikeFormCompleted: true,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: null,
    bbOut: 'SM',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c7cc561-bfcf-4ef5-89cc-408d84414a7e',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marylène',
    room: '101',
    reservedBy: 'fan',
    bikeFormCompleted: false,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TW',
    bbIn: 'RY',
    timeOut: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c766101-57b7-4c7a-ac48-f28a71ca56f0',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Maïlis',
    room: '894',
    reservedBy: 'inp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'VD',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5b318ee8-397d-4ee2-9827-06d7a9f33cc5',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Danièle',
    room: '002',
    reservedBy: 'muk',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: null,
    bbOut: 'SQ',
    bbIn: 'RQ',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '81eb89e7-7fbf-4b33-8572-d3bdba5bc5ed',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kévina',
    room: '495',
    reservedBy: 'gmk',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NG',
    bbIn: 'SZ',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd43fad33-a1f5-42b8-abdb-33a264bfe72d',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mélys',
    room: '397',
    reservedBy: 'crb',
    bikeFormCompleted: false,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
    bbOut: 'CJ',
    bbIn: 'GT',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3e0678bc-3831-428c-8cc3-3fa26e32b10f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '945',
    reservedBy: 'mal',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KS',
    bbIn: 'VN',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '49b03c9f-47af-4fd5-b8a8-4148c84a4b22',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '447',
    reservedBy: 'nnj',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FC',
    bbIn: 'DA',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dc095e10-5c5e-43df-8a66-d02a53e58e7f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '989',
    reservedBy: 'vfn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YR',
    bbIn: 'EF',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0bbc165f-4bb6-47fe-928b-93582216a73b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '719',
    reservedBy: 'fca',
    bikeFormCompleted: null,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FO',
    bbIn: 'PZ',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2f812bea-2aad-4363-af4c-686053a0cab2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Torbjörn',
    room: '734',
    reservedBy: 'zuj',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BN',
    bbIn: 'FR',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'eddefbe7-b2c8-4c1c-a8a4-5328de2ba4dd',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Joséphine',
    room: '626',
    reservedBy: 'wyz',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DS',
    bbIn: 'CK',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '64f96073-f6b5-48bc-b4eb-b4c78b60fb7c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mà',
    room: '266',
    reservedBy: 'cik',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IH',
    bbIn: 'LJ',
    timeOut: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b9a24063-258d-4c40-bbe0-289ee5141450',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léandre',
    room: '068',
    reservedBy: 'kep',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HS',
    bbIn: 'MS',
    timeOut: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b846e097-7d5b-4c31-8347-268328b114aa',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Michèle',
    room: '853',
    reservedBy: 'esj',
    bikeFormCompleted: null,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SL',
    bbIn: 'IV',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47fab5cb-7276-4f45-ab33-ec5ebde710bf',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïté',
    room: '918',
    reservedBy: 'hun',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CD',
    bbIn: 'OQ',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9e38dbdf-e549-4eb7-9057-185b783fc153',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '504',
    reservedBy: 'zkf',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: null,
    bbOut: 'NQ',
    bbIn: 'WK',
    timeOut: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '825ec3b3-fd53-4cc1-a21d-9d6f229a7a54',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Andréanne',
    room: '371',
    reservedBy: 'ujl',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'QK',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a02c9957-a737-4671-bd34-7ea39ce46fcf',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '524',
    reservedBy: 'bev',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CU',
    bbIn: 'SN',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '991ebe71-1d0c-4298-ba23-488ebc72751b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '230',
    reservedBy: 'wrw',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FU',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2aa6aadc-0bbf-4507-b758-7d14c74edabd',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléa',
    room: '268',
    reservedBy: 'pnp',
    bikeFormCompleted: false,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AI',
    bbIn: 'WD',
    timeOut: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c862f6e0-2aae-4027-a06f-2a6bcf72780a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélys',
    room: '985',
    reservedBy: 'lux',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GD',
    bbIn: 'RR',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '97099352-4d65-430b-8570-4678906e9169',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '358',
    reservedBy: 'cqw',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KK',
    bbIn: 'OV',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e948988f-d9db-4832-ab8b-f5e55d7bf210',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Stéphanie',
    room: '691',
    reservedBy: 'bzw',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NK',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6db43227-925d-47a9-95d8-321fc54468f6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '880',
    reservedBy: 'hke',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QK',
    bbIn: 'XQ',
    timeOut: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '92c3d7ec-5be0-49be-a967-b36d0f3dd16a',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Angélique',
    room: '405',
    reservedBy: 'uys',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OR',
    bbIn: 'NJ',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd8186a84-ad73-4383-8392-7dcfe1a761ef',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Anaïs',
    room: '524',
    reservedBy: 'ulg',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WQ',
    bbIn: 'HM',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ddd98ada-0653-4bd7-9e67-1fe8bb6cdcd8',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '766',
    reservedBy: 'xyt',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PV',
    bbIn: 'FD',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e32c3942-943f-49a2-982a-85592ad41c51',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Bérangère',
    room: '882',
    reservedBy: 'wkn',
    bikeFormCompleted: false,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GD',
    bbIn: 'NU',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '548cf062-17a4-4d09-987c-0e12665ea268',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rachèle',
    room: '179',
    reservedBy: 'fju',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JS',
    bbIn: 'JL',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1d369f72-d933-4539-9299-83a1c8f6f0d5',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Lyséa',
    room: '159',
    reservedBy: 'cra',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PG',
    bbIn: 'GW',
    timeOut: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f4661db8-f641-4128-b024-7d0e6cf90468',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Åsa',
    room: '182',
    reservedBy: 'cpt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KA',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5467cdfa-0283-48d3-837f-1e6fc91c08e4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Börje',
    room: '772',
    reservedBy: 'tyr',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HC',
    bbIn: 'NK',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3d016b4d-49f6-4646-8ba8-29031b384d7f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océanne',
    room: '226',
    reservedBy: 'ghy',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AK',
    bbIn: 'RZ',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8928d67b-8b67-4e62-810a-898db31dbbc8',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Annotés',
    room: '354',
    reservedBy: 'qsk',
    bikeFormCompleted: false,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RV',
    bbIn: 'FG',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82695d8d-ab88-4aa6-8d35-207cb620d9df',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kù',
    room: '711',
    reservedBy: 'uem',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UO',
    bbIn: 'GN',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8f6aa7e-850f-4feb-ba7d-f5263440703e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Séverine',
    room: '060',
    reservedBy: 'wju',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZR',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5afd7cbe-48d2-4684-a7ea-64ea906f60bc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '581',
    reservedBy: 'qsz',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: null,
    bbOut: 'TB',
    bbIn: 'NE',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '870d3656-5597-44d6-927c-0e632f93d047',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '636',
    reservedBy: 'fah',
    bikeFormCompleted: true,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YI',
    bbIn: 'BU',
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
    bikeId: '849cf6ba-ed12-4ec9-b803-5ca5b70100d1',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ruì',
    room: '285',
    reservedBy: 'leo',
    bikeFormCompleted: null,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YA',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2267a8c-1062-4f6b-8afc-cc6453545e31',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Göran',
    room: '959',
    reservedBy: 'dbu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'OG',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '08a328f5-2c7f-453e-bfb3-4cd3da246241',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '264',
    reservedBy: 'yih',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CM',
    bbIn: 'CL',
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
    bikeId: 'e1ca2c1f-57b1-4395-8494-61fd0d4e6712',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '685',
    reservedBy: 'upm',
    bikeFormCompleted: true,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MN',
    bbIn: 'NP',
    timeOut: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2ef98925-0922-4881-9e65-7a836bc0dfbb',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '498',
    reservedBy: 'dtt',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OI',
    bbIn: 'AE',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fd758b1c-88a0-4eca-b2e8-b5eb9982a02d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '223',
    reservedBy: 'zyq',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IK',
    bbIn: 'ZB',
    timeOut: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4760b5d7-2741-4e08-ab34-a666fa2e1f5c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '697',
    reservedBy: 'hzp',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('05/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RD',
    bbIn: 'KU',
    timeOut: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c62c88a-0d0f-43ae-81cb-93671a06ec6f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Nélie',
    room: '686',
    reservedBy: 'wrc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HO',
    bbIn: 'ML',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4cbb19a-1f40-4ce1-8a79-cf67d5127d9c',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Erwéi',
    room: '442',
    reservedBy: 'odn',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: null,
    bbOut: 'IZ',
    bbIn: 'BT',
    timeOut: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '79f34799-04cb-4e3a-a010-81b8ea86cbe5',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Pò',
    room: '460',
    reservedBy: 'bnq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SC',
    bbIn: 'FH',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f2c071f-fe8a-4726-b85a-b2db316612ae',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '723',
    reservedBy: 'olz',
    bikeFormCompleted: null,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: null,
    bbOut: 'GZ',
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
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '94c98d56-d1a9-41ed-ab8b-ff54bc71b585',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Réservés',
    room: '502',
    reservedBy: 'lwf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XN',
    bbIn: 'HH',
    timeOut: new Date(
      new Date('02/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'db9d8fe7-054c-4c72-99e7-bcb8364fa0b7',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Illustrée',
    room: '734',
    reservedBy: 'zlf',
    bikeFormCompleted: false,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: null,
    bbOut: 'XW',
    bbIn: 'CU',
    timeOut: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6fd549a8-b562-4611-bf01-cef4c1a1ae0d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '847',
    reservedBy: 'cjo',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YC',
    bbIn: 'FS',
    timeOut: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34ea20d3-be50-4cfc-a58c-438443d0070d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Agnès',
    room: '162',
    reservedBy: 'rzn',
    bikeFormCompleted: true,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YW',
    bbIn: 'EU',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '80834dd8-1191-421c-8999-540289264a7b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Märta',
    room: '149',
    reservedBy: 'kth',
    bikeFormCompleted: null,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DH',
    bbIn: 'YQ',
    timeOut: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6249bb44-3930-41ca-9e37-ef50f71fd80b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèsa',
    room: '963',
    reservedBy: 'lzw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'XS',
    bbIn: 'TL',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '21f0d8a2-16bf-49b4-9821-585cb723532a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaétane',
    room: '761',
    reservedBy: 'anj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CS',
    bbIn: 'CL',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b13f747c-7546-4a48-a114-680029f6dade',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Gisèle',
    room: '858',
    reservedBy: 'etk',
    bikeFormCompleted: null,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: null,
    bbOut: 'KW',
    bbIn: 'TR',
    timeOut: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6475a263-15e1-47e3-b9f2-f94c789156b2',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '218',
    reservedBy: 'pke',
    bikeFormCompleted: false,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
    bbOut: 'SV',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42723bc5-de8e-4722-9eb5-b6d48ad74247',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Léonore',
    room: '917',
    reservedBy: 'cez',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'YI',
    timeOut: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3d85fcb8-3b6d-48d6-bb48-233fa8614f6a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('08/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aloïs',
    room: '835',
    reservedBy: 'pnw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FZ',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f3e4c9c3-1970-48e8-bfd0-aeafd2a89d1b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëly',
    room: '578',
    reservedBy: 'rbg',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SD',
    bbIn: 'PS',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34882c27-3f23-47b2-add6-2d6d02b56737',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pò',
    room: '499',
    reservedBy: 'wpp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VM',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bd30e209-05ff-4a3b-908e-579153379436',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eliès',
    room: '927',
    reservedBy: 'zgg',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: null,
    bbOut: 'KD',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '065da2cb-6cf1-4896-a931-12e48d959cff',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '181',
    reservedBy: 'vxy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AN',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6eb5a027-6327-4558-ae64-e93b274f87dd',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gaïa',
    room: '030',
    reservedBy: 'zln',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RD',
    bbIn: 'GV',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bd1d68c-aa2d-4bc3-b145-fbd56d50d9b2',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Daphnée',
    room: '058',
    reservedBy: 'iit',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SU',
    bbIn: 'LC',
    timeOut: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c8cb494-76e2-4cdd-8bf6-0e5266668cd6',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélys',
    room: '913',
    reservedBy: 'iyx',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: null,
    bbOut: 'BP',
    bbIn: 'KJ',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8faa73e9-ac07-4c02-90e9-0fdb0051a923',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '514',
    reservedBy: 'lca',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SB',
    bbIn: 'JY',
    timeOut: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'dadc6856-6f50-4fd2-a7ed-d0a789209122',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Véronique',
    room: '483',
    reservedBy: 'lxu',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: null,
    bbOut: 'AZ',
    bbIn: 'DN',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f554085a-0a52-49d6-aaad-73abb81bc3b6',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aloïs',
    room: '811',
    reservedBy: 'bnj',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LT',
    bbIn: 'BS',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1696df0e-d0f6-43c9-8a28-f83b9f7e9e86',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Adèle',
    room: '396',
    reservedBy: 'wxt',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YK',
    bbIn: 'TO',
    timeOut: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a9394005-643e-4a94-87ee-a37d866a3d99',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '285',
    reservedBy: 'ook',
    bikeFormCompleted: true,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DP',
    bbIn: 'ID',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4124c6c-029e-440e-b850-59f8a974ba9a',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mylène',
    room: '633',
    reservedBy: 'ddb',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: null,
    bbOut: 'UJ',
    bbIn: 'ND',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd38cc8a4-d078-455b-b2b7-8a09014bb895',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mà',
    room: '030',
    reservedBy: 'xoe',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NJ',
    bbIn: 'JA',
    timeOut: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1c896c6a-cd71-4e02-8b5a-23738439c2ef',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Régine',
    room: '661',
    reservedBy: 'ljo',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZY',
    bbIn: 'BL',
    timeOut: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7fa27879-387a-4905-a958-6d3603905153',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Océanne',
    room: '766',
    reservedBy: 'zik',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LA',
    bbIn: 'DT',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ffab6e78-7104-4a82-83dd-f88bd07ece34',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Lóng',
    room: '107',
    reservedBy: 'kwh',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: null,
    bbOut: 'YQ',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5250da86-2c27-44e7-a03b-efcdcbd45c31',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Néhémie',
    room: '445',
    reservedBy: 'sfe',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NJ',
    bbIn: 'DV',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fbeb1666-f75a-4e2c-8d68-51685305d4d5',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '540',
    reservedBy: 'lbh',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AK',
    bbIn: 'QF',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c124df36-4c2b-4f61-bd5a-cb8e96f11c84',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mahélie',
    room: '271',
    reservedBy: 'wjv',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'RN',
    timeOut: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '58c23ebc-8524-4984-8b99-113d6ee42595',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Erwéi',
    room: '103',
    reservedBy: 'vap',
    bikeFormCompleted: null,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VL',
    bbIn: 'BO',
    timeOut: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6e683e34-19ac-4dc6-8bb1-eb6a4cb8328c',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Bérangère',
    room: '675',
    reservedBy: 'akd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CG',
    bbIn: 'VT',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fdbf3202-f454-420d-bd5e-19042fb2d6da',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-thérèse',
    room: '247',
    reservedBy: 'iza',
    bikeFormCompleted: true,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SQ',
    bbIn: 'ST',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0883794-bce8-4d9b-a58b-b1effea57644',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Rachèle',
    room: '519',
    reservedBy: 'xju',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PH',
    bbIn: 'TT',
    timeOut: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6e51da6-b872-4e1a-b8f5-9de218a38b03',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Nélie',
    room: '194',
    reservedBy: 'rqr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'NU',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2bfad6bc-4447-43fd-ab46-b57496844206',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Pò',
    room: '976',
    reservedBy: 'lfk',
    bikeFormCompleted: true,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('06/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZC',
    bbIn: 'UQ',
    timeOut: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '98f5b1ab-5155-4575-8b7b-93ca2306e4df',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Salomé',
    room: '393',
    reservedBy: 'aeo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'PO',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8f616c94-52f8-41a4-9c09-e22f9074c607',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Uò',
    room: '230',
    reservedBy: 'hpc',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZO',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce806525-b258-4a1e-956f-ee254b7fb155',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Séverine',
    room: '025',
    reservedBy: 'syx',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YT',
    bbIn: 'NA',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '48346816-50ee-41f5-8f81-75769808cf8b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maïté',
    room: '008',
    reservedBy: 'dsu',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'AA',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '07bda008-a75e-4292-917b-95f9de8e0bd4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marylène',
    room: '274',
    reservedBy: 'ejp',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WW',
    bbIn: 'LN',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '679e9e4d-9964-4226-a74f-86c574d8955e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Görel',
    room: '527',
    reservedBy: 'rok',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GS',
    bbIn: 'PI',
    timeOut: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5d15b72-80b2-428d-a685-c53772c1f321',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélinda',
    room: '032',
    reservedBy: 'ubv',
    bikeFormCompleted: false,
    comments: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: null,
    bbOut: 'FD',
    bbIn: 'EJ',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '85123078-a975-48ed-87f6-38709ba7d5ed',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Estée',
    room: '108',
    reservedBy: 'van',
    bikeFormCompleted: null,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HN',
    bbIn: 'SK',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3bc6d69a-fc01-4252-ab2b-678337ac5e4b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonore',
    room: '600',
    reservedBy: 'qfp',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OJ',
    bbIn: 'VY',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4b54e9df-0a0c-4fca-b7ab-eb969ac86789',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angèle',
    room: '734',
    reservedBy: 'xxn',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VR',
    bbIn: 'IU',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a3f3e469-46f1-4b30-8323-8e37c6186214',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Kallisté',
    room: '994',
    reservedBy: 'ich',
    bikeFormCompleted: null,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EY',
    bbIn: 'PB',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '15ac00e6-ff1e-463c-af50-bd7e3c5a022e',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Dà',
    room: '774',
    reservedBy: 'kzz',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TC',
    bbIn: 'TA',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c16db31a-7b7e-47e4-b7c6-29357ce4fa98',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Yénora',
    room: '613',
    reservedBy: 'nqm',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'NV',
    bbIn: 'IL',
    timeOut: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '21ccdb3c-40dd-45f3-badc-e98404651a8b',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Desirée',
    room: '111',
    reservedBy: 'gte',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
    bbOut: 'CF',
    bbIn: 'AM',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '901a0dae-092b-4990-8e27-af2390b618b2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Stévina',
    room: '022',
    reservedBy: 'qrf',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IV',
    bbIn: 'SV',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac132bb4-d60c-437c-8a90-d8599948e2d0',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Michèle',
    room: '847',
    reservedBy: 'jmw',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: null,
    bbOut: 'HY',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6fb830f5-5e5a-4c67-b327-7b48ae3ccae6',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pélagie',
    room: '663',
    reservedBy: 'bup',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VT',
    bbIn: 'TE',
    timeOut: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/23/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '10ef17c9-3f37-4da1-9123-13de96222ee5',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mélina',
    room: '592',
    reservedBy: 'nry',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MV',
    bbIn: 'ZU',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '238c2dd0-9f91-4bcc-99a7-2d5213c2e3bd',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Östen',
    room: '472',
    reservedBy: 'zbk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'IM',
    bbIn: 'BK',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7b5635b3-1df6-41e8-8637-e87f4575e0d4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Desirée',
    room: '944',
    reservedBy: 'eoc',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RE',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '571f96d5-1551-4160-bd73-370103e105bf',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '368',
    reservedBy: 'xbe',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LL',
    bbIn: 'SE',
    timeOut: new Date(
      new Date('12/12/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '922bdaa1-8cbb-492a-a287-2f3f7093ced1',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Salomé',
    room: '098',
    reservedBy: 'qyg',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: null,
    bbOut: 'LH',
    bbIn: 'CZ',
    timeOut: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '691d6d13-9e70-4c19-b84e-f3c2c470de55',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Göran',
    room: '941',
    reservedBy: 'uaw',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WF',
    bbIn: 'XK',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e14e6bfe-d472-43f0-b72b-c8a23ca50d63',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '173',
    reservedBy: 'ivc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
    bbOut: 'TM',
    bbIn: 'PE',
    timeOut: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1804edcb-5fb1-4b3b-aad7-b0f085f5edcf',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marie-josée',
    room: '609',
    reservedBy: 'zun',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: null,
    bbOut: 'ME',
    bbIn: 'LF',
    timeOut: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cecdefb9-6335-436e-bfbf-01f1a8de8774',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Wá',
    room: '234',
    reservedBy: 'rfp',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PV',
    bbIn: 'ID',
    timeOut: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1be9d7f7-a4f5-48f3-8d12-fc1df7617fca',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Noémie',
    room: '718',
    reservedBy: 'fxb',
    bikeFormCompleted: false,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
    bbOut: 'JA',
    bbIn: 'TA',
    timeOut: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fb8abfe4-3560-470a-b4ab-ecfa12a78b7c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '099',
    reservedBy: 'cna',
    bikeFormCompleted: null,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CR',
    bbIn: 'RG',
    timeOut: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8c94e81b-1e7e-4c35-add0-1a920915860e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Loïca',
    room: '030',
    reservedBy: 'rzv',
    bikeFormCompleted: true,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XT',
    bbIn: 'QF',
    timeOut: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c6fd0a6-7ee6-499e-9485-410a52bf70dc',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Erwéi',
    room: '824',
    reservedBy: 'fji',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VF',
    bbIn: 'SZ',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f973ffbc-001e-4b6e-975b-9eedbf5a01fe',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Vénus',
    room: '241',
    reservedBy: 'jxw',
    bikeFormCompleted: true,
    comments: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AJ',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('06/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0247a325-2cdd-45ef-b484-7d51bfb2457d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Yè',
    room: '042',
    reservedBy: 'ckb',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'CY',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '30710854-9ca5-4150-be07-916d91678e04',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Noémie',
    room: '404',
    reservedBy: 'ekl',
    bikeFormCompleted: null,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HD',
    bbIn: 'VM',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '50b9b2e1-18a1-4ea7-bb15-7ffc419b50fa',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Fèi',
    room: '687',
    reservedBy: 'lll',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LV',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6a5b10a5-4c68-4bda-b513-47c153c5f3e8',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Naëlle',
    room: '450',
    reservedBy: 'xlk',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EF',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd70882e1-2214-4c5d-8ac1-e765ff9811eb',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Andréanne',
    room: '879',
    reservedBy: 'fus',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RP',
    bbIn: 'JC',
    timeOut: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01362474-b581-43f9-9781-40255a648b91',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('08/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '244',
    reservedBy: 'uht',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FS',
    bbIn: 'VF',
    timeOut: new Date(
      new Date('07/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd30eff4d-bcfb-4a8e-a591-ebd876f7bc24',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méryl',
    room: '293',
    reservedBy: 'vak',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KV',
    bbIn: 'RO',
    timeOut: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f55bd571-b68b-4a28-b3bc-f023255eec09',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Solène',
    room: '227',
    reservedBy: 'rhy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LG',
    bbIn: 'CN',
    timeOut: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '086b7c63-08ac-4efb-a6b7-9f5cb7b1c8fc',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '241',
    reservedBy: 'ntm',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: null,
    bbOut: 'NI',
    bbIn: 'JG',
    timeOut: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bba670ea-2fe8-4ca0-b881-0e5cf9c20f8f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lucrèce',
    room: '988',
    reservedBy: 'qkr',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KR',
    bbIn: 'RJ',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '875d1501-8627-4245-9c03-361daa20c9e2',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Valérie',
    room: '271',
    reservedBy: 'slq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'QW',
    bbIn: 'TI',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '35260d1b-51e8-4bfb-8ec5-1908111b3a31',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Gérald',
    room: '394',
    reservedBy: 'gwc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DX',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '88b75f27-a83a-4b25-afbd-8c470b0c312f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '623',
    reservedBy: 'cax',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GE',
    bbIn: 'AK',
    timeOut: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '42f1d1c8-e4ec-46d1-9620-00170d709d04',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dorothée',
    room: '574',
    reservedBy: 'ars',
    bikeFormCompleted: true,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QO',
    bbIn: 'BY',
    timeOut: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce09c174-2005-409c-826a-57f77ac7c3de',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Yè',
    room: '973',
    reservedBy: 'vxt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'FB',
    timeOut: new Date(
      new Date('12/04/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/05/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '00c0f6ce-e2f8-4629-b83c-55cb8aaeb85e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Rébecca',
    room: '335',
    reservedBy: 'usy',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OQ',
    bbIn: 'TF',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '151a83f3-d7d4-47f6-9bee-076e650f6929',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Märta',
    room: '164',
    reservedBy: 'myr',
    bikeFormCompleted: false,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZX',
    bbIn: 'VY',
    timeOut: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c290fa33-0849-4805-88c3-7a1dcf00b394',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '525',
    reservedBy: 'dfb',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UO',
    bbIn: 'II',
    timeOut: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5cc4ff76-a790-4762-a6e0-784422794ffb',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Intéressant',
    room: '377',
    reservedBy: 'xjw',
    bikeFormCompleted: false,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WH',
    bbIn: 'PL',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f6158fa-0a89-4c51-b224-77a60ebd2ae6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '571',
    reservedBy: 'jmo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'DG',
    bbIn: 'KR',
    timeOut: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/17/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f67d5cdc-cf1f-40b2-a2ec-7ef73e14f509',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '037',
    reservedBy: 'maf',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('06/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'TN',
    timeOut: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c12bd6dd-9459-48b9-a840-aa0a77888459',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-noël',
    room: '050',
    reservedBy: 'sid',
    bikeFormCompleted: true,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PO',
    bbIn: 'CI',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fa448d0b-834f-41d3-b1dd-14f10df9a4b0',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Loïca',
    room: '398',
    reservedBy: 'hrd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BE',
    bbIn: 'LR',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a7ef8a45-50e2-4960-b740-489ff3de4718',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léandre',
    room: '618',
    reservedBy: 'uby',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WU',
    bbIn: 'XA',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '33aeaff4-ff28-4e3c-96f5-c6a8d7dbc029',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stévina',
    room: '091',
    reservedBy: 'uth',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: null,
    bbOut: 'KM',
    bbIn: 'FA',
    timeOut: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0d291c2a-fa7e-4800-8cbd-319da6f61c86',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Eugénie',
    room: '756',
    reservedBy: 'ity',
    bikeFormCompleted: false,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DH',
    bbIn: 'VI',
    timeOut: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '287e56f8-865f-4f20-b35d-b356e93daac3',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Célestine',
    room: '422',
    reservedBy: 'mqm',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'IH',
    bbIn: 'NC',
    timeOut: new Date(
      new Date('03/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '04c701ff-2d29-4f3d-86da-01d05c2ba971',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lén',
    room: '916',
    reservedBy: 'gki',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UW',
    bbIn: 'ZD',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b605a771-6879-4663-a3c7-5729ebb8659b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yè',
    room: '075',
    reservedBy: 'gvh',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CP',
    bbIn: 'MY',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c051a187-7d2e-4389-9daf-45b5506d3173',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Pélagie',
    room: '032',
    reservedBy: 'rmk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'XH',
    bbIn: 'DO',
    timeOut: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6199c99d-dfa5-46ff-af48-e72c7c44088e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Noémie',
    room: '271',
    reservedBy: 'kyo',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('05/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KK',
    bbIn: 'LP',
    timeOut: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '032fb34c-4285-4204-a699-ac9f953ac344',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '095',
    reservedBy: 'sns',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ET',
    bbIn: 'RD',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cd2aa30f-12d4-4fff-8c66-7dba915d5ec4',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '271',
    reservedBy: 'zrc',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DL',
    bbIn: 'NO',
    timeOut: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4b4d1fc3-804f-47d4-a609-1ba03b8ba97b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Frédérique',
    room: '322',
    reservedBy: 'hjz',
    bikeFormCompleted: null,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DH',
    bbIn: 'XD',
    timeOut: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c7623b23-6ba1-49ad-8d3a-e94d41057330',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méthode',
    room: '652',
    reservedBy: 'nrs',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('08/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JS',
    bbIn: 'QO',
    timeOut: new Date(
      new Date('07/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a03b58d9-0b5f-4698-9801-c1fbf3929be7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélodie',
    room: '407',
    reservedBy: 'ucx',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd78b46b4-9348-41a1-86af-c05c1d6e3822',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Félicie',
    room: '170',
    reservedBy: 'pph',
    bikeFormCompleted: false,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: null,
    bbOut: 'WC',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2075b070-712b-4f24-8ac9-32c1e4c65f91',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Daphnée',
    room: '143',
    reservedBy: 'yar',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: null,
    bbOut: 'PB',
    bbIn: 'EG',
    timeOut: new Date(
      new Date('03/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c786cf7e-cb33-4e6b-8132-03e09618fe1e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Nélie',
    room: '923',
    reservedBy: 'itv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LP',
    bbIn: 'EX',
    timeOut: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0137bb1b-eb0a-48d0-9663-32c3bd48fc83',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yáo',
    room: '886',
    reservedBy: 'svj',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: null,
    bbOut: 'LH',
    bbIn: 'GW',
    timeOut: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '05f420fa-2b4c-435e-8fb3-2dd1c665a207',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélodie',
    room: '293',
    reservedBy: 'vfl',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EA',
    bbIn: 'OD',
    timeOut: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a08a4c6-a02f-447d-adb0-06824770aae1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Táng',
    room: '146',
    reservedBy: 'zoz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VW',
    bbIn: 'JX',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1245c9c8-9e0e-4b14-a920-100d7350cb91',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Daphnée',
    room: '106',
    reservedBy: 'ikp',
    bikeFormCompleted: false,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: null,
    bbOut: 'HK',
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
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '60b5188b-2bc2-4b26-ae62-6a4849ad38ec',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '039',
    reservedBy: 'fqm',
    bikeFormCompleted: false,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OG',
    bbIn: 'VH',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e7fead37-3111-4ba5-9b2d-1858a6969c41',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-josée',
    room: '630',
    reservedBy: 'ohd',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WZ',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7af3901a-d9d2-43af-876c-3926d8bb6364',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Sélène',
    room: '198',
    reservedBy: 'msr',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GU',
    bbIn: 'DZ',
    timeOut: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b83ecbc8-5da8-453c-a746-91828ebe3809',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Océane',
    room: '859',
    reservedBy: 'vvb',
    bikeFormCompleted: false,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DM',
    bbIn: 'BL',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '25314130-2317-4b97-9cac-3d4b2f4bee31',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Uò',
    room: '643',
    reservedBy: 'abf',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JG',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c5e9af75-df1c-4f72-873b-e2e8cbd66cf0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Kuí',
    room: '276',
    reservedBy: 'myg',
    bikeFormCompleted: false,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: null,
    bbOut: 'TN',
    bbIn: 'IP',
    timeOut: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6bc0ad76-2184-4927-821a-2daa1960eb2d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Tán',
    room: '599',
    reservedBy: 'pwk',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: null,
    bbOut: 'VE',
    bbIn: 'SR',
    timeOut: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '827a8ebd-639b-48ce-b9fc-398235f6074a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '842',
    reservedBy: 'zxu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'SK',
    bbIn: 'VP',
    timeOut: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '81ddc1b3-2c57-4f7a-8f3d-c6a75e1f0c9d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaïs',
    room: '422',
    reservedBy: 'geq',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JW',
    bbIn: 'PD',
    timeOut: new Date(
      new Date('12/28/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/29/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '471d04a9-63d2-4570-befd-d8c3baef7ba4',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '033',
    reservedBy: 'sck',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BP',
    bbIn: 'MB',
    timeOut: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd1de8a07-02c9-4894-8489-1208bb103253',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mélina',
    room: '848',
    reservedBy: 'azc',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UT',
    bbIn: 'FE',
    timeOut: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fc07ab89-a058-4e8f-822d-b49aaa15d10d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('07/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '493',
    reservedBy: 'vhz',
    bikeFormCompleted: null,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'MW',
    bbIn: 'WK',
    timeOut: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '18fdfc31-0953-4282-997a-7ef9733df36b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Judicaël',
    room: '296',
    reservedBy: 'rpy',
    bikeFormCompleted: false,
    comments: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KE',
    bbIn: 'HM',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '38af8175-3ae1-404a-88ec-80612e975551',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Crééz',
    room: '130',
    reservedBy: 'dbs',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DF',
    bbIn: 'BC',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f1f99df0-c253-4dc7-85ad-8291cb5bdc63',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mén',
    room: '124',
    reservedBy: 'tbv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'HQ',
    bbIn: 'PG',
    timeOut: new Date(
      new Date('02/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b27699f6-1008-4e8b-bd0a-fb45f28f679f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maïlys',
    room: '979',
    reservedBy: 'jog',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TN',
    bbIn: 'GP',
    timeOut: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '16a25dbf-1b5f-44ed-8b93-b17388cee135',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '609',
    reservedBy: 'fqi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NF',
    bbIn: 'WO',
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
    bikeId: 'af9d98af-75ac-4094-b0de-070263fa06bc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-thérèse',
    room: '163',
    reservedBy: 'uoj',
    bikeFormCompleted: false,
    comments: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HH',
    bbIn: 'DL',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f4cdb827-e991-4cdd-9050-fc25db6efab5',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Océanne',
    room: '695',
    reservedBy: 'enm',
    bikeFormCompleted: false,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: null,
    bbOut: 'KZ',
    bbIn: 'HN',
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
    bikeId: '401bbc57-a7ce-4668-bf88-aed1eb0c68aa',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Miléna',
    room: '324',
    reservedBy: 'kwh',
    bikeFormCompleted: null,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HT',
    bbIn: 'MH',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'cb919f2f-6d94-4de1-ba6c-0b2dfb19cd5c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaëlle',
    room: '878',
    reservedBy: 'vre',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XI',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b1824269-641a-4d19-9018-3ea5b6b70c9f',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Pò',
    room: '815',
    reservedBy: 'psh',
    bikeFormCompleted: false,
    comments: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SJ',
    bbIn: 'MY',
    timeOut: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ac82ccd8-31c9-4ecf-b0a2-d5c82bfe34bd',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Desirée',
    room: '986',
    reservedBy: 'xeu',
    bikeFormCompleted: null,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('04/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DU',
    bbIn: 'HT',
    timeOut: new Date(
      new Date('03/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b5a97f19-a908-4db5-b49e-d5ef75ac32a4',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Réservés',
    room: '169',
    reservedBy: 'dqk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PA',
    bbIn: 'ZR',
    timeOut: new Date(
      new Date('01/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c625c742-a561-40c0-bd13-a252f3a896af',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '337',
    reservedBy: 'std',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SS',
    bbIn: 'SK',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e9c1071-2140-4f8a-bf64-45892b1b93f6',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léone',
    room: '264',
    reservedBy: 'jmg',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: null,
    bbOut: 'ZW',
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
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9d611a6-44b0-44c5-b96d-47d7d8db16e3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Tán',
    room: '250',
    reservedBy: 'jzd',
    bikeFormCompleted: false,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('07/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HG',
    bbIn: 'KP',
    timeOut: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '191006fe-8121-4e75-8ae8-f8d4de1a5e7d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Géraldine',
    room: '768',
    reservedBy: 'gkn',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZQ',
    bbIn: 'OU',
    timeOut: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c3044169-4819-4594-b1ac-57a81f4ae670',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('03/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '671',
    reservedBy: 'sbt',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZM',
    bbIn: 'WV',
    timeOut: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '7aae3f5b-ff91-423a-9383-ec1295859893',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-thérèse',
    room: '903',
    reservedBy: 'oaz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EW',
    bbIn: 'IF',
    timeOut: new Date(
      new Date('03/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4d123942-7288-4c43-bd18-97a1cea12966',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurène',
    room: '826',
    reservedBy: 'yym',
    bikeFormCompleted: null,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SL',
    bbIn: 'XX',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c25008c1-0960-4535-af68-3b92823cb153',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('02/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-françoise',
    room: '849',
    reservedBy: 'mrc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'AD',
    bbIn: 'XO',
    timeOut: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '82b76c6f-4636-4d6a-95d6-6dea55e220b0',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Géraldine',
    room: '759',
    reservedBy: 'uva',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZU',
    bbIn: 'ZU',
    timeOut: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '02c8f265-4c85-49a5-b90d-12ed9e955e88',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eugénie',
    room: '573',
    reservedBy: 'nge',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'MY',
    bbIn: 'AG',
    timeOut: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '329a9564-89d2-4a94-8c33-c401f0c7c2d6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('02/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérénice',
    room: '273',
    reservedBy: 'obf',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FX',
    bbIn: 'DX',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a728f013-22f6-482e-82e0-0a2049d2a0c3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Esbjörn',
    room: '008',
    reservedBy: 'ztm',
    bikeFormCompleted: false,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: null,
    bbOut: 'AT',
    bbIn: 'OI',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3b9b3b51-3e1f-450e-a325-8aa098a4bdb8',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('03/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Estève',
    room: '000',
    reservedBy: 'awy',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('03/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XE',
    bbIn: 'UG',
    timeOut: new Date(
      new Date('03/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bcd9c041-7136-4f34-b395-f7835d035062',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Börje',
    room: '993',
    reservedBy: 'nwq',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RG',
    bbIn: 'JK',
    timeOut: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ae481835-20b4-42ce-b49c-fbe404b03b7d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '089',
    reservedBy: 'kdf',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'UP',
    bbIn: 'KD',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f375d19d-7b61-4a74-8f64-2197be1d4c23',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Nadège',
    room: '002',
    reservedBy: 'use',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YB',
    bbIn: 'FU',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c607bf9d-d95c-4842-8832-7c896a890999',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Aloïs',
    room: '963',
    reservedBy: 'eff',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'PD',
    bbIn: 'KZ',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c7c18801-2ae1-4225-a492-9d9cf1717869',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maï',
    room: '631',
    reservedBy: 'fig',
    bikeFormCompleted: false,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('07/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WN',
    bbIn: 'AM',
    timeOut: new Date(
      new Date('07/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f425bafe-4088-4ba8-9856-92337f98ded0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Miléna',
    room: '527',
    reservedBy: 'zos',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('07/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EN',
    bbIn: 'MU',
    timeOut: new Date(
      new Date('07/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0f40cd2d-9977-4999-ab88-0d77d1e77d47',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Zoé',
    room: '546',
    reservedBy: 'prz',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('01/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RU',
    bbIn: 'IS',
    timeOut: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'bae68be8-45ca-4da2-81ba-23b88fe19417',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méng',
    room: '429',
    reservedBy: 'qoh',
    bikeFormCompleted: true,
    comments: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OS',
    bbIn: 'DM',
    timeOut: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6f60510-ceff-4abd-bf2d-282895cc5a5a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '527',
    reservedBy: 'zsx',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
    bbOut: 'WN',
    bbIn: 'FH',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2a9dd8a3-49ae-4802-a298-c3bf43c4a0b7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Pénélope',
    room: '157',
    reservedBy: 'wdh',
    bikeFormCompleted: null,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AH',
    bbIn: 'SG',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd9cfeb5a-f478-41ba-8f2b-7f0b74d7f666',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Séverine',
    room: '084',
    reservedBy: 'ojs',
    bikeFormCompleted: false,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('07/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'PR',
    bbIn: 'UB',
    timeOut: new Date(
      new Date('07/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ebeb23de-ee25-4ada-87a3-6ed8a6c4acdc',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Josée',
    room: '045',
    reservedBy: 'mgz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'PX',
    timeOut: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ddf0c42a-a019-473a-ba94-74db4ef4f307',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '830',
    reservedBy: 'vre',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ND',
    bbIn: 'DL',
    timeOut: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '34b4da08-94f0-41c2-9b5d-1c0ab4597052',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adélaïde',
    room: '315',
    reservedBy: 'snm',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'QY',
    timeOut: new Date(
      new Date('05/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b053304b-57e0-4a82-85a4-daf1706a8ce9',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Åslög',
    room: '378',
    reservedBy: 'grc',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: null,
    bbOut: 'LT',
    bbIn: 'LT',
    timeOut: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '39775544-72f4-4bf9-8694-10f7fbc60aed',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mégane',
    room: '675',
    reservedBy: 'zfq',
    bikeFormCompleted: false,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XS',
    bbIn: 'BG',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3a2c1d53-5a55-4fe7-983b-70f53ce44b2d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Valérie',
    room: '518',
    reservedBy: 'azv',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: null,
    bbOut: 'VF',
    bbIn: 'HS',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e6951ff2-2cae-438c-b5c3-4d889bc72e10',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '277',
    reservedBy: 'dua',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QZ',
    bbIn: 'JM',
    timeOut: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '70f1aac9-37c3-4b02-b560-400ed36db445',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Eléa',
    room: '106',
    reservedBy: 'xnk',
    bikeFormCompleted: true,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TD',
    bbIn: 'TC',
    timeOut: new Date(
      new Date('01/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '31611403-3321-43f3-8001-c69c3c1317ea',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Véronique',
    room: '677',
    reservedBy: 'nbm',
    bikeFormCompleted: false,
    comments: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: null,
    bbOut: 'AH',
    bbIn: 'LJ',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8768985-06db-43c1-b595-4402b0f2e8b4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('06/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérangère',
    room: '047',
    reservedBy: 'dlo',
    bikeFormCompleted: false,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VL',
    bbIn: 'JX',
    timeOut: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e610a72c-cafe-4392-a620-aaa4094b8575',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Naéva',
    room: '995',
    reservedBy: 'ixb',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KP',
    bbIn: 'DW',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a4928820-8db4-4bfd-b694-253beb416da7',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Méng',
    room: '726',
    reservedBy: 'jod',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('04/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LK',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '104847e8-0abe-4a5f-adb4-e38c75f53480',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '717',
    reservedBy: 'dqe',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BC',
    bbIn: 'RZ',
    timeOut: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b0e214d4-00a3-472a-80a9-e67515d248a1',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adèle',
    room: '599',
    reservedBy: 'gtx',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('06/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HV',
    bbIn: 'DJ',
    timeOut: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8bd0f51-24ef-4e6d-8685-1ca704d0f8d4',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '408',
    reservedBy: 'yiv',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: null,
    bbOut: 'WP',
    bbIn: 'YF',
    timeOut: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5f74b2c2-edcb-4826-a542-af49d6c319b6',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Camélia',
    room: '068',
    reservedBy: 'sli',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: null,
    bbOut: 'MJ',
    bbIn: 'US',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '3d2c09f9-e800-4f0d-bc5e-dbfb13d6571c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Thérèsa',
    room: '718',
    reservedBy: 'kcc',
    bikeFormCompleted: false,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: null,
    bbOut: 'GQ',
    bbIn: 'JA',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '78c81541-7101-4c6c-b511-a415c62fd396',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mélodie',
    room: '929',
    reservedBy: 'dev',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('08/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JO',
    bbIn: 'HP',
    timeOut: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b3f4ccf1-6e57-489a-8913-15002a026928',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Yú',
    room: '123',
    reservedBy: 'pil',
    bikeFormCompleted: false,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JA',
    bbIn: 'SQ',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '69324374-8ba2-4813-810c-f70ec726943e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '221',
    reservedBy: 'paz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'UL',
    bbIn: 'FV',
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
    bikeId: '7f5964aa-b8c0-453b-9864-13e5cc59000e',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Garçon',
    room: '335',
    reservedBy: 'toy',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('07/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KR',
    bbIn: 'OK',
    timeOut: new Date(
      new Date('06/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c6177447-5bc5-4841-b9d7-3934e0cbc9e8',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Danièle',
    room: '799',
    reservedBy: 'oec',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
    bbOut: 'UO',
    bbIn: 'BP',
    timeOut: new Date(
      new Date('07/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2e5c16c1-f6c4-40ce-976a-0a55962265af',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '668',
    reservedBy: 'tbp',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NS',
    bbIn: 'GS',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd0dc19a0-43ca-4e87-980d-ae06c1e63800',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Marie-hélène',
    room: '429',
    reservedBy: 'ljz',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'BA',
    timeOut: new Date(
      new Date('12/07/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '75f86973-aec7-4842-9be2-576f9e29bee7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Adèle',
    room: '657',
    reservedBy: 'fit',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XV',
    bbIn: 'IA',
    timeOut: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd41a5647-89c4-4fcd-8233-6d074e1ca9f1',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('02/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Esbjörn',
    room: '960',
    reservedBy: 'nhd',
    bikeFormCompleted: false,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CO',
    bbIn: 'UI',
    timeOut: new Date(
      new Date('02/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e8ef5b55-c104-47d2-8038-1ff0f529ba21',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Andréanne',
    room: '987',
    reservedBy: 'gdr',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TP',
    bbIn: 'CX',
    timeOut: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'da006987-676c-4573-9c1b-6f3de4641e3d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Styrbjörn',
    room: '582',
    reservedBy: 'jgp',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OF',
    bbIn: 'VT',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '22802686-a192-4142-8204-e305cdaff3f6',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('06/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Hélèna',
    room: '052',
    reservedBy: 'kqf',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DC',
    bbIn: 'OQ',
    timeOut: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '47752a5d-157b-4cd0-a9c6-bca756cc4e2a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Eléonore',
    room: '338',
    reservedBy: 'xtm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OU',
    bbIn: 'MP',
    timeOut: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '1b5203a6-0eb5-429a-8a58-267402b01e95',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('01/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Gösta',
    room: '466',
    reservedBy: 'zkl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'VZ',
    bbIn: 'XT',
    timeOut: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b4c560bf-4f30-4733-b577-56e4af1c233a',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Faîtes',
    room: '024',
    reservedBy: 'wdu',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XZ',
    bbIn: 'WO',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '762dd3de-4303-45b7-b7a5-5bfdc307a009',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('03/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Ophélie',
    room: '106',
    reservedBy: 'pnl',
    bikeFormCompleted: false,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'RF',
    timeOut: new Date(
      new Date('02/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8072a28-4524-4987-ade6-6447c51d2d21',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Géraldine',
    room: '046',
    reservedBy: 'tev',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'DD',
    bbIn: 'PM',
    timeOut: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ba5937e9-6ec9-4611-9820-bd52ab695426',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Dù',
    room: '246',
    reservedBy: 'ivf',
    bikeFormCompleted: null,
    comments: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: null,
    bbOut: 'HL',
    bbIn: 'KW',
    timeOut: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a0d0a6a9-24ac-4ca9-89d7-b569d98330ca',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Stéphanie',
    room: '964',
    reservedBy: 'smr',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ZT',
    bbIn: 'HF',
    timeOut: new Date(
      new Date('12/31/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fa1458ee-9816-442d-8c53-23ee8d287b9c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cécile',
    room: '200',
    reservedBy: 'iqq',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('01/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HA',
    bbIn: 'HK',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '46bfadcc-f6d3-4ffa-a85f-77fc65dce6a0',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlyss',
    room: '345',
    reservedBy: 'ywb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'CT',
    bbIn: 'UM',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2906ddc9-0d6c-43a1-ab95-64247c897d04',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '271',
    reservedBy: 'oki',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: null,
    bbOut: 'FJ',
    bbIn: 'MC',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4c8e8e08-572c-49c9-a563-16655cd1e8c4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Angélique',
    room: '805',
    reservedBy: 'zzz',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('03/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GU',
    bbIn: 'YC',
    timeOut: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fb663b87-e137-40b8-8ac7-91e8d36166f7',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Léa',
    room: '831',
    reservedBy: 'iqq',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KU',
    bbIn: 'EQ',
    timeOut: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5dbd9212-a318-476d-806d-02e8d6ecbf7d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Réservés',
    room: '620',
    reservedBy: 'eoc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'RM',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('06/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '83cc3dc8-0d73-4572-9ed6-cc2ee37c8d7f',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('05/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vénus',
    room: '989',
    reservedBy: 'gzs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JC',
    bbIn: 'ZY',
    timeOut: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '57c2fdb7-62aa-4de2-9ec8-0fce036ad688',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Eugénie',
    room: '121',
    reservedBy: 'mio',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XO',
    bbIn: 'QG',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '8462d5da-084d-4b9e-8c79-8b0967647db6',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Crééz',
    room: '652',
    reservedBy: 'pug',
    bikeFormCompleted: true,
    comments: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WR',
    bbIn: 'ES',
    timeOut: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/11/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '43a5658f-4cea-4acc-b8d9-f1387e5fd49b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('07/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Dafnée',
    room: '260',
    reservedBy: 'fqd',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('06/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LH',
    bbIn: 'CN',
    timeOut: new Date(
      new Date('06/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ad99bee8-8cce-4edf-971b-8ba59f94e1ca',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëlann',
    room: '265',
    reservedBy: 'atj',
    bikeFormCompleted: false,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('04/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'OL',
    bbIn: 'TR',
    timeOut: new Date(
      new Date('04/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0e80d8a6-fd27-4e7d-83d4-884c63c94167',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Eliès',
    room: '633',
    reservedBy: 'fik',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('01/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JB',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2c439883-b3b3-45bf-9c75-89941526adb0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Loïc',
    room: '698',
    reservedBy: 'dur',
    bikeFormCompleted: false,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DD',
    bbIn: 'HU',
    timeOut: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e9c69bbc-acd2-4517-aa8c-91b28c4d1812',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Clélia',
    room: '757',
    reservedBy: 'qsw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'NA',
    bbIn: 'MD',
    timeOut: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e64ca351-df46-4e0c-8b91-8da185eb82b0',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Frédérique',
    room: '163',
    reservedBy: 'ygc',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'KO',
    bbIn: 'BU',
    timeOut: new Date(
      new Date('03/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c4b6758b-ae70-4b98-930e-1bd74cda6253',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('01/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maëlla',
    room: '003',
    reservedBy: 'iyf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XS',
    bbIn: 'JT',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a946fd1f-b27d-4d98-a601-a1cdded5292a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('01/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Laurène',
    room: '094',
    reservedBy: 'afq',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XF',
    bbIn: 'VM',
    timeOut: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c9bfdb5f-28ad-48ff-a1bf-a66ebac7ee82',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Rébecca',
    room: '844',
    reservedBy: 'bqt',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('03/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HV',
    bbIn: 'WZ',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ab52cec8-747c-4dbf-b406-4d177e8d7cc1',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('08/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '524',
    reservedBy: 'rdq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('07/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'YU',
    bbIn: 'JE',
    timeOut: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '9c0f37ff-afe2-473e-8ea6-49924d9d4dec',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('01/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Camélia',
    room: '919',
    reservedBy: 'kjl',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'WT',
    bbIn: 'EI',
    timeOut: new Date(
      new Date('12/21/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/22/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c8692479-a010-4783-af44-2ed1d1b12895',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Anaël',
    room: '038',
    reservedBy: 'kse',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SH',
    bbIn: 'UA',
    timeOut: new Date(
      new Date('05/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b603df7f-6f5a-4102-affc-c5faeb7ce4b2',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Médiamass',
    room: '128',
    reservedBy: 'uqx',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'SG',
    bbIn: 'TM',
    timeOut: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e0824044-366f-46a2-a422-0d9c7cecaa9b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mégane',
    room: '835',
    reservedBy: 'osf',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('02/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KI',
    bbIn: 'PL',
    timeOut: new Date(
      new Date('02/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'a8ec8fa3-48e2-442d-b702-b329d852bb6e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Marlène',
    room: '580',
    reservedBy: 'sqi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'GZ',
    bbIn: 'TO',
    timeOut: new Date(
      new Date('06/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09ad290f-8dc8-4043-b0ca-150cb1d1c8e1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('03/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bécassine',
    room: '187',
    reservedBy: 'hun',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('02/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TL',
    bbIn: 'UV',
    timeOut: new Date(
      new Date('02/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('06/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c86fee92-fc61-418f-9ecb-ab14420aaf23',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Bérengère',
    room: '816',
    reservedBy: 'llj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('06/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TI',
    bbIn: 'JV',
    timeOut: new Date(
      new Date('06/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('06/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '5d49010a-4e0b-442c-871b-2b4cd818bc5a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léonie',
    room: '914',
    reservedBy: 'ocz',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EX',
    bbIn: 'SU',
    timeOut: new Date(
      new Date('04/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/19/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c46b70cf-7d7f-449c-b86f-8c528cc2f51f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Cléopatre',
    room: '278',
    reservedBy: 'oja',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'IE',
    bbIn: 'ZY',
    timeOut: new Date(
      new Date('03/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ce3d72db-c7bf-4253-bebf-2cc7a5d7f83a',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Clémentine',
    room: '657',
    reservedBy: 'cuz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'XJ',
    bbIn: 'PU',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'c68fcdc2-d5fd-423d-9276-23bb0998ba5f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('01/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Personnalisée',
    room: '324',
    reservedBy: 'bmc',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EN',
    bbIn: 'VV',
    timeOut: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '820f45e3-f382-4a99-bd2a-ddffb91f0bb0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('08/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Maïlys',
    room: '939',
    reservedBy: 'okm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('07/31/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NL',
    bbIn: 'YQ',
    timeOut: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '09381c66-c17b-401c-8585-9a18c76319f3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Sélène',
    room: '077',
    reservedBy: 'tqy',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
    bbOut: 'ZE',
    bbIn: 'ZL',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2f80aaa5-3271-4d87-b2e3-ecfe8e1c4ac3',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Eliès',
    room: '456',
    reservedBy: 'jsn',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KO',
    bbIn: 'VR',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'f43e91c2-9ae3-4b1d-9d52-a5f6da2c81a6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Céline',
    room: '043',
    reservedBy: 'ftm',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'DR',
    bbIn: 'PF',
    timeOut: new Date(
      new Date('12/09/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/10/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '674331df-43fc-439e-8884-414d6da2c166',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('04/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Bérengère',
    room: '610',
    reservedBy: 'kbg',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: null,
    bbOut: 'WM',
    bbIn: 'EL',
    timeOut: new Date(
      new Date('03/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '643a6e9a-46b8-457b-ae6c-65c881336171',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('08/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Anaël',
    room: '382',
    reservedBy: 'wbx',
    bikeFormCompleted: true,
    comments: 'Nunc purus.',
    completedAt: null,
    bbOut: 'TF',
    bbIn: 'HO',
    timeOut: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '2aa0f7cc-1225-4bad-bd3b-cb874de5e130',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('05/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Jú',
    room: '359',
    reservedBy: 'jix',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('04/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NZ',
    bbIn: 'QQ',
    timeOut: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'afbd1f77-99c8-4e51-848a-7489c003b4d6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Irène',
    room: '286',
    reservedBy: 'qoq',
    bikeFormCompleted: null,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('12/08/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RA',
    bbIn: 'VS',
    timeOut: new Date(
      new Date('12/02/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/03/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '4284c2e1-b89a-4afc-bfa7-e7218424949a',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lén',
    room: '956',
    reservedBy: 'ihf',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('06/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'NQ',
    bbIn: 'HF',
    timeOut: new Date(
      new Date('05/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'e2512f41-284e-4837-b930-1edae9445c88',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Noémie',
    room: '328',
    reservedBy: 'ftj',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('02/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'ER',
    bbIn: 'PT',
    timeOut: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'b17b63e1-d2e6-4b0d-b3e7-d6652d6ee865',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('05/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Yóu',
    room: '538',
    reservedBy: 'ayk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'RQ',
    bbIn: 'FU',
    timeOut: new Date(
      new Date('05/09/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/10/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '980f0473-db71-4981-ab3c-98c68272e6db',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maïté',
    room: '002',
    reservedBy: 'yed',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('02/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'EN',
    bbIn: 'FZ',
    timeOut: new Date(
      new Date('02/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/07/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '6b2e56c8-f213-4192-8fb0-1f9e7a0aa36d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('01/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '585',
    reservedBy: 'scu',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'AG',
    bbIn: 'UZ',
    timeOut: new Date(
      new Date('12/26/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('12/27/2022').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '75b83edc-33d7-4943-b3f0-c0eefba5a887',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Åke',
    room: '361',
    reservedBy: 'nwe',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('01/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'JX',
    bbIn: 'DO',
    timeOut: new Date(
      new Date('01/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/16/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '85100a3f-4a02-4d1d-80d6-100fcc7b91f0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('06/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Lorène',
    room: '533',
    reservedBy: 'kcy',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'FQ',
    bbIn: 'AF',
    timeOut: new Date(
      new Date('05/17/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/18/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('01/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '78a1982c-dcba-4596-953a-f40c4e48d962',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Dorothée',
    room: '680',
    reservedBy: 'bpu',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: new Date(
      new Date('01/20/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TS',
    bbIn: 'IP',
    timeOut: new Date(
      new Date('01/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('01/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '87534cad-f718-4c9e-a7ac-6572ab6fa287',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Michèle',
    room: '680',
    reservedBy: 'vnn',
    bikeFormCompleted: false,
    comments: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('02/08/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'QB',
    bbIn: 'YM',
    timeOut: new Date(
      new Date('02/02/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('02/03/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/13/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '84573003-3f79-4f09-86fe-d5b10d1be60b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lèi',
    room: '739',
    reservedBy: 'rfv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
    bbOut: 'OP',
    bbIn: 'ZW',
    timeOut: new Date(
      new Date('05/14/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '36f2c7c7-6c31-41c6-89bd-30ad9f70b759',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '473',
    reservedBy: 'met',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'KN',
    bbIn: 'OM',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('05/21/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'd10802a8-8a1e-4417-9340-37131e334d61',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maïly',
    room: '344',
    reservedBy: 'rwd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('05/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'TN',
    bbIn: 'MN',
    timeOut: new Date(
      new Date('05/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('05/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('03/28/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '0158ff87-ea37-441c-aa93-6370ed4c25cc',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('04/15/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Mélanie',
    room: '004',
    reservedBy: 'fos',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'LJ',
    bbIn: 'AV',
    timeOut: new Date(
      new Date('03/29/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('03/30/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('04/04/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'fbd422e9-964f-4444-9b6f-bfffe83d6671',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('04/22/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Léana',
    room: '110',
    reservedBy: 'kpw',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('04/11/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'HI',
    bbIn: 'QA',
    timeOut: new Date(
      new Date('04/05/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('04/06/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/23/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: '01c41fb1-cf78-42b6-8ac1-acf77655f60e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méline',
    room: '632',
    reservedBy: 'xle',
    bikeFormCompleted: null,
    comments: 'Aliquam erat volutpat.',
    completedAt: null,
    bbOut: 'WR',
    bbIn: 'DF',
    timeOut: new Date(
      new Date('07/24/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
  {
    createdAt: new Date(
      new Date('07/25/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bikeId: 'ded4a292-8390-44ae-acc8-3a974ea590b4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('08/12/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    name: 'Vérane',
    room: '479',
    reservedBy: 'qrv',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('08/01/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    bbOut: 'BA',
    bbIn: 'BF',
    timeOut: new Date(
      new Date('07/26/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
    timeIn: new Date(
      new Date('07/27/2023').setHours(Math.random() * (23 - 2) + 2, Math.random() * (59 - 1) + 1)
    ),
  },
];
