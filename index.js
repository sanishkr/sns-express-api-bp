const express = require('express');
const {
    config
} = require('./config/index');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const logger = require('morgan');
var path = require('path');
var fs = require('fs');
// const passport    = require('passport');
// console.log({config});
var logPath = path.join(__dirname+'/logs/', 'access.log');

const app = express();
app.set('host', config.app.host);
app.set('port', config.app.port || '3000');
app.use(bodyParser.urlencoded({
    extended: false
})); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
if (fs.existsSync(logPath)) {
    app.use(logger('combined', {
        skip: function (req, res) { return process.env.NODE_ENV === 'prod' ? true : (res.statusCode < 400) },
        stream: fs.createWriteStream(logPath, {flags:'a'})
    }));
    console.log('access.log exists!');
} else {
    fs.mkdirSync(path.dirname(logPath));
    fs.writeFileSync(logPath, {flags:'wx'});
    console.log('access.log created!');
} // Log requests to API using morgan only which are 4XX or 5XX

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
