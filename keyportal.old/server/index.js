const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(pino);

console.log("Seriously!");
console.log('directory-name️', __dirname);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build', 'index.html')));



const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

app.use(expressCspHeader({
    directives: {
        'default-src': [SELF, 'https://jsonplaceholder.typicode.com', 'moz-extension'],
        'script-src': [SELF, 'https://cdn.brand.illinois.edu', 'https://cdn.jsdelivr.net', 'https://cdn.toolkit.illinois.edu', ' https://builder.toolkit.illinois.edu'],
        'style-src': [SELF, INLINE, 'https://uofi2020theme.web.illinois.edu', 'https://cdn.brand.illinois.edu', 'https://cdnjs.cloudflare.com', 'https://cdn.toolkit.illinois.edu', ' https://builder.toolkit.illinois.edu'],
        'img-src': [SELF, 'https://cdn.brand.illinois.edu'],
        'worker-src': [SELF],
        'font-src': [SELF, 'https://uofi2020theme.web.illinois.edu', 'https://cdn.brand.illinois.edu', 'https://cdnjs.cloudflare.com', 'https://cdn.toolkit.illinois.edu', ' https://builder.toolkit.illinois.edu'],
        'block-all-mixed-content': false
    }
}));


// add middlewares
const root = require('path').join(__dirname, '../build');
app.use(express.static(root));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/', '../build', 'index.html'));
});


/*app.get('/', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'application/javascript');
    //res.setHeader('Content-Type', 'text/plain');
    //res.setHeader('Content-Security-Policy-Report-Only', "default-src='self'; style-src 'self'; font-src 'self'; image-src 'self'; script-src 'self'; frame-src 'self'; style-src 'self';");
    //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

    const index = path.join(__dirname, '../build', 'index.html');
    //res.sendFile(index);


    //res.send('HELLO');
    //if (err) {
    //   res.status(500).send(err)
    //}
});
*/
/*
var cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(({ credentials: true, origin: 'localhost:8081' })))


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header("Access-Control-Allow-Credentials", true); ALREADY SET IN CORS() ABOVE
    next();
})
*/
//app.listen(8080, "127.0.0.1")

const port = process.env.PORT || 3000;

app.listen(port, "127.0.0.1", () =>
    console.log('Express server is running on', port));

