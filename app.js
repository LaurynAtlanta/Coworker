//IMPORTS
let express = require('express');
let app = express();


//STATIC FILES
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));


//SET
app.set('views', './views');
app.set('view engine', 'ejs');


//ROUTES
app.get('/', function(req, res){
    res.render('index');
});

app.get('/how', function(req, res){
    res.render('how');
});

app.get('/location', function(req, res){
    res.render('location');
});

app.get('/pricing', function(req, res){
    res.render('pricing');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/joinus', function(req, res){
    res.render('joinus');
});


//LISTEN ON PORT 3000
app.listen(3000, function(){
    console.log('Server is running');
});