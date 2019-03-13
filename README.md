# Description
I've decided to take a route of manual styling of the frontend application with SCSS.<br/>
It took me longer than recommended, to complete the whole thing, but I really enjoyed it!

The only things that I haven't done from the .docx are:
* SSR
* Testing

But you can check out [tests that I wrote for a similar application](https://github.com/arkadyt/ww.net/tree/master/client/src/components) written in the same stack a couple months ago!<br/>
I've used `enzyme` for React components and `jest` to run tests. Tests [are set up to run on](https://github.com/arkadyt/ww.net/blob/master/.travis.yml) `Travis CI` servers.<br/>
It also has `99%` code coverage! (few minor branches are left untested)

Backend app is hosted on GCP, on my ubuntu server, behind nginx reverse proxy in a docker container.<br/>
[Site link](https://hp.arkadyt.com).

# Run locally

First setup the database:
```
sudo service mongod start

mongo
> use hp
> db.createUser({ user: "username", pwd: "password", roles: [ "userAdmin" ] });
> exit
```

Then create `server/config/keys.dev.js` file and place this into it:
```
module.exports = {
  MONGO_URI: 'mongodb://<user>:<pwd>@localhost:27017/hp'
}
```

Then run:
```
# cd into repo root and:
export NODE_ENV=development
yarn run install
yarn run dev

# you can also choose to run backend with docker-compose
# but that would require an .env file containing
# MONGO_URI and NODE_ENV variables
docker-compose build
docker-compose up -d

# troubleshooting ports
sudo netstat -nlp | egrep '3000|5501'
kill $PIDs
```
