# Project Tracker
This repo serves as a the code for our internal Project Tracker.

## Preview
https://project-tracker-dionisggr.vercel.app/

## Bugs
- [ ] Day before selected is shown on Date Requested picker

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
  - In `Console`, write (example):
    ```
    window.localStorage.setItem('projectTrackerAuthToken', 'dio');
    ```
  - Accepted nicknames: `lili`, `doug` and `dio`
  - Remember you will need to do this again if you clear your browser's cache at any point