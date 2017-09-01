//create router
var express = require('express');
var dbRouter = express.Router();
// connect to mongodb and use MongoClient
var mongodb = require('mongodb').MongoClient;

// add event data
var eventsData = [{
        name: 'Event 1',
        description: 'First Event',
        date: '2016-01-01',
        time: '1:00PM',
        duration: '1 Hour',
        location: {
            streetAdr: '101 Main St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '88785',
            lon: 0,
            lat: 0,
        },
        capacity: 100
    },
    {
        name: 'Event 2',
        description: 'Second Event',
        date: '2016-01-02',
        time: '2:00PM',
        duration: '2 Hours',
        location: {
            streetAdr: '148 St Nicholas Ave',
            city: 'Smithown',
            state: 'NY',
            zip: '11787',
            lon: 0,
            lat: 0,
        },
        capacity: 35
    },
    {
        name: 'Pool Party',
        description: 'Pool Party with Nate',
        date: '2017-07-28',
        time: '4:00PM',
        duration: '2 Hours',
        location: {
            streetAdr: '701 E Bluff St',
            city: 'Fort Worth',
            state: 'TX',
            zip: '76102',
            lon: 0,
            lat: 0,
        },
        capacity: 60
    },
    {
        name: 'Molly B-Day',
        description: "Molly's Birthday",
        date: '2017-08-01',
        time: '2:00PM',
        duration: '5 Hours',
        location: {
            streetAdr: "Meg's House",
            city: 'Wappingers Falls',
            state: 'NY',
            zip: '11111',
            lon: 0,
            lat: 0,
        },
        capacity: 15
    }
];

dbRouter.route('/AddEventData')
    .get(function(req, res) {
        // res.send('Successful Route test!');

        // create url variable
        var url = 'mongodb://localhost:27017/eventsApp';
        //connect to database, pass url and function(errors, database itself){}
        mongodb.connect(url, function(err, db) {
            // create 'events' collection and use after creation
            var collection = db.collection('events');
            // insert eventsData array into events collection
            collection.insertMany(eventsData, function(err, results) {
                // after inserting eventsData, send results to browser
                res.send(results);
                db.close();
            });

        });

    });

// export for use in app.js
module.exports = dbRouter;