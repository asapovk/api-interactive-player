const path = require('path')
//var express = require('express');
const Koa = require('koa')
const api = require('./api')
//var bodyParser = require('body-parser');
//var port = 3001;

const app = new Koa()
const json = require('koa-json')

//app.use(bodyParser.json());
app.use(json())
app.use(api.routes(),'/api')

app.listen(3001, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + 3001);
});
