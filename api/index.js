//var router = require('express').Router();
const mocks = require('./mock');
//var assign = require('object-assign');
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')


const router = new Router({ prefix: '/api' });

//router.get('/chapters', function (req, res, next) {
//    var chapters = mocks.chapters;
//    console.log("Hello");
//    res.json(chapters);
//});

router.get('/chapters', (ctx)=>{
  console.log('works')
  const chapters = mocks.chapters
  ctx.body = chapters
})

router.get('/video', async (ctx) => {
  const video = fs.createReadStream(path.join(__dirname, '../video/Kuroko3_1.mp4'))
  //ctx.set('Content-disposition', 'attachment; filename=' + 'Kuroko3_1.mp4');
  ctx.set('Content-Type','video/mp4');
  ctx.body = video
})





module.exports = router;
