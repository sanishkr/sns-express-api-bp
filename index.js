const express = require('express');
const config = require('./config/index');
const router = require('./routes/index');
const bodyParser = require('body-parser');
// logger = require('morgan'),
// passport    = require('passport');
// console.log({config});

const app = express();
app.set('host', config.app.host);
app.set('port', config.app.port || '3000');
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
// app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.website_url);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')} for ${process.env.NODE_ENV} Environment!`))

router(app);