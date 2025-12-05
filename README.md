# 🎵 Matchify-BE

**Find your perfect match through music.**  
Matchify-BE is the backend service for the Matchify mobile app. It is a RESTful API (CRUD) used by the React Native client (Web / Android / iOS) to store user profiles, preferences, and recommend music-based matches.

- MongoDB
- ExpressJS
- React Native (Web/Android/iOS)
- NodeJS


## 📦 Prerequisites
Install the following before running the project:

- [Node.js](https://nodejs.org/en/download) 
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)


 ## ⚙️ Setup
### 1. Clone the repo
```bash
git clone https://github.com/sejalpurohit/Matchify-BE.git
cd Matchify-BE
npm i
```

### 2. Create .env files

Create a .env.local file and add the following:

```
DATABASE_URL="mongodb://localhost/users"
```

In order to connect to your local mongodb database when running a local server

###  3. Seed Local Database

To seed a local instance of the database run:

```
npm run seed
```
###  4. Start Local Server
To start a local server run:

```
npm run dev
```
---

## 🚀 Features
- User profiles and preferences (including music tastes)
- Match discovery based on music compatibility
- Full CRUD REST API
- [Hosted demo available](https://matchify-be-production.up.railway.app/users)

---

## 🛠️ Tech Stack
- **Node.js** (server runtime) 
- **Express.js** (web framework)  
- **MongoDB** (database)
- **React Native** (client — Web/Android/iOS)  

---

## 🖥️ Frontend Details

Repo Link: [https://github.com/sejalpurohit/Matchify-BE](https://github.com/LeapimusMaximus/Matchify-FE)
