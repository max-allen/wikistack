var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/node_modules'));
app.use(express.static(__dirname+'/public'));

app.listen(3000);

app.get('/', function(req,res){
	res.send('I am here!');
})

//configuring nunjucks
var env = nunjucks.configure('views', {noCache: true});
app.set('view engine','html');
app.engine('html',nunjucks.render);