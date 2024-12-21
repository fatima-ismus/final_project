# WEATHER EXPLORER APP

## Table of Contents
- [Overview of the proect](#overview)
- [Setting up the project](#set)
- [Running the project](#run)
- [Technologies used](#tech)



## Overview of the project
This weather explorer app is a website that provides users with real-time weather information based on some cities. It typically offers a range of weather-related data such as weather description like rain or sunshine, temperature, humidity and wind speed. 

## Setting up the project
* Use npm to create a new project using the Vite template for React
```bash
npm create vite@latest 
```
* It will prompt a message to install the package, create-vite@6.1.0c, choose "y" to proceed
* It will  prompt some questions, then write the corresponding answers
* Choose project name, package name, select React as framework, select JavaScript as variant
* Run 
```bash
npm install
npm run dev
```
* React app has been set up and ready to start writing project

## Installing Tailwind CSS and its peer dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
* Add the paths to all of your template files in your tailwind.config.js file.
* Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Adding React Router
To add React Router in your application, run this in the terminal from the root directory of the application:

```bash
npm i -D react-router-dom@latest
```



## Running the project
After modifying files and creating components for the app in the src/: (the main source code for your React app is inside the src folder), App.jsx for building the application, Vite will automatically update the browser with any changes you make to the source code without needing to reload the page
* Prompt
```bash
npm run dev
```
open the local host link in the browser to see your project

## Technologies used

By combining these technologies, I created an app that is scalable, fast and easy to maintain, , and offers a seamless experience for users looking to explore weather information of some cities

* Frontend Framework: React.js
* Routing: React Router
* HTTP Requests: Fetch
* Styling: Tailwind CSS 
* Weather API: OpenWeatherMap

## React.js
 The core library for building dynamic user interfaces with components, managing state, and rendering real-time weather updates of the cities.

## React Router
 Manages navigation between different pages within the app.

## Tailwind CSS
 CSS framework used to style the app, making it visually appealing and responsive across devices.

## OpenWeatherMap API
 It gives you access to current weather conditions and other weather information. It is fetched using the HTTP requests to the external API (OpenWeatherMap) to fetch the real-time weather data.

## Additional Note
This weather app project provided me with a great opportunity to work with APIs and user interface design. It's a practical application that leverages real-time data to create a useful tool for users. I could expand it with features like push notifications, weather maps, and smart device integration to make it more appealing and useable.




