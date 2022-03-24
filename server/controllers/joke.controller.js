const Joke = require("../models/joke.model");


module.exports.helloWorld = (req, res) => {
    res.json({msg:"wassup slatt, we modullarized"})
}

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes =>{
            res.json({results: allJokes})
        })
        .catch(err => res.json({ message: "Something went wrong chief", error: err}));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ results: newJoke})
        })
        .catch(err => res.json({ message: "Something went wrong chief", error: err}));
}

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(foundJoke => {
        res.json({results: foundJoke})
    })
    .catch(err => res.json({ message: "Something went wrong chief", error: err}));
}

module.exports.updateOneJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err => res.json({ message: "Something went wrong chief", error: err}));
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id })
        .then(deletedJoke => {
            res.json({results: deletedJoke})
        })
        .catch(err => res.json({ message: "Something went wrong chief", error: err}));
}

