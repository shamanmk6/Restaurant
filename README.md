

## Setup

1. Clone the repository from github
2. install dependencies :`npm install`.
   It will install all the dependencies that i used in this project.
3. Set up a `.env` file with JWT secret and Mongodb Connection string.
   it should be like this :
     MONGODB_URI= your_mongodb_atlas_connection_string
     JWT_SECERET=your_jwt_secret
4. Start the server :`nodejs .\server.js`.
   If you want to run with `nodemon` ,
   Install nodemon by `npm i nodemon` and start server as:`npm run dev`
5. App will start in :`http://localhost:3000/api/users/home`

## Docker
1. Build the docker image:`docker build -t your-docker-username/restaurant-project`
   **MongoDB**: Ensure you have MongoDB running and accessible. You can use a local MongoDB instance or a cloud-based MongoDB service like MongoDB Atlas.
2. Run the Docker conatiner :`docker run -p 5000:5000 -e MONGO_URI=your_mongodb_connection_string your-docker-username/restaurant-project`
   Add your actual Mongo DB connection string.
3. Push the image to Docker Hub:`docker push your-docker-username/restaurant-project`

## API Endpoints
- `POST /api/users/register` - Register a new user.
- `POST /api/users/login` - Login and get a JWT token.
- `POST /api/restaurants/within-radius` - Get restaurants within a specific radius.
- `POST /api/restaurants/within-range` - Get restaurants within a distance range.

## Testing

Use Postman to test the API endpoints.