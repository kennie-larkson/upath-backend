# Express-Graphql-Knex-PostgresSQL-server
An Express with Graphql backend server, Knex and Postgres for the database

## Development setup
A quick guide to setup the **sharpstudy** backend project on your local machine

Clone the repo ---> ```https://github.com/upathorg/Backend-in-Node-And-Database.git```

Run ```yarn install``` OR simply ```yarn``` to install all in the dependencies in ```package.json``` file

#### Setup environment variables
Create a ```.env``` file and populate it with the below, generating your clientIDs from Google ```http://console.developers.google.com/``` , Linkedin ```https://www.linkedin.com/developers/```, Facebook ```https://developers.facebook.com/```
``` as the case may be. Note: We use **Passport.js** for our simple authentication
# Google ClientIDs and Secrets
    googleClientID=
    googleClientSecret=

# JWT Secret
    jwtSecret=sharpstudyupath

# Linkedin ClientIDs and Secrets
    linkedinClientID=
    linkedinClientSecret=

# Facebook ClientIDs and Secrets
    facebookClientID=
    facebookClientSecret=
```

#### Create your Postgresql Database
**Install** and **Create** your postgres database locally, and name it **upathlearning**. Note: you can choose to name it whichever name you want, but make sure you give it that same name in your **knexfile.ts** file

Start the database

#### Run Migrations
Migrate the tables schemas in the migrations folder to your locally created DB by running ```yarn knex migrate:latest```. This will create the tables and populate them with their respective schemas in the database. Visit **http://knexjs.org/** for more on Knex as a query builder

#### Run the Server
$ ```yarn dev```
Go to graphql playground ---> **http://localhost:5000/graphql** on your browser

You can choose to generate and use a jwt token for authorization on the playground's HTTP HEADERS, by launching **http://localhost:5000/auth/google** depending on the social auth you choose

Copy the token and paste it in the playground's HTTP HEADERS like below

```
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInByb3ZpZGVyIjoiZ29vZ2xlIiwicHJvdmlkZXJJZCI6IjE"
}
```

OR you can choose to disable the ```context: verifyToken``` by commenting it out so you will not have to generate a token for testing endpoints on graphql

