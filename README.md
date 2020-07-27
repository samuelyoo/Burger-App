# burgerlite
Welcome to our burger application!

## Create Database
mysql -u root -p{your-db-password} < docs/schema.sql

mysql -u root -p{your-db-password} < docs/seed.sql

## Configure
Adjust the database password in config/connection.js

## Run
node server.js
