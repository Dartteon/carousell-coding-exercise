const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    title: { type:String },
    description: { type: String},
    upVotes: Number,
    downVotes: Number
}, { timestamps: true });
