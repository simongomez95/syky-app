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