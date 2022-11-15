const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes)


app.listen(3000, () => console.log('App running at port 3000'));