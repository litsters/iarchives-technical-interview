# Introduction
This repository contains code for use in iArchives technical interviews. It consists of two parts: a Node.js express server and ReactJS app. Both will be used in the interview.

# Running the Server
Navigate to the server directory then follow these steps:
1. Install dependencies if you have not done so already. `npm install`
2. Build code. `npm run build`
3. Start the server. `npm run start`

The server runs on port 8080. You can verify that it is working by making a GET request on that port at `/health`. If it returns 'Healthy' the server is working and able to respond to requests.

# Running the App
The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start the app, navigate to the app directory then follow these steps:
1. Install dependencies if you have not done so already. `npm install`
2. Build and start the server in development mode. `npm start`

There is another README in the app directory with more scripts you can use, but may not be necessary for the interview.

The app will automatically proxy fetch requests to port 8080 so the server can respond to them.