const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    tracks: [{
        type: String,
        required: true,
    }]
})

const songSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})

const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    recordLabel: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    albums: [albumSchema],
    songs: [songSchema]
})

module.exports = mongoose.model('Artist', artistSchema);
