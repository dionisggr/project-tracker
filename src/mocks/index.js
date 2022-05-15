const date = new Date('04/03/2022 09:00');

const project = {
  id: 'demo',
  name: 'Demo Project (Edits will not persist)',
  client: 'Tec3',
  contact: 'Dio',
  emailOrPhone: 'someawesome@email.com',
  phase: 'Invoicing',
  dateRequested: date,
  messages: [
    {
      id: '11',
      date: new Date('04/03/2022 09:00'),
      phase: 'Planning',
      author: 'client',
      message: 'Does this work?'
    },
    {
      id: '12',
      date: new Date('04/03/2022 09:05'),
      phase: 'Planning',
      author: 'admin',
      message: 'Not yet!'
    },
    {
      id: '21',
      date: new Date('04/04/2022 09:10'),
      phase: 'Invoicing',
      author: 'admin',
      message: 'Have all the requirements been gathered?'
    },
    {
      id: '22',
      date: new Date('04/04/2022 09:15'),
      phase: 'Invoicing',
      author: 'client',
      message: 'Yes, they will be ready for the next meeting.'
    },
    {
      id: '23',
      date: new Date('04/04/2022 09:20'),
      phase: 'Invoicing',
      author: 'admin',
      message: 'Great to hear!'
    },
  ]
};

const mocks = { project };

export default mocks;
