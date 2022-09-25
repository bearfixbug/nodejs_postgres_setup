const express = require('express')
const app = express();
// const postgres = require('postgres')
const pgp = require("pg-promise")(/*options*/);

pgp.pg.defaults.ssl = {
    rejectUnauthorized: false
};

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);


const server = app.listen(3000, console.log('server is running'));

db.any('select * from unit_location where id = $1',[
    rid
])
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})
