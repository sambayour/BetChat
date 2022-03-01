# BetChat
Nodejs social media application. Behind the scene it uses Nodejs, Express and MongoDB, see [https://bechat-app.herokuapp.com/](https://bechat-app.herokuapp.com/) to use the application in staging environment.

## Dependecies
[NodeJs](https://nodejs.org/en/) - A JavaScript runtime environment\
[Express](https://expressjs.com/) - A NodeJs framework\
[MongoDB](https://www.mongodb.com/) - A NoSQL database

## Setup and run
to setup this project, run the following commands on your terminal
```bash
1. to clone the project `git clone https://github.com/sambayour/BetChat`
2. navigate to the project directory `cd BetChat`
3. install neccesary packages, modules `npm install`
4. create a `.env` file and copy the content of `env.example` to it. (remember to replace the variables with your own details).
5. to run the project `npm start`

6. using POSTMAN you can use this default url of `http://localhost:5000`
7. find `BetChat.postman_collection.json` in the project root directory for the postman colllection.
```
I recommend that you use [POSTMAN](https://www.postman.com/) for testing this api or you can hook it up with any front-end application.

##Endpoints

Register {POST}
`http://betchat-app.herokuapp.com/api/auth/register`

Login {POST}
`http://betchat-app.herokuapp.com/api/auth/login`

Add Post {POST}
`http://betchat-app.herokuapp.com/api/post`

Get Post {GET}
`http://betchat-app.herokuapp.com/api/posts`

My Profile {GET}
`http://betchat-app.herokuapp.com/api/users/621e7b3b6fb43bdd5eec0ec8`

If you are running the application locally, replace `http://betchat-app.herokuapp.com` with your localhost url in the endpoint.


## Author
[Samuel Olubayo](http://samuelolubayo.website)
