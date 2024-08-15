# Fender Ecommerce Full Stack Developer Development Assessment

## Steps to run client (fender-app)
Created in angular with apollo-clietn and Bootstrap
npm install
ng serve

## Steps run backend (fender-app-server) and to install sqlite3 (database for users)
Steps to recreate the database used for store users

1. npm install
2. npm install sqlite3
3. Position in fender-app-server/src/
4. Inside this folder run the next commands (Install sqlite3 first)
      - sqlite3 fender-app
      - CREATE TABLE users( id INTEGER PRIMARY KEY, name TEXT, password TEXT, email TEXT);
3. npm run start
