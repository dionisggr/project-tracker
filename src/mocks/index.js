const formattedDate = new Date().toString().split(' ').slice(0, 4).join(' ');

const project = {
  id: 1,
  projectName: 'Project Tracker Website',
  client: 'Tec3',
  contact: 'Dio',
  emailOrPhone: 'someawesome@email.com',
  status: 'Development',
  dateRequested: formattedDate,
  messages: [
    { id: '11', date: formattedDate, phase: 'Planning', author: 'client', message: 'Does this work?' },
    { id: '12', date: formattedDate, phase: 'Planning', author: 'admin', message: 'Not yet!' },
    { id: '21', date: formattedDate, phase: 'Invoicing', author: 'admin', message: 'Have all the requirements been gathered?' },
    { id: '22', date: formattedDate, phase: 'Invoicing', author: 'client', message: 'Yes, they will be ready for the next meeting.' },
    { id: '23', date: formattedDate, phase: 'Invoicing', author: 'admin', message: 'Great to hear!' },
  ]
};

const mocks = {
  projects: [ project ],
};

export default mocks;