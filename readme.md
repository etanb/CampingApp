# Camping Diary App

## Initial seed project based on DimitriMikadze's Express / React / Redux starter

- https://github.com/DimitriMikadze/express-react-redux-starter.git

## Getting Started

Clone Repo

````
git clone https://github.com/DimitriMikadze/express-react-redux-starter.git
````

npm install dependencies

````
cd express-react-redux-starter 

npm install
````

### Start development server with hot reloading

````
npm run dev
````

### Testing

Run test once

````
npm run test
````

Test watch

````
npm run test:watch
````

### Linting

For linting i'm using Eslint with Airbnb Eslint configuration

````
npm run lint
````

### Production

Build for production

````
npm run build
````

Start production server

````
npm run start
````

Note: I'm using pm2 for production server, you should install it on server via 'npm install pm2 -g'.
if you don't want to use pm2, just change pm2 with node in package.json file in scripts section.

### Upcoming features

- Review each area with a star rating system
- Commenting system on each area for tips
- User accounts
- Ability to save personal notes on each area
- Usage of http://www.transitandtrails.org/api for all text information and Google Custom Search API for images

### Contributing

contributions are welcome!

### License

MIT
