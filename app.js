require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

/* --------------------------------- express ------------------------------------- */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));

/* ---------------------------------- routes ------------------------------------- */

require('./src/routes/home')(app);

app.use((req, res) => {
    res.redirect('/');
});

/* ---------------------------------- server ------------------------------------- */

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: http://localhost:${process.env.PORT || 3000}/`);
});