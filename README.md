# Not Our Backyard

Not Our Backyard is built as a place for people to come together and help clean up their communities.  The overview allows people to see how much garbage has been cleaned up different places around the world. Anyone can create an account and start tracking the garbage that they clean up. Let's all work together to make the world a cleaner place.

## Live Demo

[Not Our Backyard](https://notourbackyard.now.sh/)

*Site currently hosted on free teir.  If there is no data please reload  as database is starting back up*

##  API Endpoints

### /api/cleanups

**GET** 
cleanups for a specified user id *protected endpoint*
`/id`

**POST** 
Add new cleanup for specified user id *protected endpoint*
`/id`
The following data is required from the form
Location,
user name,
type of trash,
quantity


### /api/overview

**GET** 
Gets data for existing cleanups *Public*
`/country`
Retrieve cleanup data for a specific country or the world

`/country/region`
Retrieve cleanup data for a specific country and region

### /api/auth
**POST**
`/login`
Send login data to retrieve JWT on succesfull authentication


### /api/users
**POST**
`/`
Add a new user to the database. The following data is required from the form
Name,
password,
email,
home country

**GET**
`/type`
Get the garbage types from the database


## Preview

### Overview
![overview page](https://imgur.com/a/pFTLWqS "Overview Page")

### Signup  Page
![signup  page](https://imgur.com/a/XQ7mbir "Signup Page")

### Login Page
![login page](https://imgur.com/a/APiapi6 "Login Page")

### Cleanup Page
![cleanup page](https://imgur.com/a/5vLjSEv "Cleanup Page")

### Add Cleanup Page
![new cleanup page](https://imgur.com/a/2kWZdFr "New Cleanup Page")

## Built With
* This application uses the following technology
+ HTML
+ CSS
+ React
+ Jest
+ Chai/Mocha
+ Express
+ PostgreSQL
+ Knex

