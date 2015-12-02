module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();
  var date = new Date();

  eventsRouter.get('/', function(req, res) {
    res.send({
      'events': [
        {
          id: 1,
          title: 'stupid',
          start: '2015-10-11',
        },
        {
          id: 2,
          title: 'stupid2',
          start: '2015-10-11',
        }
      ]
    });
  });

  eventsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  eventsRouter.get('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.put('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', eventsRouter);
};
