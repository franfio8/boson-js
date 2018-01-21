var express =  require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next){
  console.log('logging...');
  next();
}

app.use(logger);
*/

//body parser middleware
app.use(bodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));

//  Set static path
app.use(express.static(path.join(__dirname. 'public')));


app.get('/', function(req, res){
 res.send('Hey world');
});

app.listen(3000, function(){
 console.log('Server started on port 3000...');
})
