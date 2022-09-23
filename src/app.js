const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('myslq');
const myConnection = require('express-myconnection')
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));


app.listen(3000, () => {
    console.log('Server on port 3000');
});