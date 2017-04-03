const Thread = require('../models/Thread');

exports.getTopThreads = (req, res) => {
  Thread.find((err, docs) => {
    res.render('threads', { threads: docs });
  });
};
