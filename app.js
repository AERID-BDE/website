    require('dotenv').config();

const mongoose = require('mongoose')
const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const app = express();

/* --------------------------------- mongoose ------------------------------------- */

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true });

/* --------------------------------- express ------------------------------------- */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));

app.use(express.static(path.join(__dirname, 'static')));

app.use(
    sassMiddleware({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'static'),
        debug: true,
        outputStyle: 'compressed',
    })
);

app.use(express.urlencoded({extended: false}));

/* ---------------------------------- routes ------------------------------------- */

require('./src/routes/auth')(app);
require('./src/routes/home')(app);
require('./src/routes/event')(app);
require('./src/routes/product')(app);
require('./src/routes/admin.home')(app);
require('./src/routes/admin.event')(app);
require('./src/routes/admin.product')(app);


app.use((req, res) => {
    res.redirect('/');
});

/* ---------------------------------- server ------------------------------------- */

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: http://localhost:${process.env.PORT || 3000}/`);
});