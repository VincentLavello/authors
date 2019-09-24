let mongoose = require('mongoose');
// let uniqueValid = require('mongoose-unique-validator'); // oooo mongoose unique valids!!
let Schema = mongoose.Schema;

let petSchema = new Schema({
    name: {type: String, trim: true,
        // unique: true, // unique? TRUE?
        required: [true, "No nameless pets are allowed."],
        minlength: [3, "No single digit names please."]
    },
    type: {type: String, trim: true,
            required: [true, "pets must be classified."],
            minlength: [3, "No single digit names please."]   
    },
    desc: {type: String, trim: true,           
            required: [true, "pets must be described."],
            minlength: [3, "No single digit names please."]   
    },
    skill1: {type: String, trim: true},
    skill2: {type: String, trim: true},
    skill3: {type: String, trim: true},
    likes: {type: Number}
}, {timestamps: true});

// we can attach unique valid as a plugin to make any field unique
// authorSchema.plugin(uniqueValid, {message: `{PATH} must be unique!`});

// make the model
mongoose.model('Pet', petSchema);