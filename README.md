# Movie Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# About MovieApp

- Serch for movie post
 - View Movie post
# How to run 

- ensure you have npm installed **[npm](https://docs.npmjs.com/cli/v7/commands/npm-install)**
 - clone the project from github **[movieapp.git](https://github.com/edcheyjr/movieapp.git)**
 - create an ```.env``` however for local and development create ```.env.development.local ```,for testing locally create a ```.env.test.local``` files and config it as so:
    - copy contents from ```.env.example``` to this news files
    - apply for api key from **[omdapi](http://www.omdbapi.com/apikey.aspx)** and paste on .```env```,```.env.development.local``` and ```.env.test.local``` files.
 -  write on the terminal inside the project ```npm install```.
 -  run ```npm start``` to start the serve.

# How it works

Type the name of the movie on the search bar

##### Search for movie

<img src="/public/img/search.png">

##### View the Movie

<img src="/public/img/view_movie.png">

##### Add a 404 page

<img src="/public/img/404.png">

## Netlify.com

Get online version here **[allmovie.netlify](https://allmovie.netlify.app/)**

## Assumption

 person using this is familiar with react and create-react-app


## Available Scripts 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

