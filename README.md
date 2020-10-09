# Image Repository

<!-- ![](./src/images/.png) -->
_Developed by Nick Telenson_ 

This app is an image repository that lets you upload and store your photos in one place. You have the ability to create an account, upload photos, and share photos by marking public or private.

## Table of Contents
* [Features](#features)
* [Getting Started](#getting-started)
* [Preview](#preview)

# Features

* Users are authenticated and authorized according to role level using JSON web tokens, local storage, and bcrypt
* Utilizes React frontend framework along with React Hooks and React Router
* Rails REST API backend 
* Integrates the Semantic React UI library for a streamlined minimalist design. 

## Built With

* React/React Hooks
* JavaScript
* Ruby on Rails API
* Semantic React UI
* HTML5 and CSS

# Getting Started

Please find the repo for the backend at [Image-Repository-Server](https://github.com/ntel-91/image-repository-API). You'll first need to follow the instructions on the README for the API in order to spin up the server and seed some starter photos and user account. Note: the API calls require you to start the Rails server on port 3000 to communicate with the front end `rails s -p 3000`

## Prerequisites 

Clone down this repo and after you have the backend cloned and the server running, install the associated dependencies with either `npm install` 

Then you can start running the program with `npm start`.

Change the url address to: http://localhost:3001/login.

## NPM Packages
  * moment
  * react-dom
  * react-router-dom
  * semantic-ui-react


<!-- ![]() -->


<!-- ## Acknowledgments -->

