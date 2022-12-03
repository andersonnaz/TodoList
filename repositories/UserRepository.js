const database = require('../config/database');

const User = {
    async create(name, email, password){
        try {
            const result = await database('users').insert({
                email,
                name,
                password,
                admin: false
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
    async signin(email){
        try {
            const result = await database('users')
                .where({'email': email})
                .select('*')
            return result;
        } catch (error) {
            return error;
        }
    },
    async list(){
        try{
            const result = await database('users')
                .select('*')
            return result;
        }catch (error){
            return error;
        }
    },
    async delete(id){
        try {
            const result = await database('users')
                .where({'id': id})
                .del()
            return result;
        } catch (error) {
            return error;
        }
    }
}

module.exports = User;