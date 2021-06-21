const express = require('express');
const request = require('request');
const router = express.Router();
const path = require('path');
router.get('/',(req,res,next)=>{
    request({
        url:"https://api.exchangerate.host/convert?from=USD&to=INR&date=2021-06-21&amount=20",
        json: true
      },(err,response,body)=>{
         getData(body);
      }
      );
      const getData = (cb)=>{
        const data=[];
        data.push(cb.query);
        data.push(cb.date);
        data.push(cb.result);
        console.log(data);
        res.render('authorized/saved',{data:data});
     }
});
router.get('/login',(req,res,next)=>{
    res.render('unauthorized/login');
});
router.get('/signup',(req,res,next)=>{
    res.render('unauthorized/signup');
});
router.get('/saved',(req,res,next)=>{
   res.render()
})
module.exports = router;