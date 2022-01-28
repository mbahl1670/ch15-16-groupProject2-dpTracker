# Dog Park Tracker (DPTracker) - Group Project 2 in the U of MN Bootcamp

## Team Members
* Michael Bahl (https://mbahl1670.github.io/ch2-portfolio-mjb/)
* Christopher Speltz (https://christopherspeltz.github.io/ProfessionalPortfolio/)
* Zeeshan Mufti
  

## Built With
* Express
* Sequelize
* Mysql2
* dotenv
* express-handlebars
* express-session
* connect-session-sequelize
* handelbars.moment

## Description
This is a full-stack web application built using javasript, express, sequelize to connect to a SQL database, and the handlebars template engine.  We have created a Dog Park Tracker that will track the popularity of local dog parks to the Minneapolis area.  Currently 10 local dog parks have been selected and are available for valid users to vote on and leave comments about.  Before being able to view a park's comments or vote on a park, a user is required to either sign in or sign up for the app.  When viewing a park you can see what comments the users of the app have made about the park.  A signed-in user can view their dashboard to see what parks they voted on and what parks they have made comments about.


## Table of Contents
* [Installation](#installation)
* [Acceptance Criteria](#acceptance-criteria)
* [Heroku Link](#heroku-link)
* [Screenshot of the Application](#screenshot-of-the-application)
* [Git Repository](#git-repository)
* [How this was accomplished](#how-this-was-accomplished)
* [Challenges](#challenges)
* [Directions for Future Development](#directions-for-future-development)

## Installation
* npm init -y
* npm install express sequelize mysql2 dotenv express-handlebars express-session connect-session-sequelize handlebars.moment


## Acceptance Criteria
* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the templating engine.
* Use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Be deployed using Heroku (with data).
* Use at least one new library, package, or technology that we haven’t discussed. 
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Have a clean repository that meets quality coding standards 
* Have a quality README 
* Add your project to the portfolio that you created in Module 2.


## Heroku Link
https://cryptic-sierra-65758.herokuapp.com/

## Screenshot of the Application
![Screenshot (55)](https://user-images.githubusercontent.com/90292697/151611620-6fd69786-4743-411e-a763-7d0cb14fa156.png)
![Screenshot (56)](https://user-images.githubusercontent.com/90292697/151611628-4ebe612d-a030-4074-9326-be785522dbb6.png)
![Screenshot (57)](https://user-images.githubusercontent.com/90292697/151611634-3b2cd18f-7899-4933-84bc-7c26e9d1e640.png)
![Screenshot (58)](https://user-images.githubusercontent.com/90292697/151611645-21b4113b-c78f-46f2-bfc9-90d841d622f4.png)
![Screenshot (59)](https://user-images.githubusercontent.com/90292697/151611658-6b14187c-52ca-481b-bd5d-2b02bccd5b69.png)

## Git Repository
https://github.com/mbahl1670/gp2-dpTracker


## How this was accomplished
* Decided on what project we would be working on and divvied up the workload    
  * Michael (API routes, home-routes, JavaScript for comments & voting, Handlebars, assisted with dashboard-routes & integrating login/logout)
  * Chris (Models, Handlebars, Login Page, login javascript, Dashboard & dashboard routes
  * Zeeshan (CSS styling, inital index.html & initial main handlebars page)
* Models were created for Park, User, Comments and Votes
* API routes were written following CRUD format
* An index.html file was written as the blueprint for handlebars
* The index.html file was translated into handlebars
* Home-Routes were written to direct users to appropriate pages for single-park views
* Dashboard-routes were created for viewing a user's profile
* Javacscript files were created and liked to the appropriate handlebars templage to enable users to login/logout/sign-up/vote on parks & leave comments on parks
* New-technology was added, handlebars.moment, and code was adjusted to use this new technology
* Deployed the app to Heroku 


## Challenges
* Largest challenge (as with any group project) was coordinating meeting times with group members
* Handlebars in general was fairly new to us, had difficulties importing the correct information
* Our initial "new technology" was intended to provide a random picture of your dog's breed when a button was clicked.  We were unable to get the API up and running though and the technology was changed

## Directions for Future Development
* Clean up login/sign-up form & allow users to enter more than 1 dog
* Enable editing/deletion of a user's profile, votes they have made and comments they have made
* Allow users to add dog parks to the current list
* Enable mapping to provide location & directions to a park
* Allow users to upload pictures of their dogs
* Implement a ranking system for the parks instead of just a vote
* Work on styling of homepage and handlebars segments
