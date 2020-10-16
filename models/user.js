let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
    email: {
        type: String,
        required:true,
        unique: true
    }
});

let User = UserSchema;

UserSchema.plugin(passportLocalMongoose); //this adds username and passowrd fileds that are unique.

module.exports  = mongoose.model('User', UserSchema);