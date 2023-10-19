    require('dotenv').config();

const mongoose = require('mongoose')
const express = require('express');
const path = require('path');

const app = express();

/* --------------------------------- mongoose ------------------------------------- */

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true });

/* --------------------------------- express ------------------------------------- */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));

/* ---------------------------------- routes ------------------------------------- */

require('./src/routes/auth')(app);
require('./src/routes/home')(app);
require('./src/routes/product')(app);


app.use((req, res) => {
    res.redirect('/');
});

/* ---------------------------------- server ------------------------------------- */

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: http://localhost:${process.env.PORT || 3000}/`);
});