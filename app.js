const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT||3306
const unauthorizedRoutes = require('./routes/unauthorized');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({urlencoded:false}));
app.use(unauthorizedRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page not found</h2>');
  }
)
app.listen(port,(err)=>{
    console.log('App listening on port : '+port);
});