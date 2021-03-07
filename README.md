Simple Single Page App that accepts a search term through a form and displays gifs based on the search term using the GIPHY API.

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live demo

https://ignovak.github.io/

## Implementation Notes

What has been implemented:
* Fetching and displaying gifs from GIPHY API by user query
* Handling edge cases: network and api errors, loader, empty query, empty search result
* For better UI, the gifs are displayed in background image, at the same time, there's a real transparent img tag over the background, so that the gifs can be copied, searched, opened, etc from the context menu
* Flexible layout: the tiles are resized and rearranged depending on window width
* Docker image build

What hasn't been done:
* Tests
* Routing (to keep user query in the search string)
* Smarter choice for gif source url and sizes based on the metadata

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**You will have to put GIPHY API key to `src/giphy_api_key.json` file** (otherwise, you'll get `Error: Invalid authentication credentials`)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `docker build -t gif-gallery . && docker run -it --rm -p 1337:80 gif-gallery`

Builds the docker image and runs the app in production mode on http://localhost:1337/