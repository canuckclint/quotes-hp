# Quotes (MERN)

 This application allows us to create and save quotes which are saved to a mongo database. We can from there toggle a quotes "favorite" status by click on the star, or delete a quote entirely by click on the trashcan icon.

## Table of Contents

- [Application](#application)
- [Technologies used](#technologies-used)
- [Dependencies](#dependencies)
- [To Install on local machine](#to-install-on-local-machine)

## Application
[https://quotes-mern.herokuapp.com/](https://quotes-mern.herokuapp.com/)

## Technologies used
* NodeJs
* CSS3
* Javascript
* React
* Webpack
* Babel
* MongoDB
* NPM packages

## Dependencies
NPM packages

1. `body-parser` (Node.js body parsing middleware)
1. `express` (Web framework)
1. `mongoose` (Mongoose MongoDB ODM)
1. `bluebird` (Fully featured promise library )
1. `axios` (Promise based HTTP client)
1. `react` (JavaScript library for building user interfaces)
1. `react-dom` (React package for working with the DOM.)
1. `react-router` (Declarative routing for React)
1. `react-notification-system` (A React Notification System)


## To Install on local machine

* Git Clone the repository to your local machine.
* Go to the config directory and change development environment properties.
* Navigate to the folder where the repository in Terminal.
* Run the command `npm install` to download the required dependencies.
* Run webpack `webpack -w` and mongodb `mongod` commands to initialize the connections and update bundle.js.
* Then type `node server.js` in terminal inside the directory.
* Then run below address on browser.
    localhost:3000
