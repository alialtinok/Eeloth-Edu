const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/eelothedu-db', {
  useNewUrlParser : true,
  UseUnifiedTopology : true,
  UseFindAndModify : false,
  UseCreateIndex : true
}).then (()=> {
  console.log('Db Connected Successfully');
});

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.use('/', pageRoute); 
app.use('/courses', courseRoute); 


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
