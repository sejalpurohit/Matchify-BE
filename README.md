# Matchify-BE

A RESTful API utilising CRUD principles within a mobile application.

- MongoDB
- ExpressJS
- React Native (Web/Android/iOS)
- NodeJS

## Prerequisites

[Node.js](https://nodejs.org/en/download) v24.7.0
[MongoDB](https://www.mongodb.com/try/download/community) v8.2.2

## Cloning

To clone this repository run:

```
git clone https://github.com/sejalpurohit/Matchify-BE.git
```

## npm packages

To install the npm dependencies run:

```
npm install
```

## .env files

Create a .env.local file and add the following:

```
DATABASE_URL="mongodb://localhost/users"
```

In order to connect to your local mongodb database when running a local server

## Usage

To seed a local instance of the database run:

```
npm run seed
```

To start a local server run:

```
npm run dev
```
