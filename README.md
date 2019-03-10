# Setup the database

Assumes that mongod service runs on the default address: localhost:27017.
```
sudo service mongod start

mongo
> use hp
> db.createUser({ user: "username", pwd: "password", roles: [ "userAdmin" ] });
> exit

mongoimport --db hp ./test_data.json
```
