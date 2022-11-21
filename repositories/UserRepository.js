const database = require('../config/database');

const User = {
    async create(name, email, password){
        try {
            const result = await database('users').insert({
                name,
                email,
                password
            })
            return result;    
        } catch (error) {
            return error;
        }
    },
    async edit(id, body){
        try {
            const result = await database('users')
                .where({'id': id})
                .update(body)
            return result;
        } catch (error) {
            return error
        }
    },
    async signin(email, password){
        try {
            const result = await database('users')
                .where({'email': email})
                .where({'password': password})
            return result;
        } catch (error) {
            return error;
        }
    }
}

module.exports = User;