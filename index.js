const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 5;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
const handlebars = exphbs.create({extname:'.hbs'})
//static files
app.use(express.static(path.join(__dirname,'public')));
//templeting engines
app.engine('.hbs', handlebars.engine); // setting engine to hbs
app.set('view engine', '.hbs');
app.set('views', './views');

const routes = require('./server/router/route');
app.use('/',routes)

app.listen(port, () => {
    console.log(`server running at port :${port}`);
});