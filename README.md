# Weather App


    
### Tech Stack
    
  - Nodejs (v14.x)
  - Reactjs(v17.0.2)
  - Express(v4.x)


### Installation

Install the dependencies and devDependencies and start the server.
Create .env file from .env.sample for all the configurations.

```sh
$ npm install
$ cd webclient
$ npm install
```

For production environments for heroku.
Need to add .env values to heroku config else replace npm start with npm run dev
```sh
$ npm install
$ npm start
$ npm run heroku-postbuild
```


### Development
For server side development: 
```sh
$ npm run dev
```

For client side development:
```sh
$ cd webclient
$ npm start
```

#### Build react code for production
For production release:
```sh
$ cd webclient
$ cd npm run build
```
### Todos





