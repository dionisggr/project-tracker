# ProjectTracker App
The ProjectTracker App serves as the client-side code for a client-shareable single-project management tool directed with the intention of providing a one-page client portal for straightforward communication and transparency.

---

### Working Prototype
#### Client Live:
https://project-tracker-dionisggr.vercel.app/

#### API URL
https://tec3-project-tracker.herokuapp.com/

#### API GitHub:
https://github.com/dionisggr/project-tracker-api

---

### User Stories
- As a visitor
  - I am landed in the Project ID Search page
  - I can see the project ID text input
  - I can input an unique ID and get a result when pressing enter or clicking "Search"
  - I can see more information about a project
  - I can see information about a project phases
  - I can see messages shared between Admin and Client in the messages section of each phase
  - I can add a message from text input as a Client when clicking "Send"
  - I can visit the Contact Us page
  - I can write information in the Contact Us form and "Send" it
  - I can click the "(Demo)" button to see a project example
- As an admin
  - I can see the "Add A Project" button in the header
  - I can see a form in "Add A Project" to add project information
  - I can see the "All Projects" button in the header
  - I can click "All Projects" and reach a list of all existing projects

---

### Technology
* **Front-End:** React.js, CSS3, HTML5, Javascript, API fetch
* **Back-End:** Javascript, Node.js, Express.js, Knex.js, PostgreSQL, Postgrator, JWT, Bcrypt, Morgan, XSS, CORS, Helmet, HTML5, CI scripts
* **Development Environment:** Vercel, Heroku, DBeaver, Postman
    
---

### Front-End Structure
* __common__
  * __Form.js__
  * __Label.js__
  * __Modal.js__
  * __Select.js__
  * __Spinner.js__
  * __TextArea.js__
  * __TextInput.js__
* __layout__
  * __Header__
    * __Nav__
      * __NavDesktop.js__
      * __NavMobile.js__
      * __NavMobileIcon.js__
    * __index.js__
  * __Main.js__
  * __Footer__
    * __index.js__
    * __PrivacyPolicy.js__
* __pages__
  * __Project__
    * __Phases__
      * __Messages__
        * __index.js__
        * __Message.js__
        * __MessageInput.js__
      * __index.js__
      * __Phase.js__
      * __ProgressBar.js__
    * __index.js__
    * __ProjectInfo.js__
  * __AddProject.js__
  * __Contact.js__
  * __Home.js__
  * __NotFound.js__
  * __Projects.js__

---

### Back-End Structure
- Author (`ENUM`)
  - admin
  - client
- Phase (`ENUM`)
  - Planning
  - Invoicing
  - Design
  - Development
  - QA / Testing
  - Release / Monitoring
  - Complete
- Projects (database table)
  - id (integer, auto-generated)
  - name (text, not null)
  - phase (enum, phase)
  - client (text, not null)
  - contact (text, not null)
  - email_or_phone (text, not null)
  - date_requested (timestamp, poster image URL)
- Messages (database table)
  - id (integer, auto-generated)
  - date (timestamp, not null)
  - message (text, not null)
  - author (enum, author)
  - phase (enum, phase)
  - project_id (references projects.project_id)

---

## Navigation
| Path              | Description                  |   |   |   |
|-------------------|------------------------------|---|---|---|
| `/`               | Home                         |   |   |   |
| `/projects/demo`  | Demo Project                 |   |   |   |
| `/projects/:id`   | Project Page (Needs ID)      |   |   |   |
| `/projects/add `  | Add Project (Admin Only)     |   |   |   |
| `/projects`       | All Projects (Admin Only)    |   |   |   |

## Admin Instructions
Admin pages are accessed in one of two ways:
- Run application in localhost
- Add authorization cookie token to your browser

To add authorization cookie token:
  - Go to Dev Tools
  - In `console`, write (example):
    ```
    window.localStorage.setItem('projectTrackerAuthToken', 'admin');
    ```
  - Remember you will need to do this again if you clear your browser's cache at any point

---

## API Documentation

### Project-related
Each endpoint manipulates information related to project data.
- Get All Projects: `GET /api/projects`
- Add Movie to Database: `POST /api/projects`
- Get Movie: `GET /api/projects/:projectId`

#### Get All Movies
**URL:** `/api/movies` \
**Method:** `GET` \
**Auth required:** No

##### Success Reponse
**Code:** `200 OK` \
**Content example**
```
[
  {
    "id": 1,
    "name": "Man of Steel",
    "phase": "Come on, it's Man of Steel.",
    "client": 99999,
    "contact": 2013,
    "emailOrPhone": 987.72
    "dateRequested": 7.4,
    "messages": [
      {
        "id": "1",
        "date": "2022-04-08T09:00:00.992Z",
        "message": "This is a message!",
        "author": "client",
        "phase": "Planning",
        "projectId": "demo"
      },
      ...
    ]
  },
      
  ...
]
```

---

#### Get Project
**URL:** `/api/projects/:project` \
**Method:** `GET` \
**Auth required:** No

##### Success Reponse
**Code:** `200 OK` \
**Content example**
```
{
  "id": 1,
  "name": "Some Name",
  "phase": "Planning",
  "client": "Client",
  "contact": "POC",
  "emailOrPhone": "dionisggr@gmail.com","
  "dateRequested": "2022-04-03T09:00:00.992Z",
  "messages": [
    {
      "id": "1",
      "date": "2022-04-08T09:00:00.992Z",
      "message": "This is a message!",
      "author": "client",
      "phase": "Planning",
      "projectId": "demo"
    },
    ...
  ]
},
```

---

#### Add Project
**URL:** `/api/projects` \
**Method:** `POST` \
**Auth required:** No

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
// All required
{
  "name": "Some New Project",
  "phase": "Planning",
  "client": "Client",
  "contact": "Dionis Gonzalez",
  "emailOrPhone": "dionisggr@gmail.com",
  "dateRequested": "2022-04-03T09:00:00.992Z",
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `name`          | string  | body   | Project name              |
| `phase`         | string  | body   | Current project phase     |
| `client`        | string  | body   | Client (Company) name     |
| `contact`       | string  | body   | Person of Contact         |
| `emailOrPhone`  | string  | body   | Contact Email or Phone    |
| `dateRequested` | string  | body   | Date Requested / Started  |

##### Success Reponse
**Code:** `201 Created` \
**Content example**
```
true
```

#### Edit Project
**URL:** `/api/projects` \
**Method:** `PATCH` \
**Auth required:** No

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
// All optional
{
  "name": "Edited Name",
  "phase": "Invoicing",
  "client": "Client",
  "contact": "POC",
  "emailOrPhone": "dionisggr@gmail.com",
  "dateRequested": "2022-04-03T09:00:00.992Z",
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `name`          | string  | body   | Project name              |
| `phase`         | string  | body   | Current project phase     |
| `client`        | string  | body   | Client (Company) name     |
| `contact`       | string  | body   | Person of Contact         |
| `emailOrPhone`  | string  | body   | Contact Email or Phone    |
| `dateRequested` | string  | body   | Date Requested / Started  |

##### Success Reponse
**Code:** `201 Created` \
**Content example**
```
true
```

---

### Message-related
Each endpoint manipulates information related to message data.
- Get All Messages: `GET /api/messages`
- Add Message to Database: `POST /api/messages`

#### Get All Messages
**URL:** `/api/messages` \
**Method:** `GET` \
**Auth required:** No

##### Success Reponse
**Code:** `200 OK` \
**Content example**
```
[
  {
  "id": "1",
  "date": "2022-04-08T09:00:00.992Z",
  "message": "Is this feature ready?",
  "author": "client",
  "phase": "Planning",
  "projectId": "demo"
  },
      
  ...
]
```

#### Add Message
**URL:** `/api/messages` \
**Method:** `POST` \
**Auth required:** No

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
// All required
{
  "message": "Is this feature ready?",
  "author": "client",
  "phase": "Planning",
  "projectId": "demo"
},
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `message`       | string  | body   | Chat message              |
| `author`        | string  | body   | Message originator        |
| `phase`         | string  | body   | Project phase             |
| `projectId`     | string  | body   | Project ID                |

##### Success Reponse
**Code:** `201 Created` \
**Content example**
```
true
```

---

### Screenshots

Home Page
:-------------------------:
![Home](https://user-images.githubusercontent.com/20152090/168916959-0ca39b29-3938-4be3-b69d-9fcb7deb83a4.png)

Project Page
:-------------------------:
![Project Page](https://user-images.githubusercontent.com/20152090/168917059-bb330a86-f15d-4462-a5b7-5c315919fdc1.png)

Contact Us Page
:-------------------------:
![Contact Us](https://user-images.githubusercontent.com/20152090/168917132-daca54f1-5f30-467a-bf59-a75fbbc53f03.png)

Add A Project
:-------------------------:
![Home Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/home.png)

All Projects
:-------------------------:
![User Lists](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/user.png)

---

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
- SocketIO for seamless chat integration
- Email/In-Site notifications of updates + new messages
- Styling improvements

## Known Bugs
- [ ] Day before selected is shown on Date Requested picker (`date-fns` package bug with default time zone)
