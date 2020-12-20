# UX Developer Intern & Web Developer Intern Challenge - Summer 2021

 **Challenge Description:**
 [https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#)

## Implementation

The application is a single page application (SPA) implemented with React and HTML/CSS.
The `src` directory contain all `JavaScript` files, the `public` directory contains the default `index.html` and other assets.

The application contains two main components located in `src/pages` directory:
* `Home` component: render the home page. Contain the `SearchBar`, `SearchResults`, and `Nominations` that respectively handle the query input, show the search results, and list the nominated movies.
* `Movie` component: show the details of one movie.

The rest of components are located in the `src/components` movies.

I use the React ContextAPI to manage the application's global state. The ContextAPI implementation files are located in `src/context` directory.

The OMDB API calls are handling by the custom React Hooks and helper functions located in `src/api` and `src/hooks` directories.

### Project Dependencies
 ```
    "axios": "^0.21.0",
    "framer-motion": "^3.1.1",
    "node-sass": "^4.14.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "styled-components": "^5.2.1",
 ```
## Demo
**Live**: [https://the-shoppies.herokuapp.com/](https://the-shoppies.herokuapp.com/)

**On YouTube**:

[![The Shoppies demo video](https://yt-embed.herokuapp.com/embed?v=q2UE8eo7qbM)](http://www.youtube.com/watch?v=q2UE8eo7qbM "The Shoppies")
 
## Run in Local
**Note:** make sure you have the latest stable version of `Node.js` and `NPM` installed in your local machine.

1. Clone the repository
```
git clone https://github.com/danielkanangila/sp-challenge-fe.git
```

2. Install dependencies
```
npm install
```

3. Set OMDB API KEY

Go to [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) to get the API KEY. You will receive your API KEY by email, then create the `.env` file in the root directory and add the variable `REACT_APP_OMDB_API_KEY` in the `.env` file like this:
```
//.env
REACT_APP_OMDB_API_KEY=YOUR_API_KEY
```
Replace `YOUR_API_KEY` by the API KEY you get by email from OMBD.