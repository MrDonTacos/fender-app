# Fender Ecommerce Full Stack Developer Development Assessment

## fender-app
Created in angular with apollo-clietn and Bootstrap

## fender-app-server
Created with apollo-server

## Steps to install sqlite3 (database for users)
Steps to recreate the database used for store users

1. Inside fender-app-server/src/ create a folder *data* , it should look like this fender-app-server/src/data
2. Inside this folder run the next commands (Install sqlite3 first)
      - sqlite3 fender-app
      - CREATE TABLE users( id INTEGER PRIMARY KEY DESC, name TEXT, password TEXT, email TEXT);
