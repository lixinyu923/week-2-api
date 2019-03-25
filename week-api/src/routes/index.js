const express = require('express');
const router = express.Router();
const mongodb=require("mongodb");
const mongo=require("mongodb-curd");
const bname="tab";
const colname="week2"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/getlist', function(req, res, next) {
    mongo.find(bname,colname,function(result){
      if(!result){
        res.send({code:0,msg:"error"})
      }else{
        res.send({code:1,msg:result})
      }
    })
});
router.get('/api/getcenter', function(req, res, next) {
  console.log()
  mongo.find(bname,colname,req.query,function(result){
    if(!result){
      res.send({code:0,msg:"error"})
    }else{
      res.send({code:1,msg:result})
    }
  })
});
module.exports = router;
