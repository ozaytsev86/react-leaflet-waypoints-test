# react-leaflet-waypoints-test
Project to test integration with [react-leaflet-waypoints](https://github.com/ozaytsev86/react-leaflet-waypoints) component.

# How to connect react-leaflet-waypoints component

### Clone both repositories
Clone this repository
`git clone git@github.com:ozaytsev86/react-leaflet-waypoints.git`  
Clone package repository
`git clone git@github.com:ozaytsev86/react-leaflet-waypoints-test.git`

### Link package with npm
Go to react-leaflet-waypoints package folder  
`cd ~/repos/react-leaflet-waypoints`
Install dependencies  
`yarn` or `npm install`  
Create a build. At the moment you have 2 ways to generate a build.  
`yarn build` or `npm run build`  
`yarn build:babel`  or `npm run build:babel`  
Once you generate the build, create a global link to npm  
`npm link`  

If you get an error `ERR! ERESOLVE unable to resolve dependency tree`  
Run `npm config set legacy-peer-deps true`

### Link package into test project  
Go to the test project folder    
`cd ~/repos/react-leaflet-waypoints-test`  
Install dependencies  
`yarn` or `npm install`  
Link package dependency  
`npm link react-leaflet-waypoints`  
Start development server  
`yarn start`  

