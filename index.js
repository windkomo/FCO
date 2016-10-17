/**
* This is an example of creating a custom express app, binding the Admin UI
* router to it, and using Keystone to intialise the database connection
*/

const express     = require('express');
const morgan      = require('morgan');
const cors        = require('cors');

const app = new express();

app.use(cors({
    origin: 'http://localhost:5100',
    credentials: true
}));

app.use(express.static('public'));
app.use(morgan('tiny'));

// Serve Front app at root instead of webpack dev server in production

// if (process.NODE_ENV === 'production') {
app.use('/', express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/build'));

// }
app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/assets'));

const server = app.listen(process.env.PORT || 5100, function () {
    console.log('-------------------------------');
    console.log('Express server ready on port %d', server.address().port);
    console.log('-------------------------------');
});
