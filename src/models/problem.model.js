const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title cannot be empty"]
    },
    description: {
        type: String,
        require: [true, "Description cannot be empty"],
    },
    difficulty: {
        type: String,
        enum: ['Hard', 'Medium', 'Easy'],
        require: [true, "Difficulty cannot be empty"],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                require: true
            },
            output: {
                type: String,
                require: true
            }
        }
    ],
    editorial: {
        type: String
    }


})



// tastcases how it gonna look like
/**
[{input='5',output='10'},{input,output},{input,output}]
 */