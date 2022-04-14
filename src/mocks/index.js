const date = new Date();

const project = {
  id: 'demo',
  name: 'Project Tracker Website',
  client: 'Tec3',
  contact: 'Dio',
  emailOrPhone: 'someawesome@email.com',
  phase: 'Invoicing',
  dateRequested: date,
  messages: [
    { id: '11', date, phase: 'Planning', author: 'client', message: 'Does this work?' },
    { id: '12', date, phase: 'Planning', author: 'admin', message: 'Not yet!' },
    { id: '21', date, phase: 'Invoicing', author: 'admin', message: 'Have all the requirements been gathered?' },
    { id: '22', date, phase: 'Invoicing', author: 'client', message: 'Yes, they will be ready for the next meeting.' },
    { id: '23', date, phase: 'Invoicing', author: 'admin', message: 'Great to hear!' },
  ]
};

const mocks = { project };

export default mocks;