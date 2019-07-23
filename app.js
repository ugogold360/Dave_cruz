const express = require('express');
const app = express();
const path = require('path');
const exphandbars = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphandbars({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

const home = require('./routes/home/index');
app.use('/', home);


var port = 3500;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});