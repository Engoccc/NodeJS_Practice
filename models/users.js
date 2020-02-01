const User = require('../lib/mongo').User;

module.exports = {
    //sign up a user
    create: function create (user) {
        return User.create(user).exec()
    },

    //get user information by user name
    getUserByName: function getUserByName (name){
        return User
            .findOne({name: name})
            .addCreatedAt()//it's a custom plug, see it in lib/mongo.js
            .exec
    }
};