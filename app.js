//IMPORTS
let express = require('express');
let app = express();
let mongoose = require('mongoose');
//let Schema = mongoose.Schema;
//let passportLocalMongoose = require('passport-local-mongoose');
// let User = require('./models/user');
// let passport = require('passport');
// let session = require('express-session');
// let LocalStrategy = require('passport-local-mongoose');

// mongoose.connect('mongodb://localhost:27017/coworker', {
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// })
//     .then(() =>console.log('Connected to Db!'))
//     .catch(error => console.log(error.message));

//STATIC FILES
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
// app.use(session(sessionConfig))
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

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

app.get('/joinlogin', function(req, res){
    res.render('joinlogin');
});

app.post('/joinlogin', function(req, res){

})




//LISTEN ON PORT 3000
app.listen(3000, function(){
    console.log('Server is running');
});