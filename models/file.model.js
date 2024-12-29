const mongoose   = require("mongoose");

const file = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    originalname:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
})

module.exports = file;
