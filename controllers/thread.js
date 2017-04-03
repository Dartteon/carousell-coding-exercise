const Thread = require('../models/Thread');

exports.getTopThreads = (req, res) => {
  // Thread.create(
  //   {
  //     title: "Test2",
  //     description: "This is description",
  //     upVotes: 0,
  //     downVotes: 0
  //   }, function () {
  //     console.log("Thread created");
  //   }
  // );
  Thread.aggregate([
      {$sort: {upVotes : -1}},
      {$limit: 10},
    ],(err, docs) => {
      res.render('threads', { threads: docs });
  });
};

exports.upvoteThread = (req, res) => {
  threadId = req.query.threadId;
  Thread.findByIdAndUpdate(threadId,
    { $inc: { "upVotes" : 1 }
  }, function() {
    res.redirect('back');
  });
}
exports.downvoteThread = (req, res) => {
  threadId = req.query.threadId;
  Thread.findByIdAndUpdate(threadId,
    { $inc: { "upVotes" : -1 }
  }, function() {
    res.redirect('back');
  });
}
