# Article Page Structure

## Framer JS Scroll Hijacking

The Article Pages were designed to be entirely controlled through Scroll Hijacking. Manage the Position, Opacity, etc of each component, we are using `scrollYProgress` from Framer.js. Unfortunately we were unable to find a way to centrally distribute one `scrollYProgress` hook to each component that needed it so each component dependent on scroll position has its own `scrollYProgress` hook to adjust its properties. 

Each scroll dependent component has a property called `scrollInfo` an array of numbers that contains scrolling "time stamps" that informs the component of relevant scroll positions. `scrollInfo` is a little like defining keyframes in aftereffects or other motion design softwares except instead of timestamps, it uses the scroll position of the user on the page from 0-1. Additional parameters are required based on the individual component

One difficulty we noticed early on was that in a page with multiple sections of text, it became very tedious to define the time stamps for each section. To make this easier, we devised a system of timings to make things slightly more manageable. 

## Section -> Page Scroll Timing

Each page has the following:

`sectionHeights`: An array of numbers describing the background heights of each section
`sectionTimings`: A 2D Array of numbers. Each element of the array denotes a section, each array within the 1D array contains timing values for an element within a section

These two variables allow the scroll "timestamps" of an element to be described from 0-1 in relation to the start and end of the section it belongs to. Scroll values defined in relationship to each section 0-1 are adjusted to in relationship to the whole page 0-1 before use. Adding up the section heights and `endBlock`, an extra value reflecting the footer height, we arrive at a total sum. Each value in `section timings` is multiplied by its own section height / this sum and added to the sum of sections up to the current section / the sum. The section heights are then multiplied by the scalar `heightsScalar`, a variable added late in our development process that allows us to adjust the experiential scroll speed of the page without adjusting each page height value. What results is an `adjustedTimings` variable that hosts all of the translated global page timings. An element in `adjustedTimings` is what each scroll based component is given.

Note: The manifesto page has an additional `startHeight` value added to the calculation because the manifesto article was moved into the landingPage.

## Mapping Scroll Timings into timing controlled properties

Framer.js provides the function `useTransform()`. It takes three values: a value to track, an array of values to reference the tracked value, and an array of values to transform to. To make convert `scrollYProgress` to opacity for example, we would use `useTransform()` with `scrollInfo` or a modified version transforming to an array of matching length. EX. `useTransform(scrollYProgress, scrollInfo, [0, 1, 1, 0])` 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

