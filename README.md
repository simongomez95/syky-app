## SETUP

This app can be run either in docker or directly with node.

To run the app with node, you need to have node v20.11.0 installed and a postgres instance running.
First, modify the .env file to match your postgres instance configuration.
Then you can run the following commands in the project directory:

```bash
npm install -g @nestjs/cli
npm install
npm start
```

To run the app with docker, you need to have docker and docker-compose installed. 
Then you can run the following command in the project directory:

```bash
docker-compose up
```
This will start the app and a postgres instance with docker. 

The app will be accessible at http://localhost:3000.

## ENDPOINTS
- GET /events?categoryId={categoryId}&planetId={planetId}
Returns a list of all events, optionally filtered by category id and planet id.
- GET /events/:id
Returns a single event by id.
- POST /events
Creates a new event.
Request:
```json
{
    "name": "Event name",
    "description": "Event description",
    "date": "2021-12-31T23:59:59.999Z",
    "categoryId": "category id",
    "planetId": "planet id",
    "coordinatesLat": "latitude of galactic coordinates",
    "coordinatesLon": "longitude of galactic coordinates"
}
```
- PUT /events/:id
Updates an event by id.
Request:
```json
{
    "name": "Event name",
    "description": "Event description",
    "date": "2021-12-31T23:59:59.999Z",
    "categoryId": "category id",
    "planetId": "planet id",
    "coordinatesLat": "latitude of galactic coordinates",
    "coordinatesLon": "longitude of galactic coordinates"
}
```
- DELETE /events/:id
Deletes an event by id.
- GET /categories
Returns a list of all categories.
- GET /planets
Returns a list of all planets.