const Thread = require('../models/Thread');
const MAX_TOP_THREADS = 20;

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
      {$sort: {upVotes : -1, createdAt : -1}},
      {$limit: MAX_TOP_THREADS},
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

exports.createThread = (req, res) => {
  threadTitle = req.query.title;
  threadDescription = req.query.description;
  Thread.create(
    {
      title: threadTitle,
      description: threadDescription,
      upVotes: 0
    }, function() {
      res.redirect('/');
    }
  )
}
