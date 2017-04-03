const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    title: { type:String },
    description: { type: String},
    upVotes: Number,
    downVotes: Number
}, { timestamps: true });

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;
