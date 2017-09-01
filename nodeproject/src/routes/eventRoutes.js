var express = require('express');
var eventRouter = express.Router();
// connect to mongodb and use MongoClient
var mongodb = require('mongodb').MongoClient;

eventRouter.route('/')
    .get(function(req, res) {
        // define url
        var url = 'mongodb://localhost:27017/eventsApp';
        // open database connection
        mongodb.connect(url, function(err, db) {
            // address 'events' collection
            var collection = db.collection('events');
            // query collection for all events and return them in an array
            collection.find({}).toArray(function(err, results) {
                // once in array, render events page with nav array and results from query of collection
                res.render("events", {
                    list: ['event 1', 'event 2', 'event 3', 'event 4'],
                    nav: [{ Link: 'Services', Text: 'Services' },
                        { Link: 'Portfolio', Text: 'Portfolio' },
                        { Link: 'About', Text: 'About' },
                        { Link: 'Team', Text: 'Team' },
                        { Link: 'Contact', Text: 'Contact' },
                        { Link: 'Events', Text: 'Events' }
                    ],
                    events: results
                })

            });

        });
    });

eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render("event", {
            list: ['event 1', 'event 2', 'event 3', 'event 4'],
            nav: [{ Link: 'Services', Text: 'Services' },
                { Link: 'Portfolio', Text: 'Portfolio' },
                { Link: 'About', Text: 'About' },
                { Link: 'Team', Text: 'Team' },
                { Link: 'Contact', Text: 'Contact' },
                { Link: 'Events', Text: 'Events' }
            ],
            events: eventsData[id]
        });
    })

module.exports = eventRouter;