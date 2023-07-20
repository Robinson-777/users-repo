User Managing.

This web application is uesed to manage the users. there are three pages 

1. Home ===> add user and user details pages are showed in single page 
2. Add User ===> add user page is used to create a user.
3. User details===> view all users in table .


Folder structure

ui ===> front-end - react js code
api===> backend - node js (express);

Local Build

UI applicaton 
Redirect to ui folder (cd ui) then execute npm install and npm start 
ui application is run in http://localhost:3000 


API application

Redirect to api folder (cd api) then execute npm install and npm start 
api application is run in http://localhost:3080 

Docker Development deployement

docker-compose build --no-cache
docker-compose run (imageid)
docker-compose up

application run in 3000 and 3080 port.


Docker production deployement 

docker build -t user:1.0 .
docker run -p 3080:3080 user:1.0

you can access ui and api application in the same port - 3080


Thank you for the interview. Please find the task details below. As discussed, please provide an approximate estimation on when the task can be submitted, and then try to keep up with your estimate 😊

 

Functional requirements:

Implement a simple website for managing users;
Site should contain from 2 screens:
Users list - table / grid view with details about each user;
Create user - a form for creating a new user;
Input fields / data to collect about each user:
First name
Field should accept only alphabetical characters
Max length should be 100 characters
Last name
Field should accept only alphabetical characters
Max length should be 100 characters
E-mail address
Only valid e-mail addresses can be used
Technical requirements:

Use React.js for frontend;
Use Express / Koa / NestJS for backend;
Use MongoDB for data persistency;
Solution should be Dockerized and there should be a Docker Compose file for running the solution (which includes Frontend, Backend and dependencies);
Docker containers should be “production optimized”
Solution can be implemented either as single monolith application or 2 separate applications (frontend and backend);
Inputs validation should be on the backend side, but it’s also nice to have some basic validation on frontend.
Bonus points for:

Unit tests using Mocha/Jest;
Functional end-to-end test using any automation framework (Selenium, Puppeteer, Cypress);
Redux Toolkit used at the frontend;
Typescript for both frontend and backend.
UI / UX requirements:

There are no specific requirements for a design / UX of the frontend but it should look sensible. Any popular UI framework like Bootstrap / Material UI is preferred.
Deliverables:

Submit a solution either in a Zip file or push in public Git repository