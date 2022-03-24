const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "you gotta set them up"],
        minlength: [10, "set up has to be atleast one word"]
    },
    punchline: {
        type: String,
        required: [true, "You need a punch line big fella"],
        minlength: [3, "punch line needs more than that"]

    },
    },
    {timestamps: true}
)

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;