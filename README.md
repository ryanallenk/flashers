![](https://github.com/ryanallenk/flashers/blob/main/client/src/Navigation/flashers.png)
==================

Flashers is a single page web app designed for urban rock climbers / boulderers. Flashers uses geolocation to show you user-submitted climbing locations near you. Users can also submit new locations, edit existing ones, and "flash" (reach the top during their first attempt) a route, adding it to their running total. 

![](https://github.com/ryanallenk/flashers/blob/main/docs/main-app-screen.png)
![](https://github.com/ryanallenk/flashers/blob/main/docs/view-location-screen.png)

## Features
* Anonymous users can view all the existing locations on the map.
* Geolocation can find the users current position if enabled.
* Logged in users can create/edit/and "flash" routes.
* Logged in users can also see a tally of the number of routes they have contributed to the map and the number of routes they have "flashed".

## Tech Stack
Back-end  
* Node
* Express 

Front-end
* React
* Axios

Database
* PostgreSQL

APIs
* Google Maps API w/ React Wrapper
* Auth0

## Getting Started
#### Express Back-end
1. `cd server`
2. `npm install`
3. `cp .env-example .env`
4. Update the .env file with the local database information as needed.
5. `npm start`

#### React Front-end
1. `cd client`
2. `npm install`
3. `cp .env-example .env`
4. Update the .env file with the google maps API key and information as needed.
5. `npm start`

## Contributors
* [Maxwell Veer](https://github.com/Mveer100)
* [Michael Law](https://github.com/Law86)
* [Ryan Kidd](https://github.com/ryanallenk)

## Course Submission Requirements

#### User Stories
[user stories on github projects](https://github.com/ryanallenk/flashers/projects/1)

#### Entity Relationship Diagram
[ERD Diagram on Draw.io](https://drive.google.com/file/d/1Wn7J69STbKsC7jDE-W2O6wSQLfLdnDMv/view)

#### Wireframes
[MVP Wireframe](https://drive.google.com/file/d/1x6rn1uzxOCSvKLBZg4PHR9uVR8ZMx3nl/view?usp=sharing)
