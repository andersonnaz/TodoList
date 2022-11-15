const database = require('../config/database');

const User = {
    create(name, email, password){
        const result = database('users').insert({
            name,
            email,
            password
        })
        return result;
    }

}

module.exports = User;