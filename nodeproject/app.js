var express = require('express');
var app = express();
var port = 3000;
// added host variable
var host = '0.0.0.0';
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');


app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/Events', eventRouter);
app.use('/Db', dbRouter);

app.get('/', function(req, res){
    res.render('index', {
    	list: ['val1', 'val2', 'val3', 'val4'],
    	nav: [{ Link: 'Services', Text: 'Services' }, 
	    	{ Link: 'Portfolio', Text: 'Portfolio' }, 
	    	{ Link: 'About', Text: 'About' },
	    	{ Link: 'Team', Text: 'Team' },
	    	{ Link: 'Contact', Text: 'Contact' },
	    	{ Link: 'Events', Text: 'Events'}
	    ]
	});
});

app.get('/routing', function(req, res){
    res.send("Howdy Routing World!");
});

// app.listen(port, function(err){
//     console.log('the server is running on port: ' + port);
// });


//told to listen to port, host then console.log to terminal
app.listen(port);
console.log('the server is running on ' + port);