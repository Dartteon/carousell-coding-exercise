const Thread = require('../models/Thread.js');

exports.getTopThreads = (req, res) => {
  Thread.find((err, docs) => {
    res.render('threads', { threads: docs });
  });
};
